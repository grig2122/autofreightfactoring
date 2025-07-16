#!/bin/bash

echo "🔥 Firebase Setup for AutoFreightFactoring"
echo "========================================="
echo ""

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Installing..."
    npm install -g firebase-tools
else
    echo "✅ Firebase CLI is installed"
fi

echo ""
echo "📝 Follow these steps:"
echo ""
echo "1. First, login to Firebase:"
echo "   $ firebase login"
echo ""
echo "2. Create a new Firebase project:"
echo "   $ firebase projects:create autofreightfactoring-$(date +%s)"
echo ""
echo "3. Initialize Firebase in this directory:"
echo "   $ firebase init"
echo "   - Select: Firestore, Storage, Emulators"
echo "   - Use existing project (select the one you just created)"
echo "   - Accept default file names"
echo "   - Configure emulators for Firestore, Storage, and Auth"
echo ""
echo "4. Enable Firebase services in the console:"
echo "   $ firebase open"
echo "   - Enable Authentication"
echo "   - Enable Firestore Database"
echo "   - Enable Storage"
echo ""
echo "5. Deploy security rules:"
echo "   $ firebase deploy --only firestore:rules,storage:rules"
echo ""
echo "6. Create service account:"
echo "   - Go to Firebase Console → Project Settings → Service Accounts"
echo "   - Click 'Generate new private key'"
echo "   - Download the JSON file"
echo ""
echo "7. Set up environment variables in .env.local"
echo ""

# Create .env.local template if it doesn't exist
if [ ! -f .env.local ]; then
    echo "Creating .env.local template..."
    cat > .env.local << 'EOL'
# Firebase Admin SDK (from service account JSON)
FIREBASE_ADMIN_PROJECT_ID="your-project-id"
FIREBASE_ADMIN_CLIENT_EMAIL="firebase-adminsdk-xxxxx@your-project-id.iam.gserviceaccount.com"
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Firebase Client SDK (from Firebase Console → Project Settings → General)
NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-project-id.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-project-id.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"

# Cron job secret (generate a random string)
CRON_SECRET="$(openssl rand -base64 32)"
EOL
    echo "✅ Created .env.local template"
fi

echo ""
echo "🚀 Ready to set up Firebase!"
echo ""
echo "Run this script again after completing the steps for verification."