# Google Ads Conversion Tracking Setup Guide

## Current Implementation Status ✅

The Google Ads conversion tracking infrastructure is already implemented in your codebase with:

1. **Google Ads ID**: `AW-17368459818` (already configured)
2. **Conversion tracking functions** in place
3. **Event tracking** on key actions (form submissions, phone clicks, etc.)

## What You Need to Do

### Step 1: Get Your Conversion Labels from Google Ads

1. Log into your Google Ads account
2. Go to **Tools & Settings** → **Conversions**
3. Click **+ New Conversion** to create conversions for:
   - Application Form Submission
   - Contact Form Submission
   - Phone Number Clicks
   - Landing Page Lead
   - Fuel Card Application

4. For each conversion:
   - Choose **Website** as conversion source
   - Set up the conversion action
   - Copy the **Conversion Label** (looks like: `ABC123DEF456`)

### Step 2: Update the Conversion Labels

Edit the file `/lib/google-ads-config.ts` and replace the placeholder labels with your actual conversion labels:

```typescript
export const GOOGLE_ADS_CONFIG = {
  conversions: {
    // Replace these with your actual conversion labels from Google Ads
    applicationSubmit: {
      label: 'YOUR_ACTUAL_LABEL_HERE', // Replace ABC123DEF456
      defaultValue: 50000,
      description: 'Main application form submission'
    },
    
    contactFormSubmit: {
      label: 'YOUR_ACTUAL_LABEL_HERE', // Replace GHI789JKL012
      defaultValue: 0,
      description: 'Contact form submission'
    },
    
    phoneClick: {
      label: 'YOUR_ACTUAL_LABEL_HERE', // Replace MNO345PQR678
      defaultValue: 0,
      description: 'Phone number click'
    },
    
    landingPageLead: {
      label: 'YOUR_ACTUAL_LABEL_HERE', // Replace STU901VWX234
      defaultValue: 25000,
      description: 'Landing page form submission'
    },
    
    fuelCardApplication: {
      label: 'YOUR_ACTUAL_LABEL_HERE', // Replace YZA567BCD890
      defaultValue: 10000,
      description: 'Fuel card application'
    }
  }
}
```

## Current Conversion Points

Conversions are already being tracked at these points:

### 1. Application Form (/apply/thank-you)
- Fires when users complete the application
- Tracks approval status and funding amount
- Location: `app/apply/thank-you/page-client.tsx`

### 2. Contact Form
- Fires on successful contact form submission
- Location: Tracked via `trackFormSubmission('contact', true)`

### 3. Phone Clicks
- Fires when users click phone numbers
- Location: Tracked via `trackButtonClick('phone', location)`

### 4. Landing Page Forms
- Fires on landing page form submissions
- Location: Tracked via `trackFormSubmission('landing_page', true)`

### 5. Fuel Card Applications
- Fires on fuel card application submissions
- Location: Tracked via `trackFormSubmission('fuel_card', true)`

## Testing Your Conversions

### Method 1: Google Tag Assistant
1. Install the Google Tag Assistant Chrome extension
2. Navigate to your website
3. Complete a conversion action (e.g., submit the application form)
4. Check Tag Assistant to verify the conversion fired

### Method 2: Google Ads Conversions Report
1. In Google Ads, go to **Tools & Settings** → **Conversions**
2. Look for the "Recent conversions" column
3. Test conversions should appear within 30 minutes

### Method 3: Browser Developer Console
1. Open Chrome DevTools (F12)
2. Go to the Network tab
3. Filter by "conversion"
4. Complete a conversion action
5. Look for requests to `www.googleadservices.com/pagead/conversion/`

## Troubleshooting

### Conversions Not Firing?
1. Check browser console for JavaScript errors
2. Ensure conversion labels are correctly formatted (no spaces, correct case)
3. Verify Google Ads tag is loading (check Network tab)
4. Make sure you're not blocking cookies or using ad blockers during testing

### Testing in Development
- Conversions will fire in development mode
- Use Google Tag Assistant to verify without affecting real conversion data
- Consider using test conversion labels during development

## Value Tracking

Current default values:
- Application Submit: $50,000 (actual funding amount if available)
- Contact Form: $0 (can be updated based on your business metrics)
- Phone Click: $0 (can be updated based on call value)
- Landing Page Lead: $25,000
- Fuel Card Application: $10,000

You can adjust these values in the config file based on your actual customer lifetime value data.

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify your Google Ads account has conversion tracking enabled
3. Ensure your website domain is verified in Google Ads
4. Contact Google Ads support for account-specific issues