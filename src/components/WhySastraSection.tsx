import React from 'react';
import { ArrowUpRight, Home } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { Language, TranslationContent } from '../types';

interface WhySastraSectionProps {
  currentLang: Language;
  t: TranslationContent;
}

export const WhySastraSection: React.FC<WhySastraSectionProps> = ({
  currentLang,
  t,
}) => {
  const renderCardIcon = (iconType: string) => {
    switch (iconType) {
      case 'khmer':
        return (
          <span className="font-bold text-lg text-[#B7EF45] font-['Noto_Sans_Khmer',sans-serif]">
            ក
          </span>
        );
      case 'arrow':
        return <ArrowUpRight className="w-5 h-5 text-[#B7EF45] stroke-[2.5]" />;
      case 'home':
        return <Home className="w-5 h-5 text-[#B7EF45] stroke-[2.2]" />;
      default:
        return <ArrowUpRight className="w-5 h-5 text-[#B7EF45]" />;
    }
  };

  return (
    <section
      id="why-sastra"
      className="w-full bg-[#FAFBF7] py-20 sm:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-18">
          <div className="lg:col-span-7">
            <SectionLabel>{t.whySastra.sectionLabel}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.12] text-[#0C2F23]">
              <div>{t.whySastra.titleLine1}</div>
              <div>{t.whySastra.titleLine2}</div>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-[#556F61] leading-relaxed">
              {t.whySastra.description}
            </p>
          </div>
        </div>

        {/* 3 Large Bordered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {t.whySastra.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-9 border border-[#D8E4D6] shadow-[0_4px_20px_rgba(12,47,35,0.03)] hover:shadow-[0_12px_30px_rgba(12,47,35,0.06)] hover:border-[#C4DCBF] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Dark Green Squircle with Lime Icon */}
                <div className="w-13 h-13 rounded-2xl bg-[#0C2F23] flex items-center justify-center mb-8 shadow-xs transition-transform duration-200 group-hover:scale-105">
                  {renderCardIcon(card.iconType)}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#0C2F23] mb-3.5 tracking-tight">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-[15px] text-[#556F61] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
