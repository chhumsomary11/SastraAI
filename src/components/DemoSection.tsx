import React from 'react';
import { Play, Info } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { BrandLogo } from './BrandLogo';
import { Language, TranslationContent } from '../types';

interface DemoSectionProps {
  currentLang: Language;
  t: TranslationContent;
  onOpenDemo: () => void;
}

export const DemoSection: React.FC<DemoSectionProps> = ({
  currentLang,
  t,
  onOpenDemo,
}) => {
  return (
    <section
      id="demo"
      className="w-full bg-[#0C2F23] text-white py-20 sm:py-28 relative overflow-hidden"
    >
      {/* Subtle background ambient pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#B7EF45_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Copy & Notes */}
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel variant="dark">
              {t.demo.sectionLabel}
            </SectionLabel>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.12] text-white">
              <div>{t.demo.titleLine1}</div>
              <div>{t.demo.titleLine2}</div>
              <div>{t.demo.titleLine3}</div>
            </h2>

            <p className="text-base sm:text-lg text-[#9DB7A9] leading-relaxed max-w-md">
              {t.demo.description}
            </p>

            {/* Concept Demonstration Note */}
            <div className="flex items-center gap-2.5 pt-4 text-xs sm:text-[13px] text-[#A6C3B3]">
              <div className="w-5 h-5 rounded-full border border-[#376953] flex items-center justify-center text-[#7ED49E] flex-shrink-0">
                <Info className="w-3 h-3" />
              </div>
              <span>{t.demo.conceptNote}</span>
            </div>
          </div>

          {/* Right Column: 16:9 Video Mockup Card */}
          <div className="lg:col-span-7">
            <div
              onClick={onOpenDemo}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#E3F1DE] rounded-3xl p-5 sm:p-7 flex flex-col justify-between shadow-2xl border border-[#B8D7B2] overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.01]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenDemo();
                }
              }}
              aria-label={t.demo.playVideo}
            >
              {/* Card Top Header */}
              <div className="flex justify-between items-center z-10">
                <BrandLogo size="sm" variant="light" />
                <span className="text-xs font-mono font-semibold text-[#3C6450] bg-white/70 px-2.5 py-1 rounded-full backdrop-blur-xs">
                  {t.demo.duration}
                </span>
              </div>

              {/* Center Homework Card & Play Button */}
              <div className="relative my-auto flex items-center justify-center py-4 z-10">
                
                {/* Tilted Homework Card Representation */}
                <div className="w-full max-w-[320px] sm:max-w-[420px] bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#1F4B38] shadow-lg transform -rotate-2 transition-transform duration-300 group-hover:rotate-0">
                  <div className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-[#638773] uppercase mb-1">
                    {t.demo.homeworkCardTag}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#0C2F23] mb-3">
                    {t.demo.homeworkCardTitle}
                  </div>
                  <div className="w-full py-1.5 px-3 rounded-lg bg-[#EBF4E7] text-[#256341] text-[11px] font-medium font-['Noto_Sans_Khmer',sans-serif]">
                    {t.demo.homeworkCardSubtitle}
                  </div>
                </div>

                {/* Big Center Play Button overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#175C37] flex items-center justify-center shadow-xl transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#B7EF45] group-hover:text-[#0C2F23]">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                  </div>
                </div>

              </div>

              {/* Bottom Caption pill & subtle progress bar */}
              <div className="flex flex-col gap-2 z-10">
                <div className="inline-flex self-start px-3.5 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-[#0C2F23] text-xs font-bold shadow-2xs">
                  {t.demo.videoCaption}
                </div>

                {/* Timeline bar */}
                <div className="w-full h-1.5 bg-[#C9DFCA] rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-[#20834D] group-hover:w-1/2 transition-all duration-500 rounded-full" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
