import React, { useState, useEffect } from 'react';
import { ArrowRight, Leaf, Award, ShieldCheck, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreProjects }) => {
  const slides = [
    {
      name: 'Zen Garden Meditatif Nuansa Jepang',
      image: 'https://res.cloudinary.com/i5cu5jam/image/upload/f_auto,q_auto/IMG_2541',
      tag: 'Zen Garden • Sentuhan Ketenangan Jepang',
    },
    {
      name: 'Kolam Natural Ekosistem Ikan Koi',
      image: 'https://res.cloudinary.com/i5cu5jam/image/upload/f_auto,q_auto/IMG_0825',
      tag: 'Kolam Natural • Gemericik Air & Ekosistem Koi',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="beranda" className="relative min-h-[92vh] lg:min-h-screen pt-24 pb-16 lg:py-0 flex items-center overflow-hidden">
      {/* Background Slider with 5-second transition */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-1' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.name}
                className={`w-full h-full object-cover object-center filter brightness-[0.82] transition-transform duration-7000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* Soft dark vignette overlays for contrast */}
        <div className="absolute inset-0 z-2 bg-gradient-to-r from-black/80 via-black/50 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 z-2 bg-gradient-to-t from-black/85 via-transparent to-black/45 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading and Subtitle */}
          <div className="lg:col-span-7 text-white space-y-6 sm:space-y-8">
            {/* Dynamic Featured Tag according to current slide */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-emerald-200 text-xs sm:text-sm font-medium transition-all duration-500">
              <Sparkles className="w-3.5 h-3.5 text-lime-300 shrink-0" />
              <span>{slides[currentSlide].tag}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] max-w-2xl">
              Mewujudkan Ruang Hijau, Menghidupkan Kehidupan
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-neutral-200 font-normal leading-relaxed max-w-xl">
              <strong className="text-white font-semibold">SURYA TAMAN</strong> menghadirkan solusi landscape profesional yang menggabungkan keindahan alam, fungsi, dan keberlanjutan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center gap-2 bg-[#234935] hover:bg-[#1a3828] text-white font-medium px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all duration-200 cursor-pointer"
              >
                <span>Lihat Proyek Kami</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 font-medium px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all duration-200 cursor-pointer"
              >
                <span>Konsultasi Gratis</span>
              </button>
            </div>

            {/* Trust pills & Slider Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-xs sm:text-sm text-neutral-300 border-t border-white/10">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Garansi Tanaman 30 Hari</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  <span>Survei Lokasi & Konsultasi 3D</span>
                </div>
              </div>

              {/* Slider Dots & Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Slide sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5 px-1">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide ? 'w-6 bg-lime-400' : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Slide berikutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Feature Card matching reference */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/60 text-neutral-800 space-y-6 transform hover:scale-[1.01] transition-all duration-300">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#edf5ef] border border-[#234935]/15 text-[#234935] flex items-center justify-center shrink-0 group-hover:bg-[#234935] group-hover:text-white transition-colors duration-200">
                  <Leaf className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                    Desain Kreatif
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Desain lanskap yang estetis, fungsional, dan selaras dengan lingkungan.
                  </p>
                </div>
              </div>

              <div className="h-px bg-neutral-200/80" />

              {/* Feature 2 */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#edf5ef] border border-[#234935]/15 text-[#234935] flex items-center justify-center shrink-0 group-hover:bg-[#234935] group-hover:text-white transition-colors duration-200">
                  <Award className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                    Kualitas Terbaik
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Material dan tanaman pilihan dengan standar kualitas tinggi.
                  </p>
                </div>
              </div>

              <div className="h-px bg-neutral-200/80" />

              {/* Feature 3 */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#edf5ef] border border-[#234935]/15 text-[#234935] flex items-center justify-center shrink-0 group-hover:bg-[#234935] group-hover:text-white transition-colors duration-200">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                    Perawatan Profesional
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Perawatan rutin untuk menjaga keindahan dan kesehatan taman Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
