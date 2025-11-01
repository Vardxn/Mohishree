/**
 * Centralized business and location configuration
 * This ensures consistent NAP (Name, Address, Phone) information for Local SEO
 */
export const businessConfig = {
  companyName: 'Mohishree Facility Services',
  tagline: 'स्वच्छतेची चिंता नको, आम्ही आहोत!',
  taglineEnglish: 'No Worries about Cleanliness, We Are Here!',
  description: 'From home deep cleaning to industrial solutions, we are your comprehensive partner for a pristine environment. Serving Chhatrapati Sambhajinagar and surrounding areas.',
  
  // Contact Information
  address: {
    street: 'Harishchandra Residency, Bajajnagar',
    city: 'Chhatrapati Sambhajinagar',
    state: 'Maharashtra',
    postalCode: '431133',
    country: 'India',
    fullAddress: 'Harishchandra Residency, Bajajnagar, Chh. Sambhajinagar, 431133'
  },
  
  phoneNumbers: {
    primary: '9423679285',
    secondary: '9423679385',
    displayPrimary: '+91 94236 79285',
    displaySecondary: '+91 94236 79385',
  },
  
  email: {
    primary: 'mohishreejcmk2025@gmail.com',
    support: 'mohishreejcmk2025@gmail.com',
  },
  
  // Location Information
  primaryCity: 'Chhatrapati Sambhajinagar',
  serviceAreas: [
    'Chhatrapati Sambhajinagar',
    'Aurangabad District',
    'Jalna',
    'Parbhani',
    'Beed',
    'Ahmednagar',
  ],
  
  // Social Media
  socialMedia: {
    facebook: 'https://facebook.com/mohishreefacilities',
    twitter: 'https://twitter.com/mohishreefs',
    linkedin: 'https://linkedin.com/company/mohishree-facility-services',
    instagram: 'https://instagram.com/mohishreefacilities'
  },
  
  // Business Hours
  businessHours: {
    weekdays: '24/7 Service Available',
    weekends: '24/7 Service Available',
    display: 'Open 24 Hours'
  },
  
  // Company Information
  yearEstablished: 2008,
  
  // SEO
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://mohishreefacilities.com',
  
  // Map Coordinates (for Chhatrapati Sambhajinagar)
  coordinates: {
    latitude: 19.8762,
    longitude: 75.3433
  }
} as const;

export default businessConfig;
