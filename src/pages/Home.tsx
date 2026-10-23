import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { MenuSection } from '../components/MenuSection';
import { WhyVisitSection } from '../components/WhyVisitSection';
import { Gallery } from '../components/Gallery';
import { AboutSection } from '../components/AboutSection';
import { LocationSection } from '../components/LocationSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [prefilledMenuCategory, setPrefilledMenuCategory] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const sectionIds = ['home', 'story', 'experience', 'menu', 'why-visit', 'gallery', 'location', 'contact'];
    const handleScroll = () => {
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnquireMenu = (categoryLabel: string) => {
    setPrefilledMenuCategory(categoryLabel);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#171313] text-[#F8F1E6] flex flex-col selection:bg-[#D4AF65] selection:text-[#171313]">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <main className="flex-1">
        <Hero onNavigate={scrollToSection} />
        <TrustSection />
        <ExperienceSection />
        <MenuSection onEnquireMenu={handleEnquireMenu} />
        <WhyVisitSection />
        <Gallery />
        <AboutSection />
        <LocationSection />
        <ContactSection prefilledCategory={prefilledMenuCategory} />
      </main>
      <Footer onNavigate={scrollToSection} />
      <WhatsAppButton />
    </div>
  );
};
