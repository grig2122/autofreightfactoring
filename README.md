# Auto Freight Factoring

A modern freight factoring platform with instant invoice processing and 100% advance funding.

## Features

- 🚀 Instant invoice upload and OCR processing
- 💰 100% advance with 3% factor fee only
- 🔍 Google Document AI for accurate data extraction
- ⚡ Real-time quote calculation
- 🔒 Secure file handling with Firebase
- 📱 Responsive design for all devices

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Firebase Admin SDK
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **OCR**: Google Document AI
- **Deployment**: Vercel

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/grig2122/autofreightfactoring.git
cd autofreightfactoring
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your Firebase and Google Cloud credentials:
- Firebase project configuration
- Firebase Admin SDK service account
- Document AI processor ID

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Deployment on Vercel

### Environment Variables Required:

Add these to your Vercel project settings:

```
# Firebase Client SDK
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID

# Firebase Admin SDK
FIREBASE_ADMIN_PROJECT_ID
FIREBASE_ADMIN_CLIENT_EMAIL
FIREBASE_ADMIN_PRIVATE_KEY

# Document AI
DOCUMENT_AI_PROCESSOR_ID

# Security
CRON_SECRET
```

### Deploy Command:
```bash
vercel --prod
```

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── invoice/
│   │   │   ├── upload/      # Invoice upload & OCR
│   │   │   └── test-ocr/    # OCR testing endpoint
│   │   └── cron/
│   │       └── cleanup/     # Scheduled cleanup job
│   ├── apply/              # Application form page
│   └── page.tsx            # Homepage
├── components/
│   ├── InvoiceUpload.tsx   # Invoice upload component
│   └── FundingCalculator.tsx # Quote calculator
├── lib/
│   ├── firebase.ts         # Firebase client config
│   ├── firebase-admin.ts   # Firebase admin config
│   ├── document-ai.ts      # Document AI integration
│   └── rate-limit.ts       # Rate limiting logic
└── scripts/
    └── setup-document-ai.js # Document AI setup script
```

## Security Features

- Rate limiting: 5 uploads per 5 minutes per IP
- File validation: PDF/images only, max 10MB
- Temporary storage: Files auto-delete after 24 hours
- Session-based tracking: No personal data required
- Firebase security rules: Granular access control

## API Endpoints

### POST /api/invoice/upload
Upload an invoice for processing and quote generation.

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body: file (PDF or image)

**Response:**
```json
{
  "success": true,
  "sessionId": "...",
  "invoiceData": {
    "invoiceNumber": "0000007",
    "amount": 1869,
    "dueDate": "2023-10-16",
    "customerName": "..."
  },
  "quote": {
    "advanceAmount": 1812.93,
    "factoringFee": 56.07,
    "advancePercentage": 100,
    "feePercentage": 3
  }
}
```

## License

Private - All rights reserved

## Support

For questions or support, contact: (619) 877-6746