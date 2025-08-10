import { trackEvent } from './analytics';

interface FormInteraction {
  formId: string;
  fieldsFilled: number;
  totalFields: number;
  timeSpent: number;
  errors: string[];
  abandonedField?: string;
}

class EnhancedAnalytics {
  private formInteractions: Map<string, FormInteraction> = new Map();
  private sessionData: any = {};
  private conversionQueue: any[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeSession();
      this.setupFormTracking();
      this.setupConversionQueue();
    }
  }

  private initializeSession() {
    this.sessionData = {
      sessionId: this.generateSessionId(),
      startTime: Date.now(),
      pageViews: 0,
      interactions: 0,
      errors: [],
      device: this.getDeviceInfo()
    };

    // Store session in sessionStorage
    sessionStorage.setItem('analytics_session', JSON.stringify(this.sessionData));
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private getDeviceInfo() {
    return {
      userAgent: navigator.userAgent,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      deviceMemory: (navigator as any).deviceMemory,
      hardwareConcurrency: navigator.hardwareConcurrency,
      connection: (navigator as any).connection?.effectiveType
    };
  }

  private setupFormTracking() {
    if (typeof document === 'undefined') return;

    // Track form field interactions
    document.addEventListener('focusin', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        const form = target.closest('form');
        if (form) {
          this.trackFormFieldInteraction(form.id || 'unknown-form', target);
        }
      }
    });

    // Track form abandonment
    document.addEventListener('focusout', (e) => {
      const target = e.target as HTMLInputElement | HTMLTextAreaElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        const form = target.closest('form');
        if (form && !target.value) {
          this.trackFormAbandonment(form.id || 'unknown-form', target.name || target.id);
        }
      }
    });
  }

  private trackFormFieldInteraction(formId: string, field: HTMLElement) {
    if (!this.formInteractions.has(formId)) {
      const form = document.getElementById(formId) || document.querySelector('form');
      const totalFields = form ? form.querySelectorAll('input, textarea, select').length : 0;
      
      this.formInteractions.set(formId, {
        formId,
        fieldsFilled: 0,
        totalFields,
        timeSpent: Date.now(),
        errors: []
      });
    }

    const interaction = this.formInteractions.get(formId)!;
    interaction.fieldsFilled++;
    
    trackEvent('form_field_interaction', {
      form_id: formId,
      field_name: (field as any).name || field.id,
      fields_completed: interaction.fieldsFilled,
      total_fields: interaction.totalFields,
      completion_percentage: Math.round((interaction.fieldsFilled / interaction.totalFields) * 100)
    });
  }

  private trackFormAbandonment(formId: string, fieldName: string) {
    const interaction = this.formInteractions.get(formId);
    if (interaction) {
      interaction.abandonedField = fieldName;
      
      trackEvent('form_field_abandoned', {
        form_id: formId,
        abandoned_field: fieldName,
        fields_completed: interaction.fieldsFilled,
        total_fields: interaction.totalFields,
        time_spent: Date.now() - interaction.timeSpent
      });
    }
  }

  public trackFormSubmission(formId: string, data: any, success: boolean, error?: string) {
    const interaction = this.formInteractions.get(formId) || {
      formId,
      fieldsFilled: 0,
      totalFields: 0,
      timeSpent: Date.now(),
      errors: []
    };

    if (error) {
      interaction.errors.push(error);
    }

    const submissionData = {
      form_id: formId,
      success,
      error_message: error,
      fields_completed: interaction.fieldsFilled,
      total_fields: interaction.totalFields,
      time_to_complete: Date.now() - interaction.timeSpent,
      errors_count: interaction.errors.length,
      session_id: this.sessionData.sessionId,
      ...data
    };

    trackEvent(success ? 'form_submit_success' : 'form_submit_error', submissionData);

    // Track enhanced conversion if successful
    if (success) {
      this.trackEnhancedConversion(formId, data);
    }

    // Clear form interaction data after submission
    this.formInteractions.delete(formId);
  }

  private trackEnhancedConversion(formId: string, data: any) {
    const conversionData = {
      conversion_time: new Date().toISOString(),
      form_id: formId,
      session_id: this.sessionData.sessionId,
      device_type: this.getDeviceType(),
      user_data: this.hashUserData(data),
      attribution: this.getAttributionData()
    };

    // Send to Google Ads Enhanced Conversions
    if ((window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-16844939510/YOUR_CONVERSION_LABEL',
        'value': 1.0,
        'currency': 'USD',
        'transaction_id': this.sessionData.sessionId,
        ...conversionData
      });
    }

    // Queue for server-side tracking
    this.conversionQueue.push(conversionData);
    this.processConversionQueue();
  }

  private hashUserData(data: any) {
    // Hash sensitive data for privacy
    const hashedData: any = {};
    
    if (data.email) {
      hashedData.email_hash = this.simpleHash(data.email.toLowerCase().trim());
    }
    if (data.phone) {
      hashedData.phone_hash = this.simpleHash(data.phone.replace(/\D/g, ''));
    }
    if (data.firstName) {
      hashedData.fn_hash = this.simpleHash(data.firstName.toLowerCase().trim());
    }
    if (data.lastName) {
      hashedData.ln_hash = this.simpleHash(data.lastName.toLowerCase().trim());
    }

    return hashedData;
  }

  private simpleHash(str: string): string {
    // Simple hash for demonstration - in production use proper SHA256
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash.toString(36);
  }

  private getDeviceType(): string {
    const width = window.innerWidth;
    if (width <= 768) return 'mobile';
    if (width <= 1024) return 'tablet';
    return 'desktop';
  }

  private getAttributionData() {
    const campaignData = localStorage.getItem('last_campaign');
    const referrer = document.referrer;
    
    return {
      campaign: campaignData ? JSON.parse(campaignData) : null,
      referrer,
      landing_page: sessionStorage.getItem('landing_page') || '/',
      pages_viewed: this.sessionData.pageViews
    };
  }

  private setupConversionQueue() {
    // Process conversion queue every 5 seconds
    setInterval(() => {
      this.processConversionQueue();
    }, 5000);

    // Process on page unload
    window.addEventListener('beforeunload', () => {
      this.processConversionQueue(true);
    });
  }

  private async processConversionQueue(immediate = false) {
    if (this.conversionQueue.length === 0) return;

    const conversions = [...this.conversionQueue];
    this.conversionQueue = [];

    try {
      // Send to server-side tracking endpoint
      const response = await fetch('/api/track-conversion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ conversions }),
        keepalive: immediate // Use keepalive for beforeunload
      });

      if (!response.ok) {
        // Re-queue failed conversions
        this.conversionQueue.push(...conversions);
      }
    } catch (error) {
      console.error('Failed to send conversions:', error);
      // Re-queue failed conversions
      this.conversionQueue.push(...conversions);
    }
  }

  public trackError(error: Error, context: string) {
    this.sessionData.errors.push({
      message: error.message,
      stack: error.stack,
      context,
      timestamp: Date.now()
    });

    trackEvent('application_error', {
      error_message: error.message,
      error_context: context,
      error_stack: error.stack?.substring(0, 500),
      session_id: this.sessionData.sessionId,
      page_location: window.location.href
    });
  }

  public trackPageTiming() {
    if ('performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (perfData) {
        const timingData = {
          dns_lookup: Math.round(perfData.domainLookupEnd - perfData.domainLookupStart),
          tcp_connect: Math.round(perfData.connectEnd - perfData.connectStart),
          request_time: Math.round(perfData.responseStart - perfData.requestStart),
          response_time: Math.round(perfData.responseEnd - perfData.responseStart),
          dom_processing: Math.round(perfData.domComplete - perfData.domInteractive),
          page_load_total: Math.round(perfData.loadEventEnd - perfData.fetchStart),
          first_paint: this.getFirstPaint(),
          first_contentful_paint: this.getFirstContentfulPaint()
        };

        trackEvent('page_timing_detailed', timingData);
      }
    }
  }

  private getFirstPaint(): number {
    const entries = performance.getEntriesByType('paint');
    const firstPaint = entries.find(entry => entry.name === 'first-paint');
    return firstPaint ? Math.round(firstPaint.startTime) : 0;
  }

  private getFirstContentfulPaint(): number {
    const entries = performance.getEntriesByType('paint');
    const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
    return fcp ? Math.round(fcp.startTime) : 0;
  }
}

// Export singleton instance
export const enhancedAnalytics = typeof window !== 'undefined' ? new EnhancedAnalytics() : null;

// Export helper functions
export function trackEnhancedFormSubmission(formId: string, data: any, success: boolean, error?: string) {
  enhancedAnalytics?.trackFormSubmission(formId, data, success, error);
}

export function trackApplicationError(error: Error, context: string) {
  enhancedAnalytics?.trackError(error, context);
}

export function trackDetailedPageTiming() {
  enhancedAnalytics?.trackPageTiming();
}