'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavigationProps } from './types'
import { TRANSITION_CLASSES } from './constants'
import { useScrollDetection } from './hooks/useScrollDetection'
import { useNavigation } from './hooks/useNavigation'
import { Logo } from './components/Logo'
import { DesktopNav } from './components/DesktopNav'
import { MobileNav } from './components/MobileNav'

export const Navigation: React.FC<NavigationProps> = ({ currentPage = 'home' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isScrolled = useScrollDetection()
  const { navLinks, handleSmoothScroll } = useNavigation(currentPage)

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <nav className={`${TRANSITION_CLASSES.nav} ${
      isScrolled 
        ? TRANSITION_CLASSES.navScrolled 
        : TRANSITION_CLASSES.navDefault
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <DesktopNav 
            navLinks={navLinks} 
            onSmoothScroll={handleSmoothScroll} 
          />
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      <MobileNav 
        isOpen={isMobileMenuOpen}
        navLinks={navLinks}
        onSmoothScroll={handleSmoothScroll}
        onClose={closeMobileMenu}
      />
    </nav>
  )
}

// Export types for external use
export type { NavigationProps, PageType } from './types'