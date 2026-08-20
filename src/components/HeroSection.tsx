import React from "react";
import { Play, Check, Sparkles } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { Language, TranslationContent } from "../types";

interface HeroSectionProps {
  currentLang: Language;
  t: TranslationContent;
  onOpenDemo: () => void;
  onScrollToEarlyAccess: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  t,
  onOpenDemo,
  onScrollToEarlyAccess,
}) => {
  return (
    <section
      id="hero"
      className="relative pt-6 sm:pt-10 md:pt-14 pb-16 sm:pb-24 lg:pb-28 overflow-hidden"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
            {/* Status Pill */}
            {/* <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EAF3E5] border border-[#D5E6D2] text-[#1B5E39] text-xs sm:text-[13px] font-medium shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#3FB864] animate-pulse-subtle" />
              <span>{t.hero.statusBadge}</span>
            </div> */}

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-[-0.03em] leading-[1.08] text-[#0C2F23]">
              <div>{t.hero.titleLine1}</div>
              <div>{t.hero.titleLine2}</div>
              <div className="text-[#20834D]">{t.hero.titleLine3}</div>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg md:text-[19px] text-[#4E6659] leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                type="button"
                id="hero-btn-watch-demo"
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#175C37] hover:bg-[#0C2F23] text-white text-sm sm:text-[15px] font-bold shadow-xs hover:shadow transition-all duration-200 cursor-pointer active:scale-97 group"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-2.5 h-2.5 fill-white text-white translate-x-0.5" />
                </div>
                <span>{t.hero.watchDemo}</span>
              </button>

              <button
                type="button"
                id="hero-btn-early-access"
                onClick={onScrollToEarlyAccess}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-[#F2F7F0] text-[#0C2F23] border border-[#D0DFCE] text-sm sm:text-[15px] font-bold shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer active:scale-97"
              >
                <span>{t.hero.joinEarlyAccess}</span>
              </button>
            </div>

            {/* Target Audience Badge */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4E6659] font-medium pt-2">
              <div className="w-4 h-4 rounded-full bg-[#D8EDD4] flex items-center justify-center text-[#1E7743]">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>{t.hero.gradeTarget}</span>
            </div>
          </div>

          {/* Right Column: Phone Mockup & Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center pt-6 lg:pt-0">
            {/* Pale Green Circular Background */}
            <div className="absolute w-[340px] sm:w-[420px] md:w-[460px] h-[340px] sm:h-[420px] md:h-[460px] rounded-full bg-gradient-to-tr from-[#E1F1DC] via-[#EAF5E7] to-[#F1F8EE] -z-10 shadow-inner border border-[#D5E9D2]/70" />

            {/* Secondary subtle radial glow */}
            <div className="absolute w-[280px] h-[280px] rounded-full bg-[#B7EF45]/15 blur-2xl -z-10" />

            {/* Smartphone Container */}
            <div className="relative z-10">
              <PhoneMockup currentLang={currentLang} t={t} />

              {/* Floating Card 1: Ask naturally (top-left) */}
              <div className="absolute -top-3 -left-6 sm:-left-12 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-[#D8E4D6] shadow-[0_10px_25px_-5px_rgba(12,47,35,0.08)] flex items-center gap-3 animate-float-slow z-20">
                <div className="w-9 h-9 rounded-xl bg-[#EAF3E5] text-[#1E7743] flex items-center justify-center font-bold text-xs sm:text-sm font-['Noto_Sans_Khmer',sans-serif]">
                  <span>ខ្មែរ</span>
                </div>
                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-[#0C2F23]">
                    {t.hero.floatingCard1Title}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#657F71]">
                    {t.hero.floatingCard1Sub}
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Learn the method (bottom-right) */}
              <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-[#D8E4D6] shadow-[0_10px_25px_-5px_rgba(12,47,35,0.08)] flex items-center gap-3 animate-float-reverse z-20">
                <div className="w-9 h-9 rounded-xl bg-[#EAF3E5] text-[#1E7743] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#20834D]" />
                </div>
                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-[#0C2F23]">
                    {t.hero.floatingCard2Title}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#657F71]">
                    {t.hero.floatingCard2Sub}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
