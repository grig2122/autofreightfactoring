# Deployment Checklist for Firebase Analytics

## 🚀 Pre-Deployment Steps

### 1. Code Cleanup ✅
- [x] Removed debug console logs from analytics code
- [x] Removed analytics test page
- [x] Cleaned up unnecessary logging

### 2. Environment Variables
Add these to your deployment platform (Vercel, Netlify, etc.):

```env
NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyA3QMnOfMM1ZwlJ8ptJKUbiWu_3jwd3uTI"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="auto-freight-factoring.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="auto-freight-factoring"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="auto-freight-factoring.firebasestorage.app"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="525496047914"
NEXT_PUBLIC_FIREBASE_APP_ID="1:525496047914:web:2e240d4fc43b38460a2653"
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="G-K389ERHEMR"
```

## 📋 Deployment Steps

### For Vercel:
1. Go to your Vercel dashboard
2. Select your project
3. Navigate to Settings → Environment Variables
4. Add each variable listed above
5. Click "Save"
6. Trigger a new deployment

### For Netlify:
1. Go to Site settings → Environment variables
2. Click "Add a variable"
3. Add each variable listed above
4. Save changes
5. Trigger a new deployment

### For Other Platforms:
Follow your platform's documentation for adding environment variables.

## 🔍 Post-Deployment Verification

### 1. Verify Analytics is Loading
- Visit your production site
- Open Developer Tools (F12)
- Go to Network tab
- Filter by "firebase" or "collect"
- Navigate pages and verify requests are being sent

### 2. Check Firebase Console
- Go to [Firebase Analytics Dashboard](https://console.firebase.google.com/project/auto-freight-factoring/analytics)
- Events may take up to 24 hours to appear in reports
- Check DebugView for real-time events (1-2 minute delay)

### 3. Verify Events Being Tracked
The following events should be automatically tracked:
- Page views on every navigation
- Button clicks (CTAs)
- Form submissions (application, contact)
- File uploads (invoice upload)
- Calculator interactions

## 📊 Analytics Dashboard Links
- [Firebase Analytics Overview](https://console.firebase.google.com/project/auto-freight-factoring/analytics/overview)
- [Events Dashboard](https://console.firebase.google.com/project/auto-freight-factoring/analytics/events)
- [DebugView](https://console.firebase.google.com/project/auto-freight-factoring/analytics/debugview)
- [Google Analytics](https://analytics.google.com/)

## ⚠️ Important Notes
- Both Firebase Analytics and Google Analytics are configured
- Firebase Analytics Measurement ID: `G-K389ERHEMR`
- Google Analytics Measurement ID: `G-V11G85PLVJ`
- Events are sent to both platforms simultaneously

## 🎯 Success Criteria
- [ ] Environment variables added to deployment platform
- [ ] Deployment successful without errors
- [ ] Network requests show analytics events being sent
- [ ] Events appear in Firebase Console (within 24 hours)
- [ ] No console errors related to Firebase

## 🛠️ Troubleshooting
If analytics aren't working after deployment:
1. Verify all environment variables are correctly set
2. Check for ad blockers or privacy extensions
3. Ensure cookies are enabled
4. Try in incognito/private mode
5. Check browser console for errors