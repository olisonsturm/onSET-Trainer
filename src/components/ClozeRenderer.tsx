import { useRef, useEffect, KeyboardEvent } from 'react';
import { parseClozeText, calculateInputWidth } from '@/utils/clozeParser';

interface ClozeRendererProps {
    text: string;
    answers: string[];
    onAnswerChange: (gapIndex: number, value: string) => void;
    showFeedback: boolean;
    correctAnswers?: boolean[];
    disabled?: boolean;
    onSubmit?: () => void;
}

export function ClozeRenderer({
    text,
    answers,
    onAnswerChange,
    showFeedback,
    correctAnswers = [],
    disabled = false,
    onSubmit,
}: ClozeRendererProps) {
    const { segments, solutions } = parseClozeText(text);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Focus first input on mount
    useEffect(() => {
        if (!disabled && inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [text, disabled]);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, gapIndex: number) => {
        if (e.key === 'Enter') {
            if (e.ctrlKey || e.metaKey) {
                // Ctrl+Enter or Cmd+Enter → submit
                e.preventDefault();
                onSubmit?.();
            } else {
                // Enter → next field
                e.preventDefault();
                const nextInput = inputRefs.current[gapIndex + 1];
                if (nextInput) {
                    nextInput.focus();
                } else {
                    // Last field, trigger submit
                    onSubmit?.();
                }
            }
        }
    };

    const getInputClassName = (gapIndex: number): string => {
        const base = 'cloze-input';

        if (!showFeedback || correctAnswers.length === 0) {
            return `${base} cloze-input--neutral`;
        }

        return correctAnswers[gapIndex]
            ? `${base} cloze-input--correct animate-pulse-success`
            : `${base} cloze-input--incorrect animate-shake`;
    };

    return (
        <p className="exercise-text leading-loose">
            {segments.map((segment, index) => {
                if (segment.type === 'text') {
                    return <span key={index}>{segment.content}</span>;
                }

                const gapIndex = segment.gapIndex!;
                const solution = solutions[gapIndex];
                const width = calculateInputWidth(solution.length);

                return (
                    <input
                        key={index}
                        ref={(el) => {
                            inputRefs.current[gapIndex] = el;
                        }}
                        type="text"
                        value={answers[gapIndex] || ''}
                        onChange={(e) => onAnswerChange(gapIndex, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, gapIndex)}
                        className={getInputClassName(gapIndex)}
                        style={{ width: `${width}px` }}
                        disabled={disabled}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck={false}
                        aria-label={`Lücke ${gapIndex + 1}`}
                        placeholder={showFeedback && correctAnswers[gapIndex] === false ? solution : ''}
                    />
                );
            })}
        </p>
    );
}
