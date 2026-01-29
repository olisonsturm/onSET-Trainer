import { Attempt, UserProgress, ExerciseStats } from '@/types';

/**
 * Calculate stats for a single exercise
 */
export function calculateExerciseStats(
    exerciseId: string,
    attempts: Attempt[]
): ExerciseStats {
    const exerciseAttempts = attempts.filter(a => a.exerciseId === exerciseId);

    if (exerciseAttempts.length === 0) {
        return {
            attempts: 0,
            correctCount: 0,
            lastAttempt: null,
            averageTime: 0,
        };
    }

    const correctCount = exerciseAttempts.filter(a =>
        a.correctAnswers.every(c => c)
    ).length;

    const totalTime = exerciseAttempts.reduce((sum, a) => sum + a.timeSpent, 0);

    return {
        attempts: exerciseAttempts.length,
        correctCount,
        lastAttempt: exerciseAttempts[exerciseAttempts.length - 1].timestamp,
        averageTime: totalTime / exerciseAttempts.length,
    };
}

/**
 * Update user progress after an attempt
 */
export function updateProgress(
    currentProgress: UserProgress,
    attempt: Attempt
): UserProgress {
    const allCorrect = attempt.correctAnswers.every(c => c);
    const today = new Date().toISOString().split('T')[0];

    // Check if this continues or breaks the streak
    let newStreakCurrent = currentProgress.streakCurrent;
    const lastDate = currentProgress.lastActivityDate;

    if (allCorrect) {
        if (lastDate === today) {
            // Same day, keep streak
        } else if (lastDate === getYesterday()) {
            // Consecutive day, increase streak
            newStreakCurrent++;
        } else if (!lastDate) {
            // First activity
            newStreakCurrent = 1;
        } else {
            // Streak broken, restart
            newStreakCurrent = 1;
        }
    }

    const exerciseStats = { ...currentProgress.exerciseStats };
    const existingStats = exerciseStats[attempt.exerciseId] || {
        attempts: 0,
        correctCount: 0,
        lastAttempt: null,
        averageTime: 0,
    };

    const newAttempts = existingStats.attempts + 1;
    const newCorrectCount = existingStats.correctCount + (allCorrect ? 1 : 0);
    const newAvgTime = (existingStats.averageTime * existingStats.attempts + attempt.timeSpent) / newAttempts;

    exerciseStats[attempt.exerciseId] = {
        attempts: newAttempts,
        correctCount: newCorrectCount,
        lastAttempt: attempt.timestamp,
        averageTime: newAvgTime,
    };

    return {
        totalAttempts: currentProgress.totalAttempts + 1,
        correctCount: currentProgress.correctCount + (allCorrect ? 1 : 0),
        streakCurrent: newStreakCurrent,
        streakBest: Math.max(currentProgress.streakBest, newStreakCurrent),
        lastActivityDate: today,
        exerciseStats,
    };
}

/**
 * Get accuracy percentage
 */
export function getAccuracy(attempts: number, correct: number): number {
    if (attempts === 0) return 0;
    return Math.round((correct / attempts) * 100);
}

/**
 * Get exercises that need review (error rate > 40%)
 */
export function getExercisesForRetry(
    exerciseStats: Record<string, ExerciseStats>,
    exerciseIds: string[]
): string[] {
    return exerciseIds.filter(id => {
        const stats = exerciseStats[id];
        if (!stats || stats.attempts === 0) return false;
        const accuracy = getAccuracy(stats.attempts, stats.correctCount);
        return accuracy < 60; // Less than 60% correct
    });
}

/**
 * Get yesterday's date string
 */
function getYesterday(): string {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().split('T')[0];
}

/**
 * Calculate set progress percentage
 */
export function getSetProgress(
    exerciseIds: string[],
    exerciseStats: Record<string, ExerciseStats>
): number {
    if (exerciseIds.length === 0) return 0;

    const completedCount = exerciseIds.filter(id => {
        const stats = exerciseStats[id];
        return stats && stats.attempts > 0 && stats.correctCount > 0;
    }).length;

    return Math.round((completedCount / exerciseIds.length) * 100);
}
