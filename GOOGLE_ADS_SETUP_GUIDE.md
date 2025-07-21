# Google Ads Setup Guide

## Current Implementation Status ✅

### Completed Items:
1. **Google Analytics 4** - Configured with ID: `G-V11G85PLVJ`
2. **Google Ads Tracking** - Base setup with ID: `AW-17368459818`
3. **Landing Pages Created**:
   - ✅ `/factoring` - General freight factoring
   - ✅ `/same-day-factoring` - Same-day funding
   - ✅ `/no-credit-check-factoring` - No credit check option
   - ✅ `/fuel-advances` - Fuel advances and fuel card
4. **Conversion Tracking Infrastructure** - Code ready, labels need configuration
5. **Event Tracking** - Comprehensive tracking for forms, clicks, and user actions

### Remaining Setup Tasks:

## 1. Google Ads Account Configuration

Log into your Google Ads account and complete these steps:

### A. Create Conversion Actions

Navigate to **Tools & Settings > Conversions** and create these conversion actions:

1. **Application Form Submission**
   - Category: Lead
   - Value: $50,000 (use different values)
   - Count: One per click
   - Click-through conversion window: 30 days
   - View-through conversion window: 1 day
   - Attribution model: Data-driven

2. **Contact Form Submission**
   - Category: Lead
   - Value: Use different values
   - Count: Every
   - Same settings as above

3. **Phone Call Clicks**
   - Category: Lead
   - Value: Use different values
   - Count: Every
   - Track calls from ads using Google forwarding numbers

4. **Landing Page Lead**
   - Category: Lead
   - Value: $25,000
   - Count: One per click
   - For quick forms on landing pages

5. **Fuel Card Application**
   - Category: Lead
   - Value: $10,000
   - Count: One per click
   - Specific to fuel card signups

### B. Get Conversion Labels

After creating each conversion action:
1. Click on the conversion name
2. Go to "Tag setup"
3. Select "Use Google Tag Manager"
4. Copy the Conversion ID and Conversion Label
5. Update `/lib/google-ads-config.ts` with actual labels

Example format: `AW-17368459818/AbC123dEF456gHI`

## 2. Update Configuration File

Edit `/lib/google-ads-config.ts` and replace the placeholder conversion labels:

```typescript
conversions: {
  applicationSubmit: {
    label: 'YOUR_ACTUAL_LABEL_HERE', // Replace ABC123DEF456
    defaultValue: 50000,
    description: 'Main application form submission'
  },
  // ... update all other labels
}
```

## 3. Set Up Remarketing Audiences

In Google Ads, create these audiences:

1. **All Visitors** - Anyone who visited the site
2. **Same Day Factoring Interest** - Visited `/same-day-factoring`
3. **No Credit Check Interest** - Visited `/no-credit-check-factoring`
4. **Fuel Advances Interest** - Visited `/fuel-advances`
5. **Application Started** - Reached `/apply` but didn't complete
6. **Application Completed** - Reached `/apply/thank-you`

## 4. Compliance Checklist

Before launching campaigns, ensure:

- [ ] Add financial services disclaimers to all landing pages
- [ ] Include "rates and terms" link in footer
- [ ] Add privacy policy link
- [ ] Include physical business address
- [ ] Add licensing information if required
- [ ] Review Google's financial services policies

## 5. Testing Conversion Tracking

### Test Each Conversion:

1. **Install Google Tag Assistant** Chrome extension
2. **Enable Tag Assistant** and visit your site
3. **Test each conversion**:
   - Submit contact form → Check for conversion fire
   - Complete application → Check for conversion fire
   - Click phone number → Check for conversion fire
   - Submit landing page forms → Check for conversion fire

### Verify in Google Ads:
1. Go to Tools & Settings > Conversions
2. Check "Status" column - should show "Recording conversions"
3. Review "All conv." column for test conversions

## 6. Phone Call Tracking Setup

For advanced call tracking:

1. **Option A: Google Forwarding Numbers**
   - Set up in Google Ads
   - Automatically tracks calls from ads
   - Free with Google Ads

2. **Option B: Third-Party (CallRail/CallTrackingMetrics)**
   - More detailed analytics
   - Call recordings
   - Dynamic number insertion
   - Monthly fee required

## 7. Landing Page Compliance Additions

Add these elements to each landing page:

```html
<!-- Add to footer of each landing page -->
<div class="compliance-footer">
  <p class="text-sm text-gray-600">
    * Rates from 1.5% to 3.5%. Approval based on customer creditworthiness. 
    Same-day funding available for approved applications submitted before 2PM EST.
  </p>
  <p class="text-sm text-gray-600">
    Auto Freight Factoring LLC | 123 Main St, San Diego, CA 92101 | 
    <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
  </p>
</div>
```

## 8. Quick Launch Checklist

Before enabling campaigns:

- [ ] All conversion labels updated in code
- [ ] Conversion tracking tested and working
- [ ] Landing pages have compliance text
- [ ] Phone tracking configured
- [ ] Remarketing tags firing correctly
- [ ] Budget alerts set up in Google Ads
- [ ] Negative keyword list prepared
- [ ] Ad copy approved and compliant

## Next Steps

1. Update conversion labels in `/lib/google-ads-config.ts`
2. Test all conversions with Tag Assistant
3. Add compliance text to landing pages
4. Set up conversion actions in Google Ads
5. Create remarketing audiences
6. Launch campaigns following the implementation plan

## Support Resources

- Google Ads Help: https://support.google.com/google-ads
- Policy Center: https://support.google.com/adspolicy
- Tag Assistant: https://tagassistant.google.com/
- Conversion Tracking Guide: https://support.google.com/google-ads/answer/6095821