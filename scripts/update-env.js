const fs = require('fs');
const path = require('path');

// Firebase configuration from the screenshot
const firebaseConfig = {
  apiKey: "AIzaSyAQQMnOFMM1ZwlJ8ptJKUbiWu_3jwd3uTI",
  authDomain: "auto-freight-factoring.firebaseapp.com",
  projectId: "auto-freight-factoring",
  storageBucket: "auto-freight-factoring.firebasestorage.app",
  messagingSenderId: "525496047914",
  appId: "1:525496047914:web:2e240d4fc43b38460a2653"
};

// Read the example file
const examplePath = path.join(__dirname, '..', '.env.local.example');
const envPath = path.join(__dirname, '..', '.env.local');

let envContent = fs.readFileSync(examplePath, 'utf8');

// Update with actual values
envContent = envContent
  .replace('NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"', `NEXT_PUBLIC_FIREBASE_API_KEY="${firebaseConfig.apiKey}"`)
  .replace('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="auto-freight-factoring.firebaseapp.com"', `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="${firebaseConfig.authDomain}"`)
  .replace('NEXT_PUBLIC_FIREBASE_PROJECT_ID="auto-freight-factoring"', `NEXT_PUBLIC_FIREBASE_PROJECT_ID="${firebaseConfig.projectId}"`)
  .replace('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="auto-freight-factoring.appspot.com"', `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="${firebaseConfig.storageBucket}"`)
  .replace('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"', `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="${firebaseConfig.messagingSenderId}"`)
  .replace('NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"', `NEXT_PUBLIC_FIREBASE_APP_ID="${firebaseConfig.appId}"`);

// Generate a random CRON_SECRET
const cronSecret = Array.from({length: 32}, () => Math.random().toString(36).charAt(2)).join('');
envContent = envContent.replace('CRON_SECRET="generate-a-random-string-here"', `CRON_SECRET="${cronSecret}"`);

// Check if .env.local exists
if (fs.existsSync(envPath)) {
  // Read existing content
  const existingContent = fs.readFileSync(envPath, 'utf8');
  
  // Update only the Firebase client SDK values
  const lines = existingContent.split('\n');
  const updatedLines = lines.map(line => {
    if (line.startsWith('NEXT_PUBLIC_FIREBASE_API_KEY=')) {
      return `NEXT_PUBLIC_FIREBASE_API_KEY="${firebaseConfig.apiKey}"`;
    }
    if (line.startsWith('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=')) {
      return `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="${firebaseConfig.authDomain}"`;
    }
    if (line.startsWith('NEXT_PUBLIC_FIREBASE_PROJECT_ID=')) {
      return `NEXT_PUBLIC_FIREBASE_PROJECT_ID="${firebaseConfig.projectId}"`;
    }
    if (line.startsWith('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=')) {
      return `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="${firebaseConfig.storageBucket}"`;
    }
    if (line.startsWith('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=')) {
      return `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="${firebaseConfig.messagingSenderId}"`;
    }
    if (line.startsWith('NEXT_PUBLIC_FIREBASE_APP_ID=')) {
      return `NEXT_PUBLIC_FIREBASE_APP_ID="${firebaseConfig.appId}"`;
    }
    return line;
  });
  
  fs.writeFileSync(envPath, updatedLines.join('\n'));
  console.log('Updated existing .env.local with Firebase client configuration');
} else {
  // Create new file
  fs.writeFileSync(envPath, envContent);
  console.log('Created .env.local with Firebase client configuration');
}

console.log('\nNOTE: You still need to:');
console.log('1. Go to Firebase Console > Project Settings > Service Accounts');
console.log('2. Generate a new private key');
console.log('3. Update the FIREBASE_ADMIN_* values in .env.local');