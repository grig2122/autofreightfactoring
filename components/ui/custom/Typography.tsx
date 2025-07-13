import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

// Heading components following design guidelines
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  size?: 'display' | 'h1' | 'h2' | 'h3' | 'h4'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ 
    className, 
    level = 1,
    size,
    weight = 'bold',
    children,
    ...props 
  }, ref) => {
    const Component = `h${level}` as keyof JSX.IntrinsicElements

    // Default sizes based on heading level
    const defaultSizes = {
      1: 'text-4xl md:text-5xl',
      2: 'text-2xl md:text-3xl',
      3: 'text-xl md:text-2xl',
      4: 'text-lg md:text-xl',
      5: 'text-base md:text-lg',
      6: 'text-sm md:text-base'
    }

    // Custom size mapping
    const sizeStyles = {
      display: 'text-5xl md:text-6xl lg:text-7xl',
      h1: 'text-4xl md:text-5xl',
      h2: 'text-2xl md:text-3xl',
      h3: 'text-xl md:text-2xl',
      h4: 'text-lg md:text-xl'
    }

    const weightStyles = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    }

    return (
      <Component
        ref={ref}
        className={cn(
          'text-gray-900 leading-tight',
          size ? sizeStyles[size] : defaultSizes[level],
          weightStyles[weight],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Heading.displayName = 'Heading'

// Text component for body text
export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  weight?: 'normal' | 'medium' | 'semibold'
  color?: 'primary' | 'secondary' | 'muted' | 'success' | 'error' | 'warning'
  as?: 'p' | 'span' | 'div'
}

const Text = forwardRef<HTMLElement, TextProps>(
  ({ 
    className, 
    size = 'base',
    weight = 'normal',
    color = 'primary',
    as = 'p',
    children,
    ...props 
  }, ref) => {
    const Component = as

    const sizeStyles = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl'
    }

    const weightStyles = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold'
    }

    const colorStyles = {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      muted: 'text-gray-500',
      success: 'text-green-600',
      error: 'text-red-600',
      warning: 'text-amber-600'
    }

    return (
      <Component
        ref={ref}
        className={cn(
          'leading-relaxed',
          sizeStyles[size],
          weightStyles[weight],
          colorStyles[color],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Text.displayName = 'Text'

// Lead text for introductory paragraphs
const Lead = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-lg md:text-xl text-gray-600 leading-relaxed', className)}
      {...props}
    />
  )
)
Lead.displayName = 'Lead'

// Muted text for less important content
const Muted = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-gray-500', className)}
      {...props}
    />
  )
)
Muted.displayName = 'Muted'

export { Heading, Text, Lead, Muted }