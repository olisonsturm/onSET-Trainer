import { ClozeSegment } from '@/types';

const CLOZE_REGEX = /\[\[([^\]]+)\]\]/g;

/**
 * Parse raw text containing [[solution]] markers into segments
 */
export function parseClozeText(rawText: string): {
    segments: ClozeSegment[];
    solutions: string[];
} {
    const segments: ClozeSegment[] = [];
    const solutions: string[] = [];
    let lastIndex = 0;
    let gapIndex = 0;

    let match;
    while ((match = CLOZE_REGEX.exec(rawText)) !== null) {
        // Add preceding text
        if (match.index > lastIndex) {
            segments.push({
                type: 'text',
                content: rawText.slice(lastIndex, match.index),
            });
        }

        // Add gap
        segments.push({
            type: 'gap',
            content: match[1],
            gapIndex: gapIndex,
        });
        solutions.push(match[1]);
        gapIndex++;

        lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < rawText.length) {
        segments.push({
            type: 'text',
            content: rawText.slice(lastIndex),
        });
    }

    // Reset regex lastIndex for next call
    CLOZE_REGEX.lastIndex = 0;

    return { segments, solutions };
}

/**
 * Create cloze markup by wrapping selected text
 */
export function createClozeMarkup(
    text: string,
    selectionStart: number,
    selectionEnd: number
): string {
    if (selectionStart === selectionEnd) return text;

    const before = text.slice(0, selectionStart);
    const selected = text.slice(selectionStart, selectionEnd);
    const after = text.slice(selectionEnd);

    return `${before}[[${selected}]]${after}`;
}

/**
 * Validate an answer against the solution
 * Case-insensitive, trims whitespace
 */
export function validateAnswer(input: string, solution: string): boolean {
    const normalizedInput = input.trim().toLowerCase();
    const normalizedSolution = solution.trim().toLowerCase();
    return normalizedInput === normalizedSolution;
}

/**
 * Calculate input width based on solution length
 * Width is doubled for better visibility
 */
export function calculateInputWidth(solutionLength: number): number {
    const minWidth = 120;
    const maxWidth = 300;
    const charWidth = 16;
    return Math.min(maxWidth, Math.max(minWidth, solutionLength * charWidth + 40));
}

/**
 * Count gaps in a raw text
 */
export function countGaps(rawText: string): number {
    const matches = rawText.match(CLOZE_REGEX);
    CLOZE_REGEX.lastIndex = 0;
    return matches ? matches.length : 0;
}
