# Analytics Implementation Guide

## Overview
This document outlines the analytics implementation for tracking user behavior and identifying drop-off points in the AutoFreightFactoring application.

## Event Naming Conventions

### Standard Events (GA4 Built-in)
- `page_view` - Automatic page tracking
- `scroll` - User scroll depth
- `click` - Link/button clicks
- `form_start` - Form interaction begins
- `form_submit` - Form successfully submitted
- `begin_checkout` - User clicks Apply CTA
- `add_to_cart` - User starts application
- `purchase` - Application completed

### Custom Events
- `click_cta` - CTA button clicks with context
- `form_abandon` - User leaves form incomplete
- `form_error` - Form validation errors
- `application_step` - Multi-step form progress
- `time_on_page` - Engagement time tracking
- `javascript_error` - Client-side errors

## Implementation Checklist

### 1. Basic Setup ✓
- [x] Google Analytics 4 script
- [x] Page view tracking
- [x] Event helper functions

### 2. User Engagement Tracking ✓
- [x] Scroll depth (25%, 50%, 75%, 90%, 100%)
- [x] Time on page
- [x] Bounce rate
- [x] Click tracking

### 3. Conversion Funnel ✓
- [x] Landing page view
- [x] CTA clicks
- [x] Form starts
- [x] Form field interactions
- [x] Form completions
- [x] Thank you page

### 4. Enhanced Ecommerce ✓
- [x] View item (service viewing)
- [x] Begin checkout (apply click)
- [x] Add to cart (start application)
- [x] Purchase (complete application)

### 5. Error Tracking ✓
- [x] JavaScript errors
- [x] Form validation errors
- [x] API errors

## Usage Examples

### 1. Track Button Clicks
```tsx
import { TrackedButton } from '@/components/analytics/TrackedButton'

<TrackedButton 
  trackingLabel="Apply Now"
  trackingLocation="hero_section"
  trackingDestination="/apply"
>
  Apply Now
</TrackedButton>
```

### 2. Track Form Interactions
```tsx
import { TrackedForm } from '@/components/analytics/TrackedForm'
import { useFormTracking } from '@/hooks/use-analytics-tracking'

<TrackedForm 
  formName="freight_factoring_application"
  onSubmit={handleSubmit}
>
  {/* Form fields */}
</TrackedForm>
```

### 3. Track Custom Events
```tsx
import { trackEvent, trackCTAClick } from '@/lib/analytics-events'

// Track any custom event
trackEvent('video_play', {
  video_title: 'How Factoring Works',
  video_duration: 120
})

// Track CTA clicks
trackCTAClick('Get Started', 'navigation_bar', '/apply')
```

### 4. Track Conversion Funnel
```tsx
import { 
  trackApplicationStart, 
  trackApplicationStep,
  trackApplicationComplete 
} from '@/lib/analytics-ecommerce'

// When user starts
trackApplicationStart({ 
  companyType: 'owner-operator',
  factoringStatus: 'none' 
})

// Track progress
trackApplicationStep(1, 'Company Information', 3)

// On completion
trackApplicationComplete({
  companyName: 'ABC Trucking',
  factoringStatus: 'none',
  mcNumber: '123456',
  timeToComplete: 180
})
```

## Key Metrics to Monitor

### Engagement Metrics
1. **Bounce Rate** - Single page sessions
2. **Avg Session Duration** - Time spent on site
3. **Pages per Session** - Depth of engagement
4. **Scroll Depth** - Content consumption

### Conversion Metrics
1. **CTA Click Rate** - (CTA Clicks / Page Views) × 100
2. **Form Start Rate** - (Form Starts / CTA Clicks) × 100
3. **Form Completion Rate** - (Completions / Starts) × 100
4. **Overall Conversion** - (Completions / Visitors) × 100

### Drop-off Analysis
1. **Funnel Visualization** - Step-by-step drop-offs
2. **Form Field Analysis** - Which fields cause abandonment
3. **Error Frequency** - Common validation issues
4. **Device/Browser** - Technical barriers

## Debugging

### Enable Debug Mode
```javascript
// In development
window.gtag('config', 'G-V11G85PLVJ', {
  debug_mode: true
});
```

### Check Events in Console
```javascript
// All events are logged in development
console.log('[Analytics] Event:', eventName, parameters);
```

### Google Analytics DebugView
1. Install GA Debugger Chrome extension
2. Open GA4 > Admin > DebugView
3. Trigger events and watch real-time

## Privacy Considerations

### Do NOT Track
- Personal information (names, emails)
- Sensitive data (SSN, financial info)
- Passwords or authentication tokens

### Anonymization
- IP anonymization is enabled by default in GA4
- User IDs are hashed when necessary
- No PII in event parameters

## Performance Impact

### Optimizations
1. **Lazy Loading** - Analytics only loads after page
2. **Debouncing** - Scroll/resize events are throttled
3. **Batching** - Events are batched by GA4
4. **Async Loading** - Non-blocking script loading

### Monitoring
- Page load impact: < 50ms
- Event processing: < 10ms
- Network requests: Batched every 2s

## Testing Checklist

- [ ] Page views track on all pages
- [ ] Scroll tracking works
- [ ] Form interactions track properly
- [ ] Conversion events fire
- [ ] Error tracking captures issues
- [ ] Mobile tracking works
- [ ] UTM parameters capture
- [ ] No console errors

## Maintenance

### Regular Tasks
1. **Weekly** - Check for tracking errors
2. **Monthly** - Review conversion funnel
3. **Quarterly** - Audit event implementation
4. **Yearly** - Review tracking strategy

### Updates
- Keep GA4 configuration current
- Update event parameters as needed
- Add new events for new features
- Remove deprecated tracking