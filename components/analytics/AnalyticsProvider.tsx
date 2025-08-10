'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useAnalyticsTracking } from '@/hooks/use-analytics-tracking'
import { trackEvent, setUserProperties } from '@/lib/analytics-events'
import { detectBot, trackBotDetection } from '@/lib/bot-detection'

function AnalyticsContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  // Enable general tracking (scroll, time on page)
  useAnalyticsTracking()

  // Detect and track bots on mount
  useEffect(() => {
    const botResult = detectBot()
    if (botResult.isBot) {
      trackBotDetection()
      // Flag session as potential bot
      setUserProperties({
        is_bot: true,
        bot_confidence: botResult.confidence,
        bot_reasons: botResult.reasons.join(',')
      })
    } else {
      setUserProperties({
        is_bot: false,
        user_type: 'genuine'
      })
    }
  }, [])

  // Track UTM parameters and traffic sources
  useEffect(() => {
    const utm_source = searchParams?.get('utm_source')
    const utm_medium = searchParams?.get('utm_medium')
    const utm_campaign = searchParams?.get('utm_campaign')
    const utm_content = searchParams?.get('utm_content')
    const utm_term = searchParams?.get('utm_term')
    const referrer = document.referrer

    if (utm_source || utm_medium || utm_campaign) {
      trackEvent('campaign_view', {
        campaign_source: utm_source,
        campaign_medium: utm_medium,
        campaign_name: utm_campaign,
        campaign_content: utm_content,
        campaign_term: utm_term,
        page_location: window.location.href,
        page_referrer: referrer
      })

      // Store campaign data in localStorage for attribution
      const campaignData = {
        source: utm_source,
        medium: utm_medium,
        campaign: utm_campaign,
        content: utm_content,
        term: utm_term,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('last_campaign', JSON.stringify(campaignData))
    }

    // Track traffic source
    if (referrer) {
      const referrerDomain = new URL(referrer).hostname
      setUserProperties({
        referrer_domain: referrerDomain,
        traffic_type: utm_source ? 'paid' : 'organic'
      })
    }
  }, [searchParams])

  // Track page-specific events based on pathname
  useEffect(() => {
    // Track specific page views with enhanced data
    const pageData = {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
      page_referrer: document.referrer
    }

    // Track landing page performance
    if (pathname === '/') {
      trackEvent('landing_page_view', pageData)
    } else if (pathname === '/apply') {
      trackEvent('application_page_view', pageData)
    } else if (pathname === '/apply/thank-you') {
      trackEvent('application_complete_page_view', pageData)
      
      // Retrieve and track campaign attribution for conversions
      const campaignData = localStorage.getItem('last_campaign')
      if (campaignData) {
        const campaign = JSON.parse(campaignData)
        trackEvent('conversion_attribution', {
          ...pageData,
          ...campaign
        })
      }
    }

    // Track blog engagement
    if (pathname.startsWith('/blog/')) {
      trackEvent('blog_article_view', {
        ...pageData,
        article_slug: pathname.split('/').pop()
      })
    }
  }, [pathname])

  // Track JavaScript errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      trackEvent('javascript_error', {
        error_message: event.message,
        error_source: event.filename,
        error_line: event.lineno,
        error_column: event.colno,
        page_location: window.location.href
      })
    }

    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [])

  // Track page performance metrics
  useEffect(() => {
    const trackPerformance = () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (navigation) {
          trackEvent('page_performance', {
            page_load_time: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
            dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
            time_to_first_byte: Math.round(navigation.responseStart - navigation.requestStart),
            page_location: window.location.href
          })
        }
      }
    }

    // Wait for page to fully load before tracking performance
    if (document.readyState === 'complete') {
      trackPerformance()
    } else {
      window.addEventListener('load', trackPerformance)
      return () => window.removeEventListener('load', trackPerformance)
    }
  }, [pathname])

  return null
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <AnalyticsContent />
      </Suspense>
      {children}
    </>
  )
}