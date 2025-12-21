// Centralized contact & service information for Mohishree Facility Services
// Update values here to propagate across the site.

export const CONTACT = {
  phone: {
    primaryRaw: '9423679385', // Primary phone & WhatsApp (raw digits)
    secondaryRaw: '8390508495', // Secondary phone (raw digits)
    get primaryDisplay() { return '+91 94236 79385'; },
    get secondaryDisplay() { return '+91 83905 08495'; },
  },
  email: 'mohishreejcmk2025@gmail.com',
  instagramHandle: 'house_keepingcleaningservices',
  links: {
    instagram: 'https://www.instagram.com/house_keepingcleaningservices',
    facebook: 'https://www.facebook.com/sharer/sharer.php?u=https://jsdl.in/DT-9A9UOMMIYA&description=Check%20out%20this%20on%20Justdial',
    justdial: 'https://www.justdial.com/Daulatabad/Mohishree-Facility-Services-Aurangabad-Cantonment/9999PX240-190331084128-X7R9_BZDET?via=scode',
    whatsappPrimary: 'https://wa.me/919423679385',
  },
  address: 'Harishchandra Residency, Bajajnagar, Chhatrapati Sambhajinagar, 431133',
  serviceAreaHeadline: 'Available all over Chhatrapati Sambhajinagar.',
  serviceLocations: [
    'Padegaon','Waluj MIDC','Garkheda','Kanchanwadi','Satara Parisar','Chikalthan','CIDCO Colony','Khultabad','Gangapur','Bidkin','Shendra MIDC','Harsol','Paithan','Lasur Station','Sultanpur','Vaijapur','Phulambri','Ellora','Chincholi','Limbaji'
  ],
  bank: {
    ifsc: 'MCBL0960078',
    accountNumber: '0780112000000449',
    note: 'Use only for authorized payments. Confirm invoice before transferring.'
  }
};

export type ContactInfo = typeof CONTACT;