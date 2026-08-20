import React, { useState } from 'react';
import { MoreHorizontal, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { Language, TranslationContent } from '../types';

interface ChatPreviewProps {
  currentLang: Language;
  t: TranslationContent;
}

export const ChatPreview: React.FC<ChatPreviewProps> = ({ currentLang, t }) => {
  // State for guided preview branches: 0 = initial, 1 = selected option 1, 2 = selected option 2
  const [selectedBranch, setSelectedBranch] = useState<0 | 1 | 2>(0);

  const handleSelectOption = (option: 1 | 2) => {
    setSelectedBranch(option);
  };

  const handleReset = () => {
    setSelectedBranch(0);
  };

  return (
    <section
      id="chat-preview"
      className="w-full bg-[#FAFBF7] py-20 sm:py-28 relative border-t border-[#EAEFE8]"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Information & Concept Note */}
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel>{t.chatPreview.sectionLabel}</SectionLabel>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.12] text-[#0C2F23]">
              <div>{t.chatPreview.titleLine1}</div>
              <div>{t.chatPreview.titleLine2}</div>
            </h2>

            <p className="text-base sm:text-lg text-[#526D5F] leading-relaxed max-w-lg">
              {t.chatPreview.description}
            </p>

            <div className="pt-4 border-t border-[#DCE8DB]">
              <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#426654] font-medium">
                <div className="w-5 h-5 rounded-full bg-[#EAF3E5] border border-[#CDE3CB] flex items-center justify-center text-[#1E7743] flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>{t.chatPreview.conceptNote}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Chatbot Interface Card */}
          <div className="lg:col-span-7">
            <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl border border-[#D8E4D6] shadow-[0_15px_40px_-10px_rgba(12,47,35,0.06)] overflow-hidden flex flex-col justify-between min-h-[520px]">
              
              {/* Chat Card Header */}
              <div className="px-6 py-4 border-b border-[#EAF2E8] flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#20834D] text-white flex items-center justify-center font-bold text-base font-['Noto_Sans_Khmer',sans-serif] shadow-xs">
                    ស
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0C2F23]">
                      {t.chatPreview.chatTitle}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#557766] font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#3FB864]" />
                      <span>{t.chatPreview.chatStatus}</span>
                    </div>
                  </div>
                </div>

                <div className="text-[#84A091] p-1 rounded-lg">
                  <MoreHorizontal className="w-5 h-5" />
                </div>
              </div>

              {/* Chat Message Thread */}
              <div className="p-6 sm:p-7 space-y-4 sm:space-y-5 flex-1 bg-[#FBFDFB]">
                
                {/* 1. Student Message Bubble */}
                <div className="flex justify-end animate-fadeIn">
                  <div className="max-w-[85%] bg-[#175C37] text-white px-4 sm:px-5 py-3 rounded-2xl rounded-tr-xs text-xs sm:text-[14px] leading-relaxed shadow-xs font-['Noto_Sans_Khmer',sans-serif]">
                    {t.chatPreview.studentMessage}
                  </div>
                </div>

                {/* 2. Sastra AI Response Box */}
                <div className="flex justify-start animate-fadeIn">
                  <div className="max-w-[92%] bg-white border border-[#D8E4D6] rounded-2xl rounded-tl-xs p-4 sm:p-5 shadow-2xs">
                    <div className="text-[11px] font-bold text-[#20834D] mb-1.5 tracking-tight">
                      Sastra AI
                    </div>
                    <p className="text-xs sm:text-[14px] text-[#0C2F23] leading-relaxed font-['Noto_Sans_Khmer',sans-serif]">
                      {t.chatPreview.initialResponse}
                    </p>
                  </div>
                </div>

                {/* 3. Follow-up branch interaction if chosen */}
                {selectedBranch === 1 && (
                  <>
                    <div className="flex justify-end animate-fadeIn">
                      <div className="max-w-[85%] bg-[#175C37] text-white px-4 sm:px-5 py-3 rounded-2xl rounded-tr-xs text-xs sm:text-[14px] leading-relaxed shadow-xs font-['Noto_Sans_Khmer',sans-serif]">
                        {t.chatPreview.option1}
                      </div>
                    </div>
                    <div className="flex justify-start animate-fadeIn">
                      <div className="max-w-[92%] bg-white border border-[#BDE0BA] bg-[#F7FCF6] rounded-2xl rounded-tl-xs p-4 sm:p-5 shadow-2xs">
                        <div className="text-[11px] font-bold text-[#20834D] mb-1.5">
                          Sastra AI
                        </div>
                        <p className="text-xs sm:text-[14px] text-[#0C2F23] leading-relaxed whitespace-pre-line font-['Noto_Sans_Khmer',sans-serif]">
                          {t.chatPreview.option1Response}
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {selectedBranch === 2 && (
                  <>
                    <div className="flex justify-end animate-fadeIn">
                      <div className="max-w-[85%] bg-[#175C37] text-white px-4 sm:px-5 py-3 rounded-2xl rounded-tr-xs text-xs sm:text-[14px] leading-relaxed shadow-xs font-['Noto_Sans_Khmer',sans-serif]">
                        {t.chatPreview.option2}
                      </div>
                    </div>
                    <div className="flex justify-start animate-fadeIn">
                      <div className="max-w-[92%] bg-white border border-[#BDE0BA] bg-[#F7FCF6] rounded-2xl rounded-tl-xs p-4 sm:p-5 shadow-2xs">
                        <div className="text-[11px] font-bold text-[#20834D] mb-1.5">
                          Sastra AI
                        </div>
                        <p className="text-xs sm:text-[14px] text-[#0C2F23] leading-relaxed whitespace-pre-line font-['Noto_Sans_Khmer',sans-serif]">
                          {t.chatPreview.option2Response}
                        </p>
                      </div>
                    </div>
                  </>
                )}

              </div>

              {/* Bottom Interactive Decision Replies */}
              <div className="p-5 sm:p-6 bg-white border-t border-[#EAF2E8]">
                {selectedBranch === 0 ? (
                  <div>
                    <div className="text-[11px] font-bold tracking-wider text-[#6F8A7D] uppercase mb-3">
                      {t.chatPreview.replyPrompt}
                    </div>

                    <div className="space-y-2.5">
                      <button
                        type="button"
                        id="chat-reply-opt-1"
                        onClick={() => handleSelectOption(1)}
                        className="w-full text-left p-3 sm:p-3.5 rounded-xl border border-[#D8E4D6] hover:border-[#20834D] hover:bg-[#F2F8EF] bg-white transition-all duration-200 flex items-center justify-between text-xs sm:text-sm font-medium text-[#0C2F23] group cursor-pointer"
                      >
                        <span className="font-['Noto_Sans_Khmer',sans-serif]">
                          {t.chatPreview.option1}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#7B998A] group-hover:text-[#20834D] group-hover:translate-x-0.5 transition-all" />
                      </button>

                      <button
                        type="button"
                        id="chat-reply-opt-2"
                        onClick={() => handleSelectOption(2)}
                        className="w-full text-left p-3 sm:p-3.5 rounded-xl border border-[#D8E4D6] hover:border-[#20834D] hover:bg-[#F2F8EF] bg-white transition-all duration-200 flex items-center justify-between text-xs sm:text-sm font-medium text-[#0C2F23] group cursor-pointer"
                      >
                        <span className="font-['Noto_Sans_Khmer',sans-serif]">
                          {t.chatPreview.option2}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#7B998A] group-hover:text-[#20834D] group-hover:translate-x-0.5 transition-all" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#526D5F]">
                      {t.chatPreview.conceptNote}
                    </span>
                    <button
                      type="button"
                      id="chat-reset-btn"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#20834D] hover:text-[#0C2F23] py-1.5 px-3 rounded-lg hover:bg-[#EAF3E5] transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{t.chatPreview.tryAgain}</span>
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
