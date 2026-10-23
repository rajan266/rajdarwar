import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Copy, Check, Clock, Compass } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { OrnamentalDivider } from './OrnamentalDivider';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const fullText = `${BUSINESS_CONFIG.name}, ${BUSINESS_CONFIG.address.full}`;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(fullText).catch(() => {
          fallbackCopy(fullText);
        });
      } else {
        fallbackCopy(fullText);
      }
    } catch {
      fallbackCopy(fullText);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 3000);
  };

  const fallbackCopy = (text: string) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    } catch {
      // Ignore clipboard fallback errors in restricted sandboxes
    }
  };

  return (
    <section
      id="location"
      className="py-20 sm:py-24 bg-[#171313] border-t border-[#D4AF65]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold">
            Find Us in Bhangala
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F1E6] mt-3">
            Location &amp; Directions
          </h2>
          <OrnamentalDivider className="my-5" />
          <p className="text-base sm:text-lg text-[#D8C9B2]">
            Located opposite the Railway Station in Bhangala, Jandwal, Punjab.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address & Actions Card */}
          <div className="lg:col-span-5 bg-[#211B1B] border border-[#D4AF65]/30 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF65] font-semibold">
                  Verified Address
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F8F1E6] mt-1">
                  {BUSINESS_CONFIG.name}
                </h3>
                <address className="not-italic text-base text-[#D8C9B2] mt-2 space-y-1 leading-relaxed">
                  <p>{BUSINESS_CONFIG.address.line1}</p>
                  <p>
                    {BUSINESS_CONFIG.address.line2}, {BUSINESS_CONFIG.address.state}{' '}
                    {BUSINESS_CONFIG.address.postalCode}
                  </p>
                </address>
              </div>

              {/* Google Maps Plus Code */}
              <div className="p-4 rounded-sm bg-[#171313] border border-[#D4AF65]/20 flex items-center gap-3">
                <Compass className="w-5 h-5 text-[#D4AF65] shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D8C9B2] block">
                    Google Maps Plus Code
                  </span>
                  <span className="text-sm font-semibold text-[#F8F1E6]">
                    {BUSINESS_CONFIG.address.plusCode}
                  </span>
                </div>
              </div>

              {/* Opening Hours Status (Honest / Uninvented) */}
              <div className="p-4 rounded-sm bg-[#171313] border border-[#D4AF65]/20 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D4AF65] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D4AF65] font-semibold block">
                    Opening Hours
                  </span>
                  {BUSINESS_CONFIG.services.openingHours.length > 0 ? (
                    <ul className="mt-1 space-y-1 text-sm text-[#D8C9B2]">
                      {BUSINESS_CONFIG.services.openingHours.map((item, i) => (
                        <li key={i} className="flex justify-between gap-4">
                          <span>{item.days}:</span>
                          <span className="text-[#F8F1E6] font-medium">{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs sm:text-sm text-[#D8C9B2] mt-1 leading-relaxed">
                      Daily operating hours are being confirmed. Please call{' '}
                      <a
                        href={`tel:${BUSINESS_CONFIG.contact.phoneDial}`}
                        className="text-[#D4AF65] underline font-medium"
                      >
                        {BUSINESS_CONFIG.contact.phoneDisplay}
                      </a>{' '}
                      before visiting to verify today’s service timings.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[#D4AF65]/20 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={BUSINESS_CONFIG.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-sm hover:bg-[#E5C888] transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneDial}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-[#351014] text-[#F8F1E6] border border-[#D4AF65]/40 font-semibold text-sm hover:bg-[#4A181E] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4AF65]" />
                  <span>Call Restaurant</span>
                </a>
              </div>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-[#171313] border border-[#D4AF65]/30 text-[#D8C9B2] hover:text-[#F8F1E6] hover:border-[#D4AF65] text-xs sm:text-sm font-medium transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">
                      Address Copied to Clipboard!
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#D4AF65]" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 bg-[#211B1B] border border-[#D4AF65]/30 rounded-sm overflow-hidden shadow-xl min-h-[360px] flex flex-col">
            <div className="px-4 py-3 bg-[#171313] border-b border-[#D4AF65]/20 flex items-center justify-between text-xs text-[#D8C9B2]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF65]" />
                <span>Filling Station, opposite Railway Station, Bhangala, Punjab 144306</span>
              </span>
              <a
                href={BUSINESS_CONFIG.maps.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF65] hover:underline font-medium shrink-0 ml-2"
              >
                Open Larger Map
              </a>
            </div>
            <div className="relative flex-1 min-h-[340px] bg-[#171313]">
              <iframe
                title="Google Map Location for Rajdarbar Restaurant Bhangala"
                src={BUSINESS_CONFIG.maps.embedUrl}
                className="w-full h-full min-h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
