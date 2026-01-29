import { useApp } from '@/context/AppContext';
import { Card, ProgressBar, Tag } from './ui';
import { getAccuracy } from '@/utils/statistics';

export function StatsView() {
    const { state, getExercisesForSet } = useApp();
    const { userProgress, exerciseSets, attempts } = state;

    const overallAccuracy = getAccuracy(userProgress.totalAttempts, userProgress.correctCount);

    // Group attempts by date
    const attemptsByDate = attempts.reduce((acc, attempt) => {
        const date = attempt.timestamp.split('T')[0];
        if (!acc[date]) acc[date] = [];
        acc[date].push(attempt);
        return acc;
    }, {} as Record<string, typeof attempts>);

    const last7Days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - i);
        return d.toISOString().split('T')[0];
    }).reverse();

    return (
        <div className="space-y-6">
            {/* Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="text-center">
                    <div className="text-3xl font-bold text-primary-600">{userProgress.totalAttempts}</div>
                    <div className="text-sm text-gray-500">Attempts</div>
                </Card>
                <Card className="text-center">
                    <div className="text-3xl font-bold text-success-600">{overallAccuracy}%</div>
                    <div className="text-sm text-gray-500">Accuracy</div>
                </Card>
                <Card className="text-center">
                    <div className="text-3xl font-bold text-yellow-600">{userProgress.streakCurrent}</div>
                    <div className="text-sm text-gray-500">Current Streak</div>
                </Card>
                <Card className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{userProgress.streakBest}</div>
                    <div className="text-sm text-gray-500">Best Streak</div>
                </Card>
            </div>

            {/* Activity Chart */}
            <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity (Last 7 Days)</h3>
                <div className="flex items-end justify-between h-32 gap-2">
                    {last7Days.map(date => {
                        const dayAttempts = attemptsByDate[date] || [];
                        const count = dayAttempts.length;
                        const maxCount = Math.max(
                            ...last7Days.map(d => (attemptsByDate[d] || []).length),
                            1
                        );
                        const height = (count / maxCount) * 100;

                        const dayLabel = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });

                        return (
                            <div key={date} className="flex-1 flex flex-col items-center gap-2">
                                <div className="flex-1 w-full flex items-end">
                                    <div
                                        className={`w-full rounded-t-lg transition-all duration-300 ${count > 0 ? 'bg-primary-500' : 'bg-gray-200'
                                            }`}
                                        style={{ height: `${Math.max(height, 4)}%` }}
                                        title={`${count} attempts on ${date}`}
                                    />
                                </div>
                                <div className="text-xs text-gray-500">{dayLabel}</div>
                                <div className="text-xs font-medium text-gray-700">{count > 0 ? count : '-'}</div>
                            </div>
                        );
                    })}
                </div>
            </Card>

            {/* Per-Set Stats */}
            <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress by Set</h3>
                <div className="space-y-4">
                    {exerciseSets.map(set => {
                        const exercises = getExercisesForSet(set.id);
                        const exerciseIds = exercises.map(e => e.id);

                        const setAttempts = exercises.reduce((sum, e) => {
                            const stats = userProgress.exerciseStats[e.id];
                            return sum + (stats?.attempts || 0);
                        }, 0);

                        const setCorrect = exercises.reduce((sum, e) => {
                            const stats = userProgress.exerciseStats[e.id];
                            return sum + (stats?.correctCount || 0);
                        }, 0);

                        const accuracy = getAccuracy(setAttempts, setCorrect);
                        const masteredCount = exerciseIds.filter(id => {
                            const stats = userProgress.exerciseStats[id];
                            return stats && stats.attempts > 0 && (stats.correctCount / stats.attempts) >= 0.6;
                        }).length;

                        const progress = Math.round((masteredCount / exercises.length) * 100);

                        return (
                            <div key={set.id} className="p-4 bg-gray-50 rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-medium text-gray-900">{set.title}</h4>
                                        <div className="flex gap-2 mt-1">
                                            {set.tags.slice(0, 3).map(tag => (
                                                <Tag key={tag} size="sm" variant="secondary">{tag}</Tag>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-primary-600">{accuracy}%</div>
                                        <div className="text-xs text-gray-500">Accuracy</div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                                        <span>{masteredCount} of {exercises.length} mastered</span>
                                        <span>{setAttempts} attempts</span>
                                    </div>
                                    <ProgressBar
                                        value={progress}
                                        size="sm"
                                        color={progress === 100 ? 'success' : progress >= 50 ? 'primary' : 'warning'}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Card>
        </div>
    );
}
