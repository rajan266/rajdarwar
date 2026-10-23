import React from 'react';
import { Phone, MapPin, Globe, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const hasVerifiedSocials = Boolean(
    BUSINESS_CONFIG.socials.instagram ||
      BUSINESS_CONFIG.socials.facebook ||
      BUSINESS_CONFIG.socials.youtube
  );

  return (
    <footer className="bg-[#120E0E] border-t border-[#D4AF65]/30 text-[#D8C9B2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand Wordmark & Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-[0.18em] text-[#F8F1E6] block">
                {BUSINESS_CONFIG.wordmark}
              </span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#D4AF65] font-medium block mt-0.5">
                {BUSINESS_CONFIG.subtitle}
              </span>
            </div>
            <p className="text-sm text-[#D8C9B2] max-w-sm leading-relaxed">
              Delicious Indian dining and warm hospitality located opposite the Railway Station in Bhangala, Jandwal, Punjab.
            </p>
            <div className="pt-1 text-xs text-[#D4AF65]">
              Rated {BUSINESS_CONFIG.rating.score}/5 on Google ({BUSINESS_CONFIG.rating.reviewCount} reviews)
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#D4AF65] font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'story', label: 'Our Story' },
                { id: 'experience', label: 'Discover the Flavours' },
                { id: 'menu', label: 'Menu Showcase' },
                { id: 'gallery', label: 'Photo Gallery' },
                { id: 'location', label: 'Location & Directions' },
                { id: 'contact', label: 'Contact & Enquiry' },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                    }}
                    className="hover:text-[#D4AF65] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Contact & Links */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#D4AF65] font-semibold">
              Visit &amp; Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF65] shrink-0 mt-1" />
                <div>
                  <p className="text-[#F8F1E6] font-medium">{BUSINESS_CONFIG.name}</p>
                  <p>{BUSINESS_CONFIG.address.full}</p>
                  <p className="text-xs text-[#D4AF65] mt-0.5">
                    Plus Code: {BUSINESS_CONFIG.address.plusCode}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF65] shrink-0" />
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneDial}`}
                  className="text-[#F8F1E6] font-semibold hover:text-[#D4AF65]"
                >
                  {BUSINESS_CONFIG.contact.phoneDisplay}
                </a>
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

              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#D4AF65] font-semibold hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {hasVerifiedSocials && (
                <div className="pt-3 flex items-center gap-4">
                  {BUSINESS_CONFIG.socials.instagram && (
                    <a
                      href={BUSINESS_CONFIG.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#D8C9B2] hover:text-[#D4AF65]"
                    >
                      Instagram
                    </a>
                  )}
                  {BUSINESS_CONFIG.socials.facebook && (
                    <a
                      href={BUSINESS_CONFIG.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#D8C9B2] hover:text-[#D4AF65]"
                    >
                      Facebook
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-[#D4AF65]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C9B2]/70">
          <p>
            &copy; {currentYear} {BUSINESS_CONFIG.name}, Bhangala, Punjab. All rights reserved.
          </p>
          <p>Opposite Railway Station, Bhangala, Jandwal, Punjab 144306</p>
        </div>
      </div>
    </footer>
  );
};
