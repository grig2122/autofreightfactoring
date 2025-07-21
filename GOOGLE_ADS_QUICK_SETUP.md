# Google Ads Conversion Tracking - Quick Setup Checklist

## ✅ Already Implemented
1. **Google Ads tag** with ID `AW-17368459818` is loaded on all pages
2. **Conversion tracking infrastructure** is in place
3. **Automatic tracking** for:
   - Application form submissions → Thank you page
   - Phone number clicks
   - Contact form submissions

## 🔧 You Need to Do

### 1. Create Conversions in Google Ads
Go to your Google Ads account → Tools & Settings → Conversions → + New Conversion

Create these conversions:
- [ ] **Application Submit** - When someone completes /apply form
- [ ] **Phone Click** - When someone clicks phone number
- [ ] **Contact Form** - When someone submits contact form

### 2. Get Conversion Labels
For each conversion you create, Google will give you a conversion label (e.g., `ABC123DEF456`)

### 3. Update Config File
Edit `/lib/google-ads-config.ts` and replace the placeholder labels:

```typescript
applicationSubmit: {
  label: 'YOUR_LABEL_HERE', // Replace ABC123DEF456
  defaultValue: 50000,
},
phoneClick: {
  label: 'YOUR_LABEL_HERE', // Replace MNO345PQR678
  defaultValue: 0,
},
contactFormSubmit: {
  label: 'YOUR_LABEL_HERE', // Replace GHI789JKL012
  defaultValue: 0,
},
```

### 4. Test Your Setup
1. Open Chrome DevTools (F12) → Network tab
2. Complete a test application at /apply
3. Look for a request to `googleadservices.com/pagead/conversion/`
4. You should see your conversion ID and label in the request

## 📊 What Gets Tracked

### Application Form (/apply)
- Tracks when users reach the thank you page
- Sends the funding amount as conversion value
- Fires automatically - no additional setup needed

### Phone Clicks
- All phone number clicks are tracked
- Uses `trackEvent('phone_click', ...)` 
- Fires on: Hero section, footer, contact page

### Contact Form
- Tracks successful form submissions
- Zero value by default (can be changed)

## 🚨 Important Notes

1. **Conversions may take 30 minutes** to appear in Google Ads
2. **Use Tag Assistant** Chrome extension for real-time testing
3. **Don't use ad blockers** when testing
4. **Check browser console** for any JavaScript errors

## Need Help?

Common issues:
- Make sure you're using the exact conversion label from Google Ads
- Ensure cookies are enabled in your browser
- Check that JavaScript is not blocked
- Verify domain is added to Google Ads account

The setup is 90% complete - you just need to add your conversion labels!