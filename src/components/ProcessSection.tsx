import React from 'react';
import { PROCESS_STEPS } from '../data/mockData';
import { UserCheck, Palette, HardHat, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-white" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-white" />;
      case 'HardHat':
        return <HardHat className="w-6 h-6 text-white" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-white" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="proses" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative botanical watermark on left matching reference */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 pointer-events-none opacity-[0.06] select-none">
        <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 180C40 180 30 110 90 70C150 30 180 20 180 20C180 20 170 90 110 130C50 170 40 180 40 180Z" fill="#234935" />
          <path d="M40 180C70 140 110 100 180 20" stroke="#234935" strokeWidth="4" />
          <path d="M80 135C95 125 110 120 125 122" stroke="#234935" strokeWidth="3" />
          <path d="M105 105C120 95 135 90 150 92" stroke="#234935" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Description matching reference */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-snug">
              Proses Kerja Kami
            </h2>
            <div className="w-12 h-1 bg-[#234935] rounded-full" />
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Kami menerapkan proses kerja yang terstruktur untuk memastikan hasil terbaik di setiap proyek.
            </p>

            <div className="pt-4 hidden lg:block">
              <div className="p-4 rounded-2xl bg-[#edf5ef] border border-[#234935]/15 text-xs text-neutral-700 space-y-1">
                <span className="font-bold text-[#234935] block">Standar Manajemen Mutu Surya Taman</span>
                Setiap tahap terdokumentasi dan dikawal langsung oleh koordinator lapangan tersertifikasi.
              </div>
            </div>
          </div>

          {/* Right Column: 4 Numbered Steps with dotted connectors matching reference */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-4 relative">
              {PROCESS_STEPS.map((step, index) => (
                <div key={step.step} className="flex flex-col items-center text-center relative group">
                  {/* Dotted connector line between steps for desktop */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-7 left-1/2 w-full h-[2px] z-0 pointer-events-none">
                      <div className="w-full h-full border-t-2 border-dashed border-neutral-300 transform translate-x-5" />
                    </div>
                  )}

                  {/* Circular Node with Icon matching reference */}
                  <div className="w-14 h-14 rounded-full bg-[#234935] flex items-center justify-center shadow-lg relative z-10 mb-4 group-hover:scale-110 group-hover:bg-[#183626] transition-all duration-300">
                    {getStepIcon(step.iconName)}
                  </div>

                  {/* Step Number & Title */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-neutral-400 block tracking-wider">
                      {step.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#234935] transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
