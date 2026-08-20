import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Language, TranslationContent } from '../types';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationContent;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  t,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for navigation highlight
      const sections = ['how-it-works', 'demo', 'why-sastra', 'mvp-status'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFBF7]/90 backdrop-blur-md border-b border-[#D8E4D6]/80 shadow-xs py-3.5'
          : 'bg-[#FAFBF7] py-5 sm:py-6'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            id="brand-header-link"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group transition-transform active:scale-98"
            aria-label="Sastra AI Home"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Center Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-10 text-[15px] font-semibold text-[#52665B]"
          >
            <button
              type="button"
              id="nav-link-how-it-works"
              onClick={() => scrollToSection('how-it-works')}
              className={`transition-colors hover:text-[#0C2F23] cursor-pointer py-1 relative ${
                activeSection === 'how-it-works'
                  ? 'text-[#0C2F23] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#20834D] after:rounded-full'
                  : ''
              }`}
            >
              {t.nav.howItWorks}
            </button>
            <button
              type="button"
              id="nav-link-demo"
              onClick={() => scrollToSection('demo')}
              className={`transition-colors hover:text-[#0C2F23] cursor-pointer py-1 relative ${
                activeSection === 'demo'
                  ? 'text-[#0C2F23] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#20834D] after:rounded-full'
                  : ''
              }`}
            >
              {t.nav.demo}
            </button>
            <button
              type="button"
              id="nav-link-why-sastra"
              onClick={() => scrollToSection('why-sastra')}
              className={`transition-colors hover:text-[#0C2F23] cursor-pointer py-1 relative ${
                activeSection === 'why-sastra'
                  ? 'text-[#0C2F23] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#20834D] after:rounded-full'
                  : ''
              }`}
            >
              {t.nav.whySastra}
            </button>
          </nav>

          {/* Right actions: Language switcher + Join early access button */}
          <div className="hidden sm:flex items-center gap-3.5">
            <LanguageSwitcher
              currentLang={currentLang}
              onLanguageChange={onLanguageChange}
            />
            <button
              type="button"
              id="nav-cta-early-access"
              onClick={() => scrollToSection('early-access')}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-[#175C37] hover:bg-[#0C2F23] text-white text-sm font-semibold tracking-tight transition-all duration-200 shadow-xs hover:shadow cursor-pointer active:scale-97 group"
            >
              <span>{t.nav.joinEarlyAccess}</span>
              <ArrowUpRight className="w-4 h-4 text-[#B7EF45] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile controls: Switcher + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageSwitcher
              currentLang={currentLang}
              onLanguageChange={onLanguageChange}
            />
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-[#D8E4D6] bg-white text-[#0C2F23] focus:outline-none focus:ring-2 focus:ring-[#20834D] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="sm:hidden border-b border-[#D8E4D6] bg-[#FAFBF7] px-6 py-6 space-y-4 shadow-lg animate-fadeIn"
        >
          <div className="flex flex-col space-y-3">
            <button
              type="button"
              onClick={() => scrollToSection('how-it-works')}
              className="text-left text-base font-semibold text-[#0C2F23] py-2 border-b border-[#EAF3E5]"
            >
              {t.nav.howItWorks}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('demo')}
              className="text-left text-base font-semibold text-[#0C2F23] py-2 border-b border-[#EAF3E5]"
            >
              {t.nav.demo}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('why-sastra')}
              className="text-left text-base font-semibold text-[#0C2F23] py-2 border-b border-[#EAF3E5]"
            >
              {t.nav.whySastra}
            </button>
          </div>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => scrollToSection('early-access')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#175C37] text-white font-semibold text-sm shadow-xs"
            >
              <span>{t.nav.joinEarlyAccess}</span>
              <ArrowUpRight className="w-4 h-4 text-[#B7EF45]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
