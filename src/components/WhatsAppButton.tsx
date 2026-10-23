import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../config/business';

interface WhatsAppButtonProps {
  whatsappOverride?: string;
}

/**
 * Reusable Floating WhatsApp Enquiry Button.
 * Renders as a floating CTA ONLY when a valid WhatsApp number is configured.
 * Never sends messages automatically; opens WhatsApp only when clicked.
 */
export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  whatsappOverride,
}) => {
  const rawNumber =
    whatsappOverride !== undefined
      ? whatsappOverride
      : BUSINESS_CONFIG.contact.whatsappNumber;

  const whatsappUrl = buildWhatsAppUrl(
    rawNumber,
    BUSINESS_CONFIG.contact.whatsappDefaultMessage
  );

  if (!whatsappUrl) {
    return null;
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire with Rajdarbar Restaurant on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm shadow-2xl border border-emerald-400/30 transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF65]"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="hidden sm:inline">WhatsApp Enquiry</span>
    </a>
  );
};
