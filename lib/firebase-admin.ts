import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

let initialized = false;

export function initAdmin() {
  if (!initialized && !getApps().length) {
    const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
    
    initializeApp({
      credential: cert({
        projectId: projectId,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
      storageBucket: `${projectId}.firebasestorage.app`
    });
    
    initialized = true;
  }
}

// Initialize admin SDK before exporting services
initAdmin();

export const adminAuth = getAuth();
export const adminDb = getFirestore();
export const adminStorage = getStorage();