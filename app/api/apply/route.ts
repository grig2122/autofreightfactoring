import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import type { Lead, PreApprovalResult } from '@/lib/types'

// Pre-approval scoring logic
function calculatePreApprovalScore(data: any): number {
  let score = 0

  // Monthly invoice volume scoring
  switch (data.monthlyInvoiceVolume) {
    case '$0-10k':
      score += 10
      break
    case '$10-50k':
      score += 30
      break
    case '$50-100k':
      score += 40
      break
    case '$100k+':
      score += 50
      break
  }

  // Years in business
  const years = parseInt(data.yearsInBusiness) || 0
  if (years >= 5) {
    score += 30
  } else if (years >= 2) {
    score += 20
  } else if (years >= 1) {
    score += 10
  }

  // Company type
  if (data.companyType === 'fleet') {
    score += 10
  } else if (data.companyType === 'owner-operator') {
    score += 5
  }

  // Not currently factoring (growth opportunity)
  if (data.currentFactoring === 'no') {
    score += 10
  }

  // Has DOT number (shows legitimacy)
  if (data.dotNumber) {
    score += 5
  }

  return score
}

// Calculate estimated rate based on score
function calculateEstimatedRate(score: number): string {
  if (score >= 80) return '1.5%'
  if (score >= 60) return '1.8%'
  if (score >= 50) return '2.0%'
  if (score >= 40) return '2.3%'
  return '2.5%'
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Calculate pre-approval score
    const score = calculatePreApprovalScore(data)
    console.log('Pre-approval calculation:', { data, score })
    const isApproved = score >= 50

    // Prepare lead data for Firestore
    const leadData: Omit<Lead, 'id'> = {
      ...data,
      preApprovalScore: score,
      preApproved: isApproved,
      status: isApproved ? 'pre-approved' : 'new',
      createdAt: new Date(),
      source: request.headers.get('referer') || 'direct'
    }

    // Save to Firestore (skip if not configured)
    try {
      // Only try to save if Firebase is properly configured and db is available
      if (db && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== 'your-project-id') {
        const docRef = await addDoc(collection(db, 'leads'), {
          ...leadData,
          createdAt: serverTimestamp()
        })
        console.log('Lead saved with ID:', docRef.id)
      } else {
        console.log('Firebase not configured - skipping database save')
        console.log('Lead data:', leadData)
      }
    } catch (error) {
      console.error('Error saving lead:', error)
      // Continue even if save fails - don't block user experience
    }

    // Prepare response
    let result: PreApprovalResult

    if (isApproved) {
      result = {
        approved: true,
        message: `Based on your information, you're pre-approved for invoice factoring!`,
        nextStep: 'account-setup'
      }
    } else {
      result = {
        approved: false,
        message: 'Thank you for your application! We need to review your information to provide you with the best possible terms.',
        nextStep: 'sales-contact',
        followUpTime: 'within 24 hours'
      }
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error processing application:', error)
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    )
  }
}