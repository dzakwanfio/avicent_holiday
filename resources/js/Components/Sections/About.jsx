import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Target, Eye, Users, Heart } from 'lucide-react';
import { mockAbout } from '@/utils/mockData';

export default function About() {
  const about = mockAbout;

  return (
    <section id="about" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">
            Tentang Kami
          </span>

          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            {about.company_name}
          </h2>

          <p className="text-2xl md:text-3xl text-gold italic font-serif mb-6">
            {about.brand_name}
          </p>

          <div className="flex items-center justify-center gap-2 text-gold/70">
            <MapPin size={18} />
            <span className="text-sm">{about.location}, Jawa Timur</span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Profil Perusahaan */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                  <Users size={24} className="text-gold" />
                </div>
                <h3 className="text-xl font-bold">Profil Perusahaan</h3>
              </div>

              <p className="text-white/75 leading-relaxed">
                {about.profile}
              </p>
            </div>

            {/* Komitmen Kami */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                  <ShieldCheck size={24} className="text-gold" />
                </div>
                <h3 className="text-xl font-bold">Komitmen Kami</h3>
              </div>

              <p className="text-white/75 leading-relaxed">
                {about.description}
              </p>
            </div>

            {/* Closing Statement */}
            {about.closing && (
              <div className="bg-gradient-to-r from-gold/15 to-gold/5 backdrop-blur-sm p-6 rounded-2xl border border-gold/20">
                <p className="text-white/90 leading-relaxed italic">
                  {about.closing}
                </p>
              </div>
            )}
          </motion.div>

          {/* Right Column - Visi */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="h-full bg-gradient-to-br from-gold/20 to-gold/5 backdrop-blur-sm p-10 rounded-3xl border border-gold/20 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center">
                  <Eye size={28} className="text-navy" />
                </div>
                <h3 className="text-2xl font-bold font-serif">Visi Kami</h3>
              </div>

              <p className="text-white/90 leading-relaxed text-lg italic">
                {about.vision}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-serif mb-4">Misi Kami</h3>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.mission.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
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
                    <p className="text-sm text-white/65 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience & Operational Areas */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gold/20 to-gold/10 p-8 rounded-3xl border border-gold/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart size={24} className="text-gold" />
              <h4 className="text-xl font-bold text-gold">Pengalaman Layanan</h4>
            </div>
            <p className="text-white/85 leading-relaxed">{about.experience}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
          >
            <h4 className="text-xl font-bold mb-4">Wilayah Operasional</h4>
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