# Development Setup Guide

This guide will help you set up the AutoFreightFactoring development environment.

## Prerequisites

- Node.js 18+ and npm
- Git
- Firebase CLI (`npm install -g firebase-tools`)
- Vercel CLI (`npm install -g vercel`) [optional]
- A Firebase project
- A Vercel account

## Initial Setup

### 1. Clone and Install

```bash
git clone [repository-url]
cd autofreightfactoring
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the project root:

```bash
# Firebase Client Config
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id

# Firebase Admin SDK (for server-side)
FIREBASE_ADMIN_PROJECT_ID=your-project-id
FIREBASE_ADMIN_CLIENT_EMAIL=your-service-account-email
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Optional: Stripe (for payments)
STRIPE_SECRET_KEY=your-stripe-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

### 3. Firebase Setup

1. **Create a Firebase project**:
   ```bash
   firebase login
   firebase projects:create autofreightfactoring
   ```

2. **Enable required services**:
   - Authentication (Email/Password)
   - Firestore Database
   - Storage

3. **Get configuration**:
   - Go to Project Settings > General
   - Copy the Firebase config object
   - Add values to `.env.local`

4. **Generate service account**:
   - Go to Project Settings > Service Accounts
   - Generate new private key
   - Add credentials to `.env.local`

See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for detailed instructions.

### 4. MCP Server Setup (Optional but Recommended)

Configure Model Context Protocol servers for enhanced development:

```bash
# Install MCP servers
claude mcp add context7 -- npx -y @upstash/context7-mcp@latest
claude mcp add firebase -- npx -y @gthumb/firebase-mcp@latest
claude mcp add vercel -- npx -y @mistertk/vercel-mcp@latest
claude mcp add github -- npx -y @modelcontextprotocol/server-github@latest
```

Add to your shell profile (`~/.zshrc` or `~/.bash_profile`):

```bash
export FIREBASE_PROJECT_ID="your-project-id"
export FIREBASE_SERVICE_ACCOUNT_KEY='<service-account-json>'
export VERCEL_TOKEN="<your-vercel-token>"
export GITHUB_PERSONAL_ACCESS_TOKEN="<your-github-pat>"
```

See [MCP_CONFIGURATION.md](./MCP_CONFIGURATION.md) for details.

## Development Workflow

### Running the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Code Structure

- **`app/`** - Next.js App Router pages and layouts
- **`components/`** - Reusable React components
- **`lib/`** - Utilities, Firebase config, helper functions
- **`public/`** - Static assets
- **`styles/`** - Global CSS (if not using CSS modules)

### Component Development

We use shadcn/ui for components. To add new components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
```

### Database Schema

Firestore collections:

```typescript
// users
{
  id: string,
  email: string,
  name: string,
  company: string,
  role: 'trucker' | 'admin',
  createdAt: Timestamp,
  updatedAt: Timestamp
}

// invoices
{
  id: string,
  userId: string,
  invoiceNumber: string,
  amount: number,
  status: 'pending' | 'approved' | 'funded' | 'rejected',
  factoringFee: number,
  fundingAmount: number,
  documents: string[], // Storage URLs
  createdAt: Timestamp,
  updatedAt: Timestamp
}

// transactions
{
  id: string,
  invoiceId: string,
  userId: string,
  type: 'funding' | 'fee' | 'repayment',
  amount: number,
  status: 'pending' | 'completed' | 'failed',
  createdAt: Timestamp
}
```

### Authentication Flow

1. User signs up/logs in via Firebase Auth
2. Custom claims set for role-based access
3. Session managed by Firebase
4. Protected routes check authentication status

### Testing

```bash
# Run tests (when implemented)
npm test

# Type checking
npm run type-check

# Linting
npm run lint
```

## Common Development Tasks

### Adding a New Page

1. Create file in `app/` directory
2. Export default component
3. Add to navigation if needed

### Working with Firebase

```typescript
// Client-side
import { auth, db } from '@/lib/firebase';

// Server-side
import { adminAuth, adminDb } from '@/lib/firebase-admin';
```

### Environment-specific Configs

- Development: `.env.local`
- Production: Set in Vercel dashboard
- Testing: `.env.test`

## Troubleshooting

### Common Issues

1. **Firebase connection errors**
   - Check environment variables
   - Verify Firebase project exists
   - Check service account permissions

2. **Build errors**
   - Clear `.next` folder: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`

3. **Type errors**
   - Run `npm run type-check`
   - Check for missing type definitions

### Debug Mode

Add to `.env.local`:
```bash
NEXT_PUBLIC_DEBUG=true
```

## Best Practices

1. **Code Style**
   - Use TypeScript for type safety
   - Follow ESLint rules
   - Use Prettier for formatting

2. **Git Workflow**
   - Create feature branches
   - Write descriptive commits
   - Test before pushing

3. **Performance**
   - Use Next.js Image component
   - Implement lazy loading
   - Optimize bundle size

4. **Security**
   - Never commit secrets
   - Use environment variables
   - Implement proper authentication
   - Validate all inputs

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)