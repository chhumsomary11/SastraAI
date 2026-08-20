import React from 'react';
import { Check } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { Language, TranslationContent } from '../types';

interface MVPStatusSectionProps {
  currentLang: Language;
  t: TranslationContent;
}

export const MVPStatusSection: React.FC<MVPStatusSectionProps> = ({
  currentLang,
  t,
}) => {
  return (
    <section
      id="mvp-status"
      className="w-full bg-[#EAF3E5] py-20 sm:py-28 relative border-t border-[#DDE8D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-4">
            <SectionLabel variant="mint">
              {t.mvpStatus.sectionLabel}
            </SectionLabel>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] text-[#0C2F23]">
              <div>{t.mvpStatus.titleLine1}</div>
              <div>{t.mvpStatus.titleLine2}</div>
            </h2>
          </div>

          {/* Right Column: Two White Rounded Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Card 1: MVP Focus */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D5E3D2] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#0C2F23] pb-4 border-b border-[#EAF2E8]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#20834D]" />
                  <span>{t.mvpStatus.focusCardTitle}</span>
                </div>

                <ul className="mt-5 space-y-4">
                  {t.mvpStatus.focusItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-[13.5px] font-medium text-[#294939]"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#EBF5E7] flex items-center justify-center text-[#20834D] flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: In Development */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D5E3D2] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#0C2F23] pb-4 border-b border-[#EAF2E8]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E58A13]" />
                  <span>{t.mvpStatus.inDevCardTitle}</span>
                </div>

                <ul className="mt-5 space-y-4">
                  {t.mvpStatus.inDevItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-[13.5px] font-medium text-[#506E5E]"
                    >
                      <div className="w-4 h-4 rounded-full border border-[#96B8A5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#96B8A5]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
