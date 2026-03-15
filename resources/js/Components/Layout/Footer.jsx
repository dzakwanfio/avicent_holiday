import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUp, Clock, Shield, Award } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-12 py-16">
          
          {/* Column 1: Company Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/images/logoavicent.jpg" 
                alt="Avicent Holiday Logo"
                className="h-14 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-14 h-14 bg-gold rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl text-white">AVICENT</span>
                <span className="text-xs tracking-[0.3em] text-gold font-medium">HOLIDAY</span>
              </div>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed">
              PT AVICENT INDO UTAMA - Penyedia jasa transportasi dan layanan tour pariwisata terpercaya di Madiun. 
              Armada modern, fasilitas lengkap, dan pelayanan profesional untuk pengalaman perjalanan yang berkesan.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
                <Shield size={16} className="text-gold" />
                <span className="text-xs text-white/70">Terpercaya</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
                <Award size={16} className="text-gold" />
                <span className="text-xs text-white/70">Profesional</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-gold">Tautan</h4>
            <ul className="space-y-3">
              {[
                { name: 'Beranda', href: '#home' },
                { name: 'Tentang Kami', href: '#about' },
                { name: 'Armada', href: '#armada' },
                { name: 'Layanan', href: '#services' },
                { name: 'Dokumentasi', href: '#portfolio' },
                { name: 'Kontak', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-white/70 hover:text-gold transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6 text-gold">Layanan Kami</h4>
            <ul className="space-y-3">
              {[
                'Sewa Bus Pariwisata',
                'Study Tour Sekolah',
                'Ziarah Religi',
                'Outing Company',
                'Acara Keluarga',
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#contact" 
                    className="text-sm text-white/70 hover:text-gold transition-colors duration-300 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6 text-gold">Hubungi Kami</h4>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <MapPin size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Alamat</p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Jl. Basuki Rahmad<br />
                    (Selatan Taman Kota)<br />
                    Madiun, Jawa Timur
                  </p>
                </div>
              </div>

              {/* Phone/WhatsApp */}
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Phone size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Telepon / WhatsApp</p>
                  <a 
                    href="https://wa.me/6285788889995" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-white/80 hover:text-gold transition-colors font-medium"
                  >
                    0857-8888-9995
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Mail size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Email</p>
                  <a 
                    href="mailto:info@avicentholiday.com" 
                    className="text-sm text-white/80 hover:text-gold transition-colors"
                  >
                    info@avicentholiday.com
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Jam Operasional</p>
                  <p className="text-sm text-white/80">Senin - Minggu: 24 Jam</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/50 mb-3">Ikuti Kami</p>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com/avicentholiday" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://facebook.com/avicentholiday" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 pb-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-white/60">
                &copy; {currentYear} PT AVICENT INDO UTAMA. All rights reserved.
              </p>
              <p className="text-xs text-white/40 mt-1">
                Avicent Holiday Madiun - Mitra Perjalanan Terpercaya
              </p>
            </div>
            
            {/* Scroll to Top Button */}
            <button 
              onClick={scrollToTop}
              className="group w-12 h-12 bg-gold rounded-full flex items-center justify-center hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-1"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}