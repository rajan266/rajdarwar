import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  AlertCircle,
  CheckCircle2,
  Copy,
  Check,
  Calendar,
  Users,
} from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../config/business';
import { OrnamentalDivider } from './OrnamentalDivider';

interface ContactSectionProps {
  prefilledCategory?: string | null;
  whatsappOverride?: string;
  roomConfirmedOverride?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledCategory,
  whatsappOverride,
  roomConfirmedOverride,
}) => {
  const isRoomConfirmed =
    roomConfirmedOverride ?? BUSINESS_CONFIG.services.isRoomBookingConfirmed;
  const roomOptionLabel = isRoomConfirmed ? 'Room Booking' : 'Ask About Rooms';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState<string>('Dining');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (prefilledCategory) {
      setEnquiryType('Dining');
      setMessage(
        `Hello Rajdarbar Restaurant, I would like to enquire about your ${prefilledCategory} menu options and availability.`
      );
    }
  }, [prefilledCategory]);

  const showDateAndGuests =
    enquiryType === 'Dining' ||
    enquiryType === 'Group Booking' ||
    enquiryType === roomOptionLabel;

  const activeWhatsAppNumber =
    whatsappOverride !== undefined
      ? whatsappOverride
      : BUSINESS_CONFIG.contact.whatsappNumber;

  const validateForm = (): boolean => {
    const nextErrors: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10 || cleanPhone.length > 13) {
      nextErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (showDateAndGuests && guests) {
      const guestCount = Number(guests);
      if (Number.isNaN(guestCount) || guestCount < 1 || guestCount > 200) {
        nextErrors.guests = 'Please enter a guest count between 1 and 200.';
      }
    }
    if (!message.trim() || message.trim().length < 5) {
      nextErrors.message = 'Please add a short note about your enquiry.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmittedSummary(null);
      return;
    }

    const lines = [
      `Hello ${BUSINESS_CONFIG.name},`,
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Enquiry Type: ${enquiryType}`,
      ...(showDateAndGuests && date ? [`Preferred Date: ${date}`] : []),
      ...(showDateAndGuests && guests ? [`Number of Guests: ${guests}`] : []),
      `Message: ${message.trim()}`,
    ];
    setSubmittedSummary(lines.join('\n'));
  };

  const handleCopySummary = () => {
    if (!submittedSummary) return;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(submittedSummary);
      }
    } catch {
      // Fallback handled silently
    }
    setCopiedSummary(true);
    window.setTimeout(() => setCopiedSummary(false), 3000);
  };

  const customWhatsAppUrl = submittedSummary
    ? buildWhatsAppUrl(activeWhatsAppNumber, submittedSummary)
    : buildWhatsAppUrl(
        activeWhatsAppNumber,
        BUSINESS_CONFIG.contact.whatsappDefaultMessage
      );

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-gradient-to-b from-[#171313] via-[#351014]/30 to-[#171313] border-t border-[#D4AF65]/20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F1E6] mt-3">
            Contact &amp; Enquiry
          </h2>
          <OrnamentalDivider className="my-5" />
          <p className="text-base sm:text-lg text-[#D8C9B2] max-w-2xl mx-auto">
            Have a question about dining, group visits, or our menu? Prepare your enquiry below or call us directly at{' '}
            <a
              href={`tel:${BUSINESS_CONFIG.contact.phoneDial}`}
              className="text-[#D4AF65] font-semibold hover:underline"
            >
              {BUSINESS_CONFIG.contact.phoneDisplay}
            </a>
            .
          </p>
        </div>

        <div className="bg-[#211B1B] border border-[#D4AF65]/30 rounded-sm p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="enquiry-name"
                  className="block text-xs uppercase tracking-wider text-[#D8C9B2] font-semibold mb-2"
                >
                  Your Name <span className="text-[#D4AF65]">*</span>
                </label>
                <input
                  id="enquiry-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Gurpreet Singh"
                  aria-invalid={Boolean(errors.name)}
                  className="w-full px-4 py-3 rounded-sm bg-[#171313] border border-[#D4AF65]/30 text-[#F8F1E6] placeholder-[#D8C9B2]/40 text-sm focus:outline-none focus:border-[#D4AF65]"
                />
                {errors.name && (
                  <p role="alert" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="enquiry-phone"
                  className="block text-xs uppercase tracking-wider text-[#D8C9B2] font-semibold mb-2"
                >
                  Phone Number <span className="text-[#D4AF65]">*</span>
                </label>
                <input
                  id="enquiry-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g., 098765 43210"
                  aria-invalid={Boolean(errors.phone)}
                  className="w-full px-4 py-3 rounded-sm bg-[#171313] border border-[#D4AF65]/30 text-[#F8F1E6] placeholder-[#D8C9B2]/40 text-sm focus:outline-none focus:border-[#D4AF65]"
                />
                {errors.phone && (
                  <p role="alert" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Enquiry Type */}
            <div>
              <label
                htmlFor="enquiry-type"
                className="block text-xs uppercase tracking-wider text-[#D8C9B2] font-semibold mb-2"
              >
                Enquiry Type
              </label>
              <select
                id="enquiry-type"
                value={enquiryType}
                onChange={(e) => setEnquiryType(e.target.value)}
                className="w-full px-4 py-3 rounded-sm bg-[#171313] border border-[#D4AF65]/30 text-[#F8F1E6] text-sm focus:outline-none focus:border-[#D4AF65]"
              >
                <option value="General Enquiry">General Enquiry</option>
                <option value="Dining">Dining</option>
                <option value="Group Booking">Group Booking</option>
                <option value={roomOptionLabel}>{roomOptionLabel}</option>
              </select>
            </div>

            {/* Conditional Date & Number of Guests */}
            {showDateAndGuests && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
                <div>
                  <label
                    htmlFor="enquiry-date"
                    className="block text-xs uppercase tracking-wider text-[#D8C9B2] font-semibold mb-2"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF65]" />
                      <span>Preferred Date (Optional)</span>
                    </span>
                  </label>
                  <input
                    id="enquiry-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-sm bg-[#171313] border border-[#D4AF65]/30 text-[#F8F1E6] text-sm focus:outline-none focus:border-[#D4AF65]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry-guests"
                    className="block text-xs uppercase tracking-wider text-[#D8C9B2] font-semibold mb-2"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#D4AF65]" />
                      <span>Number of Guests</span>
                    </span>
                  </label>
                  <input
                    id="enquiry-guests"
                    type="number"
                    min="1"
                    max="200"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    aria-invalid={Boolean(errors.guests)}
                    className="w-full px-4 py-3 rounded-sm bg-[#171313] border border-[#D4AF65]/30 text-[#F8F1E6] text-sm focus:outline-none focus:border-[#D4AF65]"
                  />
                  {errors.guests && (
                    <p role="alert" className="text-xs text-red-400 mt-1.5">
                      {errors.guests}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Message */}
            <div>
              <label
                htmlFor="enquiry-message"
                className="block text-xs uppercase tracking-wider text-[#D8C9B2] font-semibold mb-2"
              >
                Your Message <span className="text-[#D4AF65]">*</span>
              </label>
              <textarea
                id="enquiry-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your menu questions, preferred dining time, or group requirements..."
                aria-invalid={Boolean(errors.message)}
                className="w-full px-4 py-3 rounded-sm bg-[#171313] border border-[#D4AF65]/30 text-[#F8F1E6] placeholder-[#D8C9B2]/40 text-sm focus:outline-none focus:border-[#D4AF65]"
              />
              {errors.message && (
                <p role="alert" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="px-8 py-4 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-sm sm:text-base tracking-wide hover:bg-[#E5C888] transition-all shadow-lg"
              >
                Prepare Enquiry Details
              </button>

              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneDial}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-sm border border-[#D4AF65]/40 text-[#F8F1E6] hover:bg-[#351014] text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF65]" />
                <span>Or Call {BUSINESS_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>
          </form>

          {/* Transparent No-Backend Confirmation & Action Panel */}
          {submittedSummary && (
            <div
              role="status"
              aria-live="polite"
              className="mt-8 p-6 rounded-sm bg-[#171313] border border-[#D4AF65]/50 space-y-4"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF65] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#F8F1E6]">
                    Enquiry Summary Prepared — Direct Action Required
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8C9B2] mt-1 leading-relaxed">
                    Please note: Automated online form delivery is not enabled yet, so{' '}
                    <strong className="text-[#F8F1E6]">
                      this enquiry was not sent automatically
                    </strong>
                    . Use the direct call or WhatsApp option below to connect with Rajdarbar Restaurant immediately:
                  </p>
                </div>
              </div>

              <pre className="p-4 rounded-sm bg-[#211B1B] border border-[#D4AF65]/20 text-xs text-[#F8F1E6] whitespace-pre-wrap font-sans leading-relaxed">
                {submittedSummary}
              </pre>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneDial}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#D4AF65] text-[#171313] font-semibold text-xs sm:text-sm hover:bg-[#E5C888] transition-colors"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {BUSINESS_CONFIG.contact.phoneDisplay} Now</span>
                </a>

                {customWhatsAppUrl ? (
                  <a
                    href={customWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-emerald-700 text-white font-semibold text-xs sm:text-sm hover:bg-emerald-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Enquiry via WhatsApp</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#211B1B] border border-[#D4AF65]/20 text-xs text-[#D8C9B2]">
                    <MessageCircle className="w-4 h-4 text-[#D4AF65]/60" />
                    <span>WhatsApp number pending verification — please call directly</span>
                  </span>
                )}

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-sm border border-[#D4AF65]/30 text-xs text-[#D8C9B2] hover:text-[#F8F1E6]"
                >
                  {copiedSummary ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#D4AF65]" />
                      <span>Copy Summary</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
