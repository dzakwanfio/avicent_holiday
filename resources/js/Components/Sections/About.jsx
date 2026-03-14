import { motion } from 'motion/react';
import { Target, Eye, History } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy text-white overflow-hidden relative">
      {/* Background Texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Tentang Kami</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              PT AVICENT INDO UTAMA <br />
              <span className="text-gold/80 italic">Avicent Holiday</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Berdiri dengan visi untuk menjadi mitra perjalanan terdepan di Indonesia, Avicent Holiday berkomitmen memberikan layanan transportasi dan paket wisata yang mengutamakan kenyamanan, keamanan, dan kepuasan pelanggan.
            </p>
            
            <div className="grid gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold shrink-0 border border-white/5">
                  <History size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Sejarah Singkat</h4>
                  <p className="text-sm text-white/60">Berawal dari semangat untuk memajukan pariwisata lokal, kami tumbuh menjadi penyedia armada bus premium yang dipercaya oleh berbagai instansi dan komunitas.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold shrink-0 border border-white/5">
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Visi Kami</h4>
                  <p className="text-sm text-white/60">Menjadi perusahaan transportasi dan biro perjalanan wisata yang paling inovatif dan terpercaya dengan standar pelayanan internasional.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold shrink-0 border border-white/5">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Misi Kami</h4>
                  <p className="text-sm text-white/60">Menyediakan armada terbaru yang terawat, driver profesional yang ramah, serta paket wisata yang edukatif dan menyenangkan bagi setiap klien.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] border-4 border-white/10">
                <img src="https://picsum.photos/seed/travel-1/400/600" alt="Travel 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="bg-gold p-8 rounded-2xl text-center">
                <span className="text-4xl font-bold block mb-1">100%</span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-80">Terpercaya</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 p-8 rounded-2xl text-center border border-white/10">
                <span className="text-4xl font-bold block mb-1">24/7</span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-60">Dukungan</span>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] border-4 border-white/10">
                <img src="https://picsum.photos/seed/travel-2/400/600" alt="Travel 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}