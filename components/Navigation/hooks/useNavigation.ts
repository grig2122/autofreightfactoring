import { useCallback } from 'react'
import { PageType, NavLink } from '../types'
import { NAV_ITEMS } from '../constants'

export const useNavigation = (currentPage: PageType = 'home') => {
  const isHomePage = currentPage === 'home'

  const buildNavLinks = useCallback((): NavLink[] => {
    const links: NavLink[] = []

    // Add hash-based navigation items for home page
    const hashNavItems = [
      NAV_ITEMS.features,
      NAV_ITEMS.howItWorks,
      NAV_ITEMS.pricing,
      NAV_ITEMS.fuelAdvance,
      NAV_ITEMS.forOwners,
    ]

    hashNavItems.forEach(item => {
      links.push({
        href: isHomePage ? `#${item.hash}` : `/#${item.hash}`,
        label: item.label,
      })
    })

    // Add page navigation items
    const pageNavItems = [
      { ...NAV_ITEMS.invoiceFactoring, pageType: 'invoice-factoring' as PageType },
      { ...NAV_ITEMS.about, pageType: 'about' as PageType },
      { ...NAV_ITEMS.contact, pageType: 'contact' as PageType },
      { ...NAV_ITEMS.blog, pageType: 'blog' as PageType },
      { ...NAV_ITEMS.faq, pageType: 'faq' as PageType },
    ]

    pageNavItems.forEach(item => {
      links.push({
        href: item.path,
        label: item.label,
        isActive: currentPage === item.pageType,
      })
    })

    return links
  }, [currentPage, isHomePage])

  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    
    if (!href) return

    // Only handle hash navigation
    if (href.startsWith('#')) {
      // We're on home page with a hash link
      e.preventDefault()
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else if (href.startsWith('/#')) {
      // We're on another page and need to go to home page with hash
      e.preventDefault()
      window.location.href = href
    }
    // For regular page links (like /about, /contact), let the browser handle normally
  }, [isHomePage])

  return {
    navLinks: buildNavLinks(),
    handleSmoothScroll,
    isHomePage,
  }
}