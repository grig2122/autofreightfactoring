# Vercel Deployment Guide

## Prerequisites

1. Vercel account (sign up at https://vercel.com)
2. GitHub repository connected
3. Firebase project configured
4. Google Cloud Document AI enabled

## Step 1: Connect GitHub Repository

1. Log in to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import from GitHub
4. Select `grig2122/autofreightfactoring`

## Step 2: Configure Environment Variables

In Vercel project settings → Environment Variables, add:

### Firebase Client SDK (Public)
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAQQMnOFMM1ZwlJ8ptJKUbiWu_3jwd3uTI
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=auto-freight-factoring.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=auto-freight-factoring
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=auto-freight-factoring.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=525496047914
NEXT_PUBLIC_FIREBASE_APP_ID=1:525496047914:web:2e240d4fc43b38460a2653
```

### Firebase Admin SDK (Secret)
```
FIREBASE_ADMIN_PROJECT_ID=auto-freight-factoring
FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk-fbsvc@auto-freight-factoring.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY=<paste entire private key including BEGIN/END>
```

### Document AI
```
DOCUMENT_AI_PROCESSOR_ID=7fb6d56e90a74085
```

### Security
```
CRON_SECRET=<generate a random string>
```

## Step 3: Configure Build Settings

- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)

## Step 4: Deploy

1. Click "Deploy" in Vercel dashboard
2. Wait for build to complete (~2-3 minutes)
3. Access your site at the provided URL

## Step 5: Configure Custom Domain (Optional)

1. Go to Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Step 6: Verify Deployment

Test these features:
- [ ] Homepage loads correctly
- [ ] Funding calculator works
- [ ] Invoice upload accepts files
- [ ] OCR processing returns results
- [ ] Application form submits

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request

## Monitoring

1. **Functions**: Check API route performance in Vercel dashboard
2. **Logs**: View real-time logs for debugging
3. **Analytics**: Monitor usage and performance

## Troubleshooting

### Environment Variables Not Working
- Ensure all variables are added to Vercel
- Redeploy after adding variables
- Check for typos in variable names

### Build Failures
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### API Routes 500 Errors
- Check function logs in Vercel
- Verify Firebase credentials are correct
- Ensure Document AI API is enabled

## Security Considerations

1. Never commit `.env.local` to Git
2. Use Vercel's environment variable encryption
3. Rotate service account keys periodically
4. Monitor usage to prevent abuse

## Cron Jobs

The cleanup cron job is configured to run every 6 hours:
- Deletes expired temporary files
- Cleans up old session data
- Requires `CRON_SECRET` to be set

## Support

For deployment issues:
- Vercel Support: https://vercel.com/support
- Project Issues: https://github.com/grig2122/autofreightfactoring/issues