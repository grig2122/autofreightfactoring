import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false,
    fullWidth = false,
    disabled,
    children,
    ...props 
  }, ref) => {
    // Base styles following design guidelines
    const baseStyles = cn(
      'inline-flex items-center justify-center font-semibold rounded-lg',
      'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      fullWidth && 'w-full'
    )

    // Size variants
    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm md:text-base',
      lg: 'px-8 py-4 text-base md:text-lg'
    }

    // Variant styles based on design guidelines
    const variantStyles = {
      primary: cn(
        'bg-blue-600 text-white hover:bg-blue-700',
        'focus:ring-blue-500',
        'hover:scale-105'
      ),
      secondary: cn(
        'bg-white text-blue-600 border-2 border-blue-600',
        'hover:bg-blue-50 focus:ring-blue-500'
      ),
      ghost: cn(
        'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
        'focus:ring-gray-500'
      ),
      danger: cn(
        'bg-red-600 text-white hover:bg-red-700',
        'focus:ring-red-500',
        'hover:scale-105'
      )
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }