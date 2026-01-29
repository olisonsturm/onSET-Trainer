import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { Button, Card, ProgressBar, Tag } from './ui';
import { parseClozeText, validateAnswer } from '@/utils/clozeParser';

export function ResultScreen() {
    const navigate = useNavigate();
    const { setId } = useParams<{ setId: string }>();
    const { state, dispatch, getExercisesForSet } = useApp();
    const { session, attempts, exerciseSets } = state;

    const currentSet = exerciseSets.find(s => s.id === setId);
    const exercises = getExercisesForSet(setId || '');

    // Get the most recent attempts for this session
    const sessionExerciseIds = session?.exerciseOrder || exercises.map(e => e.id);
    const recentAttempts = sessionExerciseIds.map(exerciseId => {
        return attempts
            .filter(a => a.exerciseId === exerciseId)
            .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())[0];
    }).filter(Boolean);

    // Calculate stats
    const totalGaps = recentAttempts.reduce((sum, a) => sum + a.correctAnswers.length, 0);
    const correctGaps = recentAttempts.reduce((sum, a) => sum + a.correctAnswers.filter(c => c).length, 0);
    const percentage = totalGaps > 0 ? Math.round((correctGaps / totalGaps) * 100) : 0;

    // Find exercises with errors
    const exercisesWithErrors = recentAttempts.filter(a => !a.correctAnswers.every(c => c));

    const handleRetry = () => {
        if (!setId) return;
        const failedExerciseIds = exercisesWithErrors.map(a => a.exerciseId);

        dispatch({
            type: 'START_SESSION',
            payload: {
                setId,
                mode: 'retry',
                exerciseIds: failedExerciseIds.length > 0 ? failedExerciseIds : sessionExerciseIds,
            },
        });
        navigate(`/exercise/${setId}/retry`);
    };

    const handleRestart = () => {
        if (!setId) return;
        dispatch({
            type: 'START_SESSION',
            payload: {
                setId,
                mode: 'learn',
                exerciseIds: exercises.map(e => e.id),
            },
        });
        navigate(`/exercise/${setId}/learn`);
    };

    const handleExit = () => {
        dispatch({ type: 'END_SESSION' });
        navigate('/');
    };

    const getGrade = (percent: number): { label: string; color: string } => {
        if (percent >= 90) return { label: 'Excellent!', color: 'text-success-600' };
        if (percent >= 75) return { label: 'Well done!', color: 'text-primary-600' };
        if (percent >= 60) return { label: 'Not bad', color: 'text-yellow-600' };
        return { label: 'Keep practicing!', color: 'text-error-600' };
    };

    const grade = getGrade(percentage);

    return (
        <div className="max-w-2xl mx-auto">
            {/* Result Summary */}
            <Card className="text-center mb-6">
                <div className="py-8">
                    <div className={`text-6xl font-bold mb-2 ${grade.color}`}>
                        {percentage}%
                    </div>
                    <h2 className={`text-2xl font-semibold mb-4 ${grade.color}`}>
                        {grade.label}
                    </h2>
                    <p className="text-gray-600 mb-6">
                        {correctGaps} of {totalGaps} gaps filled correctly
                    </p>

                    <ProgressBar
                        value={percentage}
                        className="max-w-xs mx-auto"
                        size="lg"
                        color={percentage >= 75 ? 'success' : percentage >= 50 ? 'warning' : 'error'}
                    />
                </div>

                <div className="border-t border-gray-100 pt-6 flex flex-wrap justify-center gap-3">
                    {exercisesWithErrors.length > 0 && (
                        <Button onClick={handleRetry}>
                            Retry Errors ({exercisesWithErrors.length})
                        </Button>
                    )}
                    <Button variant="secondary" onClick={handleRestart}>
                        Start Over
                    </Button>
                    <Button variant="outline" onClick={handleExit}>
                        Back to Overview
                    </Button>
                </div>
            </Card>

            {/* Detailed Results */}
            {exercisesWithErrors.length > 0 && (
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Exercises with Errors
                    </h3>

                    {exercisesWithErrors.map((attempt) => {
                        const exercise = exercises.find(e => e.id === attempt.exerciseId);
                        if (!exercise) return null;

                        const { segments, solutions } = parseClozeText(exercise.rawText);

                        return (
                            <Card key={attempt.id} className="bg-gray-50">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Tag variant="error" size="sm">
                                            {attempt.correctAnswers.filter(c => c).length}/{attempt.correctAnswers.length} correct
                                        </Tag>
                                    </div>

                                    <div className="text-gray-700">
                                        {segments.map((segment, index) => {
                                            if (segment.type === 'text') {
                                                return <span key={index}>{segment.content}</span>;
                                            }

                                            const gapIndex = segment.gapIndex!;
                                            const isCorrect = attempt.correctAnswers[gapIndex];
                                            const userAnswer = attempt.answers[gapIndex] || '(empty)';
                                            const solution = solutions[gapIndex];

                                            if (isCorrect) {
                                                return (
                                                    <span
                                                        key={index}
                                                        className="inline-block px-2 py-0.5 mx-0.5 bg-success-50 text-success-600 rounded font-medium"
                                                    >
                                                        {solution}
                                                    </span>
                                                );
                                            }

                                            return (
                                                <span key={index} className="inline-block mx-0.5">
                                                    <span className="px-2 py-0.5 bg-error-50 text-error-600 rounded line-through">
                                                        {userAnswer}
                                                    </span>
                                                    <span className="px-2 py-0.5 bg-success-50 text-success-600 rounded ml-1 font-medium">
                                                        {solution}
                                                    </span>
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            )}

            {/* All correct message */}
            {exercisesWithErrors.length === 0 && (
                <Card className="bg-success-50 text-center py-8">
                    <svg className="w-16 h-16 mx-auto text-success-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-success-600 mb-2">
                        Perfect!
                    </h3>
                    <p className="text-success-600">
                        You've mastered all exercises without errors.
                    </p>
                </Card>
            )}
        </div>
    );
}
