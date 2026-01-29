import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { Button, Card, Tag } from './ui';
import { ClozeRenderer } from './ClozeRenderer';
import { createClozeMarkup, parseClozeText, countGaps } from '@/utils/clozeParser';
import { generateId } from '@/utils/storage';
import { Exercise, ExerciseSet } from '@/types';

export function Editor() {
    const navigate = useNavigate();
    const { state, dispatch } = useApp();
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const [rawText, setRawText] = useState('');
    const [selectedSetId, setSelectedSetId] = useState<string>('');
    const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
    const [showPreview, setShowPreview] = useState(false);
    const [previewAnswers, setPreviewAnswers] = useState<string[]>([]);

    // New set form
    const [showNewSet, setShowNewSet] = useState(false);
    const [newSetTitle, setNewSetTitle] = useState('');
    const [newSetDescription, setNewSetDescription] = useState('');
    const [newSetTags, setNewSetTags] = useState('');

    // Set first set as default
    useEffect(() => {
        if (state.exerciseSets.length > 0 && !selectedSetId) {
            setSelectedSetId(state.exerciseSets[0].id);
        }
    }, [state.exerciseSets, selectedSetId]);

    const handleMarkAsGap = () => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        if (start === end) {
            alert('Please select a word or phrase first.');
            return;
        }

        const newText = createClozeMarkup(rawText, start, end);
        setRawText(newText);

        // Reset preview answers when text changes
        setPreviewAnswers([]);
    };

    const handleCreateSet = () => {
        if (!newSetTitle.trim()) {
            alert('Please enter a title for the set.');
            return;
        }

        const now = new Date().toISOString();
        const newSet: ExerciseSet = {
            id: generateId(),
            title: newSetTitle.trim(),
            description: newSetDescription.trim(),
            tags: newSetTags.split(',').map(t => t.trim()).filter(Boolean),
            createdAt: now,
            updatedAt: now,
        };

        dispatch({ type: 'ADD_SET', payload: newSet });
        setSelectedSetId(newSet.id);
        setShowNewSet(false);
        setNewSetTitle('');
        setNewSetDescription('');
        setNewSetTags('');
    };

    const handleSaveExercise = () => {
        if (!selectedSetId) {
            alert('Please select a set first.');
            return;
        }

        if (countGaps(rawText) === 0) {
            alert('Please add at least one gap by selecting text and clicking "Mark as Gap".');
            return;
        }

        const exercise: Exercise = {
            id: generateId(),
            setId: selectedSetId,
            rawText,
            difficulty,
        };

        dispatch({ type: 'ADD_EXERCISE', payload: exercise });

        // Reset form
        setRawText('');
        setPreviewAnswers([]);
        setShowPreview(false);

        alert('Exercise saved!');
    };

    const { solutions } = parseClozeText(rawText);
    const gapCount = countGaps(rawText);

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Exercise Editor</h1>
                <Button variant="outline" onClick={() => navigate('/')}>
                    Back to Overview
                </Button>
            </div>

            {/* Set Selection */}
            <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Exercise Set</h2>

                <div className="flex gap-4 items-end">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Set
                        </label>
                        <select
                            value={selectedSetId}
                            onChange={(e) => setSelectedSetId(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                            {state.exerciseSets.map(set => (
                                <option key={set.id} value={set.id}>{set.title}</option>
                            ))}
                        </select>
                    </div>
                    <Button variant="secondary" onClick={() => setShowNewSet(!showNewSet)}>
                        {showNewSet ? 'Cancel' : 'New Set'}
                    </Button>
                </div>

                {showNewSet && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Title *
                            </label>
                            <input
                                type="text"
                                value={newSetTitle}
                                onChange={(e) => setNewSetTitle(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                placeholder="e.g. Biology Chapter 5"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <input
                                type="text"
                                value={newSetDescription}
                                onChange={(e) => setNewSetDescription(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                placeholder="Optional: Short description"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Tags (comma-separated)
                            </label>
                            <input
                                type="text"
                                value={newSetTags}
                                onChange={(e) => setNewSetTags(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                placeholder="e.g. biology, exam, genetics"
                            />
                        </div>
                        <Button onClick={handleCreateSet}>Create Set</Button>
                    </div>
                )}
            </Card>

            {/* Text Editor */}
            <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Exercise Text</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Text with Gaps
                        </label>
                        <p className="text-sm text-gray-500 mb-2">
                            Enter your text, select words to create gaps, and click "Mark as Gap".
                            Marked gaps appear as [[word]]. For C-Test format, use: "word beg[[inning]]".
                        </p>
                        <textarea
                            ref={textareaRef}
                            value={rawText}
                            onChange={(e) => {
                                setRawText(e.target.value);
                                setPreviewAnswers([]);
                            }}
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono text-sm"
                            placeholder="Enter your text here..."
                        />
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <Button onClick={handleMarkAsGap}>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            Mark as Gap
                        </Button>

                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium text-gray-700">Difficulty:</label>
                            <select
                                value={difficulty}
                                onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
                                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                            >
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>

                        <div className="flex-1" />

                        <Tag variant={gapCount > 0 ? 'success' : 'secondary'}>
                            {`${gapCount} gaps`}
                        </Tag>
                    </div>
                </div>
            </Card>

            {/* Preview */}
            <Card>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Preview</h2>
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setShowPreview(!showPreview)}
                    >
                        {showPreview ? 'Hide Preview' : 'Show Preview'}
                    </Button>
                </div>

                {showPreview && gapCount > 0 && (
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <ClozeRenderer
                            text={rawText}
                            answers={previewAnswers}
                            onAnswerChange={(idx, val) => {
                                const newAnswers = [...previewAnswers];
                                newAnswers[idx] = val;
                                setPreviewAnswers(newAnswers);
                            }}
                            showFeedback={false}
                        />
                    </div>
                )}

                {showPreview && gapCount === 0 && (
                    <p className="text-gray-500 text-center py-4">
                        Add gaps first to see the preview.
                    </p>
                )}
            </Card>

            {/* Save Button */}
            <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setRawText('')}>
                    Reset
                </Button>
                <Button onClick={handleSaveExercise} disabled={gapCount === 0}>
                    Save Exercise
                </Button>
            </div>

            {/* Solutions Preview */}
            {gapCount > 0 && (
                <Card className="bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Solutions (for verification):</h3>
                    <div className="flex flex-wrap gap-2">
                        {solutions.map((solution, idx) => (
                            <Tag key={idx} variant="primary">
                                {`${idx + 1}. ${solution}`}
                            </Tag>
                        ))}
                    </div>
                </Card>
            )}
        </div>
    );
}
