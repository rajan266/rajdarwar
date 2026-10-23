import React, { useState } from 'react';
import { Phone, UtensilsCrossed, Sparkles, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import {
  MENU_CATEGORIES,
  VERIFIED_MENU_ITEMS,
  MenuCategoryId,
  MenuItem,
} from '../data/menu';
import { OrnamentalDivider } from './OrnamentalDivider';

interface MenuSectionProps {
  customItems?: MenuItem[];
  onEnquireMenu: (category: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  customItems,
  onEnquireMenu,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId>('All');

  const sourceItems = customItems ?? VERIFIED_MENU_ITEMS;
  const filteredItems =
    selectedCategory === 'All'
      ? sourceItems
      : sourceItems.filter(
          (item) =>
            item.category === selectedCategory || item.dietary === selectedCategory
        );

  const activeCategoryMeta =
    MENU_CATEGORIES.find((cat) => cat.id === selectedCategory) || MENU_CATEGORIES[0];

  return (
    <section
      id="menu"
      className="py-20 sm:py-24 bg-gradient-to-b from-[#351014]/35 via-[#171313] to-[#171313] border-y border-[#D4AF65]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold">
            Culinary Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F1E6] mt-3">
            Menu Showcase
          </h2>
          <OrnamentalDivider className="my-5" />
          <p className="text-base sm:text-lg text-[#D8C9B2] leading-relaxed">
            Explore our dining categories below. We publish only verified dishes and official restaurant pricing.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Menu Categories"
          className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {MENU_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category.id)}
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

        {/* Active Category Description Banner */}
        <div className="max-w-3xl mx-auto text-center mb-10 px-4">
          <p className="text-xs uppercase tracking-widest text-[#D4AF65]">
            {activeCategoryMeta.tagline}
          </p>
          <p className="text-sm sm:text-base text-[#D8C9B2] mt-1">
            {activeCategoryMeta.description}
          </p>
        </div>

        {/* Conditional Rendering: Verified Menu Grid vs. Royal Empty State */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((dish) => (
              <article
                key={dish.id}
                className="bg-[#211B1B] border border-[#D4AF65]/25 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#D4AF65]/60 transition-all shadow-lg"
              >
                {dish.image && (
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#351014]/40 relative">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-sm bg-[#171313]/90 border border-[#D4AF65]/40 text-xs font-semibold text-[#D4AF65]">
                      {dish.category}
                    </span>
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-serif text-xl font-semibold text-[#F8F1E6]">
                        {dish.name}
                      </h3>
                      <span className="font-serif text-lg font-bold text-[#D4AF65] shrink-0">
                        {dish.price}
                      </span>
                    </div>
                    {dish.dietary && (
                      <span
                        className={`inline-block mt-1.5 text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-sm border ${
                          dish.dietary === 'Vegetarian'
                            ? 'border-emerald-500/40 text-emerald-300 bg-emerald-950/40'
                            : 'border-amber-500/40 text-amber-300 bg-amber-950/40'
                        }`}
                      >
                        {dish.dietary}
                      </span>
                    )}
                    <p className="text-sm text-[#D8C9B2] mt-3 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Elegant Verified Empty State */
          <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#351014]/60 to-[#211B1B] border border-[#D4AF65]/35 rounded-sm p-8 sm:p-12 text-center shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-[#171313] border border-[#D4AF65]/40 flex items-center justify-center mx-auto mb-5">
              <UtensilsCrossed className="w-6 h-6 text-[#D4AF65]" />
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171313]/80 border border-[#D4AF65]/30 text-xs text-[#D4AF65] font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeCategoryMeta.label} — Official Menu Update Pending</span>
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F1E6] mt-1">
              Verified Digital Menu Coming Soon
            </h3>

            <p className="text-sm sm:text-base text-[#D8C9B2] max-w-xl mx-auto mt-3 leading-relaxed">
              To ensure complete accuracy, we do not list unverified dishes or placeholder prices online. Our kitchen prepares fresh North Indian dishes daily—please call us directly to enquire about today’s{' '}
              <span className="text-[#F8F1E6] font-medium">
                {selectedCategory === 'All' ? 'full menu' : activeCategoryMeta.label.toLowerCase()}
              </span>{' '}
              and current rates.
            </p>

            {/* Proposed Category Pills Overview */}
            <div className="mt-6 pt-6 border-t border-[#D4AF65]/20">
              <p className="text-xs uppercase tracking-widest text-[#D8C9B2]/80 mb-3">
                Proposed Dining Categories
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {MENU_CATEGORIES.filter((c) => c.id !== 'All').map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`text-xs px-3 py-1.5 rounded-sm border transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-[#D4AF65]/20 border-[#D4AF65] text-[#F8F1E6]'
                        : 'bg-[#171313]/60 border-[#D4AF65]/20 text-[#D8C9B2] hover:border-[#D4AF65]/50'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary & Secondary Menu Enquiry CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneDial}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-sm sm:text-base hover:bg-[#E5C888] transition-all shadow-lg"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call to Enquire About the Menu</span>
              </a>

              <button
                type="button"
                onClick={() => onEnquireMenu(activeCategoryMeta.label)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm border border-[#D4AF65]/50 bg-[#171313]/70 text-[#F8F1E6] hover:bg-[#351014] text-sm sm:text-base font-medium transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#D4AF65]" />
                <span>Send a Menu Enquiry</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
