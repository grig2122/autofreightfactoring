import { Metadata } from 'next'
import { AnalyticsDashboard } from '@/components/analytics/AnalyticsDashboard'

export const metadata: Metadata = {
  title: 'Analytics Dashboard | AutoFreightFactoring',
  description: 'Internal analytics dashboard for monitoring user behavior and conversions',
  robots: 'noindex, nofollow' // Prevent indexing of internal pages
}

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <AnalyticsDashboard />
      </div>
    </div>
  )
}