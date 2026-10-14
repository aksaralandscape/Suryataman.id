import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { CheckCircle2, ArrowRight, X, Sparkles, Trees, Award, Users } from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="tentang-kami" className="py-20 lg:py-28 bg-[#fafaf7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8efe8] text-[#234935] text-xs font-bold tracking-wider uppercase">
              <Trees className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.aboutTag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-[1.2] tracking-tight">
              {COMPANY_INFO.aboutHeading}
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {COMPANY_INFO.aboutDesc}
            </p>

            {/* Value checklist */}
            <div className="space-y-3 pt-2">
              {COMPANY_INFO.aboutPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#234935] shrink-0" />
                  <span className="text-sm sm:text-base text-neutral-700 font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Action button matching reference */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-[#234935] hover:bg-[#183626] text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Selengkapnya Tentang Kami</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-200/80">
              {COMPANY_INFO.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#234935]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Image matching reference */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Outer decorative card shadow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#234935]/20 to-[#609966]/20 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://res.cloudinary.com/i5cu5jam/image/upload/f_auto,q_auto/IMG_2541"
                  alt="Surya Taman Zen Garden Meditatif"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Corner floating badge */}
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-neutral-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#234935] text-white flex items-center justify-center font-bold">
                      <Sparkles className="w-5 h-5 text-lime-300" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">
                        Filosofi Kami
                      </p>
                      <p className="text-sm font-bold text-neutral-900">
                        Keharmonisan Ruang, Manusia & Alam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Profile / Tentang Kami Selengkapnya */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf4ed] text-[#234935] text-xs font-semibold">
                <Trees className="w-4 h-4" />
                <span>Profil Perusahaan</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Mengenal Lebih Dekat SURYA TAMAN
              </h3>

              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                Didirikan dengan visi membawa keasrian alami ke tengah padatnya arsitektur modern, <strong>Surya Taman</strong> telah bertransformasi menjadi salah satu penyedia jasa lanskap paling tepercaya di Indonesia. Kami melayani hunian pribadi, villa, kantor korporat, restoran, hotel, hingga kompleks perumahan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#fafaf7] border border-neutral-100 space-y-2">
                  <div className="flex items-center gap-2 text-[#234935] font-bold">
                    <Award className="w-5 h-5" />
                    <h4>Visi Kami</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Menjadi pelopor lanskap berkelanjutan yang memadukan estetika kontemporer dengan kearifan ekologi lokal.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#fafaf7] border border-neutral-100 space-y-2">
                  <div className="flex items-center gap-2 text-[#234935] font-bold">
                    <Users className="w-5 h-5" />
                    <h4>Misi Kami</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Memberikan pelayanan ramah, transparansi biaya material, dan eksekusi konstruksi taman presisi bebas stres bagi klien.
                  </p>
                </div>
              </div>

              <div className="space-y-3 p-4 rounded-2xl bg-[#edf5ef] text-[#1c3c2b]">
                <h4 className="font-bold text-sm">Keunggulan Utama Surya Taman:</h4>
                <ul className="text-xs sm:text-sm space-y-2 list-disc list-inside text-neutral-700">
                  <li><strong>Koleksi Tanaman Pilihan:</strong> Kami memiliki pembibitan (nursery) mandiri dengan varietas pohon peneduh, tanaman hias langka, dan rumput grade A.</li>
                  <li><strong>Garansi Tumbuh 30 Hari:</strong> Jika ada tanaman yang mati atau layu dalam 30 hari pasca pengerjaan, kami ganti gratis.</li>
                  <li><strong>Desain 3D Realistis:</strong> Anda melihat visualisasi taman dari berbagai sudut sebelum pengerjaan dimulai.</li>
                </ul>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2.5 rounded-full border border-neutral-300 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    onOpenConsultation();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#234935] text-white text-sm font-medium hover:bg-[#183626]"
                >
                  Jadwalkan Konsultasi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
