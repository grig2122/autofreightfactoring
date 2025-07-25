import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Check if Firebase config is properly set
const isFirebaseConfigured = firebaseConfig.apiKey && 
  firebaseConfig.apiKey !== 'your-api-key' &&
  firebaseConfig.apiKey !== undefined &&
  firebaseConfig.apiKey !== '' &&
  firebaseConfig.projectId && 
  firebaseConfig.projectId !== 'your-project-id' &&
  firebaseConfig.projectId !== undefined &&
  firebaseConfig.projectId !== '';

// Initialize Firebase only if properly configured
let app: any = null;
let auth: any = null;
let db: any = null;
let storage: any = null;
let analytics: any = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    
    // Only initialize client-side services in production
    if (typeof window !== 'undefined') {
      if (process.env.NODE_ENV === 'production') {
        // Commenting out auth as it's not used and causing errors
        // auth = getAuth(app);
        // Delay analytics initialization to avoid errors
        if (firebaseConfig.measurementId) {
          analytics = getAnalytics(app);
        }
      }
    } else {
      // Server-side only needs Firestore
      // Commenting out auth as it's not used
      // auth = getAuth(app);
    }
    
    db = getFirestore(app);
    storage = getStorage(app);
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
}

export { app, auth, db, storage, analytics };