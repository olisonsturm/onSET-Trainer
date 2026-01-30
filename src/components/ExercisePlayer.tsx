import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { ClozeRenderer } from './ClozeRenderer';
import { Timer } from './Timer';
import { Button, Card, ProgressBar, Tag } from './ui';

const TEST_MODE_DURATION_SECONDS = 5 * 60; // 5 minutes

export function ExercisePlayer() {
    const navigate = useNavigate();
    const { state, dispatch, getCurrentExercise, checkCurrentAnswers, recordAttempt } = useApp();
    const { session } = state;

    const [hasChecked, setHasChecked] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState<boolean[]>([]);

    const exercise = getCurrentExercise();
    const currentSet = state.exerciseSets.find(s => s.id === session?.currentSetId);

    // Reset check state when exercise changes
    useEffect(() => {
        setHasChecked(false);
        setCorrectAnswers([]);
    }, [exercise?.id]);

    const handleAnswerChange = useCallback((gapIndex: number, value: string) => {
        if (!exercise || !session) return;
        dispatch({
            type: 'SET_ANSWER',
            payload: { exerciseId: exercise.id, gapIndex, answer: value },
        });
        // In learn mode with instant feedback, check on every change
        if (session.mode === 'learn' && hasChecked) {
            setHasChecked(false);
            setCorrectAnswers([]);
        }
    }, [dispatch, exercise, session, hasChecked]);

    const handleCheck = useCallback(() => {
        const results = checkCurrentAnswers();
        setCorrectAnswers(results);
        setHasChecked(true);
        recordAttempt();
    }, [checkCurrentAnswers, recordAttempt]);

    const handleNext = useCallback(() => {
        if (!session) return;

        // Auto-check if not checked yet
        if (!hasChecked && session.mode === 'learn') {
            handleCheck();
        }

        if (session.currentExerciseIndex < session.exerciseOrder.length - 1) {
            dispatch({ type: 'NEXT_EXERCISE' });
        } else {
            // End of session - navigate to results
            navigate(`/result/${session.currentSetId}`);
        }
    }, [session, hasChecked, handleCheck, dispatch, navigate]);

    const handlePrev = useCallback(() => {
        dispatch({ type: 'PREV_EXERCISE' });
    }, [dispatch]);

    const handleExit = useCallback(() => {
        dispatch({ type: 'END_SESSION' });
        navigate('/');
    }, [dispatch, navigate]);

    const handleTimerExpire = useCallback(() => {
        if (!session) return;
        // Auto-record attempt for current exercise
        recordAttempt();
        // Navigate to results
        navigate(`/result/${session.currentSetId}`);
    }, [session, recordAttempt, navigate]);

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleCheck();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleCheck]);

    if (!session || !exercise) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <Card className="text-center">
                    <p className="text-gray-500 mb-4">No exercise selected</p>
                    <Button onClick={() => navigate('/')}>Back to Overview</Button>
                </Card>
            </div>
        );
    }

    const answers = session.answers[exercise.id] || [];
    const progress = ((session.currentExerciseIndex + 1) / session.exerciseOrder.length) * 100;
    const allCorrect = hasChecked && correctAnswers.every(c => c);

    const modeLabels = {
        learn: 'Practice',
        test: 'Test',
        retry: 'Retry Errors',
    };

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleExit}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Exit"
                        >
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div>
                            <h1 className="text-lg font-semibold text-gray-900">{currentSet?.title}</h1>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Tag size="sm" variant={session.mode === 'test' ? 'warning' : session.mode === 'retry' ? 'error' : 'primary'}>
                                    {modeLabels[session.mode]}
                                </Tag>
                                <span>Exercise {session.currentExerciseIndex + 1} of {session.exerciseOrder.length}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {session.mode === 'test' && (
                            <Timer
                                duration={TEST_MODE_DURATION_SECONDS}
                                onExpire={handleTimerExpire}
                            />
                        )}
                        <Tag variant={exercise.difficulty === 'easy' ? 'success' : exercise.difficulty === 'hard' ? 'error' : 'warning'}>
                            {exercise.difficulty === 'easy' ? 'Easy' : exercise.difficulty === 'hard' ? 'Hard' : 'Medium'}
                        </Tag>
                    </div>
                </div>
                <ProgressBar value={progress} />
            </div>

            {/* Exercise Card */}
            <Card className="mb-6">
                <ClozeRenderer
                    text={exercise.rawText}
                    answers={answers}
                    onAnswerChange={handleAnswerChange}
                    showFeedback={hasChecked}
                    correctAnswers={correctAnswers}
                    onSubmit={handleCheck}
                />

                {/* Feedback Message */}
                {hasChecked && (
                    <div className={`mt-6 p-4 rounded-lg ${allCorrect ? 'bg-success-50 text-success-600' : 'bg-error-50 text-error-600'}`}>
                        {allCorrect ? (
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="font-medium">Perfect! All answers are correct.</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <span className="font-medium">
                                    {correctAnswers.filter(c => c).length} of {correctAnswers.length} correct. Solutions are now displayed.
                                </span>
                            </div>
                        )}
                    </div>
                )}
            </Card>

            {/* Controls */}
            <div className="flex items-center justify-between">
                <Button
                    variant="secondary"
                    onClick={handlePrev}
                    disabled={session.currentExerciseIndex === 0}
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </Button>

                <div className="flex gap-3">
                    {!hasChecked && (
                        <Button onClick={handleCheck}>
                            Check
                            <span className="ml-2 text-xs opacity-75">(Ctrl+Enter)</span>
                        </Button>
                    )}
                    <Button
                        variant={hasChecked ? 'success' : 'secondary'}
                        onClick={handleNext}
                    >
                        {session.currentExerciseIndex < session.exerciseOrder.length - 1 ? 'Next' : 'Finish'}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Button>
                </div>
            </div>

            {/* Keyboard Hint */}
            <div className="mt-8 text-center text-sm text-gray-400">
                <span className="inline-flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">Enter</kbd>
                    <span>Next field</span>
                    <span className="mx-2">•</span>
                    <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">Ctrl+Enter</kbd>
                    <span>Check</span>
                </span>
            </div>
        </div>
    );
}
