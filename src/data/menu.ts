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
  dietary?: 'Vegetarian' | 'Non-Vegetarian';
  description: string;
  price: string; // e.g., "₹240" — only populate verified prices
  image?: string;
  isAvailable?: boolean;
}

export const MENU_CATEGORIES: MenuCategoryMeta[] = [
  {
    id: 'All',
    label: 'All Categories',
    tagline: 'Complete Culinary Overview',
    description: 'Browse our proposed dining categories or contact the restaurant directly for today’s confirmed dishes and pricing.',
  },
  {
    id: 'Vegetarian',
    label: 'Vegetarian',
    tagline: 'Garden & Paneer Preparations',
    description: 'Traditional vegetarian delicacies crafted with seasonal produce, cottage cheese, lentils, and aromatic Indian spices.',
  },
  {
    id: 'Non-Vegetarian',
    label: 'Non-Vegetarian',
    tagline: 'Classic Poultry & Meat Dishes',
    description: 'Hearty North Indian non-vegetarian preparations cooked in traditional gravies and clay-oven marinades.',
  },
  {
    id: 'Starters',
    label: 'Starters',
    tagline: 'Appetizers & Tandoori Platters',
    description: 'Warm, freshly prepared starters and smoky clay-oven accompaniments ideal for sharing at the table.',
  },
  {
    id: 'Main Course',
    label: 'Main Course',
    tagline: 'Rich Gravies & Handi Classics',
    description: 'Slow-simmered curries, dals, and comforting main courses designed to pair with Indian breads and basmati rice.',
  },
  {
    id: 'Breads',
    label: 'Breads',
    tagline: 'Fresh from the Clay Tandoor',
    description: 'Warm, freshly baked Indian breads including classic rotis, naans, and flaky layered parathas.',
  },
  {
    id: 'Beverages',
    label: 'Beverages',
    tagline: 'Refreshments & Traditional Drinks',
    description: 'Chilled refreshments, traditional lassi, and hot beverages to complement your dining experience.',
  },
];

/**
 * VERIFIED MENU ITEMS
 * -------------------
 * Keep this array empty [] until the restaurant owner supplies the verified menu items and prices.
 * Never fabricate dishes, ingredients, or prices on the live site.
 *
 * Example structure for adding verified dishes later:
 * {
 *   id: 'dish-1',
 *   name: 'Verified Dish Name',
 *   category: 'Main Course',
 *   dietary: 'Vegetarian',
 *   description: 'Verified description of the dish from the official restaurant menu.',
 *   price: '₹---',
 *   image: '/assets/curry.jpg',
 *   isAvailable: true,
 * }
 */
export const VERIFIED_MENU_ITEMS: MenuItem[] = [];
