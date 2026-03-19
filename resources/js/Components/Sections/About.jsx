import { motion } from 'motion/react';
import {
  ShieldCheck,
  Eye,
  Users,
  Target,
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
        {/* Heading */}
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

        {/* Top Content */}
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
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

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="self-start"
          >
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4 md:p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-10">
                  <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-white/10 shadow-2xl bg-white/5">
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

                <div className="space-y-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center shadow-xl min-h-[120px] flex flex-col items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-4xl md:text-5xl font-extrabold leading-none mb-2">
                      24/7
                    </span>
                    <span className="text-white/70 text-xs uppercase tracking-[0.18em] font-bold">
                      Dukungan
                    </span>
                  </div>

                  <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-white/10 shadow-2xl bg-white/5">
                    <img
                      src={imageTwo}
                      alt="Perjalanan Avicent Holiday"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 mb-10"
        >
          <div className="text-center mb-12">
            <span className="text-gold text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
              Nilai Perusahaan
            </span>

            <h3 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Misi Kami
            </h3>

            <div className="w-20 h-[3px] bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.mission.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold/30 transition-colors">
                    <Target size={20} className="text-gold" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold mb-2 text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/65 leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}