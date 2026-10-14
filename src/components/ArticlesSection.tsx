import React, { useState } from 'react';
import { ARTICLES } from '../data/mockData';
import { Article } from '../types';
import { Clock, Calendar, ArrowRight, X, BookOpen, Share2 } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="artikel" className="py-20 lg:py-28 bg-[#fafaf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#edf5ef] text-[#234935] text-xs font-bold tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Inspirasi & Tips Lanskap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Artikel Pertamanan
          </h2>
          <div className="w-12 h-1 bg-[#234935] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal">
            Wawasan seputar perawatan tanaman, tren desain arsitektur lanskap, dan panduan merawat ruang hijau Anda.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#234935]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-white font-medium">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-neutral-900 group-hover:text-[#234935] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#234935] group-hover:translate-x-1 transition-transform">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-lime-300">
                  {selectedArticle.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-2">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-4 text-xs text-neutral-500 border-b border-neutral-100 pb-3">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span className="text-[#234935] font-semibold">Oleh Tim Ahli Surya Taman</span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                {selectedArticle.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#edf5ef] border border-[#234935]/15 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#234935]">
                    Butuh Bantuan Mendesain Taman Anda?
                  </h4>
                  <p className="text-xs text-neutral-600">
                    Tim Surya Taman siap membantu survei lokasi dan konsultasi tanpa biaya.
                  </p>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-[#234935] text-white text-sm font-medium hover:bg-[#183626]"
                >
                  Tutup Artikel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
