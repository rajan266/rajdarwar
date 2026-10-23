import React from 'react';
import { OrnamentalDivider } from './OrnamentalDivider';
import tandooriImg from '../assets/tandoori.jpg';
import curryImg from '../assets/curry.jpg';
import breadsImg from '../assets/breads.jpg';
import diningImg from '../assets/dining.jpg';

const FLAVOUR_HIGHLIGHTS = [
  {
    id: 'curries',
    title: 'Aromatic Handis & Gravies',
    subtitle: 'Traditional North Indian Preparation',
    description:
      'Slow-simmered gravies infused with whole roasted spices, herbs, and rich textures designed for sharing at the family table.',
    image: curryImg,
    alt: 'Traditional hammered copper handis filled with aromatic Indian curries and garnished with ginger and fresh coriander',
  },
  {
    id: 'tandoor',
    title: 'Clay-Oven Tandoori Craft',
    subtitle: 'Smoky & Charred',
    description:
      'Classic tandoori preparations marinated with traditional spices and roasted to perfection in the warmth of the clay oven.',
    image: tandooriImg,
    alt: 'Clay-oven tandoori delicacies served on an antique brass platter with mint chutney and charred spices',
  },
  {
    id: 'breads',
    title: 'Freshly Baked Indian Breads',
    subtitle: 'Warm from the Tandoor',
    description:
      'Crisp, pillowy naans, rotis, and flaky layered parathas served piping hot to complement every savoury accompaniment.',
    image: breadsImg,
    alt: 'Freshly baked golden naan and flaky layered lacha paratha in a traditional brass basket',
  },
  {
    id: 'hospitality',
    title: 'Comfortable Family Dining',
    subtitle: 'Welcoming Atmosphere',
    description:
      'A calm, well-appointed dining space where families, friends, and highway or railway travellers can relax over a freshly prepared meal.',
    image: diningImg,
    alt: 'Warm and elegant Indian restaurant dining hall interior with deep burgundy seating and brass pendant lighting',
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-[#171313] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold">
            Signature Dining Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F1E6] mt-3">
            Discover the Flavours
          </h2>
          <OrnamentalDivider className="my-5" />
          <p className="text-base sm:text-lg text-[#D8C9B2] leading-relaxed">
            Every meal at Rajdarbar Restaurant celebrates the warmth of Indian culinary traditions—pairing aromatic spices, tandoori craftsmanship, and gracious service.
          </p>
        </div>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FLAVOUR_HIGHLIGHTS.map((item) => (
            <article
              key={item.id}
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

        {/* Transparency Note */}
        <p className="text-center text-xs text-[#D8C9B2]/75 mt-8 italic">
          Visuals represent traditional Indian culinary styles. Please consult our staff or call ahead for today’s confirmed menu selections.
        </p>
      </div>
    </section>
  );
};
