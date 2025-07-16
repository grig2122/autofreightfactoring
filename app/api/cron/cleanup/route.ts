import { NextRequest, NextResponse } from 'next/server'
import { getStorage } from 'firebase-admin/storage'
import { getFirestore } from 'firebase-admin/firestore'
import { initAdmin } from '@/lib/firebase-admin'

initAdmin()

export async function GET(req: NextRequest) {
  try {
    // Verify this is called by Vercel Cron
    const authHeader = req.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const db = getFirestore()
    const storage = getStorage()
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