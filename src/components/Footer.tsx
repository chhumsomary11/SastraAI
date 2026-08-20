import React from 'react';
import { BrandLogo } from './BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Language, TranslationContent } from '../types';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationContent;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  t,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#FAFBF7] border-t border-[#D8E4D6] pt-14 pb-12">
      <div className="section-container">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#EAF1E7]">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <BrandLogo size="md" />
            <p className="text-xs sm:text-sm text-[#5C7567] leading-relaxed max-w-md">
              {t.footer.brandDescription}
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-4 flex flex-wrap gap-x-8 gap-y-3 text-xs sm:text-sm font-semibold text-[#446051]">
            <button
              type="button"
              onClick={() => scrollTo('how-it-works')}
              className="hover:text-[#0C2F23] transition-colors cursor-pointer"
            >
              {t.footer.links.howItWorks}
            </button>
            <button
              type="button"
              onClick={() => scrollTo('demo')}
              className="hover:text-[#0C2F23] transition-colors cursor-pointer"
            >
              {t.footer.links.demo}
            </button>
            <button
              type="button"
              onClick={() => scrollTo('why-sastra')}
              className="hover:text-[#0C2F23] transition-colors cursor-pointer"
            >
              {t.footer.links.whySastra}
            </button>
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                alert(
                  currentLang === 'km'
                    ? 'គោលការណ៍ឯកជនភាព៖ Sastra AI គោរពយ៉ាងតឹងរ៉ឹងនូវទិន្នន័យផ្ទាល់ខ្លួនរបស់សិស្ស និងក្រុមគ្រួសារ។'
                    : 'Privacy Policy: Sastra AI strictly safeguards student and family learning data.'
                );
              }}
              className="hover:text-[#0C2F23] transition-colors"
            >
              {t.footer.links.privacy}
            </a>
            <a
              href="mailto:contact@sastra.ai"
              className="hover:text-[#0C2F23] transition-colors"
            >
              {t.footer.links.contact}
            </a>
          </div>

          {/* Language Switcher Col */}
          <div className="md:col-span-2 flex md:justify-end items-start">
            <LanguageSwitcher
              currentLang={currentLang}
              onLanguageChange={onLanguageChange}
            />
          </div>

        </div>

        {/* Bottom Copyright & Tech Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7B9587]">
          <div>{t.footer.copyright}</div>
          <div className="text-[11px] text-[#8EA89A]">
            Designed for Cambodian Students in Grades 1–12
          </div>
        </div>

      </div>
    </footer>
  );
};
