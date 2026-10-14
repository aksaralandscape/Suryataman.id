import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickMessages = [
    'Halo Surya Taman, saya ingin konsultasi pembuatan taman rumah.',
    'Halo, saya mau tanya estimasi biaya vertical garden untuk kantor.',
    'Halo, apakah bisa jadwalkan survei lokasi taman minggu ini?',
  ];

  const handleSendMessage = (messageText: string) => {
    const text = encodeURIComponent(messageText);
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-[#234935] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                  ST
                </div>
                <span className="w-3 h-3 rounded-full bg-[#25D366] absolute bottom-0 right-0 border-2 border-[#234935]" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Surya Taman Official</h4>
                <p className="text-[11px] text-emerald-200">Online • Siap Melayani Konsultasi</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/10 text-white/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#f8faf8] space-y-3 max-h-72 overflow-y-auto">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-xs text-xs text-neutral-700 leading-relaxed border border-neutral-100">
              Halo! Selamat datang di <strong>Surya Taman</strong>. Ada yang bisa kami bantu mengenai rencana taman atau lanskap Anda?
            </div>

            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider px-1">
              Pilih Pertanyaan Cepat:
            </p>

            <div className="space-y-1.5">
              {quickMessages.map((msg, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(msg)}
                  className="w-full text-left text-xs bg-white hover:bg-[#edf5ef] text-neutral-800 hover:text-[#234935] p-2.5 rounded-xl border border-neutral-200 transition-colors cursor-pointer"
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-neutral-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Tulis pesan Anda..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && customMsg.trim()) {
                  handleSendMessage(customMsg);
                  setCustomMsg('');
                }
              }}
              className="flex-1 text-xs sm:text-sm bg-[#f4f6f4] px-3 py-2 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#234935]"
            />
            <button
              onClick={() => {
                if (customMsg.trim()) {
                  handleSendMessage(customMsg);
                  setCustomMsg('');
                }
              }}
              className="w-9 h-9 rounded-xl bg-[#234935] text-white flex items-center justify-center hover:bg-[#183626] transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button matching image WhatsApp circle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Hubungi WhatsApp Surya Taman"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] relative z-10" />
      </button>
    </div>
  );
};
