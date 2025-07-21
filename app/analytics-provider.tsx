'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { AnalyticsSimple } from './analytics-simple'
import { trackPageView } from '@/lib/analytics'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    
    const pageName = pathname === '/' ? 'Home' : pathname.split('/').filter(Boolean).join(' - ')
    
    trackPageView(pageName, url)
  }, [pathname, searchParams])

  return (
    <>
      <AnalyticsSimple />
      {children}
    </>
  )
}