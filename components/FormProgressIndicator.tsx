'use client'

import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FormProgressIndicatorProps {
  currentStep: number
  totalSteps: number
  steps?: string[]
  className?: string
}

export function FormProgressIndicator({ 
  currentStep, 
  totalSteps, 
  steps,
  className 
}: FormProgressIndicatorProps) {
  const percentage = (currentStep / totalSteps) * 100

  return (
    <div className={cn("w-full", className)}>
      {/* Progress bar */}
      <div className="relative mb-2">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        {/* Step indicators */}
        <div className="absolute top-0 left-0 w-full h-2 flex justify-between">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index < currentStep
                  ? "bg-blue-600"
                  : index === currentStep
                  ? "bg-blue-400"
                  : "bg-gray-300"
              )}
              style={{
                position: 'absolute',
                left: `${(index / (totalSteps - 1)) * 100}%`,
                transform: 'translateX(-50%)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Step labels */}
      {steps && (
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center gap-1 transition-colors duration-300",
                index <= currentStep ? "text-blue-600 font-medium" : "text-gray-400"
              )}
            >
              {index < currentStep && (
                <Check className="h-3 w-3" />
              )}
              <span className="hidden sm:inline">{step}</span>
              <span className="sm:hidden">{index + 1}</span>
            </div>
          ))}
        </div>
      )}

      {/* Percentage display */}
      <div className="text-center mt-2">
        <span className="text-sm font-medium text-gray-700">
          {Math.round(percentage)}% Complete
        </span>
      </div>
    </div>
  )
}

interface StepProgressProps {
  steps: Array<{
    title: string
    description?: string
    completed: boolean
    active: boolean
  }>
  className?: string
}

export function StepProgress({ steps, className }: StepProgressProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={cn(
            "flex items-start gap-3 p-4 rounded-lg border transition-all duration-300",
            step.active
              ? "border-blue-500 bg-blue-50"
              : step.completed
              ? "border-green-500 bg-green-50"
              : "border-gray-200 bg-white"
          )}
        >
          <div
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300",
              step.completed
                ? "border-green-500 bg-green-500 text-white"
                : step.active
                ? "border-blue-500 bg-blue-500 text-white"
                : "border-gray-300 bg-white text-gray-400"
            )}
          >
            {step.completed ? (
              <Check className="h-4 w-4" />
            ) : (
              <span className="text-sm font-medium">{index + 1}</span>
            )}
          </div>
          <div className="flex-1">
            <h3
              className={cn(
                "font-medium transition-colors duration-300",
                step.active
                  ? "text-blue-900"
                  : step.completed
                  ? "text-green-900"
                  : "text-gray-500"
              )}
            >
              {step.title}
            </h3>
            {step.description && (
              <p
                className={cn(
                  "mt-1 text-sm transition-colors duration-300",
                  step.active
                    ? "text-blue-700"
                    : step.completed
                    ? "text-green-700"
                    : "text-gray-400"
                )}
              >
                {step.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}