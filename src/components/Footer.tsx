import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/mockData';
import { MapPin, Mail, Phone, Globe, Instagram, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

// TikTok SVG Icon
const TikTokIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-8.86 5.88 6.34 6.34 0 0 0 10.89 4.48 6.3 6.3 0 0 0 1.97-4.52V8.92a8.27 8.27 0 0 0 5.25 1.83V7.3a4.85 4.85 0 0 1-0-0.61z" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="kontak" className="bg-[#122419] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Socials Column */}
          <div className="lg:col-span-4 space-y-5">
            <Logo light />
            
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm">
              Menyediakan solusi lanskap terbaik dengan sentuhan alami dan profesional.
            </p>

            {/* Social Icons matching user links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E1306C] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram Surya Taman"
                title="Instagram @suryataman.id"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_INFO.contact.tiktok}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-black flex items-center justify-center transition-colors text-white"
                aria-label="TikTok Surya Taman"
                title="TikTok @suryaataman.id"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors text-white"
                aria-label="WhatsApp Surya Taman"
                title="WhatsApp Surya Taman"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-neutral-200">
              Menu
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <li>
                <button onClick={() => scrollTo('#beranda')} className="hover:text-white transition-colors cursor-pointer">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#tentang-kami')} className="hover:text-white transition-colors cursor-pointer">
                  Tentang Kami
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#layanan')} className="hover:text-white transition-colors cursor-pointer">
                  Layanan
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#proyek')} className="hover:text-white transition-colors cursor-pointer">
                  Proyek
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#proses')} className="hover:text-white transition-colors cursor-pointer">
                  Proses
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#artikel')} className="hover:text-white transition-colors cursor-pointer">
                  Artikel
                </button>
              </li>
            </ul>
          </div>

          {/* Layanan Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-neutral-200">
              Layanan
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <li>
                <button onClick={() => scrollTo('#layanan')} className="hover:text-white transition-colors cursor-pointer">
                  Zen Garden
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#layanan')} className="hover:text-white transition-colors cursor-pointer">
                  Kolam Natural
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#layanan')} className="hover:text-white transition-colors cursor-pointer">
                  Rock Art
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#layanan')} className="hover:text-white transition-colors cursor-pointer">
                  Saung Gazebo
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#layanan')} className="hover:text-white transition-colors cursor-pointer">
                  Taman Minimalis
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#layanan')} className="hover:text-white transition-colors cursor-pointer">
                  Vertical Garden (Asli & Artificial)
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="text-xs text-lime-300 hover:text-lime-200 flex items-center gap-1 cursor-pointer"
                >
                  <span>→ Konsultasi Gratis Sekarang</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Kontak Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-neutral-200">
              Kontak
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors font-medium text-emerald-300"
                >
                  {COMPANY_INFO.contact.phone} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="#beranda" className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© 2026 Surya Taman. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-300 transition-colors">Kebijakan Privasi</span>
            <span className="hover:text-neutral-300 transition-colors">Syarat & Ketentuan</span>
            <span className="text-lime-400/90 font-medium">Layanan JABODETABEK & Seluruh Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
