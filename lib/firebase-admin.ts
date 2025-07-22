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
    
    if (!projectId || !process.env.FIREBASE_ADMIN_CLIENT_EMAIL) {
      console.warn('Firebase Admin SDK not configured - missing environment variables');
      return false;
    }
    
    // Use base64 version if available (preferred for Vercel)
    if (privateKeyBase64) {
      privateKey = Buffer.from(privateKeyBase64, 'base64').toString('utf-8');
    } else if (privateKey) {
      privateKey = privateKey.replace(/\\n/g, '\n');
    }
    
    if (!privateKey) {
      console.warn('Firebase Admin SDK not configured - missing private key');
      return false;
    }
    
    try {
      initializeApp({
        credential: cert({
          projectId: projectId,
          clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
          privateKey: privateKey,
        }),
        storageBucket: `${projectId}.firebasestorage.app`
      });
      
      initialized = true;
      return true;
    } catch (error) {
      console.error('Firebase Admin initialization error:', error);
      return false;
    }
  }
  return initialized;
}

// Lazy initialization - don't initialize at module level
export const adminAuth = initialized ? getAuth() : null;
export const adminDb = initialized ? getFirestore() : null;
export const adminStorage = initialized ? getStorage() : null;

// Helper function to get admin services with initialization
export function getAdminServices() {
  if (!initialized) {
    initAdmin();
  }
  
  if (!initialized) {
    throw new Error('Firebase Admin SDK initialization failed');
  }
  
  return {
    auth: getAuth(),
    db: getFirestore(),
    storage: getStorage()
  };
}