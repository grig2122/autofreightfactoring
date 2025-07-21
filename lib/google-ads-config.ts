// Google Ads Configuration
// IMPORTANT: Replace these placeholder values with your actual Google Ads conversion labels
// You can find these in your Google Ads account under Tools & Settings > Conversions

export const GOOGLE_ADS_CONFIG = {
  // Main conversion events
  conversions: {
    // Primary application form submission
    applicationSubmit: {
      label: 'ABC123DEF456', // TODO: Replace with actual conversion label
      defaultValue: 50000,
      description: 'Main application form submission'
    },
    
    // Contact form submission
    contactFormSubmit: {
      label: 'GHI789JKL012', // TODO: Replace with actual conversion label
      defaultValue: 0,
      description: 'Contact form submission'
    },
    
    // Phone number clicks
    phoneClick: {
      label: 'MNO345PQR678', // TODO: Replace with actual conversion label
      defaultValue: 0,
      description: 'Phone number click'
    },
    
    // Landing page form submissions
    landingPageLead: {
      label: 'STU901VWX234', // TODO: Replace with actual conversion label
      defaultValue: 25000,
      description: 'Landing page form submission'
    },
    
    // Fuel card application
    fuelCardApplication: {
      label: 'YZA567BCD890', // TODO: Replace with actual conversion label
      defaultValue: 10000,
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