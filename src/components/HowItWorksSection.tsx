import React from 'react';
import { Zap, Sparkles, Check } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { Language, TranslationContent } from '../types';

interface HowItWorksSectionProps {
  currentLang: Language;
  t: TranslationContent;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  currentLang,
  t,
}) => {
  const renderStepIcon = (iconType: string) => {
    switch (iconType) {
      case 'bolt':
        return <Zap className="w-4 h-4 text-[#20834D] stroke-[2.5]" />;
      case 'khmer':
        return (
          <span className="font-bold text-sm text-[#20834D] font-['Noto_Sans_Khmer',sans-serif]">
            ក
          </span>
        );
      case 'sparkle':
        return <Sparkles className="w-4 h-4 text-[#20834D]" />;
      case 'check':
        return <Check className="w-4 h-4 text-[#20834D] stroke-[3]" />;
      default:
        return <Zap className="w-4 h-4 text-[#20834D]" />;
    }
  };

  return (
    <section
      id="how-it-works"
      className="w-full bg-[#FAFBF7] py-20 sm:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionLabel>{t.howItWorks.sectionLabel}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-[#0C2F23] leading-tight">
            {t.howItWorks.title}
          </h2>
        </div>

        {/* 4-Column Connected Bordered Grid */}
        <div className="rounded-2xl border border-[#D8E4D6] bg-white shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D8E4D6]">
          {t.howItWorks.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 flex flex-col justify-between h-full bg-white transition-colors duration-200 hover:bg-[#F8FAF6]/80 group"
            >
              <div>
                {/* Step Number */}
                <div className="text-xs font-mono font-medium text-[#7C9588] mb-6">
                  {step.number}
                </div>

                {/* Minimal Icon in Pale-Green Rounded Square */}
                <div className="w-11 h-11 rounded-xl bg-[#EAF3E5] flex items-center justify-center mb-6 transition-transform duration-200 group-hover:scale-105">
                  {renderStepIcon(step.iconType)}
                </div>

                {/* Step Heading */}
                <h3 className="text-lg font-bold text-[#0C2F23] mb-3 tracking-tight">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[#5D7769] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
