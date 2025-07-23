'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { TrendingUp, TrendingDown, Users, MousePointerClick, FileText, CheckCircle } from 'lucide-react'

interface AnalyticsData {
  visitors: number
  clicks: number
  formStarts: number
  formCompletions: number
  avgTimeOnPage: number
  bounceRate: number
  scrollDepth: {
    '25': number
    '50': number
    '75': number
    '100': number
  }
}

export function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData>({
    visitors: 0,
    clicks: 0,
    formStarts: 0,
    formCompletions: 0,
    avgTimeOnPage: 0,
    bounceRate: 0,
    scrollDepth: { '25': 0, '50': 0, '75': 0, '100': 0 }
  })

  // This would normally fetch from your analytics API
  useEffect(() => {
    // Simulated data - replace with actual GA4 API calls
    setData({
      visitors: 1250,
      clicks: 180,
      formStarts: 45,
      formCompletions: 28,
      avgTimeOnPage: 125,
      bounceRate: 42,
      scrollDepth: { '25': 85, '50': 62, '75': 38, '100': 15 }
    })
  }, [])

  const conversionRate = data.formStarts > 0 
    ? ((data.formCompletions / data.formStarts) * 100).toFixed(1)
    : '0'

  const clickRate = data.visitors > 0
    ? ((data.clicks / data.visitors) * 100).toFixed(1)
    : '0'

  const metrics = [
    {
      title: 'Total Visitors',
      value: data.visitors.toLocaleString(),
      icon: <Users className="h-4 w-4" />,
      trend: '+12%',
      trendUp: true
    },
    {
      title: 'CTA Click Rate',
      value: `${clickRate}%`,
      icon: <MousePointerClick className="h-4 w-4" />,
      trend: '+5%',
      trendUp: true
    },
    {
      title: 'Form Starts',
      value: data.formStarts,
      icon: <FileText className="h-4 w-4" />,
      trend: '-2%',
      trendUp: false
    },
    {
      title: 'Conversion Rate',
      value: `${conversionRate}%`,
      icon: <CheckCircle className="h-4 w-4" />,
      trend: '+8%',
      trendUp: true
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <p className="text-gray-600">Monitor user behavior and conversion metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              {metric.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {metric.trendUp ? (
                  <TrendingUp className="mr-1 h-3 w-3 text-green-600" />
                ) : (
                  <TrendingDown className="mr-1 h-3 w-3 text-red-600" />
                )}
                <span className={metric.trendUp ? 'text-green-600' : 'text-red-600'}>
                  {metric.trend}
                </span>
                <span className="ml-1">from last week</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Conversion Funnel */}
      <Card>
        <CardHeader>
          <CardTitle>Conversion Funnel</CardTitle>
          <CardDescription>User journey from visit to application</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Page Visitors</span>
                <span>{data.visitors}</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>CTA Clicks</span>
                <span>{data.clicks} ({clickRate}%)</span>
              </div>
              <Progress value={(data.clicks / data.visitors) * 100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Form Starts</span>
                <span>{data.formStarts} ({((data.formStarts / data.visitors) * 100).toFixed(1)}%)</span>
              </div>
              <Progress value={(data.formStarts / data.visitors) * 100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Applications Completed</span>
                <span>{data.formCompletions} ({((data.formCompletions / data.visitors) * 100).toFixed(1)}%)</span>
              </div>
              <Progress value={(data.formCompletions / data.visitors) * 100} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Engagement Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Scroll Depth</CardTitle>
            <CardDescription>How far users scroll on pages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(data.scrollDepth).map(([depth, percentage]) => (
                <div key={depth}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{depth}% scroll</span>
                    <span>{percentage}% of users</span>
                  </div>
                  <Progress value={percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Stats</CardTitle>
            <CardDescription>User engagement metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Avg. Time on Page</span>
                <span className="text-sm font-medium">
                  {Math.floor(data.avgTimeOnPage / 60)}m {data.avgTimeOnPage % 60}s
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Bounce Rate</span>
                <span className="text-sm font-medium">{data.bounceRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Form Completion Rate</span>
                <span className="text-sm font-medium">{conversionRate}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Instructions */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">View Full Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-blue-800">
            For detailed analytics and user behavior insights, visit your{' '}
            <a 
              href="https://analytics.google.com/analytics/web/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline font-medium"
            >
              Google Analytics 4 Dashboard
            </a>
            . Use the Path Exploration and Funnel reports to identify specific drop-off points.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}