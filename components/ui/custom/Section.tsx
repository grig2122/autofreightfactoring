import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: 'white' | 'gray' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  container?: boolean
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    background = 'white',
    size = 'md',
    container = true,
    children,
    ...props 
  }, ref) => {
    // Background styles
    const backgroundStyles = {
      white: 'bg-white',
      gray: 'bg-gray-50',
      dark: 'bg-gray-800 text-white'
    }

    // Size styles (vertical padding)
    const sizeStyles = {
      sm: 'py-8 md:py-12',
      md: 'py-16 md:py-24',
      lg: 'py-24 md:py-32'
    }

    return (
      <section
        ref={ref}
        className={cn(
          backgroundStyles[background],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {container ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    )
  }
)

Section.displayName = 'Section'

// Container component for consistent max-width
const Container = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
)
Container.displayName = 'Container'

export { Section, Container }