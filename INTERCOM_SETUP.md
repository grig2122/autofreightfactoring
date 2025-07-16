# Intercom Setup Guide

This guide will help you set up Intercom for live customer support in your freight factoring application.

## 1. Create an Intercom Account

1. Go to [Intercom](https://www.intercom.com/)
2. Sign up for a new account or log in
3. Choose the "Support" plan (starts at $39/month)
4. Complete the onboarding process

## 2. Get Your App ID

1. In your Intercom dashboard, go to Settings → Installation
2. Copy your "App ID" (it looks like `abcd1234`)
3. Add it to your `.env.local` file:

```bash
NEXT_PUBLIC_INTERCOM_APP_ID="your-app-id-here"
```

## 3. Configure Intercom Settings

### Business Hours
1. Go to Settings → Business Hours
2. Set your support hours (recommend: Mon-Fri 8AM-6PM EST for freight factoring)
3. Set up automated responses for after hours

### Team Setup
1. Go to Settings → Team
2. Add team members who will handle support
3. Set up roles (Admin, Agent, etc.)

### Automated Messages
1. Go to Settings → Workflows
2. Set up automated responses for:
   - New conversations
   - Application help requests
   - Document upload issues
   - Payment inquiries

## 4. Customize for Freight Factoring

### Custom Attributes
The integration includes freight factoring specific attributes:
- `business_type`: "freight_factoring"
- `user_type`: "anonymous" or "freight_factor_client"
- `app_version`: Your app version
- `environment`: "development" or "production"

### Pre-built Messages
The integration includes contextual support buttons:
- **Application Help**: "Hi! I need help with my factoring application."
- **Document Help**: "Hi! I need help uploading documents."
- **Payment Help**: "Hi! I have a question about payments."

## 5. Test the Integration

1. Start your development server:
```bash
npm run dev
```

2. Open your app in a browser
3. Look for the floating support button in the bottom-right corner
4. Click it to open the Intercom chat
5. Send a test message to verify it works

## 6. Deploy to Production

1. Add the Intercom App ID to your production environment variables
2. Deploy your application
3. Test the integration on your live site

## 7. Monitor and Optimize

### Analytics
1. Go to Reports → Conversations
2. Monitor response times and resolution rates
3. Track common support topics

### Knowledge Base
1. Go to Settings → Articles
2. Create articles for common questions:
   - How to apply for factoring
   - What documents are needed
   - Payment timelines
   - Fee structure

### Team Performance
1. Monitor team response times
2. Set up performance goals
3. Use customer satisfaction ratings

## Features Included

### Components
- `IntercomProvider`: Wraps your app with Intercom context
- `IntercomWidget`: Handles user authentication and setup
- `SupportButton`: Contextual support buttons
- `FloatingSupportButton`: Global floating support button

### Contextual Support
- Different messages based on current page
- Application-specific help on `/apply` page
- Document upload help on upload pages
- Payment support on payment pages

### User Context
- Automatic user identification (when auth is added)
- Custom attributes for freight factoring business
- Environment and version tracking

## Troubleshooting

### Common Issues

1. **Support button not showing**
   - Check that `NEXT_PUBLIC_INTERCOM_APP_ID` is set
   - Verify the App ID is correct
   - Check browser console for errors

2. **Chat not opening**
   - Verify Intercom is not blocked by ad blockers
   - Check network connectivity
   - Try in incognito mode

3. **Messages not received**
   - Check team member email settings
   - Verify business hours configuration
   - Check spam folder

### Support
For technical issues with the integration, check:
- [Intercom Developer Docs](https://developers.intercom.com/)
- [react-use-intercom Documentation](https://github.com/devrnt/react-use-intercom)

## Cost Considerations

- **Starter Plan**: $39/month (basic chat, email support)
- **Pro Plan**: $99/month (advanced automation, analytics)
- **Premium Plan**: $139/month (full feature set)

Choose based on your support volume and feature needs.