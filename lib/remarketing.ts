interface RemarketingAudience {
  id: string;
  name: string;
  conditions: any;
}

export class RemarketingManager {
  private audiences: Map<string, Set<string>> = new Map();
  private userSegments: Set<string> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeRemarketing();
      this.trackUserBehavior();
    }
  }

  private initializeRemarketing() {
    // Initialize Google Ads remarketing
    if ((window as any).gtag) {
      (window as any).gtag('config', 'AW-16844939510', {
        'send_page_view': false,
        'allow_ad_personalization_signals': true
      });
    }

    // Load existing segments from localStorage
    const savedSegments = localStorage.getItem('user_segments');
    if (savedSegments) {
      this.userSegments = new Set(JSON.parse(savedSegments));
    }
  }

  private trackUserBehavior() {
    // Track page unload for form abandonment
    window.addEventListener('beforeunload', () => {
      this.checkFormAbandonment();
    });

    // Track visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.checkFormAbandonment();
      }
    });

    // Track idle time
    let idleTimer: NodeJS.Timeout;
    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        this.addToSegment('idle_user');
      }, 60000); // 1 minute of inactivity
    };

    ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
      document.addEventListener(event, resetIdleTimer, true);
    });
  }

  public trackFormAbandonment(formId: string, fieldsCompleted: number, totalFields: number) {
    const abandonmentRate = fieldsCompleted / totalFields;
    
    if (abandonmentRate > 0 && abandonmentRate < 1) {
      // Add to form abandoner segment
      this.addToSegment('form_abandoner');
      
      // Segment by abandonment stage
      if (abandonmentRate < 0.25) {
        this.addToSegment('early_abandoner');
      } else if (abandonmentRate < 0.75) {
        this.addToSegment('mid_abandoner');
      } else {
        this.addToSegment('late_abandoner');
      }

      // Fire remarketing event
      this.fireRemarketingEvent('form_abandon', {
        form_id: formId,
        completion_rate: Math.round(abandonmentRate * 100),
        fields_completed: fieldsCompleted,
        total_fields: totalFields
      });
    }
  }

  public trackHighValueUser(criteria: {
    pageViews?: number;
    timeOnSite?: number;
    formInteractions?: number;
  }) {
    const { pageViews = 0, timeOnSite = 0, formInteractions = 0 } = criteria;
    
    // Qualify as high-value if they meet certain thresholds
    if (pageViews >= 3 || timeOnSite >= 120 || formInteractions >= 2) {
      this.addToSegment('high_value_visitor');
      
      // Further segmentation
      if (pageViews >= 5) {
        this.addToSegment('highly_engaged');
      }
      if (timeOnSite >= 300) {
        this.addToSegment('long_session');
      }
      
      this.fireRemarketingEvent('high_value_user', criteria);
    }
  }

  public trackConversionIntent(signals: {
    viewedPricing?: boolean;
    clickedApply?: boolean;
    scrolledToForm?: boolean;
    interactedWithCalculator?: boolean;
  }) {
    const intentScore = Object.values(signals).filter(Boolean).length;
    
    if (intentScore >= 2) {
      this.addToSegment('high_intent');
      
      if (signals.clickedApply) {
        this.addToSegment('apply_intent');
      }
      if (signals.viewedPricing) {
        this.addToSegment('price_conscious');
      }
      
      this.fireRemarketingEvent('conversion_intent', {
        intent_score: intentScore,
        ...signals
      });
    }
  }

  public trackCartAbandonment(data: {
    formData?: any;
    step?: string;
    value?: number;
  }) {
    this.addToSegment('cart_abandoner');
    
    // Dynamic remarketing with product/service data
    this.fireRemarketingEvent('add_to_cart', {
      value: data.value || 1,
      currency: 'USD',
      items: [{
        id: 'freight_factoring',
        name: 'Freight Factoring Service',
        category: 'Financial Services',
        price: data.value || 1
      }]
    });

    // Schedule remarketing follow-up
    this.scheduleRemarketingFollowup('cart_abandonment', data);
  }

  private addToSegment(segment: string) {
    this.userSegments.add(segment);
    
    // Persist to localStorage
    localStorage.setItem('user_segments', JSON.stringify([...this.userSegments]));
    
    // Update Google Ads audiences
    if ((window as any).gtag) {
      (window as any).gtag('event', 'audience_update', {
        'send_to': 'AW-16844939510',
        'user_segment': segment
      });
    }
  }

  private fireRemarketingEvent(eventName: string, parameters: any) {
    // Google Ads remarketing
    if ((window as any).gtag) {
      (window as any).gtag('event', eventName, {
        'send_to': 'AW-16844939510',
        ...parameters
      });
    }

    // Facebook Pixel (if configured)
    if ((window as any).fbq) {
      (window as any).fbq('trackCustom', eventName, parameters);
    }

    // Store event for later processing
    this.storeRemarketingEvent(eventName, parameters);
  }

  private storeRemarketingEvent(eventName: string, parameters: any) {
    const events = JSON.parse(localStorage.getItem('remarketing_events') || '[]');
    events.push({
      event: eventName,
      parameters,
      timestamp: Date.now(),
      segments: [...this.userSegments]
    });
    
    // Keep only last 50 events
    if (events.length > 50) {
      events.shift();
    }
    
    localStorage.setItem('remarketing_events', JSON.stringify(events));
  }

  private scheduleRemarketingFollowup(type: string, data: any) {
    const followups = JSON.parse(localStorage.getItem('remarketing_followups') || '[]');
    followups.push({
      type,
      data,
      scheduled: Date.now(),
      triggerAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours later
    });
    
    localStorage.setItem('remarketing_followups', JSON.stringify(followups));
  }

  private checkFormAbandonment() {
    const formElement = document.querySelector('form');
    if (!formElement) return;

    const inputs = formElement.querySelectorAll('input, textarea, select');
    let filledCount = 0;
    let totalCount = inputs.length;

    inputs.forEach((input: any) => {
      if (input.value && input.value.trim() !== '') {
        filledCount++;
      }
    });

    if (filledCount > 0 && filledCount < totalCount) {
      this.trackFormAbandonment('main_form', filledCount, totalCount);
    }
  }

  public getSegments(): string[] {
    return [...this.userSegments];
  }

  public isInSegment(segment: string): boolean {
    return this.userSegments.has(segment);
  }

  // Custom audience creation for Google Ads
  public createCustomAudience(name: string, rules: any[]) {
    const audience: RemarketingAudience = {
      id: `custom_${Date.now()}`,
      name,
      conditions: rules
    };

    // This would typically call Google Ads API
    // For now, we'll track it locally
    this.fireRemarketingEvent('custom_audience_created', {
      audience_name: name,
      rules_count: rules.length
    });

    return audience;
  }
}

// Export singleton instance
export const remarketingManager = typeof window !== 'undefined' ? new RemarketingManager() : null;

// Helper functions for easy integration
export function trackFormAbandoner(formId: string, completion: number, total: number) {
  remarketingManager?.trackFormAbandonment(formId, completion, total);
}

export function trackHighValueVisitor(criteria: any) {
  remarketingManager?.trackHighValueUser(criteria);
}

export function trackPurchaseIntent(signals: any) {
  remarketingManager?.trackConversionIntent(signals);
}

export function trackCartAbandonment(data: any) {
  remarketingManager?.trackCartAbandonment(data);
}

export function getUserSegments(): string[] {
  return remarketingManager?.getSegments() || [];
}

export function isUserInSegment(segment: string): boolean {
  return remarketingManager?.isInSegment(segment) || false;
}