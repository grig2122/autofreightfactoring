# Deployment Guide

This guide covers deploying AutoFreightFactoring to production using Vercel.

## Prerequisites

- Vercel account (free tier works)
- GitHub repository
- Production Firebase project
- Domain name (optional)

## Deployment Options

### Option 1: Deploy with Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project or create new
   - Select production environment
   - Configure environment variables

### Option 2: Deploy via GitHub Integration

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

### Option 3: Manual Deployment

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Deploy build**:
   ```bash
   vercel --prod
   ```

## Environment Variables

Set these in Vercel Dashboard (Settings > Environment Variables):

### Required Variables

```bash
# Firebase Client Config
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

# Firebase Admin SDK
FIREBASE_ADMIN_PROJECT_ID
FIREBASE_ADMIN_CLIENT_EMAIL
FIREBASE_ADMIN_PRIVATE_KEY

# Optional: Payment Processing
STRIPE_SECRET_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
```

### Setting Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add each variable for Production environment
4. Redeploy to apply changes

## Domain Configuration

### Using Vercel Domain

Your app will be available at:
- `https://your-project.vercel.app`

### Custom Domain

1. **Add domain in Vercel**:
   - Go to Settings > Domains
   - Add your domain
   - Follow DNS configuration instructions

2. **DNS Settings** (example):
   ```
   Type    Name    Value
   A       @       76.76.21.21
   CNAME   www     cname.vercel-dns.com
   ```

3. **SSL Certificate**:
   - Automatically provisioned by Vercel
   - No additional configuration needed

## Production Checklist

### Before Deployment

- [ ] All environment variables set
- [ ] Firebase production project configured
- [ ] Security rules updated for Firebase
- [ ] Remove all console.logs and debug code
- [ ] Test build locally: `npm run build`
- [ ] Run linter: `npm run lint`
- [ ] Update meta tags and SEO information

### Firebase Security

1. **Firestore Rules** (`firestore.rules`):
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Users can read their own data
       match /users/{userId} {
         allow read: if request.auth != null && request.auth.uid == userId;
         allow write: if request.auth != null && request.auth.uid == userId;
       }
       
       // Invoices belong to users
       match /invoices/{invoiceId} {
         allow read: if request.auth != null && 
           (request.auth.uid == resource.data.userId || 
            request.auth.token.admin == true);
         allow create: if request.auth != null;
         allow update: if request.auth != null && 
           (request.auth.uid == resource.data.userId || 
            request.auth.token.admin == true);
       }
     }
   }
   ```

2. **Storage Rules** (`storage.rules`):
   ```javascript
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /invoices/{userId}/{fileName} {
         allow read: if request.auth != null && 
           (request.auth.uid == userId || 
            request.auth.token.admin == true);
         allow write: if request.auth != null && 
           request.auth.uid == userId;
       }
     }
   }
   ```

### Performance Optimization

1. **Enable caching**:
   ```javascript
   // next.config.js
   module.exports = {
     images: {
       domains: ['firebasestorage.googleapis.com'],
     },
     experimental: {
       optimizeCss: true,
     },
   }
   ```

2. **API Route Caching**:
   ```javascript
   export const revalidate = 3600; // Cache for 1 hour
   ```

## Monitoring

### Vercel Analytics

1. Enable in Vercel Dashboard
2. Add to your app:
   ```bash
   npm install @vercel/analytics
   ```
   
   ```javascript
   // app/layout.tsx
   import { Analytics } from '@vercel/analytics/react';
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

### Error Tracking

Consider adding Sentry:
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

## Deployment Commands

### Quick Deploy
```bash
vercel --prod
```

### Deploy with Environment
```bash
vercel --prod --env ENVIRONMENT=production
```

### Rollback
```bash
vercel rollback
```

### View Logs
```bash
vercel logs
```

## CI/CD with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## Post-Deployment

### Verify Deployment

1. Check all pages load correctly
2. Test authentication flow
3. Verify Firebase connections
4. Test file uploads
5. Check payment processing (if applicable)

### Monitor Performance

- Vercel Dashboard > Analytics
- Firebase Console > Performance
- Google PageSpeed Insights

### Scale Considerations

1. **Firebase Limits**:
   - Monitor Firestore read/write quotas
   - Set up billing alerts
   - Consider Firebase Performance Monitoring

2. **Vercel Limits**:
   - Monitor bandwidth usage
   - Check function execution time
   - Consider upgrading plan if needed

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check build logs in Vercel
   - Verify all dependencies are in `package.json`
   - Ensure environment variables are set

2. **Firebase Connection Issues**
   - Verify service account JSON is properly formatted
   - Check Firebase project ID matches
   - Ensure Firebase services are enabled

3. **Domain Issues**
   - Wait for DNS propagation (up to 48 hours)
   - Verify DNS records are correct
   - Check SSL certificate status

### Debug Production

Add debug logging:
```javascript
if (process.env.NODE_ENV === 'production') {
  console.log('Production mode');
}
```

View logs:
```bash
vercel logs --follow
```

## Backup and Recovery

1. **Database Backup**:
   ```bash
   firebase firestore:export gs://your-backup-bucket
   ```

2. **Code Backup**:
   - Use Git tags for releases
   - Keep production branch separate

3. **Rollback Plan**:
   - Vercel keeps previous deployments
   - Can instant rollback via dashboard

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [Firebase Support](https://firebase.google.com/support)