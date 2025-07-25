import { NextRequest, NextResponse } from 'next/server'
import { getAdminServices } from '@/lib/firebase-admin'

export async function GET(req: NextRequest) {
  try {
    // Verify this is called by Vercel Cron
    const authHeader = req.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Initialize admin services
    let adminServices;
    try {
      adminServices = getAdminServices();
    } catch (error) {
      console.error('Failed to initialize Firebase Admin:', error);
      return NextResponse.json({ 
        success: true, 
        message: 'Firebase Admin not configured - skipping cleanup',
        timestamp: new Date().toISOString()
      });
    }

    const { db, storage } = adminServices;
    const bucket = storage.bucket()
    
    // Find expired temporary uploads
    const expiredDocs = await db.collection('temp_uploads')
      .where('expiresAt', '<=', new Date().toISOString())
      .get()

    let deletedCount = 0
    const deletionPromises = []

    for (const doc of expiredDocs.docs) {
      const data = doc.data()
      
      // Delete file from storage
      if (data.fileName) {
        deletionPromises.push(
          bucket.file(data.fileName).delete()
            .catch(err => console.error(`Failed to delete file ${data.fileName}:`, err))
        )
      }
      
      // Delete Firestore document
      deletionPromises.push(
        doc.ref.delete()
          .catch(err => console.error(`Failed to delete doc ${doc.id}:`, err))
      )
      
      deletedCount++
    }

    await Promise.all(deletionPromises)

    return NextResponse.json({
      success: true,
      message: `Cleaned up ${deletedCount} expired files`,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Cleanup error:', error)
    return NextResponse.json(
      { error: 'Cleanup failed' },
      { status: 500 }
    )
  }
}