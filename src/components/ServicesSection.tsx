import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import { Service } from '../types';
import {
  Sparkles,
  Droplets,
  Mountain,
  Home,
  Trees,
  Layers,
  Leaf,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
  Check,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

// Individual Service Card with interactive photo slider
const ServiceCardItem: React.FC<{
  service: Service;
  onSelect: (service: Service) => void;
}> = ({ service, onSelect }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const images = service.images && service.images.length > 0 ? service.images : [service.image];
  const hasMultipleImages = images.length > 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-white" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-white" />;
      case 'Mountain':
        return <Mountain className="w-5 h-5 text-white" />;
      case 'Home':
        return <Home className="w-5 h-5 text-white" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-white" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-white" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-white" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div
      onClick={() => onSelect(service)}
      className="bg-[#f8f9f6] hover:bg-[#f1f5ee] rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    >
      <div>
        {/* Photo with interactive Slider Buttons (Vertical aspect ratio for Rock Art) */}
        <div
          className={`relative overflow-hidden bg-neutral-200 select-none ${
            service.isVerticalImage ? 'aspect-[3/4] sm:aspect-[4/5]' : 'aspect-[16/11]'
          }`}
        >
          <img
            src={images[currentImgIndex]}
            alt={`${service.title} - Foto ${currentImgIndex + 1}`}
            className="w-full h-full object-cover object-center transform group-hover:scale-104 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.hasFailed) {
                target.dataset.hasFailed = 'true';
                target.src = service.image;
              }
            }}
          />

          {/* Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

          {/* Slide Buttons (Muncul jika memiliki lebih dari 1 foto) */}
          {hasMultipleImages && (
            <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex items-center justify-between z-20 pointer-events-auto">
              <button
                type="button"
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-black/50 hover:bg-[#234935] text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-90 shadow-md cursor-pointer"
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-black/50 hover:bg-[#234935] text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-90 shadow-md cursor-pointer"
                aria-label="Foto berikutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Photo Counter & Dot Indicators */}
          <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-white font-medium flex items-center gap-1.5">
            <span>
              {currentImgIndex + 1} / {images.length} Foto
            </span>
            {service.isVerticalImage && (
              <span className="bg-lime-400/20 text-lime-300 px-1.5 py-0.2 rounded text-[9px] uppercase font-bold">
                Vertikal
              </span>
            )}
          </div>

          {/* Slider Dots */}
          {hasMultipleImages && (
            <div className="absolute bottom-3 right-4 z-10 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImgIndex(idx);
                  }}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentImgIndex
                      ? 'w-4 h-1.5 bg-lime-400'
                      : 'w-1.5 h-1.5 bg-white/50 hover:bg-white'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Service Icon floating on the bottom edge */}
          <div className="absolute -bottom-4 left-6 w-11 h-11 rounded-full bg-[#234935] border-2 border-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#1a3828] transition-all duration-200 z-10">
            {getServiceIcon(service.iconName)}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-7 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#234935] transition-colors leading-snug">
              {service.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
            {service.shortDesc}
          </p>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="px-6 pb-6 pt-3 border-t border-neutral-200/50 flex items-center justify-between">
        <span className="text-xs font-medium text-neutral-500">
          Konsultasi & Survei Gratis
        </span>
        <button
          type="button"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-neutral-800 group-hover:text-[#234935] transition-colors cursor-pointer"
        >
          <span>Selengkapnya</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
    setModalImageIndex(0);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-white" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-white" />;
      case 'Mountain':
        return <Mountain className="w-5 h-5 text-white" />;
      case 'Home':
        return <Home className="w-5 h-5 text-white" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-white" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-white" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-white" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="layanan" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Layanan Kami
          </h2>
          <div className="w-12 h-1 bg-[#234935] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal">
            Pilihan spesialisasi karya lanskap berkualitas tinggi. Geser tombol slider pada foto untuk melihat hasil pengerjaan kami.
          </p>
        </div>

        {/* Services Grid with interactive sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {SERVICES.map((service) => (
            <ServiceCardItem
              key={service.id}
              service={service}
              onSelect={openServiceModal}
            />
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl relative border border-neutral-100">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#234935] flex items-center justify-center text-white shrink-0 shadow-md">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium">
                    Layanan Lanskap Spesialis Surya Taman
                  </p>
                </div>
              </div>

              {/* Main Modal Image with Slider */}
              <div className="space-y-2">
                <div
                  className={`rounded-2xl overflow-hidden relative shadow-inner bg-neutral-900 ${
                    selectedService.isVerticalImage ? 'aspect-[4/3] sm:aspect-[16/10]' : 'aspect-[16/10]'
                  }`}
                >
                  <img
                    src={selectedService.images[modalImageIndex] || selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Modal Slider Controls */}
                  {selectedService.images.length > 1 && (
                    <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between">
                      <button
                        onClick={() =>
                          setModalImageIndex(
                            (prev) => (prev - 1 + selectedService.images.length) % selectedService.images.length
                          )
                        }
                        className="w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#234935] backdrop-blur-md transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() =>
                          setModalImageIndex(
                            (prev) => (prev + 1) % selectedService.images.length
                          )
                        }
                        className="w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#234935] backdrop-blur-md transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white">
                    Foto {modalImageIndex + 1} dari {selectedService.images.length}
                  </div>
                </div>

                {/* Thumbnails row if multiple photos */}
                {selectedService.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto py-1">
                    {selectedService.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Thumb ${idx + 1}`}
                        onClick={() => setModalImageIndex(idx)}
                        className={`w-16 h-12 object-cover rounded-xl cursor-pointer transition-all ${
                          idx === modalImageIndex
                            ? 'ring-2 ring-[#234935] opacity-100 scale-105'
                            : 'opacity-60 hover:opacity-100'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                {selectedService.fullDesc}
              </p>

              {/* Benefits */}
              <div className="space-y-3">
                <h4 className="font-bold text-neutral-900 text-sm sm:text-base">
                  Keunggulan Layanan:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                      <Check className="w-4 h-4 text-[#234935] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope */}
              <div className="p-4 rounded-2xl bg-[#fafaf7] border border-neutral-100 space-y-2">
                <h4 className="font-bold text-xs uppercase text-neutral-500 tracking-wider">
                  Ruang Lingkup Pengerjaan:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.scope.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white border border-neutral-200 rounded-full text-xs text-neutral-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-neutral-100">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-neutral-300 text-sm font-medium text-neutral-700 hover:bg-neutral-50 cursor-pointer"
                >
                  Kembali
                </button>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#234935] hover:bg-[#183626] text-white text-sm font-medium shadow-md cursor-pointer"
                >
                  Konsultasikan Layanan Ini
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
