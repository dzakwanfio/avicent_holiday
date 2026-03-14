import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from '@inertiajs/react'; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tentang Kami', href: '/#about' },
    { name: 'Layanan', href: '/#services' },
    { name: 'Keunggulan', href: '/#why-us' },
    { name: 'Berita', href: '/#blog' },
    { name: 'Kontak', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-lg leading-tight ${isScrolled ? 'text-navy' : 'text-navy'}`}>AVICENT</span>
            <span className={`text-[10px] tracking-[0.2em] font-medium ${isScrolled ? 'text-gold' : 'text-gold'}`}>HOLIDAY</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-gold flex items-center gap-2 py-2 px-5 text-sm"
          >
            <Phone size={16} />
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-navy" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-navy/5 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-navy hover:text-gold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-gold text-center"
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