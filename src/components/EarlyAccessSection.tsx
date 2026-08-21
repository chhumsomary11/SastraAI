import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Check, ArrowRight } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { Language, TranslationContent } from '../types';

interface EarlyAccessSectionProps {
  currentLang: Language;
  t: TranslationContent;
}

export const EarlyAccessSection: React.FC<EarlyAccessSectionProps> = ({
  t,
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Check if user already joined previously in this browser
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sastra_early_access_submitted');
      if (saved === 'true') {
        setIsSubmitted(true);
      }
    } catch {
      // ignore localStorage errors
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setErrorMessage(t.earlyAccess.errorMessage);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: email.trim(),
          email: email.trim(),
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      localStorage.setItem('sastra_early_access_submitted', 'true');
      setIsSubmitted(true);
    } catch (err) {
      console.warn('EmailJS send failed:', err);
      setErrorMessage(t.earlyAccess.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="early-access" className="w-full bg-[#FAFBF7] py-16 sm:py-24">
      <div className="section-container">
        
        {/* Big Dark Forest Green Rounded Panel */}
        <div className="w-full bg-[#0C2F23] rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 lg:p-18 text-white relative overflow-hidden shadow-2xl border border-[#1C4E3A]">
          
          {/* Subtle background ambient light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#20834D]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B7EF45]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-6 space-y-5">
              <SectionLabel variant="dark">
                {t.earlyAccess.sectionLabel}
              </SectionLabel>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.12] text-white">
                <div>{t.earlyAccess.titleLine1}</div>
                <div>{t.earlyAccess.titleLine2}</div>
                <div>{t.earlyAccess.titleLine3}</div>
              </h2>

              <p className="text-base sm:text-lg text-[#A0BCAD] leading-relaxed max-w-lg">
                {t.earlyAccess.description}
              </p>
            </div>

            {/* Right Column: Form or Success Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              {isSubmitted ? (
                /* Success State Card matching Screenshot 6 */
                <div className="w-full max-w-lg bg-[#071F17] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#1E4F3B] shadow-inner flex items-center gap-4 animate-fadeIn">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#B7EF45] text-[#0C2F23] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {t.earlyAccess.successMessage}
                  </div>
                </div>
              ) : (
                /* Email Signup Form */
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-lg space-y-3"
                  noValidate
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      id="early-access-email-input"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMessage) setErrorMessage('');
                      }}
                      placeholder={t.earlyAccess.inputPlaceholder}
                      className="flex-1 px-5 py-4 rounded-full bg-[#082119] border border-[#265A44] text-white placeholder-[#708E7F] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#B7EF45] focus:border-transparent transition-all shadow-inner"
                      aria-label="Email address for early access"
                      required
                    />

                    <button
                      type="submit"
                      id="early-access-submit-btn"
                      disabled={isSubmitting}
                      className="px-7 py-4 rounded-full bg-[#20834D] hover:bg-[#1A6F41] text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer active:scale-97 disabled:opacity-70 flex-shrink-0"
                    >
                      <span>
                        {isSubmitting
                          ? t.earlyAccess.submitting
                          : t.earlyAccess.submitButton}
                      </span>
                      {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-[#FFAEAE] pl-4 font-medium">
                      {errorMessage}
                    </p>
                  )}

                  <p className="text-[11px] text-[#7E9F8E] pl-2">
                    {t.earlyAccess.privacyNote}
                  </p>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
