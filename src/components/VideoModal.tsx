import React, { useEffect, useState } from 'react';
import { X, Play, RotateCcw, Volume2, VolumeX, CheckCircle2 } from 'lucide-react';
import { Language, TranslationContent } from '../types';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  t: TranslationContent;
  /**
   * CUSTOM VIDEO CONFIGURATION:
   * To replace this interactive demo with a real video:
   * Provide a YouTube URL (e.g. "https://www.youtube.com/embed/YOUR_VIDEO_ID"),
   * a Vimeo URL (e.g. "https://player.vimeo.com/video/YOUR_VIDEO_ID"),
   * or a direct MP4 URL (e.g. "/assets/sastra-demo.mp4").
   */
  customVideoUrl?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  t,
  customVideoUrl,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Interactive simulated video step timer if no custom URL
  useEffect(() => {
    if (!isOpen || customVideoUrl || !isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 3800);

    return () => clearInterval(timer);
  }, [isOpen, customVideoUrl, isPlaying]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0C2F23] text-white rounded-3xl border border-[#235841] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A4533] bg-[#0A261D]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#20834D] text-white flex items-center justify-center font-bold text-sm">
              ស
            </div>
            <div>
              <h3 id="modal-headline" className="text-sm font-bold text-white">
                {t.videoModal.title}
              </h3>
              <p className="text-[11px] text-[#8AA89B]">
                {t.videoModal.subtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            id="close-video-modal"
            onClick={onClose}
            aria-label={t.videoModal.close}
            className="p-1.5 rounded-full text-[#8AA89B] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Canvas */}
        <div className="relative aspect-video bg-[#071B14] flex flex-col justify-between p-6 sm:p-8 overflow-hidden">
          
          {customVideoUrl ? (
            /* Custom Embed if provided */
            <iframe
              src={customVideoUrl}
              title="Sastra AI Video Demonstration"
              className="w-full h-full border-0 rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            /* High-fidelity interactive animated lesson walkthrough */
            <div className="h-full flex flex-col justify-between z-10">
              
              {/* Question Badge */}
              <div className="flex items-center justify-between">
                <div className="bg-[#173F2E] text-[#B7EF45] text-xs font-semibold px-3 py-1 rounded-full border border-[#2D694E] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#B7EF45] animate-pulse" />
                  {t.videoModal.lessonGrade}
                </div>
                <div className="text-xs text-[#8AA89B] font-mono">
                  00:{String(currentStep * 15).padStart(2, '0')} / 01:00
                </div>
              </div>

              {/* Dynamic Lesson Walkthrough Stage */}
              <div className="my-auto space-y-4 max-w-xl mx-auto w-full">
                
                {/* Homework Problem Container */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15">
                  <div className="text-xs uppercase tracking-wider text-[#A1C9B3] font-bold mb-1">
                    {currentLang === 'km' ? 'លំហាត់គណិតវិទ្យាភាសាអង់គ្លេស' : 'English Math Homework'}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white mb-2">
                    "Find the area of a rectangle with length = 8 cm and width = 5 cm."
                  </div>

                  {/* Diagram Representation */}
                  <div className="flex items-center justify-center py-2">
                    <div className="relative w-44 h-24 rounded-lg bg-[#EAF3E5]/90 border-2 border-[#20834D] flex items-center justify-center shadow-inner">
                      <span className="text-[11px] font-bold text-[#0C2F23]">
                        {currentLang === 'km' ? 'ផ្ទៃក្រឡា (Area = ?)' : 'Area = ?'}
                      </span>
                      {/* Dimension labels */}
                      <span className="absolute -top-5 text-[11px] font-semibold text-[#B7EF45]">8 cm (Length)</span>
                      <span className="absolute -right-14 text-[11px] font-semibold text-[#B7EF45]">5 cm (Width)</span>
                    </div>
                  </div>
                </div>

                {/* Sastra AI Step-by-Step Guidance Box */}
                <div className="bg-[#12392A] rounded-xl p-3.5 border border-[#235841] text-xs sm:text-sm space-y-2">
                  <div className="flex items-center gap-2 text-[#7CDAA0] font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#B7EF45]" />
                    <span>
                      {currentStep === 0 && (currentLang === 'km' ? 'ជំហានទី ១៖ កំណត់ទិន្នន័យ (Length = 8 cm, Width = 5 cm)' : 'Step 1: Identify given values (Length = 8 cm, Width = 5 cm)')}
                      {currentStep === 1 && (currentLang === 'km' ? 'ជំហានទី ២៖ អនុវត្តរូបមន្តគណិតវិទ្យា' : 'Step 2: Apply the geometric formula')}
                      {currentStep === 2 && (currentLang === 'km' ? 'ជំហានទី ៣៖ គណនាលទ្ធផល 8 × 5 = 40' : 'Step 3: Calculate the product 8 × 5 = 40')}
                      {currentStep >= 3 && (currentLang === 'km' ? 'រួចរាល់! ចម្លើយគឺ 40 cm² (សាកល្បងលំហាត់បន្ទាប់)' : 'Completed! Final answer is 40 cm²')}
                    </span>
                  </div>

                  <p className="text-[#CFE3D8] font-['Noto_Sans_Khmer',sans-serif] leading-relaxed">
                    {currentStep === 0 && (currentLang === 'km' ? 'សាស្ត្រាពន្យល់៖ "បណ្តោយ" (Length) គឺ 8 cm និង "ទទឹង" (Width) គឺ 5 cm។' : 'Sastra AI guides: "Length" is 8 cm and "Width" is 5 cm.')}
                    {currentStep === 1 && (currentLang === 'km' ? 'រូបមន្តផ្ទៃក្រឡាចតុកោណកែងគឺ៖ ផ្ទៃក្រឡា (Area) = បណ្តោយ (Length) × ទទឹង (Width)។' : 'The formula for area is: Area = length × width.')}
                    {currentStep === 2 && (currentLang === 'km' ? 'យើងយក 8 cm គុណនឹង 5 cm = 40 cm²។ ឯកតានៃផ្ទៃក្រឡាគឺ សង់ទីម៉ែត្រការ៉េ (cm²)។' : 'We compute 8 cm × 5 cm = 40 cm². Remember the unit is square centimeters (cm²).')}
                    {currentStep >= 3 && (currentLang === 'km' ? 'អបអរសាទរ! ប្អូនបានយល់ពីរបៀបដោះស្រាយហើយ។ តោះសាកល្បងលំហាត់វិទ្យាសាស្ត្របន្ទាប់។' : 'Great job! You learned the method step-by-step without skipping directly to shortcuts.')}
                  </p>
                </div>

              </div>

              {/* Video Timeline & Controls */}
              <div className="pt-2">
                <div className="w-full h-1.5 bg-[#173F2E] rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-[#B7EF45] transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / 4) * 100}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-[#8AA89B]">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      <Play className={`w-3.5 h-3.5 ${isPlaying ? 'fill-white' : ''}`} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(0)}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                      aria-label="Restart"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <span className="italic text-[11px] text-[#A6C3B3]">
                    {t.demo.conceptNote}
                  </span>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
