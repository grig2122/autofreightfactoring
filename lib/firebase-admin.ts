import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

let initialized = false;

export function initAdmin() {
  if (!initialized && !getApps().length) {
    const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
    let privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY;
    const privateKeyBase64 = process.env.FIREBASE_ADMIN_PRIVATE_KEY_BASE64;
    
    // Use base64 version if available (preferred for Vercel)
    if (privateKeyBase64) {
      privateKey = Buffer.from(privateKeyBase64, 'base64').toString('utf-8');
    } else if (privateKey) {
      privateKey = privateKey.replace(/\\n/g, '\n');
    }
    
    initializeApp({
      credential: cert({
        projectId: projectId,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: privateKey,
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