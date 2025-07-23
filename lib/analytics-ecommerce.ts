// Enhanced ecommerce tracking for conversion funnel analysis
import { trackEcommerceEvent } from './analytics-events'

// Application funnel steps
export const ApplicationFunnelSteps = {
  VIEW_LANDING: 'view_landing_page',
  CLICK_APPLY: 'begin_checkout', // GA4 standard event
  VIEW_APPLICATION: 'view_application',
  START_APPLICATION: 'add_to_cart', // GA4 standard event
  COMPLETE_APPLICATION: 'purchase', // GA4 standard event
  VIEW_THANK_YOU: 'view_thank_you'
} as const

// Track when user views landing page
export function trackLandingPageView(source?: string) {
  trackEcommerceEvent('view_item', {
    currency: 'USD',
    value: 0,
    items: [{
      item_id: 'freight_factoring_service',
      item_name: 'Freight Factoring Service',
      item_category: 'financial_services',
      item_category2: 'factoring',
      price: 0,
      quantity: 1
    }],
    traffic_source: source
  })
}

// Track when user clicks Apply button
export function trackApplyClick(location: string) {
  trackEcommerceEvent(ApplicationFunnelSteps.CLICK_APPLY, {
    currency: 'USD',
    value: 0,
    items: [{
      item_id: 'freight_factoring_application',
      item_name: 'Freight Factoring Application',
      item_category: 'application',
      price: 0,
      quantity: 1
    }],
    click_location: location
  })
}

// Track when user starts filling application
export function trackApplicationStart(formData?: Partial<{
  companyType: string
  factoringStatus: string
}>) {
  trackEcommerceEvent(ApplicationFunnelSteps.START_APPLICATION, {
    currency: 'USD',
    value: 0,
    items: [{
      item_id: 'freight_factoring_application',
      item_name: 'Freight Factoring Application',
      item_category: 'application',
      item_variant: formData?.companyType,
      price: 0,
      quantity: 1
    }],
    factoring_status: formData?.factoringStatus
  })
}

// Track application completion
export function trackApplicationComplete(applicationData: {
  companyName: string
  factoringStatus: string
  mcNumber: string
  timeToComplete?: number
}) {
  trackEcommerceEvent(ApplicationFunnelSteps.COMPLETE_APPLICATION, {
    transaction_id: `app_${Date.now()}_${applicationData.mcNumber}`,
    currency: 'USD',
    value: 1000, // Estimated application value
    items: [{
      item_id: 'freight_factoring_application',
      item_name: 'Freight Factoring Application Submitted',
      item_category: 'application',
      item_variant: applicationData.factoringStatus,
      price: 1000,
      quantity: 1
    }],
    company_name: applicationData.companyName,
    mc_number: applicationData.mcNumber,
    time_to_complete_sec: applicationData.timeToComplete
  })
}

// Track funnel drop-offs
export function trackFunnelDropOff(step: string, reason?: string) {
  trackEcommerceEvent('remove_from_cart', {
    currency: 'USD',
    value: 0,
    items: [{
      item_id: 'freight_factoring_application',
      item_name: 'Freight Factoring Application',
      item_category: 'application',
      price: 0,
      quantity: 1
    }],
    drop_off_step: step,
    drop_off_reason: reason
  })
}

// Track user engagement with specific features
export function trackFeatureEngagement(featureName: string, action: string) {
  trackEcommerceEvent('select_content', {
    content_type: 'feature',
    content_id: featureName,
    content_action: action
  })
}

// Track qualification events
export function trackQualificationStatus(qualified: boolean, reason?: string) {
  trackEcommerceEvent('unlock_achievement', {
    achievement_id: qualified ? 'qualified_for_factoring' : 'not_qualified',
    qualification_reason: reason
  })
}

// Track user journey milestones
export function trackMilestone(milestone: string, details?: Record<string, any>) {
  trackEcommerceEvent('level_up', {
    level: milestone,
    character: 'user_journey',
    ...details
  })
}

// Helper to track the entire user journey
export class UserJourneyTracker {
  private startTime: number
  private steps: string[] = []

  constructor() {
    this.startTime = Date.now()
  }

  trackStep(stepName: string) {
    this.steps.push(stepName)
    trackEcommerceEvent('tutorial_step_complete', {
      step_name: stepName,
      step_number: this.steps.length,
      time_since_start: Math.round((Date.now() - this.startTime) / 1000)
    })
  }

  complete() {
    const totalTime = Math.round((Date.now() - this.startTime) / 1000)
    trackEcommerceEvent('tutorial_complete', {
      total_steps: this.steps.length,
      total_time_sec: totalTime,
      average_time_per_step: Math.round(totalTime / this.steps.length),
      journey_path: this.steps.join(' > ')
    })
  }

  abandon(lastStep: string) {
    trackFunnelDropOff(lastStep, 'user_abandoned')
  }
}