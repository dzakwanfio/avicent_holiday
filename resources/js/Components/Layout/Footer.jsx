import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight">AVICENT</span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-gold">HOLIDAY</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              PT AVICENT INDO UTAMA - Penyedia layanan transportasi dan biro perjalanan wisata terpercaya dengan armada premium dan pelayanan prima.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-white/5 text-white/50 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/5 text-white/50 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/5 text-white/50 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Tautan Cepat</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-white/50 hover:text-gold transition-colors">Beranda</Link></li>
              <li><Link href="/#about" className="text-sm text-white/50 hover:text-gold transition-colors">Tentang Kami</Link></li>
              <li><Link href="/#services" className="text-sm text-white/50 hover:text-gold transition-colors">Layanan</Link></li>
              <li><Link href="/#portfolio" className="text-sm text-white/50 hover:text-gold transition-colors">Portofolio</Link></li>
              <li><Link href="/#contact" className="text-sm text-white/50 hover:text-gold transition-colors">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Layanan Utama</h4>
            <ul className="space-y-4">
              <li><Link href="/#services" className="text-sm text-white/50 hover:text-gold transition-colors">Sewa Big Bus JB5</Link></li>
              <li><Link href="/#services" className="text-sm text-white/50 hover:text-gold transition-colors">Sewa Big Bus JB3+</Link></li>
              <li><Link href="/#services" className="text-sm text-white/50 hover:text-gold transition-colors">Paket Wisata Bali</Link></li>
              <li><Link href="/#services" className="text-sm text-white/50 hover:text-gold transition-colors">Paket Wisata Jogja</Link></li>
              <li><Link href="/#services" className="text-sm text-white/50 hover:text-gold transition-colors">Corporate Gathering</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Hubungi Kami</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin size={18} className="text-gold shrink-0" />
                <span className="text-sm text-white/50">Jl. Raya Wisata No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone size={18} className="text-gold shrink-0" />
                <span className="text-sm text-white/50">+62 812 3456 7890</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail size={18} className="text-gold shrink-0" />
                <span className="text-sm text-white/50">info@avicentholiday.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} PT AVICENT INDO UTAMA. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}