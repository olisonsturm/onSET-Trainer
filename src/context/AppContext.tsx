import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { AppState, AppAction, SessionState, TrainingMode, Attempt } from '@/types';
import { loadData, saveData, defaultState, generateId } from '@/utils/storage';
import { updateProgress } from '@/utils/statistics';
import { validateAnswer, parseClozeText } from '@/utils/clozeParser';
import { sampleSets, sampleExercises } from '@/data/sampleExercises';

function appReducer(state: AppState, action: AppAction): AppState {
    switch (action.type) {
        case 'LOAD_DATA': {
            return { ...state, ...action.payload };
        }

        case 'ADD_SET': {
            return {
                ...state,
                exerciseSets: [...state.exerciseSets, action.payload],
            };
        }

        case 'UPDATE_SET': {
            return {
                ...state,
                exerciseSets: state.exerciseSets.map(s =>
                    s.id === action.payload.id ? action.payload : s
                ),
            };
        }

        case 'DELETE_SET': {
            return {
                ...state,
                exerciseSets: state.exerciseSets.filter(s => s.id !== action.payload),
                exercises: state.exercises.filter(e => e.setId !== action.payload),
            };
        }

        case 'ADD_EXERCISE': {
            return {
                ...state,
                exercises: [...state.exercises, action.payload],
            };
        }

        case 'UPDATE_EXERCISE': {
            return {
                ...state,
                exercises: state.exercises.map(e =>
                    e.id === action.payload.id ? action.payload : e
                ),
            };
        }

        case 'DELETE_EXERCISE': {
            return {
                ...state,
                exercises: state.exercises.filter(e => e.id !== action.payload),
            };
        }

        case 'START_SESSION': {
            const { setId, mode, exerciseIds } = action.payload;
            // Shuffle for test mode or random order
            const order = mode === 'test'
                ? [...exerciseIds].sort(() => Math.random() - 0.5)
                : exerciseIds;

            const session: SessionState = {
                currentSetId: setId,
                currentExerciseIndex: 0,
                exerciseOrder: order,
                answers: {},
                mode,
                startTime: Date.now(),
                showFeedback: mode === 'learn',
            };

            return { ...state, session };
        }

        case 'SET_ANSWER': {
            if (!state.session) return state;
            const { exerciseId, gapIndex, answer } = action.payload;
            const currentAnswers = state.session.answers[exerciseId] || [];
            const newAnswers = [...currentAnswers];
            newAnswers[gapIndex] = answer;

            return {
                ...state,
                session: {
                    ...state.session,
                    answers: {
                        ...state.session.answers,
                        [exerciseId]: newAnswers,
                    },
                },
            };
        }

        case 'NEXT_EXERCISE': {
            if (!state.session) return state;
            const nextIndex = Math.min(
                state.session.currentExerciseIndex + 1,
                state.session.exerciseOrder.length - 1
            );
            return {
                ...state,
                session: { ...state.session, currentExerciseIndex: nextIndex },
            };
        }

        case 'PREV_EXERCISE': {
            if (!state.session) return state;
            const prevIndex = Math.max(state.session.currentExerciseIndex - 1, 0);
            return {
                ...state,
                session: { ...state.session, currentExerciseIndex: prevIndex },
            };
        }

        case 'CHECK_ANSWERS': {
            if (!state.session) return state;
            return {
                ...state,
                session: { ...state.session, showFeedback: true },
            };
        }

        case 'END_SESSION': {
            return { ...state, session: null };
        }

        case 'RECORD_ATTEMPT': {
            const newProgress = updateProgress(state.userProgress, action.payload);
            return {
                ...state,
                attempts: [...state.attempts, action.payload],
                userProgress: newProgress,
            };
        }

        case 'IMPORT_DATA': {
            const { sets, exercises } = action.payload;
            // Merge, avoiding duplicates by ID
            const existingSetIds = new Set(state.exerciseSets.map(s => s.id));
            const existingExerciseIds = new Set(state.exercises.map(e => e.id));

            const newSets = sets.filter(s => !existingSetIds.has(s.id));
            const newExercises = exercises.filter(e => !existingExerciseIds.has(e.id));

            return {
                ...state,
                exerciseSets: [...state.exerciseSets, ...newSets],
                exercises: [...state.exercises, ...newExercises],
            };
        }

        default:
            return state;
    }
}

interface AppContextType {
    state: AppState;
    dispatch: React.Dispatch<AppAction>;
    // Helper functions
    getExercisesForSet: (setId: string) => typeof sampleExercises;
    getCurrentExercise: () => typeof sampleExercises[0] | null;
    checkCurrentAnswers: () => boolean[];
    recordAttempt: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(appReducer, defaultState);

    // Load data on mount
    useEffect(() => {
        const stored = loadData();

        // If no data, load sample data
        if (!stored.exerciseSets || stored.exerciseSets.length === 0) {
            dispatch({
                type: 'LOAD_DATA',
                payload: {
                    exerciseSets: sampleSets,
                    exercises: sampleExercises,
                },
            });
        } else {
            dispatch({ type: 'LOAD_DATA', payload: stored });
        }
    }, []);

    // Save data on changes (debounced)
    useEffect(() => {
        const timeout = setTimeout(() => {
            saveData(state);
        }, 500);
        return () => clearTimeout(timeout);
    }, [state.exerciseSets, state.exercises, state.attempts, state.userProgress]);

    // Helper functions
    const getExercisesForSet = (setId: string) => {
        return state.exercises.filter(e => e.setId === setId);
    };

    const getCurrentExercise = () => {
        if (!state.session) return null;
        const exerciseId = state.session.exerciseOrder[state.session.currentExerciseIndex];
        return state.exercises.find(e => e.id === exerciseId) || null;
    };

    const checkCurrentAnswers = (): boolean[] => {
        const exercise = getCurrentExercise();
        if (!exercise || !state.session) return [];

        const { solutions } = parseClozeText(exercise.rawText);
        const answers = state.session.answers[exercise.id] || [];

        return solutions.map((solution, index) => {
            const answer = answers[index] || '';
            return validateAnswer(answer, solution);
        });
    };

    const recordAttempt = () => {
        const exercise = getCurrentExercise();
        if (!exercise || !state.session) return;

        const correctAnswers = checkCurrentAnswers();
        const answers = state.session.answers[exercise.id] || [];
        const timeSpent = Math.round((Date.now() - state.session.startTime) / 1000);

        const attempt: Attempt = {
            id: generateId(),
            exerciseId: exercise.id,
            timestamp: new Date().toISOString(),
            answers,
            correctAnswers,
            timeSpent,
            mode: state.session.mode,
        };

        dispatch({ type: 'RECORD_ATTEMPT', payload: attempt });
    };

    return (
        <AppContext.Provider
            value={{
                state,
                dispatch,
                getExercisesForSet,
                getCurrentExercise,
                checkCurrentAnswers,
                recordAttempt,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
}
