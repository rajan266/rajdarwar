export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

export interface BusinessHoursItem {
  days: string;
  hours: string;
}

export interface BusinessConfig {
  name: string;
  wordmark: string;
  subtitle: string;
  category: string;
  rating: {
    score: number;
    maxScore: number;
    reviewCount: number;
    source: string;
    /**
     * Leave as null or maps search fallback until the exact Google Business Profile
     * write-a-review shortlink is verified by the owner.
     */
    verifiedReviewUrl: string | null;
  };
  address: {
    line1: string;
    line2: string;
    locality: string;
    state: string;
    postalCode: string;
    country: string;
    full: string;
    landmark: string;
    plusCode: string;
  };
  contact: {
    phoneDisplay: string;
    phoneDial: string;
    /**
     * Configurable WhatsApp number placeholder.
     * Keep empty string "" until verified by owner.
     * Example when verified: "+91 90418 61094" or "919041861094"
     */
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    websiteUrl: string;
    websiteDisplay: string;
  };
  maps: {
    directionsUrl: string;
    searchUrl: string;
    embedUrl: string;
  };
  services: {
    /**
     * Set to true only when room booking / accommodation service is officially confirmed.
     * When false, the enquiry form labels the option "Ask About Rooms".
     */
    isRoomBookingConfirmed: boolean;
    /**
     * Leave empty array [] until official opening hours are confirmed by the owner.
     */
    openingHours: BusinessHoursItem[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    locationHighlight: string;
  };
  socials: SocialLinks;
}

const FULL_ADDRESS = 'Filling Station, opposite Railway Station, Bhangala, Jandwal, Punjab 144306';
const ENCODED_QUERY = encodeURIComponent(
  'Rajdarbar Restaurant, Filling Station, opposite Railway Station, Bhangala, Jandwal, Punjab 144306'
);

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'Rajdarbar Restaurant',
  wordmark: 'RAJDARBAR',
  subtitle: 'RESTAURANT & HOSPITALITY',
  category: 'Indian Restaurant',
  rating: {
    score: 4.8,
    maxScore: 5,
    reviewCount: 166,
    source: 'Google',
    verifiedReviewUrl: null, // Uses verified Google Maps search destination until exact review shortlink is supplied
  },
  address: {
    line1: 'Filling Station, opposite Railway Station',
    line2: 'Bhangala, Jandwal',
    locality: 'Bhangala',
    state: 'Punjab',
    postalCode: '144306',
    country: 'India',
    full: FULL_ADDRESS,
    landmark: 'Opposite Railway Station, Bhangala',
    plusCode: '2JG7+JC, Bhangala, Punjab',
  },
  contact: {
    phoneDisplay: '090418 61094',
    phoneDial: '+919041861094',
    whatsappNumber: '', // Placeholder: set to '919041861094' once owner confirms WhatsApp is active on this number
    whatsappDefaultMessage:
      'Hello Rajdarbar Restaurant, I would like to enquire about your menu and availability.',
    websiteUrl: 'https://rajdarbarhotel.in',
    websiteDisplay: 'rajdarbarhotel.in',
  },
  maps: {
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${ENCODED_QUERY}`,
    searchUrl: `https://www.google.com/maps/search/?api=1&query=${ENCODED_QUERY}`,
    embedUrl: `https://www.google.com/maps?q=${ENCODED_QUERY}&output=embed`,
  },
  services: {
    isRoomBookingConfirmed: false,
    openingHours: [], // Unverified: do not invent opening hours
  },
  about: {
    heading: 'A Warm Welcome at Rajdarbar',
    paragraphs: [
      'Situated conveniently opposite the Railway Station in Bhangala, Punjab, Rajdarbar Restaurant is a welcoming destination for guests seeking flavorful Indian dining and attentive hospitality.',
      'Whether you are stopping by with family, meeting friends over a freshly prepared meal, or travelling through Jandwal and Bhangala, our dining hall offers a comfortable, unhurried setting crafted around warmth and courtesy.',
      'We take pride in serving classic Indian preparations in an inviting atmosphere. For today’s menu selections, group dining arrangements, or general enquiries, our team is always pleased to assist you by phone or in person.'
    ],
    locationHighlight: 'Conveniently located at Filling Station, opposite Railway Station, Bhangala, Jandwal, Punjab 144306.',
  },
  socials: {
    // Populate only when official social media profiles are verified
  },
};

/**
 * Normalizes a configured phone/WhatsApp number to international format
 * without spaces, dashes, parentheses, or '+' prefix for wa.me links.
 */
export function normalizeWhatsAppNumber(rawNumber: string): string {
  const digitsOnly = rawNumber.replace(/\D/g, '');
  if (!digitsOnly) return '';
  // If a 10-digit Indian mobile number is entered (or 11 digits starting with 0), prefix with 91
  if (digitsOnly.length === 10) {
    return `91${digitsOnly}`;
  }
  if (digitsOnly.length === 11 && digitsOnly.startsWith('0')) {
    return `91${digitsOnly.slice(1)}`;
  }
  return digitsOnly;
}

/**
 * Builds a safe WhatsApp Click-to-Chat URL when a valid number is configured.
 */
export function buildWhatsAppUrl(rawNumber: string, message: string): string | null {
  const normalized = normalizeWhatsAppNumber(rawNumber);
  if (normalized.length < 10) return null;
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}
