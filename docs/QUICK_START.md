# Quick Start Guide

Get AutoFreightFactoring running in 5 minutes.

## Prerequisites
- Node.js 18+
- Firebase account
- Vercel account (for deployment)

## 1. Clone & Install
```bash
git clone [repository-url]
cd autofreightfactoring
npm install
```

## 2. Firebase Setup
1. Create project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable: Authentication, Firestore, Storage
3. Get config from Project Settings

## 3. Environment Variables
Create `.env.local`:
```bash
# Get from Firebase Console > Project Settings
NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxx

# Get from Firebase Console > Service Accounts
FIREBASE_ADMIN_PROJECT_ID=xxx
FIREBASE_ADMIN_CLIENT_EMAIL=xxx
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nxxx\n-----END PRIVATE KEY-----\n"
```

## 4. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 5. Deploy to Production
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Common Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run linter
vercel               # Deploy to Vercel
```

## Project Structure
```
├── app/            # Next.js pages
├── components/     # React components  
├── lib/           # Utilities & configs
├── public/        # Static assets
└── docs/          # Documentation
```

## Next Steps
- Read [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed setup
- Check [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for Firebase configuration
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment

## Need Help?
- Check the [troubleshooting section](./DEVELOPMENT.md#troubleshooting)
- Review Firebase Console for errors
- Check Vercel deployment logs