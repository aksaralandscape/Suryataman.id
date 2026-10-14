import React, { useState } from 'react';
import { PROJECTS } from '../data/mockData';
import { Project } from '../types';
import { MapPin, Maximize2, X, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenConsultation: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<string>('Semua');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'Semua',
    'Kolam Natural',
    'Rock Art',
    'Saung Gazebo',
    'Taman Minimalis',
    'Vertical Garden',
    'Zen Garden',
  ];

  const filteredProjects = activeTab === 'Semua'
    ? PROJECTS
    : PROJECTS.filter((p) => p.filterCategory === activeTab || p.category === activeTab);

  return (
    <section id="proyek" className="py-20 lg:py-28 bg-[#fafaf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Proyek Kami
          </h2>
          <div className="w-12 h-1 bg-[#234935] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal">
            Dokumentasi asli pengerjaan taman, kolam natural, saung gazebo, vertical garden, dan zen garden oleh tim Surya Taman.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#234935] text-white shadow-md'
                    : 'bg-white text-neutral-700 border border-neutral-200/80 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid - Responsive layout for 13 projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:border-[#234935]/40"
            >
              <div>
                {/* Photo Box */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.hasFailed) {
                        target.dataset.hasFailed = 'true';
                        // Fallback gracefully if external Cloudinary link returns 404
                        target.src = 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="w-10 h-10 rounded-full bg-white text-[#234935] flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="absolute top-2.5 left-2.5 bg-[#1e3b2b]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-white font-medium shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Title under image */}
                <div className="p-4 pt-3.5">
                  <h3 className="font-bold text-sm sm:text-base text-neutral-900 group-hover:text-[#234935] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-4 pb-4 pt-1 flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100">
                <span className="text-[11px] text-neutral-400 font-medium">
                  {project.category}
                </span>
                <span className="font-semibold text-[#234935] group-hover:underline">
                  Lihat Detail →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Note */}
        <div className="mt-14 text-center">
          <p className="text-sm text-neutral-500 mb-4">
            Tertarik membuat konsep taman, kolam natural, atau saung gazebo serupa untuk hunian Anda?
          </p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#234935] hover:text-[#163022] group cursor-pointer"
          >
            <span>Hubungi Kami untuk Jadwal Survei & Konsultasi Gratis</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Project Lightbox & Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main Featured Photo */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-neutral-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.hasFailed) {
                    target.dataset.hasFailed = 'true';
                    target.src = 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1200&q=80';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold text-lime-300 mb-1.5">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200 font-medium mt-1">
                  Proyek Resmi Surya Taman
                </p>
              </div>
            </div>

            {/* Project Details Content */}
            <div className="p-5 sm:p-7 space-y-5">
              {/* Quick Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-[#fafaf7] border border-neutral-100 text-xs sm:text-sm">
                <div>
                  <span className="text-neutral-400 block font-medium">Kategori</span>
                  <span className="font-bold text-neutral-800">{selectedProject.category}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block font-medium">Estimasi Durasi</span>
                  <span className="font-bold text-neutral-800">{selectedProject.duration}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block font-medium">Standar Mutu</span>
                  <span className="font-bold text-[#234935]">Garansi Tumbuh 30 Hari</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-neutral-900 text-sm sm:text-base">Deskripsi Proyek</h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Plants Used */}
              <div className="space-y-2">
                <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">Material & Elemen yang Digunakan:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.plantsUsed.map((plant, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#eef5ee] text-[#234935] border border-[#234935]/15"
                    >
                      🌿 {plant}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">Keunggulan Pengerjaan:</h4>
                <div className="space-y-1">
                  {selectedProject.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle className="w-4 h-4 text-[#234935] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-neutral-100">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-neutral-300 text-xs sm:text-sm font-medium text-neutral-700 hover:bg-neutral-50 cursor-pointer"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#234935] hover:bg-[#183626] text-white text-xs sm:text-sm font-medium shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-lime-300" />
                  <span>Pesan Proyek Serupa</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
