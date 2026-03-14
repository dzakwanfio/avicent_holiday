import { motion } from 'motion/react';
import { ChevronRight, Bus, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 -skew-x-12 transform translate-x-20 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Bus size={14} />
            Penyewaan Bus & Travel Terpercaya
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-navy">
            Kenyamanan Anda <br />
            <span className="text-gold italic">Tanggung Jawab Kami</span>
          </h1>
          
          <p className="text-lg text-navy/70 mb-10 max-w-lg leading-relaxed">
            Agendakan perjalanan wisata impian Anda bersama Avicent Holiday. Kami menyediakan armada Big Bus JB5 & JB3+ terbaru untuk pengalaman perjalanan yang tak terlupakan.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/#contact" className="btn-gold flex items-center gap-2 group">
              Booking Sekarang
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/#services" className="btn-outline">
              Lihat Layanan
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-navy/10 pt-8">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-navy">10+</span>
              <span className="text-xs text-navy/60 uppercase tracking-wider font-medium">Armada Bus</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-navy">500+</span>
              <span className="text-xs text-navy/60 uppercase tracking-wider font-medium">Trip Selesai</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-navy">99%</span>
              <span className="text-xs text-navy/60 uppercase tracking-wider font-medium">Kepuasan Klien</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/bus-travel/800/600" 
              alt="Avicent Holiday Bus" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 border border-navy/5"
          >
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-[10px] text-navy/50 font-bold uppercase tracking-wider">Keamanan</p>
              <p className="text-sm font-bold text-navy">Asuransi Perjalanan</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 border border-navy/5"
          >
            <div className="w-10 h-10 bg-gold/10 text-gold rounded-full flex items-center justify-center">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[10px] text-navy/50 font-bold uppercase tracking-wider">Destinasi</p>
              <p className="text-sm font-bold text-navy">Seluruh Indonesia</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}