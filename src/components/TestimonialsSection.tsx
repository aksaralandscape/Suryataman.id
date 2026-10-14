import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#234935] tracking-widest uppercase bg-[#edf5ef] px-3.5 py-1.5 rounded-full">
            Testimoni Klien
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mt-3">
            Apa Kata Mereka Tentang Surya Taman?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Kepercayaan dan senyum kepuasan pemilik rumah dan bisnis adalah kebanggaan terbesar kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#fafaf7] p-7 rounded-3xl border border-neutral-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-neutral-700 text-sm sm:text-base italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-neutral-200/60 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <h4 className="font-bold text-sm text-neutral-900">{t.name}</h4>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                  <p className="text-[11px] font-medium text-[#234935] mt-0.5">{t.projectType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
