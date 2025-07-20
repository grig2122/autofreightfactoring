# Google Analytics Setup Guide

## Current Configuration

### 1. Google Analytics IDs
- **GA4 Property ID**: `G-V11G85PLVJ`
- **Google Ads ID**: `AW-17368459818`
- **Conversion Label**: `CONVERSION_LABEL` (needs to be replaced with actual label)

### 2. Implementation Status

#### ✅ Completed
- Google Analytics component created (`/components/GoogleAnalytics.tsx`)
- GA script loading via Next.js Script component
- Page view tracking on route changes
- Helper functions for event and conversion tracking
- Integration with thank-you page for conversion tracking
- Debug mode enabled in development

#### ⚠️ Issues to Address
1. **Conversion Label**: Replace `CONVERSION_LABEL` in `/app/apply/thank-you/page-client.tsx` with your actual Google Ads conversion label
2. **Localhost Testing**: Google Analytics may not work properly on localhost. Test on staging/production
3. **Ad Blockers**: Browser ad blockers will prevent GA from loading

### 3. How to Verify GA is Working

#### Method 1: Google Analytics Real-Time Reports
1. Go to [Google Analytics](https://analytics.google.com)
2. Select your property (G-V11G85PLVJ)
3. Navigate to Reports → Real-time
4. Visit your site and perform actions
5. Check if events appear in real-time

#### Method 2: Google Tag Assistant
1. Install [Google Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Visit your production site
3. Click the extension icon
4. It will show if GA is properly installed

#### Method 3: Browser DevTools
1. Open Chrome DevTools → Network tab
2. Filter by "collect" or "google-analytics"
3. Perform actions on your site
4. Look for requests to:
   - `https://www.google-analytics.com/g/collect`
   - `https://analytics.google.com/g/collect`

### 4. Common Issues and Solutions

#### GA Not Loading
- **Check Console Errors**: Look for any JavaScript errors
- **Check Network Tab**: Ensure GA script loads without 404/403 errors
- **Disable Ad Blockers**: Turn off ad blockers and privacy extensions
- **Check CSP**: Ensure Content Security Policy allows GA domains

#### No Data in Reports
- **Wait 24-48 hours**: Initial data may take time to appear
- **Check Filters**: Ensure no filters are excluding your traffic
- **Verify Property ID**: Confirm the GA4 property ID is correct
- **Test on Production**: GA might not track localhost visits

### 5. Testing Checklist

- [ ] Deploy to staging/production environment
- [ ] Disable ad blockers
- [ ] Visit multiple pages
- [ ] Submit the application form
- [ ] Check GA Real-time reports
- [ ] Verify conversion tracking on thank-you page
- [ ] Check if _ga cookies are set

### 6. Next Steps

1. **Get Google Ads Conversion Label**:
   - Go to Google Ads account
   - Navigate to Tools & Settings → Conversions
   - Create or find your conversion action
   - Copy the conversion label (format: abc123XYZ)
   - Replace `CONVERSION_LABEL` in the code

2. **Test on Production**:
   - Deploy the current implementation
   - Use GA Real-time reports to verify tracking
   - Test the conversion tracking flow

3. **Set up Goals/Conversions in GA4**:
   - Define key events (form submissions, page views)
   - Set up conversion goals
   - Create audiences for remarketing

### 7. Tracking Implementation

Current events being tracked:
- Page views (automatic on route change)
- Test events (from GA test page)
- Conversions (on thank-you page)

To track custom events, use:
```typescript
import { trackEvent } from '@/components/GoogleAnalytics'

// Track a custom event
trackEvent('button_click', {
  event_category: 'engagement',
  event_label: 'header_cta',
  value: 1
})

// Track a conversion
import { trackConversion } from '@/components/GoogleAnalytics'
trackConversion('YOUR_CONVERSION_LABEL', 50000)
```

### 8. Privacy Considerations

Remember to:
- Update privacy policy to mention Google Analytics
- Consider implementing cookie consent banner
- Respect user's Do Not Track preferences
- Comply with GDPR/CCPA requirements