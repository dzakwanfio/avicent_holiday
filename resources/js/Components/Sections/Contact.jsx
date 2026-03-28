import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import { useState } from 'react';

// Mock Data
const mockContact = {
  whatsapp: '6285788889995',
  address: 'Jl. Basuki Rahmad, Madiun, Jawa Timur 63119',
  google_maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1449.169742286128!2d111.532121349136!3d-7.610060663631086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bf33f6c73733%3A0x9ffb433be8c8b2ca!2sAvicent%20Holiday%20Transport%20Persewaan%20Bus%20dan%20Hiace!5e0!3m2!1sid!2sid!4v1773560857349!5m2!1sid!2sid",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    customer_name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Kirim ke WhatsApp
  const sendToWhatsApp = (e) => {
    e.preventDefault();

    if (!formData.customer_name || !formData.phone) {
      alert('Nama dan No. WhatsApp wajib diisi!');
      return;
    }

    // Format pesan WhatsApp
    const text = `Halo Tim Avicent Holiday,

Saya ingin menanyakan informasi layanan / berkonsultasi mengenai perjalanan. Berikut adalah detail informasi saya:

------------------------------------------------------
*INFORMASI KONTAK & PESAN*
------------------------------------------------------
*Nama Lengkap* : ${formData.customer_name}
*Nomor HP*     : ${formData.phone}
*Isi Pesan*    : ${formData.message || '-'}
------------------------------------------------------

Terima kasih.`;

    // Buka WhatsApp di tab baru
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${mockContact.whatsapp}?text=${encodedText}`, '_blank');

    // Reset form (opsional)
    setFormData({ customer_name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Kolom Kiri: Info Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Kontak Kami</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
              Siap Merencanakan <br />
              <span className="text-gold italic">Perjalanan Anda?</span>
            </h2>
            <p className="text-lg text-navy/60 mb-10 leading-relaxed">
              Tim marketing kami siap membantu Anda memberikan penawaran terbaik untuk kebutuhan transportasi dan paket wisata Anda.
            </p>

            {/* Info Kontak - Menggunakan mockContact */}
            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-navy text-gold rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy mb-1">Alamat Kantor</h4>
                  <p className="text-navy/60">{mockContact.address}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-navy text-gold rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy mb-1">Telepon / WhatsApp</h4>
                  <a
                    href={`https://wa.me/${mockContact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy/60 hover:text-gold transition-colors"
                  >
                    +62 {mockContact.whatsapp.replace('62', '')}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/*Kolom Kanan: Form Booking */}
          <motion.form
            onSubmit={sendToWhatsApp}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-navy p-10 rounded-3xl shadow-2xl text-white"
          >
            <h3 className="text-2xl font-bold mb-8">Pesan Sekarang</h3>

            <div className="space-y-6">
              {/* Nama Pelanggan */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="customer_name"
                  value={formData.customer_name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder-white/30"
                  placeholder="Masukkan nama lengkap Anda"
                  required
                />
              </div>

              {/* No. Telepon */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">
                  No. WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder-white/30"
                  placeholder="0812xxxx"
                  required
                />
              </div>

              {/* Pesan Tambahan */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Pesan Tambahan
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder-white/30 resize-none"
                  placeholder="Contoh: Rute Jakarta-Bandung, 30 orang, tanggal 15 Juni..."
                />
              </div>

              {/* Tombol Submit */}
              <button
                type="submit"
                className="btn-gold w-full flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Kirim via WhatsApp
              </button>

              <p className="text-xs text-center text-white/40">
                * Data tidak disimpan di server. Pesan akan langsung terkirim ke WhatsApp admin.
              </p>
            </div>
          </motion.form>
        </div>

        {/* Google Maps */}
        <div className="mt-24 rounded-3xl overflow-hidden h-[400px] border-8 border-navy/5 shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
          <iframe
            src={mockContact.google_maps_embed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Avicent Holiday"
          ></iframe>
        </div>
      </div>
    </section>
  );
}