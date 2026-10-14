import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Calendar, MapPin, Sparkles, User, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    serviceType: 'Pembangunan Taman Baru',
    areaSize: '25-50 m²',
    surveyDate: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    const text = `Halo Surya Taman, saya ingin jadwalkan Konsultasi Gratis:%0A%0A` +
      `👤 *Nama:* ${formData.name || 'Calon Klien'}%0A` +
      `📱 *No. WhatsApp:* ${formData.phone}%0A` +
      `📍 *Lokasi:* ${formData.city}%0A` +
      `🌿 *Layanan:* ${formData.serviceType}%0A` +
      `📐 *Estimasi Luas:* ${formData.areaSize}%0A` +
      `📅 *Rencana Survei:* ${formData.surveyDate || 'Menyesuaikan'}%0A` +
      `📝 *Catatan:* ${formData.notes || 'Tidak ada catatan khusus'}%0A%0A` +
      `Mohon info tindak lanjutnya. Terima kasih!`;

    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl relative border border-neutral-100">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#edf5ef] text-[#234935] text-xs font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-lime-600" />
                <span>Konsultasi & Survei Gratis</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                Formulir Konsultasi Taman
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500">
                Isi data singkat berikut, tim desainer lanskap Surya Taman akan menghubungi Anda dalam waktu 1x24 jam.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nama */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Nama Lengkap *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bpk. Budi Santoso"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-sm bg-[#fafaf8] border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#234935] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Nomor WhatsApp / HP *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-sm bg-[#fafaf8] border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#234935] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Kota / Lokasi */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Lokasi / Alamat Proyek *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Jakarta Selatan, BSD, Bogor, dll"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-sm bg-[#fafaf8] border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#234935] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Layanan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Jenis Layanan
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-[#fafaf8] border border-neutral-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#234935]"
                  >
                    <option value="Pembangunan Taman Baru">Pembangunan Taman Baru</option>
                    <option value="Desain Lanskap & 3D">Desain Lanskap & 3D</option>
                    <option value="Taman Vertikal (Living Wall)">Taman Vertikal (Living Wall)</option>
                    <option value="Renovasi Taman Lama">Renovasi Taman Lama</option>
                    <option value="Perawatan Berkala">Perawatan Berkala</option>
                    <option value="Kolam Ikan Koi & Relief">Kolam Ikan Koi & Relief</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Estimasi Luas Area
                  </label>
                  <select
                    value={formData.areaSize}
                    onChange={(e) => setFormData({ ...formData, areaSize: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-[#fafaf8] border border-neutral-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#234935]"
                  >
                    <option value="< 25 m²">&lt; 25 m² (Kecil / Minimalis)</option>
                    <option value="25-50 m²">25 - 50 m² (Sedang)</option>
                    <option value="50-100 m²">50 - 100 m² (Luas)</option>
                    <option value="> 100 m²">&gt; 100 m² (Villa / Komersial)</option>
                  </select>
                </div>
              </div>

              {/* Tanggal Survei */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Rencana Waktu Survei
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    value={formData.surveyDate}
                    onChange={(e) => setFormData({ ...formData, surveyDate: e.target.value })}
                    className="w-full text-sm bg-[#fafaf8] border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#234935]"
                  />
                </div>
              </div>

              {/* Catatan */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Catatan / Kebutuhan Khusus
                </label>
                <textarea
                  rows={2}
                  placeholder="Misal: Ingin ada rumput gajah mini, pohon kamboja, dan lampu taman warm light..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full text-xs sm:text-sm bg-[#fafaf8] border border-neutral-200 rounded-xl px-3 py-2 focus:outline-none focus:border-[#234935]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-[#234935] hover:bg-[#183626] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                Kirim Permintaan Konsultasi
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-[#edf5ef] text-[#234935] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-neutral-900">
                Terima Kasih, {formData.name}!
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                Permintaan konsultasi Anda untuk proyek <strong>{formData.serviceType}</strong> di <strong>{formData.city}</strong> telah kami terima.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#fafaf7] border border-neutral-200/80 text-xs text-neutral-600 text-left space-y-1">
              <p><strong>Layanan:</strong> {formData.serviceType}</p>
              <p><strong>Estimasi Luas:</strong> {formData.areaSize}</p>
              <p><strong>Nomor Kontak:</strong> {formData.phone}</p>
            </div>

            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleOpenWhatsApp}
                className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Teruskan ke WhatsApp Surya Taman Sekarang</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 rounded-full border border-neutral-300 text-xs sm:text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                Selesai & Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
