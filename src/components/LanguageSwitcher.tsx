import React from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  className?: string;
  variant?: 'light' | 'dark';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  onLanguageChange,
  className = '',
  variant = 'light',
}) => {
  const containerBorder =
    variant === 'dark'
      ? 'border-[#1E4535] bg-[#0A261D]'
      : 'border-[#D8E4D6] bg-[#FAFBF7]';

  return (
    <div
      role="group"
      aria-label="Language Switcher"
      className={`inline-flex items-center p-1 rounded-full border ${containerBorder} shadow-2xs transition-colors ${className}`}
    >
      <button
        type="button"
        id="lang-btn-en"
        onClick={() => onLanguageChange('en')}
        aria-pressed={currentLang === 'en'}
        className={`px-3 py-1 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
          currentLang === 'en'
            ? 'bg-[#0C2F23] text-white shadow-xs'
            : variant === 'dark'
            ? 'text-[#8AA89B] hover:text-white'
            : 'text-[#61746B] hover:text-[#0C2F23]'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        id="lang-btn-km"
        onClick={() => onLanguageChange('km')}
        aria-pressed={currentLang === 'km'}
        className={`px-3 py-1 text-xs sm:text-sm font-semibold font-['Noto_Sans_Khmer',sans-serif] rounded-full transition-all duration-200 cursor-pointer ${
          currentLang === 'km'
            ? 'bg-[#0C2F23] text-white shadow-xs'
            : variant === 'dark'
            ? 'text-[#8AA89B] hover:text-white'
            : 'text-[#61746B] hover:text-[#0C2F23]'
        }`}
      >
        ខ្មែរ
      </button>
    </div>
  );
};
