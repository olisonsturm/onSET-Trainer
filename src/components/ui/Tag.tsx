interface TagProps {
    children: string;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md';
    onClick?: () => void;
    removable?: boolean;
    onRemove?: () => void;
}

export function Tag({
    children,
    variant = 'primary',
    size = 'sm',
    onClick,
    removable = false,
    onRemove,
}: TagProps) {
    const variants = {
        primary: 'bg-primary-100 text-primary-700',
        secondary: 'bg-gray-100 text-gray-700',
        success: 'bg-success-50 text-success-600',
        warning: 'bg-yellow-100 text-yellow-700',
        error: 'bg-error-50 text-error-600',
    };

    const sizes = {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
    };

    return (
        <span
            className={`inline-flex items-center gap-1 rounded-full font-medium ${variants[variant]} ${sizes[size]} ${onClick ? 'cursor-pointer hover:opacity-80' : ''}`}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
        >
            {children}
            {removable && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove?.();
                    }}
                    className="ml-1 hover:bg-black/10 rounded-full p-0.5"
                    aria-label={`Remove ${children}`}
                >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </span>
    );
}
