// Centralized contact & service information for Mohishree Facility Services
// Update values here to propagate across the site.
// Last updated: December 21, 2025 from Google Business Profile

export const CONTACT = {
  phone: {
    primaryRaw: '9423679285', // Primary phone & WhatsApp (raw digits)
    secondaryRaw: '8390508495', // Secondary phone (raw digits)
    get primaryDisplay() { return '+91 94236 79285'; },
    get secondaryDisplay() { return '+91 83905 08495'; },
  },
  email: 'mohishreejcmk2025@gmail.com',
  instagramHandle: 'house_keepingcleaningservices',
  links: {
    instagram: 'https://www.instagram.com/house_keepingcleaningservices',
    facebook: 'https://www.facebook.com/mohishreefacilities',
    justdial: 'https://www.justdial.com/Aurangabad/Mohishree-Facility-Services-Aurangabad-Cantonment/9999PX240-190331084128-X7R9_BZDET',
    whatsappPrimary: 'https://wa.me/919423679285',
  },
  address: 'Shop No. 2 Gut No. 40, Mohishree Facility Services, Swastik Nagar, Sahajpur Road, Aurangabad Cantonment-431002',
  serviceAreaHeadline: 'Available across Aurangabad and surrounding areas.',
  serviceLocations: [
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
  bank: {
    ifsc: 'MCBL0960078',
    accountNumber: '0780112000000449',
    note: 'Use only for authorized payments. Confirm invoice before transferring.'
  }
};

export type ContactInfo = typeof CONTACT;