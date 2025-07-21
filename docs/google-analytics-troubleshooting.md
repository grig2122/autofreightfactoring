# Google Analytics Troubleshooting Guide

## Issue Summary
Google Analytics was not tracking visitors in the GA4 Real-time reports despite being properly configured.

## Root Cause
The Google Analytics script (`https://www.googletagmanager.com/gtag/js`) was being blocked from loading. This is typically caused by:
- Ad blockers (uBlock Origin, AdBlock Plus, etc.)
- Privacy extensions (Privacy Badger, Ghostery, etc.)
- Brave browser's built-in shields
- Firefox Enhanced Tracking Protection
- Safari's Intelligent Tracking Prevention

## Diagnosis Steps Taken

1. **Verified Configuration**
   - GA4 Measurement ID: `G-V11G85PLVJ`
   - Script tags properly placed in the layout
   - gtag function correctly initialized

2. **Debug Tools Created**
   - `/ga-debug` page - Shows GA status and captures logs
   - `/ga-plain` page - Tests with plain script implementation
   - `/ga-test.html` - Static HTML test page

3. **Key Findings**
   - The gtag function exists (our custom implementation)
   - dataLayer array is populated with config and events
   - BUT: `google_tag_manager` and `google_tag_data` objects are not loaded
   - Network inspection shows 0 bytes transferred for the GA script
   - This indicates the script is blocked at the network level

## Current Implementation

The site now uses a simplified GA implementation in `app/analytics-simple.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `}
</Script>
```

## Testing Google Analytics

1. **Disable Ad Blockers**
   - Temporarily disable any ad blockers or privacy extensions
   - Or add an exception for `autofreightfactoring.com`

2. **Use GA Debug View**
   - Go to Google Analytics > Configure > DebugView
   - This shows real-time events even with low traffic

3. **Test Pages**
   - `/ga-debug` - Shows current GA status
   - `/ga-test.html` - Plain HTML test with a button to send test events

4. **Check Browser Console**
   - Look for `[GA Debug]` or `[useAnalytics]` messages
   - Check Network tab for googletagmanager.com requests

## Alternative Solutions

If GA continues to be blocked for many users, consider:

1. **Server-side tracking** using GA4 Measurement Protocol
2. **First-party proxy** to serve GA scripts from your domain
3. **Alternative analytics** like Plausible or Fathom that are privacy-focused

## Notes for Developers

- The GA4 configuration is correct
- The issue is client-side script blocking, not a code problem
- Most users with default browser settings will be tracked normally
- Tech-savvy users with ad blockers may not be tracked