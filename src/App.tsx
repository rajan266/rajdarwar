import React, { useState, useEffect } from 'react';
import {
  Phone,
  Menu,
  X,
  MapPin,
  Utensils,
  Navigation,
  Star,
  ExternalLink,
  ShieldCheck,
  UtensilsCrossed,
  Sparkles,
  MessageSquare,
  HeartHandshake,
  Train,
  Users,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Clock,
  Compass,
  MessageCircle,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Globe,
  Settings,
  Eye,
  Search,
  BedDouble,
  Wifi,
  Car,
  CreditCard,
  Music,
  Quote,
  PhoneCall,
} from 'lucide-react';

// ============================================================================
// 1. CENTRALIZED VERIFIED BUSINESS CONFIGURATION (config/business.ts)
//    Synced directly with Google Business Profile (Place ID: ChIJE6E3-libGzkRPcz_OGSe3ao)
// ============================================================================

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

export interface BusinessHoursItem {
  days: string;
  hours: string;
  note?: string;
}

export interface VerifiedReview {
  id: string;
  quote: string;
  date: string;
  highlight: string;
}

export interface AmenityGroup {
  category: string;
  items: string[];
}

export interface BusinessConfig {
  name: string;
  wordmark: string;
  subtitle: string;
  category: string;
  officialTagline: string;
  placeId: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  rating: {
    score: number;
    maxScore: number;
    reviewCount: number;
    source: string;
    verifiedReviewUrl: string;
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
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    websiteUrl: string;
    websiteDisplay: string;
  };
  maps: {
    placeUrl: string;
    directionsUrl: string;
    searchUrl: string;
    embedUrl: string;
  };
  services: {
    isRoomBookingConfirmed: boolean;
    roomSummary: string;
    openingHours: BusinessHoursItem[];
    busynessNote: string;
    amenityGroups: AmenityGroup[];
    paymentsAccepted: string[];
  };
  reviews: VerifiedReview[];
  about: {
    heading: string;
    paragraphs: string[];
    locationHighlight: string;
  };
  socials: SocialLinks;
}

const FULL_ADDRESS =
  'Filling Station, opposite Railway Station, Bhangala, Jandwal, Punjab 144306';
const ENCODED_QUERY = encodeURIComponent(
  'RAJDARBAR RESTAURANT, Filling Station, opposite Railway Station, Bhangala, Jandwal, Punjab 144306'
);
const GOOGLE_PLACE_URL =
  'https://www.google.com/maps/place/RAJDARBAR+RESTAURANT/@32.0265317,75.6087468,1024m/data=!3m1!1e3!4m24!1m12!3m11!1s0x391b9b58fa37a113:0xaadd9e6438ffcc3d!2sRAJDARBAR+RESTAURANT!5m2!4m1!1i2!8m2!3d32.0265318!4d75.6136231!9m1!1b1!16s%2Fg%2F11vhfy_b50!3m10!1s0x391b9b58fa37a113:0xaadd9e6438ffcc3d!5m3!4m1!1i2!5b1!8m2!3d32.0265318!4d75.6136231!10e9!16s%2Fg%2F11vhfy_b50?entry=ttu';

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'Rajdarbar Restaurant',
  wordmark: 'RAJDARBAR',
  subtitle: 'RESTAURANT • BEER BAR • ROOMS',
  category: 'Indian Restaurant & Hospitality',
  officialTagline:
    'Indian food restaurant and beer bar with a great ambience. Rooms available.',
  placeId: 'ChIJE6E3-libGzkRPcz_OGSe3ao',
  coordinates: {
    lat: 32.0265318,
    lng: 75.6136231,
  },
  rating: {
    score: 4.8,
    maxScore: 5,
    reviewCount: 166,
    source: 'Google',
    verifiedReviewUrl: GOOGLE_PLACE_URL,
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
    whatsappNumber: '+91 90418 61094',
    whatsappDefaultMessage:
      'Hello Rajdarbar Restaurant, I would like to enquire about your menu, dining table, or room availability.',
    websiteUrl: 'http://www.rajdarbarhotel.in/',
    websiteDisplay: 'rajdarbarhotel.in',
  },
  maps: {
    placeUrl: GOOGLE_PLACE_URL,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${ENCODED_QUERY}&destination_place_id=ChIJE6E3-libGzkRPcz_OGSe3ao`,
    searchUrl: GOOGLE_PLACE_URL,
    embedUrl: `https://www.google.com/maps?q=32.0265318,75.6136231+(RAJDARBAR+RESTAURANT)&z=16&output=embed`,
  },
  services: {
    isRoomBookingConfirmed: true,
    roomSummary:
      'Comfortable guest rooms available on-site for travellers, couples, and families (standard occupancy: 2 adults per room).',
    openingHours: [
      { days: 'Monday', hours: '10:30 AM – 10:30 PM' },
      { days: 'Tuesday', hours: '9:00 AM – 10:30 PM' },
      { days: 'Wednesday', hours: '9:00 AM – 10:30 PM' },
      { days: 'Thursday', hours: '9:00 AM – 10:30 PM' },
      { days: 'Friday', hours: '9:00 AM – 10:30 PM' },
      { days: 'Saturday', hours: '9:00 AM – 11:00 PM', note: 'Extended Evening Hours' },
      { days: 'Sunday', hours: '9:00 AM – 10:30 PM' },
    ],
    busynessNote:
      'Usually relaxed during weekday mornings; liveliest during evening dinner hours and Sunday afternoons.',
    amenityGroups: [
      {
        category: 'Service Options',
        items: [
          'Dine-in & Table Service',
          'Outdoor Seating',
          'Private Dining Room',
          'Takeout & Curbside Pickup',
          'Drive-through',
          'Delivery & No-Contact Delivery',
        ],
      },
      {
        category: 'Dining & Offerings',
        items: [
          'Breakfast, Brunch, Lunch & Dinner',
          'Extensive Vegetarian & Vegan Dishes',
          'Non-Veg Tandoori & Starters',
          'Great Tea & Coffee (Gud Wali Chah, Desi Chah)',
          'Mocktails, Shakes & Desserts',
          'Beer Bar, Cocktails & Happy Hour Drinks',
        ],
      },
      {
        category: 'Hospitality & Facilities',
        items: [
          'Guest Rooms Available',
          'Free Wi-Fi & Clean Restrooms',
          'Free Parking Lot & Free Street Parking',
          'Family-Friendly & Kids’ Menu',
          'Live Music & Sports Screening',
          'Accepts Table & Group Reservations',
        ],
      },
    ],
    paymentsAccepted: ['Google Pay (UPI)', 'Credit Cards', 'Debit Cards', 'Cash'],
  },
  reviews: [
    {
      id: 'rev-1',
      quote: 'Better Placement 👍👍 Yummy Food 👍 Best Restaurant in the Bhangla area.',
      date: 'August 2026',
      highlight: 'Location & Taste',
    },
    {
      id: 'rev-2',
      quote:
        'Suparb, fresh non-veg foods service are also best, price is normaly, totaly we are satisfied.',
      date: 'July 2026',
      highlight: 'Fresh Non-Veg & Value',
    },
    {
      id: 'rev-3',
      quote:
        'Me and my whole family try raj darbars food starter and main course both foods are very delicious and hygienic.',
      date: 'January 2025',
      highlight: 'Family Dining & Hygiene',
    },
    {
      id: 'rev-4',
      quote: 'Food is decent, Staff is cooperative, Interior of the Restaurant is amazing.',
      date: 'September 2024',
      highlight: 'Interior & Staff',
    },
    {
      id: 'rev-5',
      quote: 'A place for best Punjabi authentic food with great ambiance.',
      date: 'May 2024',
      highlight: 'Authentic Punjabi Food',
    },
  ],
  about: {
    heading: 'A Warm Welcome at Rajdarbar',
    paragraphs: [
      'Located right at the Filling Station opposite the Railway Station in Bhangala, Jandwal, Punjab, Rajdarbar Restaurant is an Indian food restaurant, beer bar, and guest lodge known for its welcoming ambiance and attentive staff.',
      'From morning Punjabi paranthas and steaming Gud Wali Chah to rich Dal Makhani, Shahi Paneer, smoky clay-oven tandoori starters, rice bowls, burgers, and refreshing mocktails, our kitchen serves a wide variety of vegetarian, vegan-friendly, and non-vegetarian dishes.',
      'With dine-in table service, a private dining room, outdoor seating, drive-through, delivery, free parking, free Wi-Fi, and comfortable on-site guest rooms, we look forward to hosting you and your family.',
    ],
    locationHighlight:
      'Filling Station, opposite Railway Station, Bhangala, Jandwal, Punjab 144306 (Plus Code: 2JG7+JC).',
  },
  socials: {
    instagram: 'https://www.instagram.com/reel/CzjLNzXyga0/',
  },
};

export function normalizeWhatsAppNumber(rawNumber: string): string {
  const digitsOnly = rawNumber.replace(/\D/g, '');
  if (!digitsOnly) return '';
  if (digitsOnly.length === 10) {
    return `91${digitsOnly}`;
  }
  if (digitsOnly.length === 11 && digitsOnly.startsWith('0')) {
    return `91${digitsOnly.slice(1)}`;
  }
  return digitsOnly;
}

/**
 * Uses universal api.whatsapp.com/send link which works reliably across
 * Android, iOS, WhatsApp Web, and desktop browsers.
 */
export function buildWhatsAppUrl(rawNumber: string, message: string): string | null {
  const normalized = normalizeWhatsAppNumber(rawNumber);
  if (normalized.length < 10) return null;
  return `https://api.whatsapp.com/send?phone=${normalized}&text=${encodeURIComponent(
    message
  )}`;
}

// ============================================================================
// 2. VISUAL ASSETS (Inlined from 10 optimized photographs)
// ============================================================================

import heroImg from './assets/hero.jpg';
import tandooriImg from './assets/tandoori.jpg';
import curryImg from './assets/curry.jpg';
import breadsImg from './assets/breads.jpg';
import diningImg from './assets/dining.jpg';
import detailsImg from './assets/details.jpg';
import exteriorImg from './assets/exterior.jpg';

const ASSETS = {
  hero: heroImg,
  tandoori: tandooriImg,
  curry: curryImg,
  breads: breadsImg,
  dining: diningImg,
  details: detailsImg,
  exterior: exteriorImg,
  breakfast: breadsImg,
  mocktails: diningImg,
  rooms: exteriorImg,
};

// ============================================================================
// 3. COMPLETE GOOGLE BUSINESS PROFILE MENU DATA (data/menu.ts)
// ============================================================================

export type MenuCategoryId =
  | 'All'
  | 'Vegetarian'
  | 'Non-Vegetarian'
  | 'Starters'
  | 'Main Course'
  | 'Breads'
  | 'Beverages';

export interface MenuCategoryMeta {
  id: MenuCategoryId;
  label: string;
  tagline: string;
  description: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategoryId, 'All'>;
  subCategory: string;
  dietary: 'Vegetarian' | 'Non-Vegetarian';
  description: string;
  price?: string;
  image?: string;
  badge?: string;
}

export const MENU_CATEGORIES: MenuCategoryMeta[] = [
  {
    id: 'All',
    label: 'All Categories',
    tagline: 'Complete Verified Google Business Menu (95+ Items)',
    description:
      'Every dish and beverage listed on Rajdarbar Restaurant’s official Google Business Profile across Breakfast, Starters, Main Course, Combos, and Drinks.',
  },
  {
    id: 'Vegetarian',
    label: 'Vegetarian',
    tagline: 'Pure Veg Curries, Paneer, Paranthas & Snacks',
    description:
      'Extensive vegetarian and vegan-friendly options including Dal Makhani, Shahi Paneer, Mushroom specialties, Veg Starters, and Rice Bowls.',
  },
  {
    id: 'Non-Vegetarian',
    label: 'Non-Vegetarian',
    tagline: 'Tandoori Chicken, Seekh Kebabs, Fish & Burgers',
    description:
      'Freshly prepared non-vegetarian starters, clay-oven tikkas, Amritsari fish, chicken wings, and specialty pizzas.',
  },
  {
    id: 'Starters',
    label: 'Starters',
    tagline: 'Veg & Non-Veg Appetizers, Tandoori, Burgers & Fries',
    description:
      'From Chef Special Tikki, Paneer Tikka, and Honey Chilli Potato to Tandoori Chicken, Mutton Seekh, Fish Amritsari, Pizzas, and Burgers.',
  },
  {
    id: 'Main Course',
    label: 'Main Course',
    tagline: 'Punjabi Handi Curries, Dals, Paneer & Rice Bowls',
    description:
      'Traditional North Indian main courses featuring Dal Makhani, Kadai Paneer, Paneer Lababdar, Pindi Channa Masala, and comforting Rice Bowls.',
  },
  {
    id: 'Breads',
    label: 'Breads',
    tagline: 'Stuffed Punjabi Paranthas, Combos & Breakfast',
    description:
      'Hot Aloo, Mix, and Paneer Paranthas served solo or as combos with tea and white butter, plus Poha, Maggi, and Toast.',
  },
  {
    id: 'Beverages',
    label: 'Beverages',
    tagline: 'Gud Wali Chah, Coffee, Mocktails & Shakes',
    description:
      'Signature Gud Wali Chah, Desi Chah, Cold Coffee, Virgin Mojito, Blue Ocean mocktail, and flavoured shakes.',
  },
];

export const VERIFIED_MENU_ITEMS: MenuItem[] = [
  {
    id: 'template-1',
    name: 'Dal Makhani',
    category: 'Main Course',
    subCategory: 'Punjabi Dal & Lentils',
    dietary: 'Vegetarian',
    description: 'Slow-simmered black lentils finished with traditional Punjabi spices, butter, and cream.',
    image: ASSETS.curry,
    badge: 'Signature Main',
  },
  {
    id: 'mc-shahi-paneer',
    name: 'Shahi Paneer',
    category: 'Main Course',
    subCategory: 'Paneer Specialties',
    dietary: 'Vegetarian',
    description: 'Soft cottage cheese cubes simmered in a rich, velvety royal cashew and tomato gravy.',
    image: ASSETS.curry,
    badge: 'Popular',
  },
  {
    id: 'mc-kadai-paneer',
    name: 'Kadai Paneer',
    category: 'Main Course',
    subCategory: 'Paneer Specialties',
    dietary: 'Vegetarian',
    description: 'Cottage cheese tossed with bell peppers, onions, and freshly pounded kadai masala.',
  },
  {
    id: 'mc-paneer-butter-masala',
    name: 'Paneer Butter Masala',
    category: 'Main Course',
    subCategory: 'Paneer Specialties',
    dietary: 'Vegetarian',
    description: 'Classic creamy tomato and butter gravy with tender cubes of fresh paneer.',
  },
  {
    id: 'mc-paneer-tikka-butter-masala',
    name: 'Paneer Tikka Butter Masala',
    category: 'Main Course',
    subCategory: 'Paneer Specialties',
    dietary: 'Vegetarian',
    description: 'Char-grilled tandoori paneer tikka simmered in spiced buttery makhani gravy.',
    badge: 'House Favourite',
  },
  {
    id: 'mc-paneer-lababdar',
    name: 'Paneer Lababdar',
    category: 'Main Course',
    subCategory: 'Paneer Specialties',
    dietary: 'Vegetarian',
    description: 'Rich onion-tomato gravy enriched with grated paneer, aromatic spices, and herbs.',
  },
  {
    id: 'mc-paneer-makhani',
    name: 'Paneer Makhani',
    category: 'Main Course',
    subCategory: 'Paneer Specialties',
    dietary: 'Vegetarian',
    description: 'Smooth, mildly spiced buttery tomato gravy with soft paneer cubes.',
  },
  {
    id: 'mc-mutter-paneer',
    name: 'Mutter Paneer',
    category: 'Main Course',
    subCategory: 'Paneer Specialties',
    dietary: 'Vegetarian',
    description: 'Homestyle Punjabi curry of green peas and cottage cheese in spiced tomato gravy.',
  },
  {
    id: 'mc-paneer-do-pyaza',
    name: 'Paneer Do Pyaza',
    category: 'Main Course',
    subCategory: 'Paneer Specialties',
    dietary: 'Vegetarian',
    description: 'Cottage cheese cooked with caramelized and crunchy diced onions in north Indian spices.',
  },
  {
    id: 'mc-paneer-bhurji',
    name: 'Paneer Bhurji',
    category: 'Main Course',
    subCategory: 'Paneer Specialties',
    dietary: 'Vegetarian',
    description: 'Spiced scrambled cottage cheese sautéed with onions, tomatoes, ginger, and green chillies.',
  },
  {
    id: 'mc-cheese-tomato',
    name: 'Cheese Tomato',
    category: 'Main Course',
    subCategory: 'Paneer Specialties',
    dietary: 'Vegetarian',
    description: 'Tangy, rich tomato gravy cooked with cottage cheese and aromatic herbs.',
  },
  {
    id: 'mc-yellow-dal-tadka',
    name: 'Yellow Dal Tadaka',
    category: 'Main Course',
    subCategory: 'Punjabi Dal & Lentils',
    dietary: 'Vegetarian',
    description: 'Yellow lentils tempered with cumin, garlic, dry red chillies, and desi ghee.',
  },
  {
    id: 'mc-dhabha-dal-fry',
    name: 'Dhabha Dal Fry',
    category: 'Main Course',
    subCategory: 'Punjabi Dal & Lentils',
    dietary: 'Vegetarian',
    description: 'Rustic Punjabi dhaba-style spiced lentils with a bold onion-tomato-garlic tadka.',
  },
  {
    id: 'mc-dal-fry',
    name: 'Dal Fry',
    category: 'Main Course',
    subCategory: 'Punjabi Dal & Lentils',
    dietary: 'Vegetarian',
    description: 'Comforting seasoned lentils sautéed with ginger, garlic, onions, and fresh coriander.',
  },
  {
    id: 'mc-rajmaa',
    name: 'Rajmaa',
    category: 'Main Course',
    subCategory: 'Punjabi Dal & Lentils',
    dietary: 'Vegetarian',
    description: 'Punjabi red kidney beans slow-cooked in a thick, spiced onion-tomato gravy.',
  },
  {
    id: 'mc-pindi-channa',
    name: 'Pindi Channa Masala',
    category: 'Main Course',
    subCategory: 'Veg Main Course',
    dietary: 'Vegetarian',
    description: 'Traditional roasted-spice chickpeas cooked in authentic Rawalpindi Punjabi style.',
  },
  {
    id: 'mc-channa-masala',
    name: 'Channa Masala',
    category: 'Main Course',
    subCategory: 'Veg Main Course',
    dietary: 'Vegetarian',
    description: 'Tender chickpeas simmered in tangy tomato-onion masala and garam masala.',
  },
  {
    id: 'mc-kadai-mushroom',
    name: 'Kadai Mushroom',
    category: 'Main Course',
    subCategory: 'Mushroom & Veg',
    dietary: 'Vegetarian',
    description: 'Fresh button mushrooms stir-fried with capsicum, onions, and roasted kadai spices.',
  },
  {
    id: 'mc-mushroom-masala',
    name: 'Mushroom Masala',
    category: 'Main Course',
    subCategory: 'Mushroom & Veg',
    dietary: 'Vegetarian',
    description: 'Button mushrooms cooked in a rich, savoury spiced onion and tomato gravy.',
  },
  {
    id: 'mc-mushroom-mutter',
    name: 'Mushroom Mutter',
    category: 'Main Course',
    subCategory: 'Mushroom & Veg',
    dietary: 'Vegetarian',
    description: 'Mushrooms and sweet green peas simmered in homestyle North Indian curry.',
  },
  {
    id: 'mc-mushroom-do-payaza',
    name: 'Mushroom Do Payaza',
    category: 'Main Course',
    subCategory: 'Mushroom & Veg',
    dietary: 'Vegetarian',
    description: 'Mushrooms tossed with double-cooked onions, tomatoes, and whole spices.',
  },
  {
    id: 'mc-mix-veg',
    name: 'Mix Veg',
    category: 'Main Course',
    subCategory: 'Mushroom & Veg',
    dietary: 'Vegetarian',
    description: 'Seasonal garden vegetables tossed in aromatic Indian spices and herbs.',
  },
  {
    id: 'mc-veg-gravy-bowl',
    name: 'Veg Gravy Bowl',
    category: 'Main Course',
    subCategory: 'Mushroom & Veg',
    dietary: 'Vegetarian',
    description: 'Wholesome portion of hot vegetarian curry served in a comforting bowl.',
  },
  {
    id: 'mc-aloo-jeera',
    name: 'Aloo Jeera',
    category: 'Main Course',
    subCategory: 'Mushroom & Veg',
    dietary: 'Vegetarian',
    description: 'Golden diced potatoes tempered with roasted cumin seeds, turmeric, and fresh coriander.',
  },
  {
    id: 'mc-aloo-mutter',
    name: 'Aloo Mutter',
    category: 'Main Course',
    subCategory: 'Mushroom & Veg',
    dietary: 'Vegetarian',
    description: 'Classic Punjabi potato and green pea curry in a spiced tomato broth.',
  },
  {
    id: 'rb-daal-rice',
    name: 'Daal Rice Bowl',
    category: 'Main Course',
    subCategory: 'Rice Bowls',
    dietary: 'Vegetarian',
    description: 'Steamed basmati rice paired with comforting Punjabi tempered dal.',
  },
  {
    id: 'rb-rajma-rice',
    name: 'Rajma Rice Bowl',
    category: 'Main Course',
    subCategory: 'Rice Bowls',
    dietary: 'Vegetarian',
    description: 'Classic North Indian favourite of spiced Rajma curry served over fluffy rice.',
    badge: 'Popular Bowl',
  },
  {
    id: 'rb-kadhi-rice',
    name: 'Kadhi Rice Bowl',
    category: 'Main Course',
    subCategory: 'Rice Bowls',
    dietary: 'Vegetarian',
    description: 'Tangy, spiced Punjabi gram-flour kadhi served warm with steamed rice.',
  },
  {
    id: 'rb-fried-rice',
    name: 'Fried Rice',
    category: 'Main Course',
    subCategory: 'Rice Bowls',
    dietary: 'Vegetarian',
    description: 'Wok-tossed aromatic rice with crunchy vegetables and savoury seasoning.',
  },
  {
    id: 'template-2',
    name: 'Tandoori Chicken',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Classic bone-in chicken marinated in spiced yogurt and roasted in the clay tandoor.',
    image: ASSETS.tandoori,
    badge: 'Tandoor Classic',
  },
  {
    id: 'nv-chicken-tikka',
    name: 'Chicken Tikka',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Boneless chicken chunks marinated in aromatic spices and char-grilled on skewers.',
    image: ASSETS.tandoori,
  },
  {
    id: 'nv-chicken-malai-tikka',
    name: 'Chicken Malai Tikka',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Melt-in-the-mouth creamy marinated chicken skewers roasted gently in the tandoor.',
    badge: 'Must Try',
  },
  {
    id: 'nv-chicken-seekh',
    name: 'Chicken Seekh Kebab',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Minced spiced chicken skewers seasoned with herbs and grilled over glowing charcoal.',
  },
  {
    id: 'nv-mutton-seekh',
    name: 'Mutton Seekh Kebab',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Succulent minced mutton kebabs infused with traditional spices and clay-oven roasted.',
  },
  {
    id: 'nv-fish-amritsari',
    name: 'Fish Amritsari',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Crisp, golden-fried fish fillets battered with carom seeds (ajwain) and Punjabi spices.',
    badge: 'Punjabi Specialty',
  },
  {
    id: 'nv-fish-tikka',
    name: 'Fish Tikka',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Tender fish morsels marinated in zesty tandoori masala and char-grilled.',
  },
  {
    id: 'nv-fish-chilly',
    name: 'Fish Chilly',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Crispy fish tossed in a fiery Indo-Chinese chilli, bell pepper, and onion glaze.',
  },
  {
    id: 'nv-fish-finger',
    name: 'Fish Finger (Portion)',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Crunchy golden crumb-fried fish strips served with dip.',
  },
  {
    id: 'nv-chilly-chicken',
    name: 'Chilly Chicken',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Wok-tossed chicken with green chillies, capsicum, onions, and savoury soy-garlic sauce.',
  },
  {
    id: 'nv-tandoori-chilly-chicken',
    name: 'Tandoori Chilly Chicken',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Smoky tandoori chicken tossed in a spicy, tangy chilli masala glaze.',
  },
  {
    id: 'nv-chicken-65',
    name: 'Chicken 65',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Crisp, spicy fried chicken tempered with curry leaves, garlic, and red chillies.',
  },
  {
    id: 'nv-garlic-chicken',
    name: 'Garlic Chicken (Portion)',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Juicy chicken pieces tossed in a fragrant roasted garlic and pepper sauce.',
  },
  {
    id: 'nv-lemon-chicken',
    name: 'Lemon Chicken',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Zesty, citrus-infused chicken starter seasoned with black pepper and herbs.',
  },
  {
    id: 'nv-chicken-lollypop',
    name: 'Chicken Lollypop',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Crispy spiced chicken winglets served with tangy schezwan dip.',
  },
  {
    id: 'nv-chicken-fried',
    name: 'Chicken Fried',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Crispy seasoned fried chicken prepared fresh to order.',
  },
  {
    id: 'nv-chicken-popcorn',
    name: 'Chicken Popcorn (12 pc.)',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: '12 pieces of bite-sized crunchy golden chicken popcorn.',
  },
  {
    id: 'nv-chicken-wings',
    name: 'Chicken Wings (5 pc.)',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: '5 pieces of tender, spiced chicken wings.',
  },
  {
    id: 'nv-chicken-noodles',
    name: 'Chicken Noodles',
    category: 'Starters',
    subCategory: 'Non-Veg Tandoori & Starters',
    dietary: 'Non-Vegetarian',
    description: 'Wok-tossed hakka noodles with shredded chicken and julienned vegetables.',
  },
  {
    id: 'vs-tikki-special',
    name: 'Tikki Special (Chef Special)',
    category: 'Starters',
    subCategory: 'Veg Starters & Tandoori',
    dietary: 'Vegetarian',
    description: 'Rajdarbar’s signature Chef Special crisp spiced potato and herb tikki platter.',
    badge: 'Chef Special',
  },
  {
    id: 'vs-paneer-tikka',
    name: 'Paneer Tikka',
    category: 'Starters',
    subCategory: 'Veg Starters & Tandoori',
    dietary: 'Vegetarian',
    description: 'Fresh cottage cheese cubes, capsicum, and onions marinated in spiced yogurt and roasted in the tandoor.',
    image: ASSETS.tandoori,
    badge: 'Bestseller',
  },
  {
    id: 'vs-paneer-malai-tikka',
    name: 'Paneer Malai Tikka',
    category: 'Starters',
    subCategory: 'Veg Starters & Tandoori',
    dietary: 'Vegetarian',
    description: 'Creamy, mildly spiced cashew and malai marinated paneer grilled in the clay oven.',
  },
  {
    id: 'vs-tandoori-chilli-paneer',
    name: 'Tandoori Chilli Paneer',
    category: 'Starters',
    subCategory: 'Veg Starters & Tandoori',
    dietary: 'Vegetarian',
    description: 'Smoky tandoori paneer tossed with fiery chillies, bell peppers, and tangy spices.',
  },
  {
    id: 'vs-cheese-chilly',
    name: 'Cheese Chilly',
    category: 'Starters',
    subCategory: 'Veg Starters & Tandoori',
    dietary: 'Vegetarian',
    description: 'Punjabi-style Indo-Chinese chilli paneer tossed with crunchy capsicum and onions.',
  },
  {
    id: 'vs-mushroom-chilly',
    name: 'Mushroom Chilly',
    category: 'Starters',
    subCategory: 'Veg Starters & Tandoori',
    dietary: 'Vegetarian',
    description: 'Crisp button mushrooms glazed in spicy garlic-chilli soy sauce with bell peppers.',
  },
  {
    id: 'vs-manchurian',
    name: 'Veg Manchurian',
    category: 'Starters',
    subCategory: 'Veg Starters & Tandoori',
    dietary: 'Vegetarian',
    description: 'Golden vegetable dumplings tossed in a savoury ginger, garlic, and coriander sauce.',
  },
  {
    id: 'vs-honey-chilli-potato',
    name: 'Honey Chilli Potato',
    category: 'Starters',
    subCategory: 'Veg Starters & Tandoori',
    dietary: 'Vegetarian',
    description: 'Crispy potato fries tossed in a sweet and spicy honey-chilli glaze with sesame seeds.',
  },
  {
    id: 'vs-sweet-corn',
    name: 'Sweet Corn Salt & Pepper',
    category: 'Starters',
    subCategory: 'Veg Starters & Tandoori',
    dietary: 'Vegetarian',
    description: 'Crisp golden sweet corn kernels tossed with crushed black pepper, spring onions, and herbs.',
  },
  {
    id: 'vs-cheese-finger',
    name: 'Cheese Finger',
    category: 'Starters',
    subCategory: 'Veg Starters & Tandoori',
    dietary: 'Vegetarian',
    description: 'Crunchy golden-fried cheese sticks served hot with tangy dip.',
  },
  {
    id: 'vs-veg-noodles',
    name: 'Veg Noodles',
    category: 'Starters',
    subCategory: 'Veg Starters & Tandoori',
    dietary: 'Vegetarian',
    description: 'Stir-fried noodles tossed with shredded cabbage, carrots, capsicum, and soy-garlic seasoning.',
  },
  {
    id: 'vs-peanut-masala',
    name: 'Peanut Masala',
    category: 'Starters',
    subCategory: 'Veg Starters & Tandoori',
    dietary: 'Vegetarian',
    description: 'Crunchy roasted peanuts tossed with finely chopped onions, tomatoes, green chillies, lemon, and chaat masala.',
  },
  {
    id: 'vs-masala-papad',
    name: 'Masala Papad / Fry / Roasted Papad',
    category: 'Starters',
    subCategory: 'Veg Starters & Tandoori',
    dietary: 'Vegetarian',
    description: 'Crisp papad available Roasted, Fried, or topped with tangy onion-tomato Masala.',
  },
  {
    id: 'bg-rajdarbar-special',
    name: 'Raj Darbar Special Burger',
    category: 'Starters',
    subCategory: 'Burgers, Pizza & Combos',
    dietary: 'Vegetarian',
    description: 'House signature loaded burger layered with patty, cheese, fresh veggies, and special sauce.',
    badge: 'House Special',
  },
  {
    id: 'bg-veg-combo',
    name: 'Veg Combo (Veg Burger + Fries + Coke)',
    category: 'Starters',
    subCategory: 'Burgers, Pizza & Combos',
    dietary: 'Vegetarian',
    description: 'Complete value combo pairing a crispy Veg Burger with golden Fries and chilled Coke.',
    badge: 'Value Combo',
  },
  {
    id: 'bg-veg-burgers',
    name: 'Veg / Mix Veg / Paneer / Cheesy Burger',
    category: 'Starters',
    subCategory: 'Burgers, Pizza & Combos',
    dietary: 'Vegetarian',
    description: 'Freshly toasted buns available in Classic Veg, Mix Veg, Spiced Paneer, or Extra Cheesy varieties.',
  },
  {
    id: 'bg-chicken-burgers',
    name: 'Chicken / Cheesy Chicken / Egg Burger',
    category: 'Starters',
    subCategory: 'Burgers, Pizza & Combos',
    dietary: 'Non-Vegetarian',
    description: 'Juicy non-vegetarian burgers available in Classic Chicken, Cheesy Chicken, or Egg style.',
  },
  {
    id: 'pz-non-veg-pizzas',
    name: 'Chicken / Bar-B-Que / Pepperoni Pizza',
    category: 'Starters',
    subCategory: 'Burgers, Pizza & Combos',
    dietary: 'Non-Vegetarian',
    description: 'Oven-baked pizzas topped with mozzarella cheese and your choice of Chicken, BBQ, or Pepperoni.',
  },
  {
    id: 'sw-sandwiches',
    name: 'Paneer / Cold / Chicken Sandwich',
    category: 'Starters',
    subCategory: 'Burgers, Pizza & Combos',
    dietary: 'Vegetarian',
    description: 'Freshly prepared sandwiches available in Spiced Paneer, Creamy Cold Veg, or Chicken filling.',
  },
  {
    id: 'fr-fries-wedges',
    name: 'Classic / Peri Peri / Cheesy Fries & Potato Wedges',
    category: 'Starters',
    subCategory: 'Burgers, Pizza & Combos',
    dietary: 'Vegetarian',
    description: 'Crisp golden fries (Classic, spicy Peri Peri, or melted Cheesy) and seasoned Potato Wedges.',
  },
  {
    id: 'sl-salads',
    name: 'Veg Salad / Paneer Salad / Chicken Salad',
    category: 'Starters',
    subCategory: 'Fresh Salads',
    dietary: 'Vegetarian',
    description: 'Crisp garden greens and fresh vegetables available as Veg Salad, Paneer Salad, or Chicken Salad.',
  },
  {
    id: 'template-3',
    name: 'Alloo Parantha Combo (Tea / Butter)',
    category: 'Breads',
    subCategory: 'Breakfast & Parantha Combos',
    dietary: 'Vegetarian',
    description: 'Stuffed spiced potato parantha griddled golden and served with white butter and steaming tea.',
    image: ASSETS.breakfast,
    badge: 'Morning Favourite',
  },
  {
    id: 'bf-paneer-parantha-combo',
    name: 'Paneer Parantha Combo (Tea / Butter)',
    category: 'Breads',
    subCategory: 'Breakfast & Parantha Combos',
    dietary: 'Vegetarian',
    description: 'Generously stuffed cottage cheese parantha served hot with butter, pickle, and tea.',
    image: ASSETS.breakfast,
  },
  {
    id: 'bf-mix-parantha-combo',
    name: 'Mix Parantha Combo (Tea / Butter)',
    category: 'Breads',
    subCategory: 'Breakfast & Parantha Combos',
    dietary: 'Vegetarian',
    description: 'Flaky whole-wheat parantha stuffed with spiced mixed vegetables, served with butter and tea.',
  },
  {
    id: 'bf-single-paranthas',
    name: 'Aloo / Mix / Paneer Parantha',
    category: 'Breads',
    subCategory: 'Stuffed Paranthas',
    dietary: 'Vegetarian',
    description: 'Traditional tawa-roasted Punjabi stuffed paranthas made fresh to order.',
    image: ASSETS.breads,
  },
  {
    id: 'bf-bread-omelette',
    name: 'Bread Omelette',
    category: 'Breads',
    subCategory: 'Breakfast Classics',
    dietary: 'Non-Vegetarian',
    description: 'Fluffy spiced egg omelette served with toasted bread slices.',
  },
  {
    id: 'bf-poha-maggi-toast',
    name: 'Poha Combo / Maggi Combo / Butter Toast',
    category: 'Breads',
    subCategory: 'Breakfast Classics',
    dietary: 'Vegetarian',
    description: 'Light breakfast favourites including seasoned Poha, hot Masala Maggi (solo or combo), and crisp Butter Toast.',
  },
  {
    id: 'bv-gud-wali-chah',
    name: 'Gud Wali Chah & Desi Chah',
    category: 'Beverages',
    subCategory: 'Traditional Tea & Coffee',
    dietary: 'Vegetarian',
    description: 'Authentic Punjabi jaggery tea (Gud Wali Chah), aromatic Masala Tea, and traditional Desi Chah brewed fresh.',
    image: ASSETS.breakfast,
    badge: 'Punjabi Signature',
  },
  {
    id: 'bv-coffee-selection',
    name: 'Cold Coffee / Hot Coffee / Hot Chocolate Milk',
    category: 'Beverages',
    subCategory: 'Traditional Tea & Coffee',
    dietary: 'Vegetarian',
    description: 'Frothy chilled Cold Coffee, freshly brewed Hot Coffee, and comforting Hot Chocolate Milk.',
    image: ASSETS.mocktails,
  },
  {
    id: 'bv-virgin-mojito',
    name: 'Virgin Mojito & Lemon Ice Tea',
    category: 'Beverages',
    subCategory: 'Refreshing Mocktails',
    dietary: 'Vegetarian',
    description: 'Chilled mint-lime Virgin Mojito and brisk, citrusy Lemon Ice Tea.',
    image: ASSETS.mocktails,
    badge: 'Refresher',
  },
  {
    id: 'bv-signature-mocktails',
    name: 'Blue Ocean / Pinacolada / Cindrella / Forever Young',
    category: 'Beverages',
    subCategory: 'Refreshing Mocktails',
    dietary: 'Vegetarian',
    description: 'Handcrafted non-alcoholic mocktail coolers in tropical, citrus, and berry blends.',
    image: ASSETS.mocktails,
  },
  {
    id: 'bv-shakes-specials',
    name: 'Oreo / Chocolate / Tiramisu / Kiwi / Pineapple / Bubblegum / Orange',
    category: 'Beverages',
    subCategory: 'Shakes & Sweet Refreshers',
    dietary: 'Vegetarian',
    description: 'Indulgent dessert shakes and fruit coolers in Oreo, Chocolate, Tiramisu, Kiwi, Pineapple, Bubblegum, and Orange.',
  },
];

// ============================================================================
// 4. REUSABLE UI COMPONENTS
// ============================================================================

const OrnamentalDivider: React.FC<{ className?: string; variant?: 'gold' | 'subtle' }> = ({
  className = '',
  variant = 'gold',
}) => {
  const strokeColor = variant === 'gold' ? '#D4AF65' : '#D8C9B2';
  return (
    <div
      className={`flex items-center justify-center gap-3 select-none ${className}`}
      aria-hidden="true"
    >
      <span
        className="h-[1px] w-12 sm:w-20"
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${strokeColor})`,
        }}
      />
      <svg
        width="36"
        height="16"
        viewBox="0 0 36 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M18 1L21.5 6.5L27 8L21.5 9.5L18 15L14.5 9.5L9 8L14.5 6.5L18 1Z"
          stroke={strokeColor}
          strokeWidth="1.2"
          fill="#351014"
        />
        <circle cx="4" cy="8" r="1.5" fill={strokeColor} fillOpacity="0.7" />
        <circle cx="32" cy="8" r="1.5" fill={strokeColor} fillOpacity="0.7" />
      </svg>
      <span
        className="h-[1px] w-12 sm:w-20"
        style={{
          backgroundImage: `linear-gradient(to left, transparent, ${strokeColor})`,
        }}
      />
    </div>
  );
};

// ============================================================================
// 5. GALLERY DATA
// ============================================================================

type GalleryCategory =
  | 'All'
  | 'Restaurant exterior'
  | 'Dining area'
  | 'Food photography'
  | 'Interior details';

interface GalleryPhoto {
  id: string;
  src: string;
  category: Exclude<GalleryCategory, 'All'>;
  title: string;
  alt: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'ext-1',
    src: ASSETS.exterior,
    category: 'Restaurant exterior',
    title: 'Welcoming Evening Exterior',
    alt: 'Twilight exterior view of Rajdarbar Restaurant opposite Railway Station in Bhangala with warm lighting',
  },
  {
    id: 'din-1',
    src: ASSETS.dining,
    category: 'Dining area',
    title: 'Royal Burgundy Dining Hall',
    alt: 'Spacious Indian dining area featuring burgundy seating, warm brass pendant lanterns, and wooden jali screens',
  },
  {
    id: 'food-1',
    src: ASSETS.hero,
    category: 'Food photography',
    title: 'Punjabi Feast & Handi Spread',
    alt: 'Full Indian dining spread with Dal Makhani, Shahi Paneer, saffron basmati rice, and fresh tandoori breads',
  },
  {
    id: 'int-1',
    src: ASSETS.details,
    category: 'Interior details',
    title: 'Brass Tableware & Ambient Glow',
    alt: 'Interior detail showing hammered antique brass goblets, linen napkin, candle glow, and carved lattice screen',
  },
  {
    id: 'food-2',
    src: ASSETS.tandoori,
    category: 'Food photography',
    title: 'Tandoori Chicken, Seekh & Paneer Tikka',
    alt: 'Close-up of clay-oven roasted tandoori delicacies served on an engraved brass platter with mint chutney',
  },
  {
    id: 'food-3',
    src: ASSETS.curry,
    category: 'Food photography',
    title: 'Dal Makhani & Shahi Paneer Handis',
    alt: 'Rich North Indian gravies served in traditional hammered copper handi vessels garnished with ginger and herbs',
  },
  {
    id: 'food-4',
    src: ASSETS.breads,
    category: 'Food photography',
    title: 'Artisan Breads & Layered Paranthas',
    alt: 'Golden butter naan and flaky layered paratha served warm in a linen-lined brass basket',
  },
  {
    id: 'food-5',
    src: ASSETS.breakfast,
    category: 'Food photography',
    title: 'Stuffed Parantha Combo & Gud Wali Chah',
    alt: 'Traditional Punjabi Aloo and Paneer Parantha topped with white butter alongside steaming Gud Wali Chah in a clay kulhad',
  },
  {
    id: 'food-6',
    src: ASSETS.mocktails,
    category: 'Food photography',
    title: 'Virgin Mojito, Blue Ocean & Cold Coffee',
    alt: 'Refreshing Virgin Mojito, Blue Ocean mocktail, and frothy Cold Coffee served at the Rajdarbar bar counter',
  },
  {
    id: 'int-2',
    src: ASSETS.rooms,
    category: 'Interior details',
    title: 'On-Site Guest Rooms & Lodging',
    alt: 'Clean, comfortable boutique guest room at Rajdarbar Restaurant & Hotel in Bhangala with warm lighting',
  },
];

const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Restaurant exterior',
  'Dining area',
  'Food photography',
  'Interior details',
];

const FLAVOUR_HIGHLIGHTS = [
  {
    id: 'curries',
    title: 'Dal Makhani, Shahi Paneer & Curries',
    subtitle: '25+ Vegetarian Main Courses',
    description:
      'From slow-simmered Dal Makhani, Dhabha Dal Fry, and Pindi Channa Masala to Kadai Paneer, Paneer Lababdar, and Mushroom specialties.',
    image: ASSETS.curry,
    alt: 'Traditional hammered copper handis filled with Dal Makhani and Shahi Paneer garnished with ginger and fresh coriander',
  },
  {
    id: 'tandoor',
    title: 'Tandoori Tikkas, Seekh & Amritsari Fish',
    subtitle: 'Veg & Non-Veg Starters',
    description:
      'Smoky Tandoori Chicken, Chicken Malai Tikka, Mutton Seekh, Fish Amritsari, Paneer Tikka, Chef Special Tikki, and crispy Chinese starters.',
    image: ASSETS.tandoori,
    alt: 'Clay-oven tandoori delicacies served on an antique brass platter with mint chutney and charred spices',
  },
  {
    id: 'breads',
    title: 'Punjabi Paranthas & Gud Wali Chah',
    subtitle: 'Breakfast Combos & All-Day Snacks',
    description:
      'Start your morning at 9:00 AM with hot Aloo, Paneer, or Mix Parantha Combos served with white butter and Gud Wali Chah, plus Burgers and Pizzas.',
    image: ASSETS.breakfast,
    alt: 'Stuffed Punjabi Parantha with melting white butter and steaming Gud Wali Chah in a kulhad',
  },
  {
    id: 'hospitality',
    title: 'Family Dining, Beer Bar & Guest Rooms',
    subtitle: 'Complete Bhangala Hospitality',
    description:
      'Enjoy air-conditioned family dining, a private dining hall, outdoor seating, mocktails, beer bar offerings, and comfortable guest rooms.',
    image: ASSETS.rooms,
    alt: 'Comfortable guest room and hospitality suite at Rajdarbar Restaurant in Bhangala',
  },
];

const WHY_VISIT_FEATURES = [
  {
    id: 'dining',
    title: 'Delicious Indian Dining',
    description:
      'Over 95 verified dishes across Punjabi Main Courses, Tandoori Starters, Stuffed Paranthas, Rice Bowls, Burgers, Pizzas, and Gud Wali Chah.',
    Icon: Utensils,
  },
  {
    id: 'hospitality',
    title: 'Friendly Hospitality & Rooms',
    description:
      'Attentive table service, private dining room, family-friendly seating with kids’ menu, free Wi-Fi, and comfortable guest rooms on-site.',
    Icon: HeartHandshake,
  },
  {
    id: 'location',
    title: 'Convenient Railway Station Location',
    description:
      'Situated right at the Filling Station opposite the Railway Station in Bhangala with free parking lot, street parking, and drive-through access.',
    Icon: Train,
  },
  {
    id: 'guests',
    title: 'A Welcoming Place for Guests',
    description:
      'Open daily from morning breakfast to late-night dinner with live music, sports screening, takeout, and no-contact delivery.',
    Icon: Users,
  },
];

// ============================================================================
// 6. MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Interactive Call & Connect Modal (fixes Call Now on Desktop & inside mobile preview iframes)
  const [callModalOpen, setCallModalOpen] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);

  // Menu state
  const [selectedMenuCategory, setSelectedMenuCategory] =
    useState<MenuCategoryId>('All');
  const [menuSearchQuery, setMenuSearchQuery] = useState<string>('');
  const [showLiveMenu, setShowLiveMenu] = useState<boolean>(true);

  // Gallery state
  const [activeGalleryCategory, setActiveGalleryCategory] =
    useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Location copy state
  const [copiedAddress, setCopiedAddress] = useState<boolean>(false);

  // Contact / Enquiry Form state
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [enquiryType, setEnquiryType] = useState<string>('Dining');
  const [date, setDate] = useState<string>('');
  const [guests, setGuests] = useState<string>('2');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);

  // Owner Config Preview state (placed cleanly inside Footer so it never blocks mobile bottom bar)
  const [configDrawerOpen, setConfigDrawerOpen] = useState<boolean>(false);
  const [whatsappConfigInput, setWhatsappConfigInput] = useState<string>(
    BUSINESS_CONFIG.contact.whatsappNumber
  );
  const [roomBookingConfirmed, setRoomBookingConfirmed] = useState<boolean>(
    BUSINESS_CONFIG.services.isRoomBookingConfirmed
  );

  const visibleGalleryPhotos =
    activeGalleryCategory === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === activeGalleryCategory);

  const currentLightboxPhoto =
    lightboxIndex !== null && visibleGalleryPhotos[lightboxIndex]
      ? visibleGalleryPhotos[lightboxIndex]
      : null;

  useEffect(() => {
    const sectionIds = [
      'home',
      'story',
      'experience',
      'menu',
      'why-visit',
      'gallery',
      'location',
      'contact',
    ];
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
      const scrollPos = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (callModalOpen) setCallModalOpen(false);
        if (lightboxIndex !== null) setLightboxIndex(null);
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (configDrawerOpen) setConfigDrawerOpen(false);
      } else if (lightboxIndex !== null && e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visibleGalleryPhotos.length
        );
      } else if (lightboxIndex !== null && e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + visibleGalleryPhotos.length) % visibleGalleryPhotos.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    callModalOpen,
    lightboxIndex,
    mobileMenuOpen,
    configDrawerOpen,
    visibleGalleryPhotos.length,
  ]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const safeCopyText = (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(() => {
          fallbackCopyText(text);
        });
      } else {
        fallbackCopyText(text);
      }
    } catch {
      fallbackCopyText(text);
    }
  };

  const fallbackCopyText = (text: string) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    } catch {
      // Ignore in restricted iframe
    }
  };

  /**
   * Universal Call Now handler:
   * 1. Automatically copies the phone number (090418 61094) so it is ready on both desktop and mobile.
   * 2. Opens our accessible in-page Call & WhatsApp Action Modal so users inside sandboxed iframes
   *    or on desktop computers always get an immediate interactive response.
   */
  const handleTriggerCall = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    safeCopyText(BUSINESS_CONFIG.contact.phoneDisplay);
    setCopiedPhone(true);
    setCallModalOpen(true);
    window.setTimeout(() => setCopiedPhone(false), 4000);
  };

  const handleCopyPhoneNumberOnly = () => {
    safeCopyText(BUSINESS_CONFIG.contact.phoneDisplay);
    setCopiedPhone(true);
    window.setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleCopyAddress = () => {
    safeCopyText(`${BUSINESS_CONFIG.name}, ${BUSINESS_CONFIG.address.full}`);
    setCopiedAddress(true);
    window.setTimeout(() => setCopiedAddress(false), 3000);
  };

  const handleEnquireMenuCategory = (categoryLabel: string) => {
    setEnquiryType('Dining');
    setMessage(
      `Hello Rajdarbar Restaurant, I would like to enquire about your ${categoryLabel} menu options and current availability.`
    );
    scrollToSection('contact');
  };

  const handleEnquireRooms = () => {
    setEnquiryType(roomBookingConfirmed ? 'Room Booking' : 'Ask About Rooms');
    setMessage(
      'Hello Rajdarbar Restaurant, I would like to enquire about room availability and tariff rates for an upcoming stay in Bhangala.'
    );
    scrollToSection('contact');
  };

  const roomOptionLabel = roomBookingConfirmed ? 'Room Booking' : 'Ask About Rooms';
  const showDateAndGuests =
    enquiryType === 'Dining' ||
    enquiryType === 'Group Booking' ||
    enquiryType === roomOptionLabel;

  const validateEnquiryForm = (): boolean => {
    const nextErrors: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10 || cleanPhone.length > 13) {
      nextErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (showDateAndGuests && guests) {
      const guestCount = Number(guests);
      if (Number.isNaN(guestCount) || guestCount < 1 || guestCount > 200) {
        nextErrors.guests = 'Please enter a guest count between 1 and 200.';
      }
    }
    if (!message.trim() || message.trim().length < 5) {
      nextErrors.message = 'Please add a short note about your enquiry.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEnquiryForm()) {
      setSubmittedSummary(null);
      return;
    }
    const lines = [
      `Hello ${BUSINESS_CONFIG.name},`,
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Enquiry Type: ${enquiryType}`,
      ...(showDateAndGuests && date ? [`Preferred Date: ${date}`] : []),
      ...(showDateAndGuests && guests ? [`Number of Guests: ${guests}`] : []),
      `Message: ${message.trim()}`,
    ];
    setSubmittedSummary(lines.join('\n'));
  };

  const handleCopySummary = () => {
    if (!submittedSummary) return;
    safeCopyText(submittedSummary);
    setCopiedSummary(true);
    window.setTimeout(() => setCopiedSummary(false), 3000);
  };

  // Menu filtering logic
  const sourceMenuItems = showLiveMenu ? VERIFIED_MENU_ITEMS : [];
  const filteredMenuItems = sourceMenuItems.filter((item) => {
    const matchesCategory =
      selectedMenuCategory === 'All' ||
      item.category === selectedMenuCategory ||
      item.dietary === selectedMenuCategory;
    const q = menuSearchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.subCategory.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const activeCategoryMeta =
    MENU_CATEGORIES.find((cat) => cat.id === selectedMenuCategory) ||
    MENU_CATEGORIES[0];

  // WhatsApp URLs (using api.whatsapp.com/send for universal mobile + desktop support)
  const floatingWhatsAppUrl = buildWhatsAppUrl(
    whatsappConfigInput,
    BUSINESS_CONFIG.contact.whatsappDefaultMessage
  );
  const enquiryWhatsAppUrl = submittedSummary
    ? buildWhatsAppUrl(whatsappConfigInput, submittedSummary)
    : floatingWhatsAppUrl;

  const reviewDestination =
    BUSINESS_CONFIG.rating.verifiedReviewUrl || BUSINESS_CONFIG.maps.searchUrl;

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Our Story' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'location', label: 'Hours & Map' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-[#171313] text-[#F8F1E6] flex flex-col selection:bg-[#D4AF65] selection:text-[#171313] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&display=swap');
        .font-serif { font-family: 'Playfair Display', Georgia, serif; }
        body, .font-sans { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* ================================================================== */}
      {/* A. STICKY NAVIGATION BAR                                           */}
      {/* ================================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-[#171313]/95 backdrop-blur-md border-b border-[#D4AF65]/25 shadow-2xl py-3'
            : 'bg-gradient-to-b from-[#171313]/90 via-[#171313]/55 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF65] rounded-sm shrink-0"
              aria-label={`${BUSINESS_CONFIG.name} - Home`}
            >
              <span className="font-serif text-lg sm:text-2xl md:text-[26px] font-bold tracking-[0.16em] text-[#F8F1E6] group-hover:text-[#D4AF65] transition-colors">
                {BUSINESS_CONFIG.wordmark}
              </span>
              <span className="text-[8px] sm:text-[10px] tracking-[0.2em] uppercase text-[#D4AF65] font-medium mt-0.5">
                {BUSINESS_CONFIG.subtitle}
              </span>
            </a>

            {/* Desktop Links */}
            <nav
              className="hidden md:flex items-center gap-6 lg:gap-8"
              aria-label="Primary Navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className={`relative text-sm font-medium tracking-wide transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF65] rounded-sm ${
                      isActive
                        ? 'text-[#D4AF65]'
                        : 'text-[#F8F1E6]/90 hover:text-[#D4AF65]'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D4AF65] transition-transform duration-300 origin-center ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Desktop Call Now & WhatsApp CTAs */}
            <div className="hidden md:flex items-center gap-2.5">
              {floatingWhatsAppUrl && (
                <a
                  href={floatingWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-sm bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs lg:text-sm tracking-wide transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>
              )}
              <button
                type="button"
                onClick={handleTriggerCall}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-sm tracking-wide hover:bg-[#E5C888] transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8F1E6]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now</span>
              </button>
            </div>

            {/* Mobile Top Bar Controls (Both WhatsApp & Call Now right in the top bar for easy tapping!) */}
            <div className="flex items-center gap-1.5 md:hidden">
              {floatingWhatsAppUrl && (
                <a
                  href={floatingWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="inline-flex items-center gap-1 px-2.5 py-2 rounded-sm bg-emerald-700 active:bg-emerald-600 text-white font-semibold text-xs shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              )}
              <button
                type="button"
                onClick={handleTriggerCall}
                className="inline-flex items-center gap-1 px-2.5 py-2 rounded-sm bg-[#D4AF65] active:bg-[#E5C888] text-[#171313] font-semibold text-xs shadow"
                aria-label={`Call ${BUSINESS_CONFIG.name}`}
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call Now</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-menu"
                aria-label={
                  mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
                }
                className="p-2 rounded-sm text-[#F8F1E6] hover:text-[#D4AF65] border border-[#D4AF65]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF65]"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <nav
            id="mobile-nav-menu"
            aria-label="Mobile Navigation"
            className="md:hidden bg-[#171313] border-b border-[#D4AF65]/30 px-4 pt-4 pb-6 mt-3 space-y-3 max-h-[82vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className={`px-3 py-3 rounded-sm text-base font-medium border-l-2 transition-colors ${
                      isActive
                        ? 'border-[#D4AF65] bg-[#351014]/60 text-[#D4AF65]'
                        : 'border-transparent text-[#F8F1E6] hover:bg-[#351014]/30 hover:text-[#D4AF65]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
            <div className="pt-3 border-t border-[#D4AF65]/20 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleTriggerCall();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-sm"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {BUSINESS_CONFIG.contact.phoneDisplay}</span>
              </button>
              {floatingWhatsAppUrl && (
                <a
                  href={floatingWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-emerald-700 text-white font-semibold text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              )}
              <a
                href={BUSINESS_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:col-span-2 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm border border-[#D4AF65]/40 text-[#F8F1E6] text-sm font-medium hover:bg-[#351014]/50"
              >
                <MapPin className="w-4 h-4 text-[#D4AF65]" />
                <span>Opposite Railway Station, Bhangala</span>
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* ================================================================== */}
        {/* B. CINEMATIC HERO SECTION                                          */}
        {/* ================================================================== */}
        <section
          id="home"
          className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
        >
          <div className="absolute inset-0 z-0">
            <img
              src={ASSETS.hero}
              alt="Authentic Indian dining table spread with copper handis, curries, saffron rice, and fresh naan at Rajdarbar Restaurant"
              className="w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(23,19,19,0.84) 0%, rgba(53,16,20,0.72) 52%, rgba(23,19,19,0.96) 100%)',
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#171313_100%)] opacity-80" />
          </div>

          <div
            className="absolute inset-4 sm:inset-8 border border-[#D4AF65]/20 pointer-events-none z-10 hidden sm:block"
            aria-hidden="true"
          />

          <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#351014]/90 border border-[#D4AF65]/40 text-[#D8C9B2] text-xs sm:text-sm tracking-wider uppercase mb-6 shadow-lg">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF65] shrink-0" />
              <span>Opposite Railway Station • Bhangala, Punjab • Rooms Available</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8F1E6] tracking-tight leading-[1.12] mb-6">
              Experience the Royal Taste of India
            </h1>

            <OrnamentalDivider className="my-6" />

            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#D8C9B2] font-normal leading-relaxed mb-4">
              Delicious food, warm hospitality, and memorable moments await you at Rajdarbar Restaurant.
            </p>
            <p className="max-w-xl mx-auto text-xs sm:text-sm uppercase tracking-[0.2em] text-[#D4AF65] font-medium mb-9">
              {BUSINESS_CONFIG.officialTagline}
            </p>

            {/* Primary, Secondary, Call & WhatsApp CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3.5 max-w-md sm:max-w-none mx-auto">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('menu');
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-base tracking-wide hover:bg-[#E5C888] transition-all shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8F1E6]"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Our Menu</span>
              </a>

              <a
                href={BUSINESS_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-sm bg-[#351014]/85 text-[#F8F1E6] border border-[#D4AF65]/50 font-semibold text-base tracking-wide hover:bg-[#351014] hover:border-[#D4AF65] transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF65]"
              >
                <Navigation className="w-4 h-4 text-[#D4AF65]" />
                <span>Get Directions</span>
              </a>

              {floatingWhatsAppUrl && (
                <a
                  href={floatingWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-sm bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-base tracking-wide transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Us</span>
                </a>
              )}
            </div>

            <div className="mt-10 pt-6 border-t border-[#D4AF65]/20 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#D8C9B2]">
              <span>Open Daily from 9:00 AM (Mon 10:30 AM)</span>
              <span>•</span>
              <button
                type="button"
                onClick={handleTriggerCall}
                className="inline-flex items-center gap-1.5 text-[#D4AF65] font-semibold hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {BUSINESS_CONFIG.contact.phoneDisplay}</span>
              </button>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* C. TRUST, REPUTATION & VERIFIED GOOGLE REVIEWS                     */}
        {/* ================================================================== */}
        <section
          aria-label="Guest Rating and Reputation"
          className="relative z-20 -mt-8 sm:-mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#351014] via-[#240B0E] to-[#351014] border border-[#D4AF65]/35 rounded-sm shadow-2xl p-6 sm:p-8 lg:p-10 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center gap-4 border-b lg:border-b-0 lg:border-r border-[#D4AF65]/20 pb-5 lg:pb-0 lg:pr-6">
                <div className="bg-[#171313]/80 border border-[#D4AF65]/40 px-5 py-3.5 rounded-sm text-center shrink-0">
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#D4AF65] leading-none">
                    {BUSINESS_CONFIG.rating.score}
                    <span className="text-lg text-[#D8C9B2] font-normal">
                      /{BUSINESS_CONFIG.rating.maxScore}
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-center gap-1 mt-2"
                    aria-label={`${BUSINESS_CONFIG.rating.score} out of 5 stars`}
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-3.5 h-3.5 text-[#D4AF65] fill-[#D4AF65]"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#F8F1E6]">
                    {BUSINESS_CONFIG.rating.score} out of {BUSINESS_CONFIG.rating.maxScore} on Google
                  </h2>
                  <p className="text-sm sm:text-base text-[#D8C9B2] mt-1">
                    Based on{' '}
                    <strong className="text-[#F8F1E6]">
                      {BUSINESS_CONFIG.rating.reviewCount} Google reviews
                    </strong>
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#D4AF65] mt-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Google Business Profile</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 text-left">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#D4AF65] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#F8F1E6] uppercase tracking-wider">
                      Restaurant • Beer Bar • Rooms
                    </p>
                    <p className="text-sm text-[#D8C9B2] mt-1 leading-relaxed">
                      Dine-in, outdoor seating, private dining room, drive-through, delivery, and guest rooms opposite Bhangala Railway Station.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 flex lg:justify-end">
                <a
                  href={reviewDestination}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm border border-[#D4AF65]/50 bg-[#171313]/70 hover:bg-[#D4AF65] text-[#F8F1E6] hover:text-[#171313] text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF65]"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Verified Guest Highlights from Google Business Profile */}
            <div className="pt-6 border-t border-[#D4AF65]/20">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF65] font-semibold mb-4">
                Recent Guest Reviews on Google Maps
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {BUSINESS_CONFIG.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-[#171313]/70 border border-[#D4AF65]/20 rounded-sm p-4 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#351014] text-[#D4AF65] border border-[#D4AF65]/30">
                          {rev.highlight}
                        </span>
                        <Quote className="w-3.5 h-3.5 text-[#D4AF65]/50 shrink-0" />
                      </div>
                      <p className="text-xs text-[#F8F1E6]/90 leading-relaxed italic">
                        “{rev.quote}”
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-[#D4AF65]/10 flex items-center justify-between text-[11px] text-[#D8C9B2]/70">
                      <span>Google Review</span>
                      <span>{rev.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* D. SIGNATURE DINING EXPERIENCE ("Discover the Flavours")           */}
        {/* ================================================================== */}
        <section id="experience" className="py-20 sm:py-24 bg-[#171313] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold">
                Signature Dining &amp; Hospitality
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F1E6] mt-3">
                Discover the Flavours
              </h2>
              <OrnamentalDivider className="my-5" />
              <p className="text-base sm:text-lg text-[#D8C9B2] leading-relaxed">
                From hearty Punjabi breakfasts and rich handi curries to smoky tandoori platters, mocktails, and comfortable guest rooms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FLAVOUR_HIGHLIGHTS.map((item) => (
                <article
                  key={item.id}
                  id={item.id}
                  className="group bg-[#211B1B] border border-[#D4AF65]/20 rounded-sm overflow-hidden shadow-xl hover:border-[#D4AF65]/50 transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#351014]/40">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171313] via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-3 left-4 inline-block px-3 py-1 rounded-sm bg-[#351014]/90 border border-[#D4AF65]/30 text-[11px] uppercase tracking-widest text-[#D4AF65] font-medium">
                      {item.subtitle}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-[#F8F1E6] group-hover:text-[#D4AF65] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#D8C9B2] mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* E. VERIFIED GOOGLE BUSINESS MENU SHOWCASE (95+ Dishes)             */}
        {/* ================================================================== */}
        <section
          id="menu"
          className="py-20 sm:py-24 bg-gradient-to-b from-[#351014]/35 via-[#171313] to-[#171313] border-y border-[#D4AF65]/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold">
                Official Google Business Profile Menu
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F1E6] mt-3">
                Menu Showcase
              </h2>
              <OrnamentalDivider className="my-5" />
              <p className="text-base sm:text-lg text-[#D8C9B2] leading-relaxed">
                Browse our complete verified menu across Breakfast Paranthas, Tandoori Starters, Punjabi Main Courses, Rice Bowls, Burgers, Pizzas, Gud Wali Chah, and Mocktails.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="Menu Categories"
              className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-6"
            >
              {MENU_CATEGORIES.map((category) => {
                const isSelected = selectedMenuCategory === category.id;
                return (
                  <button
                    key={category.id}
                    id={category.id}
                    role="tab"
                    type="button"
                    aria-selected={isSelected}
                    onClick={() => setSelectedMenuCategory(category.id)}
                    className={`px-4 sm:px-5 py-2.5 rounded-sm text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF65] ${
                      isSelected
                        ? 'bg-[#D4AF65] text-[#171313] shadow-lg'
                        : 'bg-[#211B1B] text-[#D8C9B2] border border-[#D4AF65]/25 hover:border-[#D4AF65]/60 hover:text-[#F8F1E6]'
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input & Active Category Info */}
            <div className="max-w-3xl mx-auto mb-10 space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-[#D4AF65] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="search"
                  value={menuSearchQuery}
                  onChange={(e) => setMenuSearchQuery(e.target.value)}
                  placeholder="Search dishes (e.g., Dal Makhani, Paneer Tikka, Parantha, Fish Amritsari, Gud Wali Chah)..."
                  aria-label="Search menu dishes"
                  className="w-full pl-11 pr-4 py-3 rounded-sm bg-[#211B1B] border border-[#D4AF65]/30 text-sm text-[#F8F1E6] placeholder-[#D8C9B2]/50 focus:outline-none focus:border-[#D4AF65]"
                />
              </div>

              <div className="text-center px-4">
                <p className="text-xs uppercase tracking-widest text-[#D4AF65]">
                  {activeCategoryMeta.tagline}
                </p>
                <p className="text-sm text-[#D8C9B2] mt-1">
                  {activeCategoryMeta.description}
                </p>
              </div>
            </div>

            {filteredMenuItems.length > 0 ? (
              <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {filteredMenuItems.map((dish) => (
                    <article
                      key={dish.id}
                      id={dish.id}
                      className="bg-[#211B1B] border border-[#D4AF65]/25 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#D4AF65]/60 transition-all shadow-lg"
                    >
                      {dish.image && (
                        <div className="aspect-[16/9] w-full overflow-hidden bg-[#351014]/40 relative">
                          <img
                            src={dish.image}
                            alt={dish.name}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                          {dish.badge && (
                            <span className="absolute top-3 right-3 px-2.5 py-1 rounded-sm bg-[#171313]/90 border border-[#D4AF65]/40 text-[11px] font-semibold text-[#D4AF65]">
                              {dish.badge}
                            </span>
                          )}
                        </div>
                      )}
                      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[11px] uppercase tracking-wider text-[#D4AF65]">
                              {dish.subCategory}
                            </span>
                            <span
                              className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm border ${
                                dish.dietary === 'Vegetarian'
                                  ? 'border-emerald-500/40 text-emerald-300 bg-emerald-950/40'
                                  : 'border-amber-500/40 text-amber-300 bg-amber-950/40'
                              }`}
                            >
                              {dish.dietary === 'Vegetarian' ? '● Veg' : '▲ Non-Veg'}
                            </span>
                          </div>

                          <div className="flex items-start justify-between gap-3">
                            <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F8F1E6]">
                              {dish.name}
                            </h3>
                            {dish.price ? (
                              <span className="font-serif text-base font-bold text-[#D4AF65] shrink-0">
                                {dish.price}
                              </span>
                            ) : (
                              <span className="text-[11px] text-[#D8C9B2]/75 bg-[#171313] px-2 py-0.5 rounded-sm border border-[#D4AF65]/20 shrink-0">
                                Available
                              </span>
                            )}
                          </div>

                          <p className="text-xs sm:text-sm text-[#D8C9B2] mt-2.5 leading-relaxed">
                            {dish.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Call / WhatsApp / Enquire CTA Bar */}
                <div className="bg-[#211B1B] border border-[#D4AF65]/30 rounded-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F8F1E6]">
                      Want Today’s Portion Rates, Party Menu, or Takeout Order?
                    </h3>
                    <p className="text-sm text-[#D8C9B2] mt-1">
                      Call or WhatsApp us directly for live dish prices, bulk catering, or no-contact delivery in Bhangala.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
                    <button
                      type="button"
                      onClick={handleTriggerCall}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-sm hover:bg-[#E5C888] transition-all shadow-lg"
                    >
                      <Phone className="w-4 h-4 fill-current" />
                      <span>Call to Enquire About the Menu</span>
                    </button>
                    {floatingWhatsAppUrl && (
                      <a
                        href={floatingWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-all shadow-lg"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>WhatsApp Menu Enquiry</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        handleEnquireMenuCategory(activeCategoryMeta.label)
                      }
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm border border-[#D4AF65]/50 bg-[#171313] text-[#F8F1E6] hover:bg-[#351014] text-sm font-medium transition-all"
                    >
                      <MessageSquare className="w-4 h-4 text-[#D4AF65]" />
                      <span>Send a Menu Enquiry</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Fallback / Empty Search State */
              <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#351014]/60 to-[#211B1B] border border-[#D4AF65]/35 rounded-sm p-8 sm:p-12 text-center shadow-2xl">
                <div className="w-14 h-14 rounded-full bg-[#171313] border border-[#D4AF65]/40 flex items-center justify-center mx-auto mb-5">
                  <UtensilsCrossed className="w-6 h-6 text-[#D4AF65]" />
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171313]/80 border border-[#D4AF65]/30 text-xs text-[#D4AF65] font-medium mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Menu Search / Filter</span>
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F1E6] mt-1">
                  {menuSearchQuery
                    ? `No Dishes Matching "${menuSearchQuery}"`
                    : 'Verified Digital Menu'}
                </h3>

                <p className="text-sm sm:text-base text-[#D8C9B2] max-w-xl mx-auto mt-3 leading-relaxed">
                  {menuSearchQuery
                    ? 'Try clearing your search filter or call us directly to ask if our kitchen can prepare your requested dish.'
                    : 'Call us directly to enquire about today’s specials and rates.'}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                  {menuSearchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setMenuSearchQuery('');
                        setSelectedMenuCategory('All');
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm border border-[#D4AF65]/50 bg-[#171313] text-[#F8F1E6] text-sm font-medium"
                    >
                      Reset Menu Filter
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleTriggerCall}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-sm sm:text-base hover:bg-[#E5C888] transition-all shadow-lg"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Call to Enquire About the Menu</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ================================================================== */}
        {/* F. WHY VISIT RAJDARBAR & VERIFIED AMENITIES                        */}
        {/* ================================================================== */}
        <section id="why-visit" className="py-20 sm:py-24 bg-[#171313]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div>
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold">
                  The Rajdarbar Promise
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F1E6] mt-3">
                  Why Visit Rajdarbar
                </h2>
                <OrnamentalDivider className="my-5" />
                <p className="text-base sm:text-lg text-[#D8C9B2]">
                  Authentic Punjabi flavours, comfortable rooms, and complete guest facilities opposite Bhangala Railway Station.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {WHY_VISIT_FEATURES.map(({ id, title, description, Icon }) => (
                  <div
                    key={id}
                    id={id}
                    className="bg-gradient-to-b from-[#211B1B] to-[#171313] border border-[#D4AF65]/25 hover:border-[#D4AF65]/60 rounded-sm p-7 flex flex-col justify-between transition-all duration-300 shadow-lg group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-sm bg-[#351014] border border-[#D4AF65]/40 flex items-center justify-center mb-6 group-hover:bg-[#D4AF65] transition-colors">
                        <Icon className="w-6 h-6 text-[#D4AF65] group-hover:text-[#171313] transition-colors" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-[#F8F1E6] mb-3">
                        {title}
                      </h3>
                      <p className="text-sm text-[#D8C9B2] leading-relaxed">
                        {description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#D4AF65]/15 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#D4AF65]/80">
                      <span>Rajdarbar Bhangala</span>
                      <span>✦</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirmed Guest Rooms & Amenities Showcase */}
            <div className="bg-gradient-to-r from-[#211B1B] via-[#351014]/40 to-[#211B1B] border border-[#D4AF65]/35 rounded-sm p-6 sm:p-10 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="relative rounded-sm overflow-hidden border border-[#D4AF65]/40 aspect-[16/10]">
                    <img
                      src={ASSETS.rooms}
                      alt="Clean and comfortable guest room at Rajdarbar Restaurant & Hotel in Bhangala"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-sm bg-[#171313]/90 border border-[#D4AF65]/40 text-xs font-semibold text-[#D4AF65] inline-flex items-center gap-1.5">
                      <BedDouble className="w-3.5 h-3.5" />
                      <span>Rooms Available On-Site</span>
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF65] font-semibold">
                      Verified Google Business Facilities
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F1E6] mt-1">
                      Guest Rooms, Dining Services &amp; Amenities
                    </h3>
                    <p className="text-sm sm:text-base text-[#D8C9B2] mt-2 leading-relaxed">
                      {BUSINESS_CONFIG.services.roomSummary}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {BUSINESS_CONFIG.services.amenityGroups.map((group) => (
                      <div
                        key={group.category}
                        className="p-4 rounded-sm bg-[#171313]/80 border border-[#D4AF65]/20"
                      >
                        <h4 className="text-xs uppercase tracking-wider text-[#D4AF65] font-semibold mb-2.5">
                          {group.category}
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#D8C9B2]">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-1.5">
                              <span className="text-[#D4AF65] mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#D4AF65]/20">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#D8C9B2]">
                      <span className="inline-flex items-center gap-1.5">
                        <Wifi className="w-4 h-4 text-[#D4AF65]" />
                        <span>Free Wi-Fi</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Car className="w-4 h-4 text-[#D4AF65]" />
                        <span>Free Parking Lot</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Music className="w-4 h-4 text-[#D4AF65]" />
                        <span>Live Music</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CreditCard className="w-4 h-4 text-[#D4AF65]" />
                        <span>Google Pay, Cards &amp; Cash</span>
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleEnquireRooms}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-xs sm:text-sm hover:bg-[#E5C888] transition-colors"
                    >
                      <BedDouble className="w-4 h-4" />
                      <span>Enquire About Rooms</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* G. PHOTO GALLERY WITH ACCESSIBLE LIGHTBOX                          */}
        {/* ================================================================== */}
        <section
          id="gallery"
          className="py-20 sm:py-24 bg-[#171313] border-t border-[#D4AF65]/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold">
                Visual Tour
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F1E6] mt-3">
                Photo Gallery
              </h2>
              <OrnamentalDivider className="my-5" />
              <p className="text-base sm:text-lg text-[#D8C9B2]">
                Explore our restaurant exterior, burgundy dining hall, Punjabi delicacies, mocktails, and guest rooms.
              </p>
            </div>

            <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-10">
              {GALLERY_CATEGORIES.map((category) => {
                const active = activeGalleryCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveGalleryCategory(category);
                      setLightboxIndex(null);
                    }}
                    className={`px-4 py-2 rounded-sm text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                      active
                        ? 'bg-[#D4AF65] text-[#171313] font-semibold shadow-md'
                        : 'bg-[#211B1B] text-[#D8C9B2] border border-[#D4AF65]/25 hover:border-[#D4AF65]/60'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleGalleryPhotos.map((photo, idx) => (
                <button
                  key={photo.id}
                  id={photo.id}
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Open ${photo.title} in full-screen lightbox`}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#211B1B] border border-[#D4AF65]/25 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF65]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171313] via-[#171313]/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#D4AF65] block">
                        {photo.category}
                      </span>
                      <span className="font-serif text-lg font-semibold text-[#F8F1E6] mt-0.5 block">
                        {photo.title}
                      </span>
                    </div>
                    <span className="p-2 rounded-sm bg-[#351014]/90 border border-[#D4AF65]/40 text-[#D4AF65] group-hover:bg-[#D4AF65] group-hover:text-[#171313] transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Lightbox Dialog */}
          {currentLightboxPhoto && lightboxIndex !== null && (
            <div
              role="dialog"
              aria-modal="true"
              aria-label={currentLightboxPhoto.title}
              className="fixed inset-0 z-50 bg-[#171313]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setLightboxIndex(null)}
            >
              <div
                className="relative max-w-5xl w-full bg-[#211B1B] border border-[#D4AF65]/40 rounded-sm overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#171313] border-b border-[#D4AF65]/25">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#D4AF65] mr-3">
                      {currentLightboxPhoto.category}
                    </span>
                    <span className="text-xs text-[#D8C9B2]">
                      {lightboxIndex + 1} of {visibleGalleryPhotos.length}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(null)}
                    aria-label="Close lightbox"
                    className="p-1.5 rounded-sm text-[#F8F1E6] hover:text-[#D4AF65] border border-[#D4AF65]/30"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative bg-[#171313] flex items-center justify-center max-h-[70vh] overflow-hidden">
                  <img
                    src={currentLightboxPhoto.src}
                    alt={currentLightboxPhoto.alt}
                    className="max-h-[70vh] w-auto max-w-full object-contain"
                  />
                  {visibleGalleryPhotos.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setLightboxIndex(
                            (lightboxIndex - 1 + visibleGalleryPhotos.length) %
                              visibleGalleryPhotos.length
                          )
                        }
                        aria-label="Previous image"
                        className="absolute left-3 p-2.5 rounded-full bg-[#171313]/85 border border-[#D4AF65]/40 text-[#F8F1E6] hover:bg-[#D4AF65] hover:text-[#171313] transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setLightboxIndex(
                            (lightboxIndex + 1) % visibleGalleryPhotos.length
                          )
                        }
                        aria-label="Next image"
                        className="absolute right-3 p-2.5 rounded-full bg-[#171313]/85 border border-[#D4AF65]/40 text-[#F8F1E6] hover:bg-[#D4AF65] hover:text-[#171313] transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                <div className="px-4 sm:px-6 py-4 bg-[#211B1B] border-t border-[#D4AF65]/25">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F8F1E6]">
                    {currentLightboxPhoto.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8C9B2] mt-1">
                    {currentLightboxPhoto.alt}
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ================================================================== */}
        {/* H. ABOUT THE RESTAURANT ("A Warm Welcome at Rajdarbar")            */}
        {/* ================================================================== */}
        <section
          id="story"
          className="py-20 sm:py-24 bg-gradient-to-b from-[#171313] via-[#351014]/25 to-[#171313] border-t border-[#D4AF65]/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="relative p-3 border border-[#D4AF65]/35 rounded-sm bg-[#211B1B] shadow-2xl">
                  <img
                    src={ASSETS.details}
                    alt="Warm table setting with antique brass goblets and carved wooden jali backdrop at Rajdarbar Restaurant"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover rounded-sm"
                  />
                  <div className="mt-3 px-3 py-2.5 bg-[#171313] border border-[#D4AF65]/20 flex items-center justify-between text-xs text-[#D8C9B2]">
                    <span>{BUSINESS_CONFIG.name}</span>
                    <span className="text-[#D4AF65] font-medium">
                      Bhangala, Punjab
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold">
                  About the Restaurant
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F1E6] mt-3">
                  {BUSINESS_CONFIG.about.heading}
                </h2>
                <div className="flex justify-start my-5">
                  <OrnamentalDivider />
                </div>

                <div className="space-y-4 text-base sm:text-lg text-[#D8C9B2] leading-relaxed">
                  {BUSINESS_CONFIG.about.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-sm bg-[#211B1B] border-l-4 border-[#D4AF65] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D4AF65] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#F8F1E6]">
                      {BUSINESS_CONFIG.about.locationHighlight}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleTriggerCall}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-xs sm:text-sm shrink-0 hover:bg-[#E5C888] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 fill-current" />
                    <span>Call {BUSINESS_CONFIG.contact.phoneDisplay}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* I. LOCATION, VERIFIED OPENING HOURS & DIRECTIONS                   */}
        {/* ================================================================== */}
        <section
          id="location"
          className="py-20 sm:py-24 bg-[#171313] border-t border-[#D4AF65]/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold">
                Find Us in Bhangala
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F1E6] mt-3">
                Location, Hours &amp; Directions
              </h2>
              <OrnamentalDivider className="my-5" />
              <p className="text-base sm:text-lg text-[#D8C9B2]">
                Located opposite the Railway Station in Bhangala, Jandwal, Punjab 144306.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-5 bg-[#211B1B] border border-[#D4AF65]/30 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#D4AF65] font-semibold">
                      Verified Address
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#F8F1E6] mt-1">
                      {BUSINESS_CONFIG.name}
                    </h3>
                    <address className="not-italic text-base text-[#D8C9B2] mt-2 space-y-1 leading-relaxed">
                      <p>{BUSINESS_CONFIG.address.line1}</p>
                      <p>
                        {BUSINESS_CONFIG.address.line2},{' '}
                        {BUSINESS_CONFIG.address.state}{' '}
                        {BUSINESS_CONFIG.address.postalCode}
                      </p>
                    </address>
                  </div>

                  <div className="p-4 rounded-sm bg-[#171313] border border-[#D4AF65]/20 flex items-center gap-3">
                    <Compass className="w-5 h-5 text-[#D4AF65] shrink-0" />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#D8C9B2] block">
                        Google Maps Plus Code &amp; Coordinates
                      </span>
                      <span className="text-sm font-semibold text-[#F8F1E6]">
                        {BUSINESS_CONFIG.address.plusCode} ({BUSINESS_CONFIG.coordinates.lat}, {BUSINESS_CONFIG.coordinates.lng})
                      </span>
                    </div>
                  </div>

                  {/* Verified Opening Hours from Google Business Profile */}
                  <div className="p-4 rounded-sm bg-[#171313] border border-[#D4AF65]/25 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-[#D4AF65] font-semibold inline-flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>Verified Opening Hours</span>
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-sm bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                        Open 7 Days
                      </span>
                    </div>

                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#D8C9B2]">
                      {BUSINESS_CONFIG.services.openingHours.map((item) => (
                        <li
                          key={item.days}
                          className="flex items-center justify-between border-b border-[#D4AF65]/10 pb-1 last:border-b-0 last:pb-0"
                        >
                          <span className="font-medium text-[#F8F1E6]">
                            {item.days}
                          </span>
                          <span className="text-[#D4AF65] font-medium">
                            {item.hours}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-[11px] text-[#D8C9B2]/75 pt-1 italic">
                      {BUSINESS_CONFIG.services.busynessNote}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#D4AF65]/20 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={BUSINESS_CONFIG.maps.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-sm hover:bg-[#E5C888] transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Get Directions</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleTriggerCall}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-[#351014] text-[#F8F1E6] border border-[#D4AF65]/40 font-semibold text-sm hover:bg-[#4A181E] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#D4AF65]" />
                      <span>Call Restaurant</span>
                    </button>
                  </div>

                  {floatingWhatsAppUrl && (
                    <a
                      href={floatingWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Chat on WhatsApp ({BUSINESS_CONFIG.contact.phoneDisplay})</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-[#171313] border border-[#D4AF65]/30 text-[#D8C9B2] hover:text-[#F8F1E6] hover:border-[#D4AF65] text-xs sm:text-sm font-medium transition-colors"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300">
                          Address Copied to Clipboard!
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#D4AF65]" />
                        <span>Copy Full Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#211B1B] border border-[#D4AF65]/30 rounded-sm overflow-hidden shadow-xl min-h-[380px] flex flex-col">
                <div className="px-4 py-3 bg-[#171313] border-b border-[#D4AF65]/20 flex items-center justify-between text-xs text-[#D8C9B2]">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF65]" />
                    <span>
                      Filling Station, opposite Railway Station, Bhangala, Punjab 144306
                    </span>
                  </span>
                  <a
                    href={BUSINESS_CONFIG.maps.placeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF65] hover:underline font-medium shrink-0 ml-2"
                  >
                    Open in Google Maps
                  </a>
                </div>
                <div className="relative flex-1 min-h-[360px] bg-[#171313]">
                  <iframe
                    title="Google Map Location for Rajdarbar Restaurant Bhangala"
                    src={BUSINESS_CONFIG.maps.embedUrl}
                    className="w-full h-full min-h-[360px] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* J. CONTACT AND ENQUIRY                                             */}
        {/* ================================================================== */}
        <section
          id="contact"
          className="py-20 sm:py-24 bg-gradient-to-b from-[#171313] via-[#351014]/30 to-[#171313] border-t border-[#D4AF65]/20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold">
                Reservations, Dining &amp; Room Enquiries
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F1E6] mt-3">
                Contact &amp; Enquiry
              </h2>
              <OrnamentalDivider className="my-5" />
              <p className="text-base sm:text-lg text-[#D8C9B2] max-w-2xl mx-auto">
                Planning a family dinner, group party, or overnight room stay in Bhangala? Prepare your enquiry below to connect via WhatsApp or call{' '}
                <button
                  type="button"
                  onClick={handleTriggerCall}
                  className="text-[#D4AF65] font-semibold hover:underline"
                >
                  {BUSINESS_CONFIG.contact.phoneDisplay}
                </button>
                .
              </p>
            </div>

            <div className="bg-[#211B1B] border border-[#D4AF65]/30 rounded-sm p-6 sm:p-10 shadow-2xl">
              <form onSubmit={handleEnquirySubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block text-xs uppercase tracking-wider text-[#D8C9B2] font-semibold mb-2"
                    >
                      Your Name <span className="text-[#D4AF65]">*</span>
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Gurpreet Singh"
                      aria-invalid={Boolean(errors.name)}
                      className="w-full px-4 py-3 rounded-sm bg-[#171313] border border-[#D4AF65]/30 text-[#F8F1E6] placeholder-[#D8C9B2]/40 text-sm focus:outline-none focus:border-[#D4AF65]"
                    />
                    {errors.name && (
                      <p
                        role="alert"
                        className="text-xs text-red-400 mt-1.5 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-xs uppercase tracking-wider text-[#D8C9B2] font-semibold mb-2"
                    >
                      Phone Number <span className="text-[#D4AF65]">*</span>
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g., 098765 43210"
                      aria-invalid={Boolean(errors.phone)}
                      className="w-full px-4 py-3 rounded-sm bg-[#171313] border border-[#D4AF65]/30 text-[#F8F1E6] placeholder-[#D8C9B2]/40 text-sm focus:outline-none focus:border-[#D4AF65]"
                    />
                    {errors.phone && (
                      <p
                        role="alert"
                        className="text-xs text-red-400 mt-1.5 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-type"
                    className="block text-xs uppercase tracking-wider text-[#D8C9B2] font-semibold mb-2"
                  >
                    Enquiry Type
                  </label>
                  <select
                    id="enquiry-type"
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="w-full px-4 py-3 rounded-sm bg-[#171313] border border-[#D4AF65]/30 text-[#F8F1E6] text-sm focus:outline-none focus:border-[#D4AF65]"
                  >
                    <option value="Dining">Dining / Table Reservation</option>
                    <option value={roomOptionLabel}>{roomOptionLabel}</option>
                    <option value="Group Booking">Group Booking / Private Dining</option>
                    <option value="General Enquiry">General / Takeout / Delivery Enquiry</option>
                  </select>
                </div>

                {showDateAndGuests && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
                    <div>
                      <label
                        htmlFor="enquiry-date"
                        className="block text-xs uppercase tracking-wider text-[#D8C9B2] font-semibold mb-2"
                      >
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#D4AF65]" />
                          <span>Preferred Date (Optional)</span>
                        </span>
                      </label>
                      <input
                        id="enquiry-date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-sm bg-[#171313] border border-[#D4AF65]/30 text-[#F8F1E6] text-sm focus:outline-none focus:border-[#D4AF65]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-guests"
                        className="block text-xs uppercase tracking-wider text-[#D8C9B2] font-semibold mb-2"
                      >
                        <span className="inline-flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[#D4AF65]" />
                          <span>Number of Guests</span>
                        </span>
                      </label>
                      <input
                        id="enquiry-guests"
                        type="number"
                        min="1"
                        max="200"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        aria-invalid={Boolean(errors.guests)}
                        className="w-full px-4 py-3 rounded-sm bg-[#171313] border border-[#D4AF65]/30 text-[#F8F1E6] text-sm focus:outline-none focus:border-[#D4AF65]"
                      />
                      {errors.guests && (
                        <p role="alert" className="text-xs text-red-400 mt-1.5">
                          {errors.guests}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="enquiry-message"
                    className="block text-xs uppercase tracking-wider text-[#D8C9B2] font-semibold mb-2"
                  >
                    Your Message <span className="text-[#D4AF65]">*</span>
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your dining reservation, room booking dates, or menu questions..."
                    aria-invalid={Boolean(errors.message)}
                    className="w-full px-4 py-3 rounded-sm bg-[#171313] border border-[#D4AF65]/30 text-[#F8F1E6] placeholder-[#D8C9B2]/40 text-sm focus:outline-none focus:border-[#D4AF65]"
                  />
                  {errors.message && (
                    <p
                      role="alert"
                      className="text-xs text-red-400 mt-1.5 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-sm sm:text-base tracking-wide hover:bg-[#E5C888] transition-all shadow-lg"
                  >
                    Prepare Enquiry Details
                  </button>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    {floatingWhatsAppUrl && (
                      <a
                        href={floatingWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-sm bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Direct WhatsApp</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={handleTriggerCall}
                      className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-sm border border-[#D4AF65]/40 text-[#F8F1E6] hover:bg-[#351014] text-sm font-medium transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#D4AF65]" />
                      <span>Call {BUSINESS_CONFIG.contact.phoneDisplay}</span>
                    </button>
                  </div>
                </div>
              </form>

              {submittedSummary && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-8 p-6 rounded-sm bg-[#171313] border border-[#D4AF65]/50 space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF65] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-[#F8F1E6]">
                        Enquiry Ready — Send via WhatsApp or Direct Call
                      </h3>
                      <p className="text-xs sm:text-sm text-[#D8C9B2] mt-1 leading-relaxed">
                        Because this website does not use an automated background server,{' '}
                        <strong className="text-[#F8F1E6]">
                          your enquiry is not sent automatically
                        </strong>
                        . Click below to send your pre-filled message directly to Rajdarbar Restaurant on WhatsApp or call us now:
                      </p>
                    </div>
                  </div>

                  <pre className="p-4 rounded-sm bg-[#211B1B] border border-[#D4AF65]/20 text-xs text-[#F8F1E6] whitespace-pre-wrap font-sans leading-relaxed">
                    {submittedSummary}
                  </pre>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    {enquiryWhatsAppUrl && (
                      <a
                        href={enquiryWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-emerald-700 text-white font-semibold text-xs sm:text-sm hover:bg-emerald-600 transition-colors shadow-md"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send Enquiry via WhatsApp</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={handleTriggerCall}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-xs sm:text-sm hover:bg-[#E5C888] transition-colors"
                    >
                      <Phone className="w-4 h-4 fill-current" />
                      <span>Call {BUSINESS_CONFIG.contact.phoneDisplay} Now</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-1.5 px-4 py-3 rounded-sm border border-[#D4AF65]/30 text-xs text-[#D8C9B2] hover:text-[#F8F1E6]"
                    >
                      {copiedSummary ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-300">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#D4AF65]" />
                          <span>Copy Summary</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ================================================================== */}
      {/* K. FOOTER (With extra bottom padding so mobile bars never clip)    */}
      {/* ================================================================== */}
      <footer className="bg-[#120E0E] border-t border-[#D4AF65]/30 text-[#D8C9B2] pb-28 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="font-serif text-2xl font-bold tracking-[0.18em] text-[#F8F1E6] block">
                  {BUSINESS_CONFIG.wordmark}
                </span>
                <span className="text-[10px] tracking-[0.24em] uppercase text-[#D4AF65] font-medium block mt-0.5">
                  {BUSINESS_CONFIG.subtitle}
                </span>
              </div>
              <p className="text-sm text-[#D8C9B2] max-w-sm leading-relaxed">
                {BUSINESS_CONFIG.officialTagline} Located opposite the Railway Station in Bhangala, Jandwal, Punjab.
              </p>
              <div className="pt-1 text-xs text-[#D4AF65]">
                Rated {BUSINESS_CONFIG.rating.score}/5 on Google (
                {BUSINESS_CONFIG.rating.reviewCount} reviews) • Open Daily
              </div>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#D4AF65] font-semibold">
                Navigation
              </h3>
              <ul className="space-y-2.5 text-sm">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'story', label: 'Our Story' },
                  { id: 'experience', label: 'Discover the Flavours' },
                  { id: 'menu', label: 'Menu Showcase (95+ Items)' },
                  { id: 'gallery', label: 'Photo Gallery' },
                  { id: 'location', label: 'Hours & Directions' },
                  { id: 'contact', label: 'Contact & Room Enquiry' },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className="hover:text-[#D4AF65] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#D4AF65] font-semibold">
                Visit &amp; Contact
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D4AF65] shrink-0 mt-1" />
                  <div>
                    <p className="text-[#F8F1E6] font-medium">
                      {BUSINESS_CONFIG.name}
                    </p>
                    <p>{BUSINESS_CONFIG.address.full}</p>
                    <p className="text-xs text-[#D4AF65] mt-0.5">
                      Plus Code: {BUSINESS_CONFIG.address.plusCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#D4AF65] shrink-0" />
                  <button
                    type="button"
                    onClick={handleTriggerCall}
                    className="text-[#F8F1E6] font-semibold hover:text-[#D4AF65]"
                  >
                    {BUSINESS_CONFIG.contact.phoneDisplay}
                  </button>
                </div>

                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#D4AF65] shrink-0" />
                  <a
                    href={BUSINESS_CONFIG.contact.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4AF65] inline-flex items-center gap-1"
                  >
                    <span>{BUSINESS_CONFIG.contact.websiteDisplay}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={BUSINESS_CONFIG.maps.placeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#D4AF65] font-semibold hover:underline"
                  >
                    <span>Google Business Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {BUSINESS_CONFIG.socials.instagram && (
                    <a
                      href={BUSINESS_CONFIG.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-[#D8C9B2] hover:text-[#D4AF65]"
                    >
                      <span>Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* In-Page Owner Config Preview Section (Moved out of floating corner so it is never cut off on mobile!) */}
          <div className="mt-10 pt-6 border-t border-[#D4AF65]/15">
            {!configDrawerOpen ? (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-[#D8C9B2]/70">
                  &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.name}, Bhangala, Punjab. All rights reserved.
                </p>
                <button
                  type="button"
                  onClick={() => setConfigDrawerOpen(true)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-[#211B1B] border border-[#D4AF65]/35 text-xs text-[#D8C9B2] hover:text-[#F8F1E6] hover:border-[#D4AF65]"
                >
                  <Settings className="w-3.5 h-3.5 text-[#D4AF65]" />
                  <span>Owner Config Preview</span>
                </button>
              </div>
            ) : (
              <div className="bg-[#211B1B] border border-[#D4AF65]/50 rounded-sm p-4 sm:p-5 shadow-2xl text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[#D4AF65]/20 pb-2.5">
                  <span className="font-semibold text-[#D4AF65] uppercase tracking-wider flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Owner Config Simulator (Developer Preview)</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setConfigDrawerOpen(false)}
                    aria-label="Close configuration simulator"
                    className="p-1 text-[#D8C9B2] hover:text-[#F8F1E6]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[#D8C9B2]/80 leading-relaxed">
                  Test how the website responds when settings in{' '}
                  <code className="text-[#D4AF65]">src/config/business.ts</code> are toggled:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                  <div>
                    <label
                      htmlFor="sim-whatsapp"
                      className="block text-[#F8F1E6] font-medium mb-1.5"
                    >
                      WhatsApp Number:
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="sim-whatsapp"
                        type="text"
                        value={whatsappConfigInput}
                        onChange={(e) => setWhatsappConfigInput(e.target.value)}
                        placeholder="e.g., +91 90418 61094"
                        className="flex-1 px-2.5 py-2 rounded-sm bg-[#171313] border border-[#D4AF65]/30 text-[#F8F1E6]"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setWhatsappConfigInput(
                            whatsappConfigInput ? '' : '+91 90418 61094'
                          )
                        }
                        className="px-3 py-2 rounded-sm bg-[#351014] border border-[#D4AF65]/40 text-[#D4AF65] font-medium"
                      >
                        {whatsappConfigInput ? 'Disable' : 'Enable'}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-sm bg-[#171313] border border-[#D4AF65]/20">
                    <span className="text-[#F8F1E6]">Google Menu (95+ Items):</span>
                    <button
                      type="button"
                      onClick={() => setShowLiveMenu((prev) => !prev)}
                      className={`px-3 py-1.5 rounded-sm font-semibold ${
                        showLiveMenu
                          ? 'bg-[#D4AF65] text-[#171313]'
                          : 'bg-[#211B1B] text-[#D8C9B2] border border-[#D4AF65]/30'
                      }`}
                    >
                      {showLiveMenu ? 'Active' : 'Empty State'}
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-sm bg-[#171313] border border-[#D4AF65]/20">
                    <span className="text-[#F8F1E6]">Room Service:</span>
                    <button
                      type="button"
                      onClick={() => setRoomBookingConfirmed((prev) => !prev)}
                      className={`px-3 py-1.5 rounded-sm font-semibold ${
                        roomBookingConfirmed
                          ? 'bg-[#D4AF65] text-[#171313]'
                          : 'bg-[#211B1B] text-[#D8C9B2] border border-[#D4AF65]/30'
                      }`}
                    >
                      {roomBookingConfirmed ? 'Confirmed' : 'Ask About Rooms'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </footer>

      {/* ================================================================== */}
      {/* 5. ELEVATED MOBILE-SAFE FLOATING BAR (Never hidden at bottom!)     */}
      {/* ================================================================== */}
      <div className="fixed bottom-16 sm:bottom-6 right-4 z-40 flex items-center gap-2.5">
        <button
          type="button"
          onClick={handleTriggerCall}
          aria-label="Call Rajdarbar Restaurant"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#D4AF65] hover:bg-[#E5C888] text-[#171313] font-semibold text-xs sm:text-sm shadow-2xl border border-[#171313]/20 transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8F1E6]"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>Call Now</span>
        </button>

        {floatingWhatsAppUrl && (
          <a
            href={floatingWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire with Rajdarbar Restaurant on WhatsApp"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm shadow-2xl border border-emerald-400/30 transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF65]"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>
        )}
      </div>

      {/* ================================================================== */}
      {/* UNIVERSAL CALL & WHATSAPP MODAL (Works on Desktop & Mobile!)       */}
      {/* ================================================================== */}
      {callModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Call or Message Rajdarbar Restaurant"
          className="fixed inset-0 z-50 bg-[#171313]/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setCallModalOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-[#211B1B] border border-[#D4AF65]/50 rounded-sm p-6 sm:p-8 shadow-2xl text-center space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setCallModalOpen(false)}
              aria-label="Close call dialog"
              className="absolute top-3.5 right-3.5 p-1.5 rounded-sm text-[#D8C9B2] hover:text-[#F8F1E6] border border-[#D4AF65]/30"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-14 h-14 rounded-full bg-[#351014] border border-[#D4AF65]/50 flex items-center justify-center mx-auto">
              <PhoneCall className="w-6 h-6 text-[#D4AF65]" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF65] font-semibold">
                Direct Restaurant Line
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F8F1E6] mt-1">
                {BUSINESS_CONFIG.name}
              </h3>
              <p className="text-xs text-[#D8C9B2] mt-1">
                Opposite Railway Station, Bhangala, Punjab 144306
              </p>
            </div>

            <div className="p-4 rounded-sm bg-[#171313] border border-[#D4AF65]/30">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF65] tracking-wider select-all">
                {BUSINESS_CONFIG.contact.phoneDisplay}
              </p>
              {copiedPhone && (
                <p className="text-xs text-emerald-400 mt-1.5 inline-flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Phone number copied to clipboard!</span>
                </p>
              )}
            </div>

            <div className="space-y-2.5 pt-1">
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneDial}`}
                target="_top"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-[#D4AF65] hover:bg-[#E5C888] text-[#171313] font-semibold text-sm transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Open Phone Dialer ({BUSINESS_CONFIG.contact.phoneDisplay})</span>
              </a>

              {floatingWhatsAppUrl && (
                <a
                  href={floatingWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setCallModalOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp Instead</span>
                </a>
              )}

              <button
                type="button"
                onClick={handleCopyPhoneNumberOnly}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-[#171313] border border-[#D4AF65]/35 text-[#F8F1E6] hover:border-[#D4AF65] text-xs sm:text-sm font-medium transition-colors"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Copied {BUSINESS_CONFIG.contact.phoneDisplay}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#D4AF65]" />
                    <span>Copy Phone Number</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
