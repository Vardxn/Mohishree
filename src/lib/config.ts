/**
 * Centralized business and location configuration
 * This ensures consistent NAP (Name, Address, Phone) information for Local SEO
 * Updated from Google Business Profile: December 21, 2025
 */
export const businessConfig = {
  companyName: 'Mohishree Facility Services',
  tagline: 'स्वच्छतेची चिंता नको, आम्ही आहोत!',
  taglineEnglish: 'No Worries about Cleanliness, We Are Here!',
  description: 'Professional water tank cleaning, residential cleaning, housekeeping and facility management services serving Aurangabad and surrounding areas.',
  
  // Contact Information - Updated from Google Business Profile
  address: {
    street: 'Shop No. 2 Gut No. 40, Mohishree Facility Services, Swastik Nagar, Sahajpur Road',
    city: 'Aurangabad',
    area: 'Aurangabad Cantonment',
    state: 'Maharashtra',
    postalCode: '431002',
    country: 'India',
    fullAddress: 'Shop No. 2 Gut No. 40, Mohishree Facility Services, Swastik Nagar, Sahajpur Road, Aurangabad Cantonment-431002'
  },
  
  phoneNumbers: {
    primary: '9423679285',
    secondary: '8390508495',
    displayPrimary: '+91 94236 79285',
    displaySecondary: '+91 83905 08495',
  },
  
  email: {
    primary: 'mohishreejcmk2025@gmail.com',
    support: 'mohishreejcmk2025@gmail.com',
  },
  
  // Location Information - Updated service areas with pincodes
  primaryCity: 'Aurangabad',
  serviceAreas: [
    'Padegaon (431002)',
    'Waluj MIDC (431136)',
    'Jalna Road Aurangabad (431001)',
    'Garkheda (431005)',
    'Marathwada V P Aurangabad (431004)',
    'Kanchanwadi (431011)',
    'Satara Parisar (431010)',
    'Chikalthana (431007)',
    'CIDCO Colony (431003)',
    'Khuldabad Aurangabad (431101)',
    'Waluj Aurangabad (431133)',
    'Gangapur Aurangabad (431109)',
    'Bidkin (431105)',
  ],
  
  // Service Categories - Updated from Google Business Profile
  serviceCategories: [
    'Water Tank Cleaning Services',
    'Residential Cleaning Services',
    'Housekeeping Services',
    'Cleaning Services',
  ],
  
  // Social Media - Updated with Instagram handle
  socialMedia: {
    facebook: 'https://facebook.com/mohishreefacilities',
    twitter: 'https://twitter.com/mohishreefs',
    linkedin: 'https://linkedin.com/company/mohishree-facility-services',
    instagram: 'https://instagram.com/house_keepingcleaningservices'
  },
  
  // Business Hours
  businessHours: {
    weekdays: '24/7 Service Available',
    weekends: '24/7 Service Available',
    display: 'Open Now - 24 Hours'
  },
  
  // Company Information - Updated year of establishment
  yearEstablished: 2019,
  yearsOfService: 6,
  
  // SEO
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://mohishreefacilities.com',
  
  // Map Coordinates (for Aurangabad Cantonment, Aurangabad)
  coordinates: {
    latitude: 19.8827,
    longitude: 75.3450
  }
} as const;

export default businessConfig;
