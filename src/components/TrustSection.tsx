import React from 'react';
import { Star, ExternalLink, MapPin, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const TrustSection: React.FC = () => {
  const reviewDestination =
    BUSINESS_CONFIG.rating.verifiedReviewUrl || BUSINESS_CONFIG.maps.searchUrl;

  return (
    <section
      aria-label="Guest Rating and Reputation"
      className="relative z-20 -mt-8 sm:-mt-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="bg-gradient-to-r from-[#351014] via-[#240B0E] to-[#351014] border border-[#D4AF65]/35 rounded-sm shadow-2xl p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left: Star Rating Display */}
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
                Based on <strong className="text-[#F8F1E6]">{BUSINESS_CONFIG.rating.reviewCount} Google reviews</strong>
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#D4AF65] mt-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Supplied by restaurant rating records</span>
              </div>
            </div>
          </div>

          {/* Middle: Landmark & Hospitality Assurance */}
          <div className="lg:col-span-4 text-left">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-[#D4AF65] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[#F8F1E6] uppercase tracking-wider">
                  Trusted Local Landmark
                </p>
                <p className="text-sm text-[#D8C9B2] mt-1 leading-relaxed">
                  Welcoming travellers, families, and local guests opposite the Railway Station in Bhangala, Jandwal, Punjab.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Google Maps / Review Profile Action */}
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
      </div>
    </section>
  );
};
