import { useState, useEffect, useCallback } from 'react';

interface TimerProps {
    /** Duration in seconds */
    duration: number;
    /** Called when timer reaches 0 */
    onExpire: () => void;
}

export function Timer({ duration, onExpire }: TimerProps) {
    const [remainingSeconds, setRemainingSeconds] = useState(duration);

    useEffect(() => {
        if (remainingSeconds <= 0) {
            onExpire();
            return;
        }

        const interval = setInterval(() => {
            setRemainingSeconds(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [remainingSeconds, onExpire]);

    const formatTime = useCallback((seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }, []);

    const isWarning = remainingSeconds < 60;
    const isCritical = remainingSeconds < 30;

    return (
        <div
            className={`
                inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-sm font-medium
                ${isCritical
                    ? 'bg-error-100 text-error-700 animate-pulse'
                    : isWarning
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700'
                }
            `}
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{formatTime(remainingSeconds)}</span>
        </div>
    );
}
