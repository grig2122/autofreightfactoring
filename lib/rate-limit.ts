import { getAdminServices } from '@/lib/firebase-admin'
import { NextResponse } from 'next/server'

interface RateLimitConfig {
  windowMs: number  // Time window in milliseconds
  maxRequests: number  // Max requests per window
  skipSuccessfulRequests?: boolean
}

export async function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 5,
    skipSuccessfulRequests: false
  }
): Promise<{ allowed: boolean; remaining: number; reset: Date }> {
  const now = Date.now()
  
  try {
    const { db } = getAdminServices();
    const windowStart = now - config.windowMs
    
    const rateLimitRef = db.collection('rate_limits').doc(identifier)
    
    const result = await db.runTransaction(async (transaction) => {
      const doc = await transaction.get(rateLimitRef)
      
      let requests: number[] = []
      if (doc.exists) {
        const data = doc.data()
        // Filter out requests outside the current window
        requests = (data?.requests || []).filter((timestamp: number) => timestamp > windowStart)
      }
      
      const allowed = requests.length < config.maxRequests
      
      if (allowed) {
        requests.push(now)
        transaction.set(rateLimitRef, {
          requests,
          lastUpdated: now
        })
      }
      
      return {
        allowed,
        remaining: Math.max(0, config.maxRequests - requests.length - (allowed ? 1 : 0)),
        reset: new Date(windowStart + config.windowMs)
      }
    })
    
    return result
  } catch (error) {
    console.error('Rate limit check error:', error)
    // On error, allow the request but log it
    return {
      allowed: true,
      remaining: 0,
      reset: new Date(now + config.windowMs)
    }
  }
}

export function rateLimitResponse(remaining: number, reset: Date) {
  return NextResponse.json(
    { 
      error: 'Too many requests',
      message: 'Please wait before uploading another invoice',
      retryAfter: Math.ceil((reset.getTime() - Date.now()) / 1000)
    },
    { 
      status: 429,
      headers: {
        'X-RateLimit-Limit': '5',
        'X-RateLimit-Remaining': remaining.toString(),
        'X-RateLimit-Reset': reset.toISOString(),
        'Retry-After': Math.ceil((reset.getTime() - Date.now()) / 1000).toString()
      }
    }
  )
}