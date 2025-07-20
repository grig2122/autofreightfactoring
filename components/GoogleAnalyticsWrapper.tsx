'use client'

import dynamic from 'next/dynamic'

// Dynamically import GoogleAnalytics to ensure it only loads on the client
const GoogleAnalytics = dynamic(
  () => import('./GoogleAnalytics').then(mod => mod.GoogleAnalytics),
  { ssr: false }
)

export function GoogleAnalyticsWrapper() {
  return <GoogleAnalytics />
}