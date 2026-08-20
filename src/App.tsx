import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DemoSection } from './components/DemoSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ChatPreview } from './components/ChatPreview';
import { WhySastraSection } from './components/WhySastraSection';
import { MVPStatusSection } from './components/MVPStatusSection';
import { EarlyAccessSection } from './components/EarlyAccessSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { translations } from './translations';
import { Language } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('sastra_language');
      if (saved === 'km' || saved === 'en') {
        return saved;
      }
    } catch {
      // Fallback
    }
    return 'en';
  });

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Sync language with localStorage, html lang, and body class
  useEffect(() => {
    try {
      localStorage.setItem('sastra_language', currentLang);
    } catch {
      // Ignore
    }
    document.documentElement.lang = currentLang;
    if (currentLang === 'km') {
      document.body.classList.add('lang-km');
    } else {
      document.body.classList.remove('lang-km');
    }
  }, [currentLang]);

  const handleLanguageChange = (newLang: Language) => {
    setCurrentLang(newLang);
  };

  const handleScrollToEarlyAccess = () => {
    const el = document.getElementById('early-access');
    if (el) {
      const yOffset = -40;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      // Focus email input after scroll
      setTimeout(() => {
        const input = document.getElementById('early-access-email-input');
        if (input) {
          input.focus();
        }
      }, 500);
    }
  };

  const t = translations[currentLang];

  return (
    <div className={`min-h-screen bg-[#FAFBF7] flex flex-col ${currentLang === 'km' ? 'lang-km' : ''}`}>
      {/* 1. Header with sticky nav and language switcher */}
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        t={t}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection
          currentLang={currentLang}
          t={t}
          onOpenDemo={() => setIsVideoModalOpen(true)}
          onScrollToEarlyAccess={handleScrollToEarlyAccess}
        />

        {/* 3. Product Demonstration Section (Dark Forest Green) */}
        <DemoSection
          currentLang={currentLang}
          t={t}
          onOpenDemo={() => setIsVideoModalOpen(true)}
        />

        {/* 4. How It Works Section (4-column bordered grid) */}
        <HowItWorksSection currentLang={currentLang} t={t} />

        {/* 5. Guided Chat Preview Section (Interactive Concept Flow) */}
        <ChatPreview currentLang={currentLang} t={t} />

        {/* 6. Why Sastra Section (3 Feature Cards) */}
        <WhySastraSection currentLang={currentLang} t={t} />

        {/* 7. MVP Status Section (What we are building now) */}
        <MVPStatusSection currentLang={currentLang} t={t} />

        {/* 8. Early-Access Call-to-Action Section */}
        <EarlyAccessSection currentLang={currentLang} t={t} />
      </main>

      {/* 9. Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        t={t}
      />

      {/* 10. Video Demonstration Modal / Interactive Walkthrough */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        currentLang={currentLang}
        t={t}
      />
    </div>
  );
}
