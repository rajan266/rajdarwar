import React from 'react';
import { Utensils, HeartHandshake, Train, Users } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

const FEATURES = [
  {
    id: 'dining',
    title: 'Delicious Indian Dining',
    description:
      'Enjoy freshly prepared Indian dishes crafted with balanced spices, traditional recipes, and care for every guest’s palate.',
    Icon: Utensils,
  },
  {
    id: 'hospitality',
    title: 'Friendly Hospitality',
    description:
      'Attentive, courteous service that makes every visitor feel welcome from the moment they step through our doors.',
    Icon: HeartHandshake,
  },
  {
    id: 'location',
    title: 'Convenient Railway Station Location',
    description:
      'Located right at the Filling Station opposite the Railway Station in Bhangala, making us easy to find for commuters and local diners alike.',
    Icon: Train,
  },
  {
    id: 'guests',
    title: 'A Welcoming Place for Guests',
    description:
      'A comfortable dining environment suited for family meals, catching up with friends, or a restful stop during your journey.',
    Icon: Users,
  },
];

export const WhyVisitSection: React.FC = () => {
  return (
    <section id="why-visit" className="py-20 sm:py-24 bg-[#171313]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold">
            The Rajdarbar Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F1E6] mt-3">
            Why Visit Rajdarbar
          </h2>
          <OrnamentalDivider className="my-5" />
          <p className="text-base sm:text-lg text-[#D8C9B2]">
            Thoughtful service, flavourful food, and an accessible Bhangala location.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURES.map(({ id, title, description, Icon }) => (
            <div
              key={id}
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
    </section>
  );
};
