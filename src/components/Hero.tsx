import React from 'react';
import { Utensils, Navigation, Phone, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { OrnamentalDivider } from './OrnamentalDivider';
import heroImg from '../assets/hero.jpg';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background High-Resolution Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Authentic Indian dining table spread with copper handis, curries, saffron rice, and fresh naan at Rajdarbar Restaurant"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          fetchPriority="high"
        />
        {/* Multi-layered Royal Burgundy & Near-Black Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(23,19,19,0.84) 0%, rgba(53,16,20,0.72) 52%, rgba(23,19,19,0.96) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#171313_100%)] opacity-80" />
      </div>

      {/* Subtle Architectural Frame Border */}
      <div
        className="absolute inset-4 sm:inset-8 border border-[#D4AF65]/20 pointer-events-none z-10 hidden sm:block"
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Location Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#351014]/90 border border-[#D4AF65]/40 text-[#D8C9B2] text-xs sm:text-sm tracking-wider uppercase mb-6 shadow-lg">
          <MapPin className="w-3.5 h-3.5 text-[#D4AF65] shrink-0" />
          <span>Opposite Railway Station • Bhangala, Punjab</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8F1E6] tracking-tight leading-[1.12] mb-6">
          Experience the Royal Taste of India
        </h1>

        {/* Gold Decorative Separator */}
        <OrnamentalDivider className="my-6" />

        {/* Supporting Copy */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#D8C9B2] font-normal leading-relaxed mb-10">
          Delicious food, warm hospitality, and memorable moments await you at Rajdarbar Restaurant.
        </p>

        {/* Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto">
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('menu');
            }}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-base tracking-wide hover:bg-[#E5C888] transition-all shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8F1E6]"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Our Menu</span>
          </a>

          <a
            href={BUSINESS_CONFIG.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm bg-[#351014]/85 text-[#F8F1E6] border border-[#D4AF65]/50 font-semibold text-base tracking-wide hover:bg-[#351014] hover:border-[#D4AF65] transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF65]"
          >
            <Navigation className="w-4 h-4 text-[#D4AF65]" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Direct Phone Assist Bar */}
        <div className="mt-10 pt-6 border-t border-[#D4AF65]/20 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#D8C9B2]">
          <span>For dining &amp; group enquiries:</span>
          <a
            href={`tel:${BUSINESS_CONFIG.contact.phoneDial}`}
            className="inline-flex items-center gap-1.5 text-[#D4AF65] font-semibold hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{BUSINESS_CONFIG.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
