import { analytics } from './firebase';
import { logEvent, setUserId, setUserProperties } from 'firebase/analytics';
import { trackConversion } from '@/components/GoogleAnalytics';
import { getConversionConfig } from '@/lib/google-ads-config';

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && analytics) {
    try {
      logEvent(analytics, eventName, parameters);
    } catch (error) {
      console.warn('Analytics tracking error:', error);
    }
  }
};

export const trackPageView = (pageName: string, pageLocation?: string) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: pageLocation || window.location.href,
    page_path: window.location.pathname,
  });
};

export const trackFormSubmission = (formName: string, success: boolean, additionalData?: Record<string, any>) => {
  trackEvent('form_submit', {
    form_name: formName,
    success: success,
    ...additionalData,
  });
  
  // Track Google Ads conversions for successful form submissions
  if (success && typeof window !== 'undefined') {
    switch (formName) {
      case 'contact':
        const contactConfig = getConversionConfig('contactFormSubmit');
        trackConversion(contactConfig.label, contactConfig.defaultValue);
        break;
      case 'landing_page':
        const landingConfig = getConversionConfig('landingPageLead');
        trackConversion(landingConfig.label, landingConfig.defaultValue);
        break;
      case 'fuel_card':
        const fuelConfig = getConversionConfig('fuelCardApplication');
        trackConversion(fuelConfig.label, fuelConfig.defaultValue);
        break;
    }
  }
};

export const trackButtonClick = (buttonName: string, location: string, additionalData?: Record<string, any>) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
    ...additionalData,
  });
  
  // Track phone click conversions
  if (buttonName === 'phone' && typeof window !== 'undefined') {
    const phoneConfig = getConversionConfig('phoneClick');
    trackConversion(phoneConfig.label, phoneConfig.defaultValue);
  }
};

export const trackFileUpload = (fileType: string, fileSize: number, success: boolean) => {
  trackEvent('file_upload', {
    file_type: fileType,
    file_size_kb: Math.round(fileSize / 1024),
    success: success,
  });
};

export const trackApiCall = (endpoint: string, method: string, success: boolean, responseTime?: number) => {
  trackEvent('api_call', {
    endpoint: endpoint,
    method: method,
    success: success,
    response_time_ms: responseTime,
  });
};

export const trackError = (errorType: string, errorMessage: string, location: string) => {
  trackEvent('error', {
    error_type: errorType,
    error_message: errorMessage,
    location: location,
  });
};

export const trackSignUp = (method: string) => {
  trackEvent('sign_up', {
    method: method,
  });
};

export const trackLogin = (method: string) => {
  trackEvent('login', {
    method: method,
  });
};

export const trackPurchase = (value: number, currency: string, items: any[]) => {
  trackEvent('purchase', {
    value: value,
    currency: currency,
    items: items,
  });
};

export const setAnalyticsUserId = (userId: string) => {
  if (typeof window !== 'undefined' && analytics) {
    try {
      setUserId(analytics, userId);
    } catch (error) {
      console.warn('Analytics setUserId error:', error);
    }
  }
};

export const setAnalyticsUserProperties = (properties: Record<string, any>) => {
  if (typeof window !== 'undefined' && analytics) {
    try {
      setUserProperties(analytics, properties);
    } catch (error) {
      console.warn('Analytics setUserProperties error:', error);
    }
  }
};

export const trackSearch = (searchTerm: string, resultsCount?: number) => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount,
  });
};

export const trackShare = (contentType: string, itemId: string, method: string) => {
  trackEvent('share', {
    content_type: contentType,
    item_id: itemId,
    method: method,
  });
};

export const trackTiming = (timingCategory: string, timingVar: string, timingValue: number) => {
  trackEvent('timing_complete', {
    timing_category: timingCategory,
    timing_var: timingVar,
    timing_value: timingValue,
  });
};