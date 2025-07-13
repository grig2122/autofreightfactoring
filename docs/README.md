# AutoFreightFactoring

A modern freight invoice factoring platform that enables truckers to get same-day payment for their freight invoices. Built with Next.js, Firebase, and deployed on Vercel.

## Overview

AutoFreightFactoring provides instant cash flow solutions for truckers by offering:
- Same-day payment for freight invoices
- Competitive factoring rates (1.5% - 5%)
- Simple online application process
- Real-time status tracking
- Secure document management

## Tech Stack

- **Frontend**: Next.js 15.3.5, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Deployment**: Vercel
- **Development Tools**: Model Context Protocol (MCP) servers

## Quick Links

- [Development Setup](./DEVELOPMENT.md)
- [Firebase Configuration](./FIREBASE_SETUP.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [MCP Configuration](./MCP_CONFIGURATION.md)

## Features

### For Truckers
- Quick online application
- Upload invoices and supporting documents
- Real-time approval status
- Same-day funding
- Dashboard to track all factored invoices

### For Administrators
- Invoice review and approval workflow
- Risk assessment tools
- Payment processing
- Analytics and reporting
- User management

## Project Structure

```
autofreightfactoring/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configs
│   ├── firebase.ts        # Client-side Firebase
│   └── firebase-admin.ts  # Server-side Firebase Admin
├── public/               # Static assets
├── docs/                 # Documentation
└── package.json         # Dependencies and scripts
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd autofreightfactoring
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see [DEVELOPMENT.md](./DEVELOPMENT.md))

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Key Dependencies

- `next`: 15.3.5 - React framework
- `react`: 19.0.0 - UI library
- `firebase`: 11.2.0 - Backend services
- `firebase-admin`: 13.0.2 - Server-side Firebase
- `@radix-ui/*`: UI primitives
- `tailwindcss`: 3.4.1 - Utility-first CSS

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

Proprietary - All rights reserved