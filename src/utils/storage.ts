import { AppState, ExerciseSet, Exercise } from '@/types';

const STORAGE_KEY = 'onset-trainer-data';

/**
 * Default empty state
 */
export const defaultState: AppState = {
    exerciseSets: [],
    exercises: [],
    attempts: [],
    userProgress: {
        totalAttempts: 0,
        correctCount: 0,
        streakCurrent: 0,
        streakBest: 0,
        lastActivityDate: null,
        exerciseStats: {},
    },
    session: null,
};

/**
 * Load data from localStorage
 */
export function loadData(): Partial<AppState> {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (error) {
        console.error('Failed to load data from localStorage:', error);
    }
    return {};
}

/**
 * Save data to localStorage
 */
export function saveData(state: AppState): void {
    try {
        // Don't save session state
        const toSave = {
            exerciseSets: state.exerciseSets,
            exercises: state.exercises,
            attempts: state.attempts,
            userProgress: state.userProgress,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (error) {
        console.error('Failed to save data to localStorage:', error);
    }
}

/**
 * Export data as JSON file
 */
export function exportToJSON(sets: ExerciseSet[], exercises: Exercise[]): void {
    const data = {
        version: '1.0',
        exportedAt: new Date().toISOString(),
        sets,
        exercises,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `onset-trainer-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Import data from JSON file
 */
export async function importFromJSON(file: File): Promise<{
    sets: ExerciseSet[];
    exercises: Exercise[];
}> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target?.result as string);

                if (!data.sets || !data.exercises) {
                    throw new Error('Invalid file format: missing sets or exercises');
                }

                resolve({
                    sets: data.sets,
                    exercises: data.exercises,
                });
            } catch (error) {
                reject(new Error('Failed to parse JSON file'));
            }
        };

        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsText(file);
    });
}

/**
 * Generate unique ID
 */
export function generateId(): string {
    return crypto.randomUUID();
}
