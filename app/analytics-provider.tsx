'use client'

import { AnalyticsSimple } from './analytics-simple'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnalyticsSimple />
      {children}
    </>
  )
}