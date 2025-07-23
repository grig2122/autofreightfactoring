'use client'

import React from 'react'
import Link, { LinkProps } from 'next/link'
import { trackEvent } from '@/components/GoogleAnalytics'

interface TrackedLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
  trackingLabel: string
  trackingCategory?: string
}

export function TrackedLink({ 
  children, 
  href,
  onClick,
  trackingLabel,
  trackingCategory = 'navigation',
  ...props 
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track the click
    trackEvent('click_link', {
      link_text: trackingLabel,
      link_url: href.toString(),
      link_category: trackingCategory,
      page_location: window.location.href
    })
    
    // Call original onClick if provided
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}