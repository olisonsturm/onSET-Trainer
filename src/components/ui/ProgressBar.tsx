interface ProgressBarProps {
    value: number;
    max?: number;
    className?: string;
    showLabel?: boolean;
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'success' | 'warning' | 'error';
}

export function ProgressBar({
    value,
    max = 100,
    className = '',
    showLabel = false,
    size = 'md',
    color = 'primary',
}: ProgressBarProps) {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    const sizes = {
        sm: 'h-1.5',
        md: 'h-2.5',
        lg: 'h-4',
    };

    const colors = {
        primary: 'bg-primary-600',
        success: 'bg-success-600',
        warning: 'bg-yellow-500',
        error: 'bg-error-600',
    };

    return (
        <div className={`${className}`}>
            <div className={`bg-gray-200 rounded-full overflow-hidden ${sizes[size]}`}>
                <div
                    className={`${colors[color]} ${sizes[size]} transition-all duration-300 ease-out rounded-full`}
                    style={{ width: `${percentage}%` }}
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin={0}
                    aria-valuemax={max}
                />
            </div>
            {showLabel && (
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{value}</span>
                    <span>{max}</span>
                </div>
            )}
        </div>
    );
}
