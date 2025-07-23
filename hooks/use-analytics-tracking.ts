'use client'

import { useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { trackScrollDepth, trackTimeOnPage, trackFormAbandon } from '@/lib/analytics-events'

// Hook to track scroll depth
export function useScrollTracking() {
  const hasTracked = useRef({
    25: false,
    50: false,
    75: false,
    90: false,
    100: false
  })

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100)

      // Track at specific milestones
      const milestones = [25, 50, 75, 90, 100] as const
      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !hasTracked.current[milestone]) {
          hasTracked.current[milestone] = true
          trackScrollDepth(milestone)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

// Hook to track time on page
export function useTimeOnPageTracking() {
  const startTime = useRef(Date.now())
  const pathname = usePathname()

  useEffect(() => {
    // Reset start time on route change
    startTime.current = Date.now()

    const trackTime = () => {
      const timeOnPage = Math.round((Date.now() - startTime.current) / 1000)
      if (timeOnPage > 0) {
        trackTimeOnPage(timeOnPage)
      }
    }

    // Track when user leaves the page
    const handleVisibilityChange = () => {
      if (document.hidden) {
        trackTime()
      }
    }

    const handleBeforeUnload = () => {
      trackTime()
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      trackTime()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [pathname])
}

// Hook to track form abandonment
export function useFormTracking(formName: string) {
  const formStarted = useRef(false)
  const lastInteractedField = useRef<string>('')
  const fieldsInteracted = useRef(new Set<string>())
  const totalFields = useRef(0)

  const handleFormStart = useCallback(() => {
    if (!formStarted.current) {
      formStarted.current = true
      import('@/lib/analytics-events').then(({ trackFormStart }) => {
        trackFormStart(formName)
      })
    }
  }, [formName])

  const handleFieldInteraction = useCallback((fieldName: string) => {
    handleFormStart()
    lastInteractedField.current = fieldName
    fieldsInteracted.current.add(fieldName)
  }, [handleFormStart])

  const handleFormSubmit = useCallback((success: boolean = true) => {
    import('@/lib/analytics-events').then(({ trackFormSubmit }) => {
      trackFormSubmit(formName, undefined, success)
    })
    // Reset tracking
    formStarted.current = false
    fieldsInteracted.current.clear()
  }, [formName])

  const setTotalFields = useCallback((count: number) => {
    totalFields.current = count
  }, [])

  useEffect(() => {
    return () => {
      // Track abandonment if form was started but not submitted
      if (formStarted.current) {
        const completionPercentage = totalFields.current > 0
          ? (fieldsInteracted.current.size / totalFields.current) * 100
          : undefined
        
        trackFormAbandon(
          formName,
          lastInteractedField.current,
          completionPercentage
        )
      }
    }
  }, [formName])

  return {
    handleFieldInteraction,
    handleFormSubmit,
    setTotalFields
  }
}

// Hook for general analytics tracking
export function useAnalyticsTracking() {
  useScrollTracking()
  useTimeOnPageTracking()
}

// Hook to track element visibility
export function useVisibilityTracking(
  elementRef: React.RefObject<HTMLElement>,
  onVisible: () => void,
  options?: IntersectionObserverInit
) {
  const hasTracked = useRef(false)

  useEffect(() => {
    if (!elementRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true
            onVisible()
          }
        })
      },
      {
        threshold: 0.5,
        ...options
      }
    )

    observer.observe(elementRef.current)

    return () => {
      observer.disconnect()
    }
  }, [elementRef, onVisible, options])
}