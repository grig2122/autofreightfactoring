import React from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavLink } from '../types'
import { PHONE_NUMBER, FORMATTED_PHONE } from '../constants'
import { trackButtonClick } from '@/lib/analytics'

interface MobileNavProps {
  isOpen: boolean
  navLinks: NavLink[]
  onSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onClose: () => void
}

export const MobileNav: React.FC<MobileNavProps> = ({ 
  isOpen, 
  navLinks, 
  onSmoothScroll,
  onClose 
}) => {
  if (!isOpen) return null

  const handleApplyClick = () => {
    trackButtonClick('nav_apply_mobile', 'mobile_navigation')
    onClose()
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink) => {
    if (link.href.includes('#')) {
      onSmoothScroll(e)
    }
    onClose()
  }

  return (
    <div className="md:hidden bg-white border-t border-gray-100">
      <div className="px-4 py-4 space-y-3">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link)}
            className={`block py-2 ${
              link.isActive 
                ? 'text-blue-600 font-medium' 
                : 'text-gray-600'
            }`}
          >
            {link.label}
          </a>
        ))}
        
        <div className="pt-4 space-y-3 border-t border-gray-100">
          <a 
            href={`tel:${PHONE_NUMBER}`} 
            className="flex items-center text-gray-600"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span className="font-medium">{FORMATTED_PHONE}</span>
          </a>
          <Link href="/apply" onClick={handleApplyClick}>
            <Button className="w-full">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}