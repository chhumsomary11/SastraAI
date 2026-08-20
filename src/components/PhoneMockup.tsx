import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Language, TranslationContent } from '../types';

interface PhoneMockupProps {
  currentLang: Language;
  t: TranslationContent;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ currentLang, t }) => {
  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[410px] select-none">
      {/* Outer Phone Shell */}
      <div className="relative rounded-[46px] p-[10px] bg-gradient-to-b from-[#253830] via-[#10221A] to-[#081510] shadow-[0_25px_60px_-15px_rgba(12,47,35,0.4),0_0_0_1px_rgba(255,255,255,0.15)] ring-1 ring-black/40">
        
        {/* Subtle metallic bezel highlights */}
        <div className="absolute inset-0 rounded-[46px] border border-white/20 pointer-events-none" />

        {/* Screen Container */}
        <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-b from-[#F2F8EE] via-[#EBF4E7] to-[#DFEDE0] aspect-[9/19] flex flex-col justify-between p-5 border border-[#CDE1CD]/80 shadow-inner">
          
          {/* Dynamic Island / Speaker */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#091510] rounded-full z-20 flex items-center justify-between px-3">
            <div className="w-2 h-2 rounded-full bg-[#162B21]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#11241B] ring-1 ring-[#224A37]/50 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#3D855E]" />
            </div>
          </div>

          {/* Top subtle time & connectivity bar */}
          <div className="flex justify-between items-center text-[10px] font-semibold text-[#3F5B4E] pt-0.5 px-2 z-10">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px]">5G</span>
              <div className="w-4 h-2 rounded-xs border border-[#3F5B4E] p-0.5 flex items-center">
                <div className="w-full h-full bg-[#3F5B4E] rounded-2xs" />
              </div>
            </div>
          </div>

          {/* Center Illustration and Welcome Screen Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center my-auto pt-2 z-10">
            
            {/* Mascot Illustration SVG */}
            <div className="relative w-36 h-36 mb-4 flex items-center justify-center">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[#C8E7C5]/50 rounded-full blur-md" />
              
              {/* SVG Mascot (Bot + Book + Sparks) */}
              <svg viewBox="0 0 160 160" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Paper Airplane floating */}
                <path d="M125 35L145 25L138 45L130 38L125 35Z" fill="#71B280" opacity="0.8" />
                <path d="M130 38L138 45L128 42L130 38Z" fill="#4B8C5C" />
                
                {/* Sparkles / Lightbulb */}
                <circle cx="28" cy="45" r="7" fill="#FEE588" />
                <path d="M28 34V37M28 53V56M19 45H16M40 45H37" stroke="#F6C343" strokeWidth="2" strokeLinecap="round" />
                
                {/* Little robot body */}
                <rect x="52" y="38" width="56" height="42" rx="16" fill="#1C6E41" stroke="#0E4828" strokeWidth="2" />
                {/* Robot Ears / Antenna */}
                <path d="M80 30V38" stroke="#0E4828" strokeWidth="3" strokeLinecap="round" />
                <circle cx="80" cy="28" r="4" fill="#B7EF45" />
                
                {/* Robot Face Screen */}
                <rect x="58" y="44" width="44" height="28" rx="10" fill="#0C2F23" />
                {/* Cheerful Eyes */}
                <circle cx="70" cy="57" r="4" fill="#B7EF45" />
                <circle cx="90" cy="57" r="4" fill="#B7EF45" />
                <path d="M76 63C78 65 82 65 84 63" stroke="#B7EF45" strokeWidth="1.5" strokeLinecap="round" />

                {/* Open Book Foundation */}
                <path d="M40 98C55 90 75 92 80 96C85 92 105 90 120 98V118C105 110 85 112 80 116C75 112 55 110 40 118V98Z" fill="#FAFBF7" stroke="#C3DEC0" strokeWidth="2" />
                <path d="M80 96V116" stroke="#C3DEC0" strokeWidth="2" />
                <path d="M48 103C60 97 74 98 77 101" stroke="#20834D" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                <path d="M48 109C60 103 74 104 77 107" stroke="#20834D" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                <path d="M83 101C86 98 100 97 112 103" stroke="#20834D" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                <path d="M83 107C86 104 100 103 112 109" stroke="#20834D" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

                {/* Pencil on book */}
                <rect x="110" y="85" width="28" height="4" rx="2" transform="rotate(-35 110 85)" fill="#20834D" />
                <polygon points="135,70 140,67 137,74" fill="#E8B839" />
              </svg>
            </div>

            {/* App Title in Screen */}
            <div className="flex items-center justify-center gap-1 mb-1">
              <span className="text-xl font-extrabold text-[#0C2F23] tracking-tight">Sastra</span>
              <span className="text-xl font-extrabold text-[#20834D] tracking-tight">AI</span>
            </div>

            {/* Tagline */}
            <p className="text-[11px] leading-relaxed text-[#516C5E] font-medium max-w-[200px] mb-5 whitespace-pre-line">
              {t.hero.phoneScreenTagline}
            </p>

            {/* Action Buttons in Screen */}
            <div className="w-full space-y-2 max-w-[220px]">
              <button
                type="button"
                className="w-full py-2.5 px-4 rounded-full bg-[#175C37] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs hover:bg-[#0C2F23] transition-colors cursor-default"
              >
                <span>{t.hero.phoneScreenGetStarted}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="w-full py-2 px-3 rounded-full bg-white/95 border border-[#CDE1CD] text-[#28483B] text-[11px] font-semibold flex items-center justify-center gap-2 shadow-2xs">
                {/* Google G logo */}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.98 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>{t.hero.phoneScreenGoogle}</span>
              </div>
            </div>

          </div>

          {/* Bottom decorative plant & book footer */}
          <div className="pt-2 flex items-center justify-between text-[10px] text-[#638473] border-t border-[#D5E6D3]/60 z-10">
            <span className="flex items-center gap-1 font-medium">
              <Sparkles className="w-3 h-3 text-[#20834D]" />
              {currentLang === 'km' ? 'ភាសាខ្មែរ & English' : 'Khmer & English'}
            </span>
            <span className="text-[9px] font-semibold bg-[#D5EAD3] text-[#1B5E39] px-2 py-0.5 rounded-full">
              Grades 1–12
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
