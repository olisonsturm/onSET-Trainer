import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Tag, ProgressBar } from './ui';
import { getSetProgress, getExercisesForRetry, getAccuracy } from '@/utils/statistics';
import { TrainingMode } from '@/types';

export function SetPicker() {
    const navigate = useNavigate();
    const { state, dispatch, getExercisesForSet } = useApp();
    const { exerciseSets, userProgress } = state;

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // Get all unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        exerciseSets.forEach(set => set.tags.forEach(tag => tags.add(tag)));
        return Array.from(tags).sort();
    }, [exerciseSets]);

    // Filter sets
    const filteredSets = useMemo(() => {
        return exerciseSets.filter(set => {
            const matchesSearch = searchQuery === '' ||
                set.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                set.description.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesTags = selectedTags.length === 0 ||
                selectedTags.every(tag => set.tags.includes(tag));

            return matchesSearch && matchesTags;
        });
    }, [exerciseSets, searchQuery, selectedTags]);

    const handleStartSession = (setId: string, mode: TrainingMode) => {
        const exercises = getExercisesForSet(setId);
        let exerciseIds = exercises.map(e => e.id);

        // For retry mode, filter to failed exercises
        if (mode === 'retry') {
            const failedIds = getExercisesForRetry(userProgress.exerciseStats, exerciseIds);
            if (failedIds.length === 0) {
                // No failed exercises, show all
                alert('No errors to retry! All exercises have been mastered.');
                return;
            }
            exerciseIds = failedIds;
        }

        dispatch({
            type: 'START_SESSION',
            payload: { setId, mode, exerciseIds },
        });

        navigate(`/exercise/${setId}/${mode}`);
    };

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    return (
        <div className="space-y-6">
            {/* Search and Filters */}
            <div className="space-y-4">
                <div className="relative">
                    <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search exercise sets..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                </div>

                {/* Tag Filters */}
                {allTags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedTags.includes(tag)
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                        {selectedTags.length > 0 && (
                            <button
                                onClick={() => setSelectedTags([])}
                                className="px-3 py-1.5 rounded-full text-sm font-medium text-gray-500 hover:text-gray-700"
                            >
                                Clear all
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Sets Grid */}
            {filteredSets.length === 0 ? (
                <Card className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No exercise sets found</h3>
                    <p className="text-gray-500">Try different search terms or create new sets.</p>
                </Card>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredSets.map(set => {
                        const exercises = getExercisesForSet(set.id);
                        const progress = getSetProgress(exercises.map(e => e.id), userProgress.exerciseStats);
                        const totalAttempts = exercises.reduce((sum, e) => {
                            const stats = userProgress.exerciseStats[e.id];
                            return sum + (stats?.attempts || 0);
                        }, 0);
                        const totalCorrect = exercises.reduce((sum, e) => {
                            const stats = userProgress.exerciseStats[e.id];
                            return sum + (stats?.correctCount || 0);
                        }, 0);
                        const accuracy = getAccuracy(totalAttempts, totalCorrect);
                        const failedCount = getExercisesForRetry(
                            userProgress.exerciseStats,
                            exercises.map(e => e.id)
                        ).length;

                        return (
                            <Card key={set.id} hover className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>{set.title}</CardTitle>
                                    <CardDescription>{set.description}</CardDescription>
                                </CardHeader>

                                <CardContent className="flex-1">
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {set.tags.map(tag => (
                                            <Tag key={tag} size="sm">{tag}</Tag>
                                        ))}
                                    </div>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between text-gray-600">
                                            <span>{exercises.length} exercises</span>
                                            {totalAttempts > 0 && (
                                                <span className="text-primary-600 font-medium">{accuracy}% correct</span>
                                            )}
                                        </div>
                                        <ProgressBar value={progress} size="sm" color={progress === 100 ? 'success' : 'primary'} />
                                        <div className="text-xs text-gray-400">
                                            {progress > 0 ? `${progress}% completed` : 'Not started yet'}
                                        </div>
                                    </div>
                                </CardContent>

                                <CardFooter className="flex flex-wrap gap-2">
                                    <Button
                                        size="sm"
                                        onClick={() => handleStartSession(set.id, 'learn')}
                                    >
                                        Practice
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="secondary"
                                        onClick={() => handleStartSession(set.id, 'test')}
                                    >
                                        Test
                                    </Button>
                                    {failedCount > 0 && (
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => handleStartSession(set.id, 'retry')}
                                        >
                                            Errors ({failedCount})
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
