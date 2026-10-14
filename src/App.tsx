import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setConsultationOpen(true);
  };

  const handleExploreProjects = () => {
    const el = document.querySelector('#proyek');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf7] text-neutral-800 font-sans antialiased flex flex-col selection:bg-[#234935] selection:text-white">
      {/* Top Fixed Header */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="flex-1">
        {/* Hero Section matching reference image */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onExploreProjects={handleExploreProjects}
        />

        {/* Tentang Kami Section */}
        <AboutSection onOpenConsultation={handleOpenConsultation} />

        {/* Layanan Kami Section with photos for each service */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* Proyek Kami Portfolio Section */}
        <ProjectsSection onOpenConsultation={handleOpenConsultation} />

        {/* Proses Kerja Kami Section */}
        <ProcessSection />

        {/* Testimonials / Bukti Kepuasan Klien */}
        <TestimonialsSection />

        {/* Artikel & Inspirasi Pertamanan */}
        <ArticlesSection />

        {/* Full-width CTA Banner */}
        <CtaBanner onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Footer matching reference layout */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Consultation & Survey Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton />
    </div>
  );
}
