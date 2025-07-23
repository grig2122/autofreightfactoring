// Analytics event tracking for user behavior analysis

import { trackEvent as gaTrackEvent } from '@/components/GoogleAnalytics'

// Re-export trackEvent for convenience
export const trackEvent = gaTrackEvent

// Event categories
export const EventCategory = {
  USER_ENGAGEMENT: 'user_engagement',
  NAVIGATION: 'navigation',
  FORM_INTERACTION: 'form_interaction',
  CONVERSION: 'conversion',
  ERROR: 'error',
  CONTENT: 'content'
} as const

// Standard event names following GA4 conventions
export const EventName = {
  // Page engagement
  SCROLL: 'scroll',
  TIME_ON_PAGE: 'time_on_page',
  PAGE_VIEW: 'page_view',
  
  // Navigation
  CLICK_CTA: 'click_cta',
  CLICK_NAV: 'click_nav',
  CLICK_LINK: 'click_link',
  
  // Form interactions
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  FORM_ERROR: 'form_error',
  FORM_ABANDON: 'form_abandon',
  FIELD_INTERACTION: 'field_interaction',
  
  // Conversion funnel
  SIGN_UP_START: 'sign_up_start',
  SIGN_UP_COMPLETE: 'sign_up_complete',
  APPLICATION_START: 'application_start',
  APPLICATION_STEP: 'application_step',
  APPLICATION_COMPLETE: 'application_complete',
  
  // Content interactions
  VIDEO_PLAY: 'video_play',
  VIDEO_COMPLETE: 'video_complete',
  DOWNLOAD: 'download',
  SHARE: 'share',
  
  // Errors
  ERROR_BOUNDARY: 'error_boundary',
  API_ERROR: 'api_error',
  VALIDATION_ERROR: 'validation_error'
} as const

// Track scroll depth
export function trackScrollDepth(percentage: number) {
  gaTrackEvent(EventName.SCROLL, {
    percent_scrolled: percentage,
    page_location: window.location.href,
    page_title: document.title
  })
}

// Track time on page
export function trackTimeOnPage(seconds: number) {
  gaTrackEvent(EventName.TIME_ON_PAGE, {
    engagement_time_msec: seconds * 1000,
    page_location: window.location.href,
    page_title: document.title
  })
}

// Track CTA clicks
export function trackCTAClick(buttonText: string, location: string, destination?: string) {
  gaTrackEvent(EventName.CLICK_CTA, {
    button_text: buttonText,
    click_location: location,
    destination_url: destination,
    page_location: window.location.href
  })
}

// Track form interactions
export function trackFormStart(formName: string, formId?: string) {
  gaTrackEvent(EventName.FORM_START, {
    form_name: formName,
    form_id: formId,
    page_location: window.location.href
  })
}

export function trackFormSubmit(formName: string, formId?: string, success: boolean = true) {
  gaTrackEvent(EventName.FORM_SUBMIT, {
    form_name: formName,
    form_id: formId,
    success: success,
    page_location: window.location.href
  })
}

export function trackFormError(formName: string, errorType: string, fieldName?: string) {
  gaTrackEvent(EventName.FORM_ERROR, {
    form_name: formName,
    error_type: errorType,
    field_name: fieldName,
    page_location: window.location.href
  })
}

export function trackFormAbandon(formName: string, lastField?: string, completionPercentage?: number) {
  gaTrackEvent(EventName.FORM_ABANDON, {
    form_name: formName,
    last_field: lastField,
    completion_percentage: completionPercentage,
    page_location: window.location.href
  })
}

// Track conversion funnel
export function trackSignUpStart(method?: string) {
  gaTrackEvent(EventName.SIGN_UP_START, {
    method: method,
    page_location: window.location.href
  })
}

export function trackSignUpComplete(method?: string, userId?: string) {
  gaTrackEvent(EventName.SIGN_UP_COMPLETE, {
    method: method,
    user_id: userId,
    page_location: window.location.href
  })
}

export function trackApplicationStep(step: number, stepName: string, totalSteps: number) {
  gaTrackEvent(EventName.APPLICATION_STEP, {
    step_number: step,
    step_name: stepName,
    total_steps: totalSteps,
    progress_percentage: (step / totalSteps) * 100,
    page_location: window.location.href
  })
}

export function trackApplicationComplete(applicationId?: string, timeToComplete?: number) {
  gaTrackEvent(EventName.APPLICATION_COMPLETE, {
    application_id: applicationId,
    time_to_complete_sec: timeToComplete,
    page_location: window.location.href
  })
}

// Track errors
export function trackError(errorType: string, errorMessage: string, errorStack?: string) {
  gaTrackEvent(EventName.API_ERROR, {
    error_type: errorType,
    error_message: errorMessage,
    error_stack: errorStack,
    page_location: window.location.href
  })
}

// Enhanced ecommerce tracking for conversion funnel
export function trackEcommerceEvent(eventName: string, parameters: {
  currency?: string;
  value?: number;
  items?: Array<{
    item_id: string;
    item_name: string;
    item_category?: string;
    price?: number;
    quantity?: number;
  }>;
  [key: string]: any;
}) {
  gaTrackEvent(eventName, {
    ...parameters,
    page_location: window.location.href
  })
}

// User properties for better segmentation
export function setUserProperties(properties: {
  user_type?: string;
  industry?: string;
  company_size?: string;
  [key: string]: any;
}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', properties)
  }
}

// Custom dimensions for enhanced tracking
export function setCustomDimension(dimensionName: string, value: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-V11G85PLVJ', {
      custom_map: { [dimensionName]: value }
    })
  }
}