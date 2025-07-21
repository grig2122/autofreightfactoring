# Firebase Analytics Setup Guide

## Overview
Firebase Analytics has been integrated into the AutoFreightFactoring application. This guide explains how to deploy and verify the analytics configuration.

## Firebase Configuration

The following environment variables need to be added to your production deployment:

```env
NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyA3QMnOfMM1ZwlJ8ptJKUbiWu_3jwd3uTI"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="auto-freight-factoring.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="auto-freight-factoring"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="auto-freight-factoring.firebasestorage.app"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="525496047914"
NEXT_PUBLIC_FIREBASE_APP_ID="1:525496047914:web:2e240d4fc43b38460a2653"
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="G-K389ERHEMR"
```

## Deployment Steps

### For Vercel:
1. Go to your project settings in Vercel
2. Navigate to Environment Variables
3. Add each variable above
4. Redeploy your application

### For Netlify:
1. Go to Site settings → Environment variables
2. Add each variable above
3. Clear cache and redeploy

### For Other Platforms:
Add the environment variables according to your platform's documentation.

## What's Being Tracked

The application now tracks:

### Automatic Events:
- Page views (every navigation)
- Session duration
- User engagement

### Custom Events:
- **Form Events:**
  - `form_start` - When user lands on application page
  - `form_step_complete` - When user completes each step
  - `form_submit` - When form is successfully submitted
  
- **Upload Events:**
  - `invoice_upload_start` - When user initiates upload
  - `invoice_upload_success` - When upload completes
  - `quote_generated` - When quote is displayed
  
- **User Actions:**
  - `button_click` - For all major CTAs
  - `phone_click` - When phone number is clicked
  - `calculator_interaction` - When user uses funding calculator

## Verification

### Local Development:
1. Run `npm run dev`
2. Open browser console (F12)
3. Look for logs starting with "🔥 Firebase Analytics Event"

### Production:
1. After deployment, visit your site
2. Go to [Firebase Console](https://console.firebase.google.com/project/auto-freight-factoring/analytics)
3. Check DebugView for real-time events (1-2 minute delay)
4. Check Events dashboard for aggregated data (24 hour delay)

## Firebase Console Links
- [Analytics Overview](https://console.firebase.google.com/project/auto-freight-factoring/analytics/overview)
- [DebugView](https://console.firebase.google.com/project/auto-freight-factoring/analytics/debugview)
- [Events Dashboard](https://console.firebase.google.com/project/auto-freight-factoring/analytics/events)
- [User Properties](https://console.firebase.google.com/project/auto-freight-factoring/analytics/userproperties)

## Testing
During development, analytics events can be verified by:
1. Opening the browser console and watching network requests
2. Using Firebase DebugView for real-time event monitoring
3. Checking Google Analytics real-time reports

## Notes
- Firebase Analytics is automatically enabled when the `measurementId` is provided
- Events may take up to 24 hours to appear in standard reports
- DebugView shows events in near real-time (1-2 minute delay)
- Both Firebase Analytics and Google Analytics (gtag) are configured to work together