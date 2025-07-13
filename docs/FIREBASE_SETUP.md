# Firebase Setup Guide

Complete guide for setting up Firebase for AutoFreightFactoring.

## Create Firebase Project

### 1. Create New Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project"
3. Enter project name: `autofreightfactoring`
4. Enable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Services

Navigate to your project and enable:

#### Authentication
1. Go to Authentication > Sign-in method
2. Enable Email/Password
3. (Optional) Enable Google sign-in

#### Firestore Database
1. Go to Firestore Database
2. Click "Create database"
3. Start in **production mode**
4. Choose location (us-central1 recommended)
5. Click "Enable"

#### Storage
1. Go to Storage
2. Click "Get started"
3. Start in **production mode**
4. Choose same location as Firestore
5. Click "Done"

## Get Configuration

### 1. Web App Config

1. Go to Project Settings (gear icon)
2. Under "Your apps", click "Web" icon
3. Register app with nickname "AutoFreightFactoring Web"
4. Copy the configuration:

```javascript
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "..."
};
```

5. Add to `.env.local`:
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

### 2. Service Account (Admin SDK)

1. Go to Project Settings > Service accounts
2. Click "Generate new private key"
3. Save the JSON file securely
4. Extract values for `.env.local`:

```bash
FIREBASE_ADMIN_PROJECT_ID=your-project-id
FIREBASE_ADMIN_CLIENT_EMAIL=your-service-account-email
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

**Important**: The private key must include `\n` characters and be wrapped in quotes.

## Security Rules

### Firestore Rules

1. Go to Firestore > Rules
2. Replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }
    
    function isAdmin() {
      return isAuthenticated() && request.auth.token.admin == true;
    }
    
    // Users collection
    match /users/{userId} {
      allow read: if isOwner(userId) || isAdmin();
      allow create: if isAuthenticated();
      allow update: if isOwner(userId) || isAdmin();
      allow delete: if isAdmin();
    }
    
    // Invoices collection
    match /invoices/{invoiceId} {
      allow read: if isAuthenticated() && 
        (request.auth.uid == resource.data.userId || isAdmin());
      allow create: if isAuthenticated();
      allow update: if isAuthenticated() && 
        (request.auth.uid == resource.data.userId || isAdmin());
      allow delete: if isAdmin();
    }
    
    // Transactions collection
    match /transactions/{transactionId} {
      allow read: if isAuthenticated() && 
        (request.auth.uid == resource.data.userId || isAdmin());
      allow create: if isAdmin();
      allow update: if isAdmin();
      allow delete: if false; // Never delete transactions
    }
  }
}
```

3. Click "Publish"

### Storage Rules

1. Go to Storage > Rules
2. Replace with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }
    
    function isAdmin() {
      return isAuthenticated() && request.auth.token.admin == true;
    }
    
    // Invoice documents
    match /invoices/{userId}/{allPaths=**} {
      allow read: if isOwner(userId) || isAdmin();
      allow write: if isOwner(userId) && request.resource.size < 10 * 1024 * 1024; // 10MB limit
      allow delete: if isOwner(userId) || isAdmin();
    }
    
    // Profile pictures
    match /profiles/{userId}/{fileName} {
      allow read: if isAuthenticated();
      allow write: if isOwner(userId) && request.resource.size < 5 * 1024 * 1024; // 5MB limit
      allow delete: if isOwner(userId) || isAdmin();
    }
  }
}
```

3. Click "Publish"

## Initialize Collections

### Create Indexes

1. Go to Firestore > Indexes
2. Add these composite indexes:

```
Collection: invoices
Fields: userId (Ascending), createdAt (Descending)
Query scope: Collection

Collection: invoices
Fields: status (Ascending), createdAt (Descending)
Query scope: Collection

Collection: transactions
Fields: userId (Ascending), createdAt (Descending)
Query scope: Collection
```

### Seed Data (Optional)

Create initial admin user:

```javascript
// Run in Firebase Console or admin script
const admin = require('firebase-admin');

async function createAdminUser() {
  const user = await admin.auth().createUser({
    email: 'admin@autofreightfactoring.com',
    password: 'secure-password',
    displayName: 'Admin User',
  });
  
  // Set custom claims
  await admin.auth().setCustomUserClaims(user.uid, {
    admin: true
  });
  
  // Create user document
  await admin.firestore().collection('users').doc(user.uid).set({
    email: user.email,
    name: 'Admin User',
    role: 'admin',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  });
}
```

## Local Development

### Firebase Emulators (Optional)

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Initialize Firebase:
   ```bash
   firebase init
   ```
   Select: Firestore, Authentication, Storage, Emulators

3. Configure emulators in `firebase.json`:
   ```json
   {
     "emulators": {
       "auth": {
         "port": 9099
       },
       "firestore": {
         "port": 8080
       },
       "storage": {
         "port": 9199
       },
       "ui": {
         "enabled": true,
         "port": 4000
       }
     }
   }
   ```

4. Start emulators:
   ```bash
   firebase emulators:start
   ```

5. Update Firebase config for local development:
   ```javascript
   // lib/firebase.ts
   if (process.env.NODE_ENV === 'development') {
     connectAuthEmulator(auth, 'http://localhost:9099');
     connectFirestoreEmulator(db, 'localhost', 8080);
     connectStorageEmulator(storage, 'localhost', 9199);
   }
   ```

## Production Checklist

- [ ] Strong security rules in place
- [ ] Indexes created for common queries
- [ ] Service account key stored securely
- [ ] Environment variables set in Vercel
- [ ] Backup strategy configured
- [ ] Monitoring enabled
- [ ] Budget alerts set up

## Cost Optimization

### Free Tier Limits
- Authentication: 10k/month
- Firestore: 50k reads, 20k writes, 20k deletes/day
- Storage: 5GB storage, 1GB/day download

### Optimization Tips
1. Use compound queries to reduce reads
2. Implement caching for frequently accessed data
3. Use Firebase bundles for initial data
4. Resize images before uploading
5. Set up budget alerts in Google Cloud Console

## Monitoring

### Firebase Console
- Monitor usage in Firebase Console
- Set up Firebase Performance Monitoring
- Enable Firebase Crashlytics

### Alerts
1. Go to Google Cloud Console
2. Set up budget alerts
3. Configure email notifications

## Troubleshooting

### Common Issues

1. **Permission Denied**
   - Check security rules
   - Verify authentication state
   - Check custom claims

2. **Quota Exceeded**
   - Check Firebase Console usage
   - Implement rate limiting
   - Consider upgrading plan

3. **Service Account Issues**
   - Verify JSON format
   - Check environment variables
   - Ensure proper escaping of private key

### Debug Mode

Enable debug logging:
```javascript
// lib/firebase.ts
if (process.env.NODE_ENV === 'development') {
  firebase.firestore.setLogLevel('debug');
}
```

## Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Pricing](https://firebase.google.com/pricing)
- [Security Rules Guide](https://firebase.google.com/docs/rules)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)