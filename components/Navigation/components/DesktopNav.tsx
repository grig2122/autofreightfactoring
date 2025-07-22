import React from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavLink } from '../types'
import { PHONE_NUMBER, FORMATTED_PHONE, TRANSITION_CLASSES } from '../constants'
import { trackButtonClick } from '@/lib/analytics'

interface DesktopNavProps {
  navLinks: NavLink[]
  onSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ navLinks, onSmoothScroll }) => {
  const handleApplyClick = () => {
    trackButtonClick('nav_apply', 'navigation')
  }

  return (
    <>
      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-1">
        {navLinks.map((link) => (
          <a 
            key={link.href}
            href={link.href} 
            onClick={link.href.includes('#') ? onSmoothScroll : undefined}
            className={`${TRANSITION_CLASSES.link} ${
              link.isActive 
                ? TRANSITION_CLASSES.linkActive 
                : TRANSITION_CLASSES.linkInactive
            }`}
          >
            {link.label}
            <span className={`${TRANSITION_CLASSES.underline} ${
              link.isActive 
                ? TRANSITION_CLASSES.underlineActive 
                : TRANSITION_CLASSES.underlineInactive
            }`} />
          </a>
        ))}
      </div>
      
      {/* CTA Button */}
      <div className="hidden md:flex items-center">
        <Link href="/apply">
          <Button 
            onClick={handleApplyClick}
            className="ml-4 bg-blue-600 text-white px-5 py-2 text-sm rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
          >
            Get Pre-Approved
          </Button>
        </Link>
      </div>
    </>
  )
}