import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { OrnamentalDivider } from './OrnamentalDivider';
import detailsImg from '../assets/details.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="story"
      className="py-20 sm:py-24 bg-gradient-to-b from-[#171313] via-[#351014]/25 to-[#171313] border-t border-[#D4AF65]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5">
            <div className="relative p-3 border border-[#D4AF65]/35 rounded-sm bg-[#211B1B] shadow-2xl">
              <img
                src={detailsImg}
                alt="Warm table setting with antique brass goblets and carved wooden jali backdrop at Rajdarbar Restaurant"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover rounded-sm"
              />
              <div className="mt-3 px-3 py-2.5 bg-[#171313] border border-[#D4AF65]/20 flex items-center justify-between text-xs text-[#D8C9B2]">
                <span>{BUSINESS_CONFIG.name}</span>
                <span className="text-[#D4AF65] font-medium">Bhangala, Punjab</span>
              </div>
            </div>
          </div>

          {/* Copy Column */}
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
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneDial}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-xs sm:text-sm shrink-0 hover:bg-[#E5C888] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call {BUSINESS_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
