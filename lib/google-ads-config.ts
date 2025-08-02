// Google Ads Configuration
// IMPORTANT: Replace these placeholder values with your actual Google Ads conversion labels
// You can find these in your Google Ads account under Tools & Settings > Conversions

export const GOOGLE_ADS_CONFIG = {
  // Main conversion events
  conversions: {
    // Primary application form submission - "Submit lead form (autofreightfactoring.com/)"
    applicationSubmit: {
      label: 'vIlMCLLGj_MaEKrU9tlA', // Submit lead form (autofreightfactoring.com/)
      defaultValue: 1,
      description: 'Main application form submission'
    },
    
    // Contact form submission - "Submit lead form"
    contactFormSubmit: {
      label: 'szTaCP_H9fIaEKrU9tlA', // Submit lead form
      defaultValue: 1,
      description: 'Contact form submission'
    },
    
    // Phone number clicks
    phoneClick: {
      label: 'szTaCP_H9fIaEKrU9tlA', // Using Submit lead form for phone clicks
      defaultValue: 1,
      description: 'Phone number click'
    },
    
    // Landing page form submissions
    landingPageLead: {
      label: 'vIlMCLLGj_MaEKrU9tlA', // Submit lead form (autofreightfactoring.com/)
      defaultValue: 1,
      description: 'Landing page form submission'
    },
    
    // Fuel card application
    fuelCardApplication: {
      label: 'vIlMCLLGj_MaEKrU9tlA', // Submit lead form (autofreightfactoring.com/)
      defaultValue: 1,
      description: 'Fuel card application'
    }
  },
  
  // Remarketing audiences
  remarketing: {
    // Page-specific audiences
    audiences: {
      general: 'GENERAL_VISITORS',
      sameDayFactoring: 'SAME_DAY_INTEREST',
      noCreditCheck: 'NO_CREDIT_INTEREST',
      fuelAdvances: 'FUEL_ADVANCES_INTEREST',
      applicationStarted: 'APPLICATION_STARTED',
      applicationCompleted: 'APPLICATION_COMPLETED'
    }
  }
}

// Helper function to get conversion config
export function getConversionConfig(conversionType: keyof typeof GOOGLE_ADS_CONFIG.conversions) {
  return GOOGLE_ADS_CONFIG.conversions[conversionType]
}