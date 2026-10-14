import React from 'react';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

interface CtaBannerProps {
  onOpenConsultation: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-[#183424]">
      {/* Background with subtle foliage texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80"
          alt="Texture Lanskap"
          className="w-full h-full object-cover mix-blend-overlay filter blur-xs"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#142d1f] via-[#1a3828] to-[#142d1f]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-lime-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Solusi Lanskap Tanpa Cemas</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          Siap Mewujudkan Ruang Hijau Impian Anda?
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed">
          Hubungi kami sekarang untuk konsultasi gratis dan solusi terbaik untuk lanskap Anda.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>Konsultasi Gratis</span>
            <ArrowRight className="w-4 h-4 text-neutral-800" />
          </button>
        </div>
      </div>
    </section>
  );
};
