import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'success' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg';

        const variants = {
            primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
            secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300',
            success: 'bg-success-600 text-white hover:bg-success-500',
            outline: 'border-2 border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700',
            ghost: 'bg-transparent hover:bg-gray-100 text-gray-600',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-6 py-3 text-lg',
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
