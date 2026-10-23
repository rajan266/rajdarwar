import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#171313]/95 backdrop-blur-md border-b border-[#D4AF65]/25 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#171313]/90 via-[#171313]/50 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF65] rounded-sm"
            aria-label={`${BUSINESS_CONFIG.name} - Home`}
          >
            <span className="font-serif text-xl sm:text-2xl md:text-[26px] font-bold tracking-[0.18em] text-[#F8F1E6] group-hover:text-[#D4AF65] transition-colors">
              {BUSINESS_CONFIG.wordmark}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#D4AF65] font-medium mt-0.5">
              {BUSINESS_CONFIG.subtitle}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Primary Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF65] rounded-sm ${
                    isActive ? 'text-[#D4AF65]' : 'text-[#F8F1E6]/90 hover:text-[#D4AF65]'
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

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_CONFIG.contact.phoneDial}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-sm tracking-wide hover:bg-[#E5C888] transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8F1E6]"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Quick Call & Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${BUSINESS_CONFIG.contact.phoneDial}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-xs tracking-wide"
              aria-label={`Call ${BUSINESS_CONFIG.name} at ${BUSINESS_CONFIG.contact.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call Now</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="p-2 rounded-sm text-[#F8F1E6] hover:text-[#D4AF65] border border-[#D4AF65]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF65]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#171313] border-b border-[#D4AF65]/30 px-4 pt-4 pb-6 mt-3 space-y-3"
        >
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
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

          <div className="pt-3 border-t border-[#D4AF65]/20 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_CONFIG.contact.phoneDial}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-sm"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call {BUSINESS_CONFIG.contact.phoneDisplay}</span>
            </a>
            <a
              href={BUSINESS_CONFIG.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm border border-[#D4AF65]/40 text-[#F8F1E6] text-sm font-medium hover:bg-[#351014]/50"
            >
              <MapPin className="w-4 h-4 text-[#D4AF65]" />
              <span>Opposite Railway Station, Bhangala</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
