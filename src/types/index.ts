// Exercise Set - a collection of related exercises
export interface ExerciseSet {
    id: string;
    title: string;
    description: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
}

// Single exercise with cloze text
export interface Exercise {
    id: string;
    setId: string;
    rawText: string; // Contains [[solution]] markers
    difficulty: 'easy' | 'medium' | 'hard';
    hints?: Record<number, string>; // gap index → hint text
}

// A single attempt at an exercise
export interface Attempt {
    id: string;
    exerciseId: string;
    timestamp: string;
    answers: string[];
    correctAnswers: boolean[];
    timeSpent: number; // seconds
    mode: TrainingMode;
}

// Training modes
export type TrainingMode = 'learn' | 'test' | 'retry';

// Stats for a single exercise
export interface ExerciseStats {
    attempts: number;
    correctCount: number;
    lastAttempt: string | null;
    averageTime: number;
}

// Overall user progress
export interface UserProgress {
    totalAttempts: number;
    correctCount: number;
    streakCurrent: number;
    streakBest: number;
    lastActivityDate: string | null;
    exerciseStats: Record<string, ExerciseStats>;
}

// Parsed cloze segment
export interface ClozeSegment {
    type: 'text' | 'gap';
    content: string;
    gapIndex?: number;
}

// Current session state
export interface SessionState {
    currentSetId: string | null;
    currentExerciseIndex: number;
    exerciseOrder: string[]; // exercise IDs in order
    answers: Record<string, string[]>; // exerciseId -> answers
    mode: TrainingMode;
    startTime: number;
    showFeedback: boolean;
}

// App state
export interface AppState {
    exerciseSets: ExerciseSet[];
    exercises: Exercise[];
    attempts: Attempt[];
    userProgress: UserProgress;
    session: SessionState | null;
}

// Action types for reducer
export type AppAction =
    | { type: 'LOAD_DATA'; payload: Partial<AppState> }
    | { type: 'ADD_SET'; payload: ExerciseSet }
    | { type: 'UPDATE_SET'; payload: ExerciseSet }
    | { type: 'DELETE_SET'; payload: string }
    | { type: 'ADD_EXERCISE'; payload: Exercise }
    | { type: 'UPDATE_EXERCISE'; payload: Exercise }
    | { type: 'DELETE_EXERCISE'; payload: string }
    | { type: 'START_SESSION'; payload: { setId: string; mode: TrainingMode; exerciseIds: string[] } }
    | { type: 'SET_ANSWER'; payload: { exerciseId: string; gapIndex: number; answer: string } }
    | { type: 'NEXT_EXERCISE' }
    | { type: 'PREV_EXERCISE' }
    | { type: 'CHECK_ANSWERS' }
    | { type: 'END_SESSION' }
    | { type: 'RECORD_ATTEMPT'; payload: Attempt }
    | { type: 'IMPORT_DATA'; payload: { sets: ExerciseSet[]; exercises: Exercise[] } };
