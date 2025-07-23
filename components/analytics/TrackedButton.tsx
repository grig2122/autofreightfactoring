'use client'

import React from 'react'
import { Button, ButtonProps } from '@/components/ui/button'
import { trackCTAClick } from '@/lib/analytics-events'

interface TrackedButtonProps extends ButtonProps {
  trackingLabel: string
  trackingLocation?: string
  trackingDestination?: string
}

export function TrackedButton({ 
  children, 
  onClick, 
  trackingLabel,
  trackingLocation,
  trackingDestination,
  ...props 
}: TrackedButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track the click
    trackCTAClick(
      trackingLabel,
      trackingLocation || 'unknown',
      trackingDestination
    )
    
    // Call original onClick if provided
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  )
}