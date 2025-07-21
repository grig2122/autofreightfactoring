import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

export interface EnhancedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon
  iconClassName?: string
  iconBgClassName?: string
  error?: boolean
  success?: boolean
}

const EnhancedInput = React.forwardRef<HTMLInputElement, EnhancedInputProps>(
  ({ className, icon: Icon, iconClassName, iconBgClassName, error, success, ...props }, ref) => {
    const baseInputClasses = "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
    
    const inputClasses = cn(
      baseInputClasses,
      {
        "pl-16": Icon,
        "border-gray-300 focus:ring-blue-500": !error && !success,
        "border-2 border-red-500 bg-red-50 focus:ring-red-500": error,
        "border-2 border-green-500 bg-green-50 focus:ring-green-500": success,
      },
      className
    )

    return (
      <div className="relative">
        {Icon && (
          <div className={cn(
            "absolute left-3 top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-lg flex items-center justify-center",
            iconBgClassName || "bg-gray-100"
          )}>
            <Icon className={cn("h-5 w-5", iconClassName || "text-gray-600")} />
          </div>
        )}
        <input
          className={inputClasses}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
EnhancedInput.displayName = "EnhancedInput"

export { EnhancedInput }