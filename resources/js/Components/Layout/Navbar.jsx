import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll effect untuk navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //Kontak dari PDF
  const contact = {
    whatsapp: '6285788889995',
    whatsappDisplay: '0857-8888-9995',
  };

  // Navigasi One-Page (anchor links)
  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Keunggulan', href: '#why-us' },
    { name: 'Armada', href: '#armada' },
    { name: 'Dokumentasi', href: '#portfolio' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO AVICENT */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/images/logoavicent.jpg"
            alt="Avicent Holiday Logo"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback text logo */}
          <div className="hidden w-10 h-10 bg-gold rounded-lg flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-tight text-navy">
              AVICENT
            </span>
            <span className="text-[10px] tracking-[0.2em] font-medium text-gold">
              HOLIDAY
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-navy hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center gap-2 py-2 px-5 text-sm font-medium"
          >
            <Phone size={16} />
            <span className="hidden lg:inline">Hubungi Kami</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-navy p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-navy/10 shadow-lg md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-navy hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-center font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}