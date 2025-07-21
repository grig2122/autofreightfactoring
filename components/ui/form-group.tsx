import * as React from "react"
import { cn } from "@/lib/utils"

interface FormGroupProps {
  title: string
  variant?: "default" | "primary" | "secondary"
  children: React.ReactNode
  className?: string
}

export function FormGroup({ 
  title, 
  variant = "default", 
  children, 
  className 
}: FormGroupProps) {
  const variantStyles = {
    default: "bg-gray-50",
    primary: "bg-blue-50",
    secondary: "bg-green-50"
  }


  return (
    <div className={cn(
      "rounded-xl p-6 space-y-4",
      variantStyles[variant],
      className
    )}>
      <h4 className="font-semibold text-gray-900">
        {title}
      </h4>
      {children}
    </div>
  )
}