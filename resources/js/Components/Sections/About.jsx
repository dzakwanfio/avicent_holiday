import { motion } from 'motion/react';
import {
  MapPin,
  ShieldCheck,
  Eye,
  Users,
} from 'lucide-react';
import { mockAbout, mockVehicles } from '@/utils/mockData';

export default function About() {
  const about = mockAbout;

  const imageOne = mockVehicles?.[0]?.photo
    ? `/${mockVehicles[0].photo}`
    : 'https://picsum.photos/seed/avicent-about-1/600/800';

  const imageTwo = mockVehicles?.[1]?.photo
    ? `/${mockVehicles[1].photo}`
    : 'https://picsum.photos/seed/avicent-about-2/600/800';

  return (
    <section
      id="about"
      className="py-24 bg-navy text-white overflow-hidden relative"
    >
      {/* Background grid lines */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="grid grid-cols-6 md:grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADING ONLY */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl text-left mb-8 md:mb-10"
        >
          <span className="text-gold font-bold uppercase tracking-[0.22em] text-xs mb-5 block">
            Tentang Kami
          </span>

          <h2 className="text-[2.6rem] md:text-[4.3rem] leading-[1.05] font-bold font-serif tracking-tight text-white mb-3">
            PT AVICENT INDO
            <br />
            UTAMA
          </h2>

          <p className="text-gold/80 italic font-serif text-[2rem] md:text-[3rem] leading-none">
            Avicent Holiday
          </p>
        </motion.div>

        {/* CONTENT: LEFT CARDS + RIGHT IMAGE GRID */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-start mb-20">
          {/* LEFT CARDS */}
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Profil Perusahaan */}
            <div className="bg-white/[0.045] backdrop-blur-sm p-8 md:p-10 rounded-[22px] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center shrink-0">
                  <Users size={22} className="text-gold" />
                </div>
                <h3 className="text-[1.45rem] md:text-[1.75rem] font-bold font-serif">
                  Profil Perusahaan
                </h3>
              </div>

              <p className="text-white/75 text-[1rem] md:text-[1.05rem] leading-8 md:leading-9 text-justify">
                {about.profile}
              </p>
            </div>

            {/* Komitmen Kami */}
            <div className="bg-white/[0.045] backdrop-blur-sm p-8 md:p-10 rounded-[22px] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck size={22} className="text-gold" />
                </div>
                <h3 className="text-[1.45rem] md:text-[1.75rem] font-bold font-serif">
                  Komitmen Kami
                </h3>
              </div>

              <p className="text-white/75 text-[1rem] md:text-[1.05rem] leading-8 md:leading-9 text-justify">
                {about.description}
              </p>
            </div>

            {/* Visi Kami */}
            <div className="bg-gradient-to-r from-white/[0.05] to-gold/[0.06] backdrop-blur-sm p-8 md:p-10 rounded-[22px] border border-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center shrink-0">
                  <Eye size={22} className="text-gold" />
                </div>
                <h3 className="text-[1.45rem] md:text-[1.75rem] font-bold font-serif">
                  Visi Kami
                </h3>
              </div>

              <p className="text-white/90 text-[1rem] md:text-[1.05rem] leading-8 md:leading-9 italic font-semibold text-justify">
                {about.vision}
              </p>
            </div>
          </motion.div>

          {/* RIGHT IMAGE GRID - sejajar dengan cards kiri */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 lg:gap-5 self-start"
          >
            {/* Left stack */}
            <div className="space-y-4 pt-12">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] border-4 border-white/10 shadow-2xl bg-white/5">
                <img
                  src={imageOne}
                  alt="Armada Avicent Holiday"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-gold rounded-2xl p-8 text-center shadow-xl min-h-[120px] flex flex-col items-center justify-center">
                <span className="text-white text-4xl md:text-5xl font-extrabold leading-none mb-2">
                  100%
                </span>
                <span className="text-white/90 text-xs uppercase tracking-[0.18em] font-bold">
                  Terpercaya
                </span>
              </div>
            </div>

            {/* Right stack */}
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center shadow-xl min-h-[120px] flex flex-col items-center justify-center backdrop-blur-sm">
                <span className="text-white text-4xl md:text-5xl font-extrabold leading-none mb-2">
                  24/7
                </span>
                <span className="text-white/70 text-xs uppercase tracking-[0.18em] font-bold">
                  Dukungan
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[3/4] border-4 border-white/10 shadow-2xl bg-white/5">
                <img
                  src={imageTwo}
                  alt="Perjalanan Avicent Holiday"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gold/20 to-gold/10 p-8 rounded-3xl border border-gold/25"
          >
            <h4 className="text-xl font-bold text-gold mb-4">
              Pengalaman Layanan
            </h4>
            <p className="text-white/85 leading-relaxed text-justify">
              {about.experience}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={22} className="text-gold" />
              <h4 className="text-xl font-bold">Wilayah Operasional</h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {about.operational_areas.map((area, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gold/20 text-gold px-4 py-2 rounded-full border border-gold/30 hover:bg-gold/30 transition-colors cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
