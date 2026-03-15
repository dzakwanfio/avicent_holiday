// resources/js/Components/Sections/About.jsx
import { motion } from 'motion/react';
import { Target, Eye, History, MapPin, Award } from 'lucide-react';
import { mockAbout } from '@/utils/mockData';

export default function About() {
  const about = mockAbout;

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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Tentang Kami</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {about.company_name} <br />
            <span className="text-gold italic">{about.brand_name}</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-gold/60">
            <MapPin size={16} />
            <span className="text-sm">{about.location}, Jawa Timur</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-4 items-start mb-8">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold shrink-0 border border-white/5">
                <History size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Profil Perusahaan</h4>
                <p className="text-white/70 leading-relaxed">{about.profile}</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold shrink-0 border border-white/5">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Deskripsi Usaha</h4>
                <p className="text-white/70 leading-relaxed">{about.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Vision */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-3xl border border-white/10"
          >
            <div className="flex gap-3 items-center mb-4">
              <Eye size={32} className="text-gold" />
              <h3 className="text-2xl font-bold">Visi Kami</h3>
            </div>
            <p className="text-white/70 leading-relaxed italic">{about.vision}</p>
          </motion.div>
        </div>

        {/* Mission Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Misi Kami</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.mission.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 bg-gold/20 text-gold rounded-lg flex items-center justify-center mb-4">
                  <Target size={20} />
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
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
            className="bg-gold/10 p-8 rounded-3xl border border-gold/20"
          >
            <h4 className="text-xl font-bold mb-4 text-gold">Pengalaman Layanan</h4>
            <p className="text-white/70">{about.experience}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-3xl border border-white/10"
          >
            <h4 className="text-xl font-bold mb-4">Wilayah Operasional</h4>
            <div className="flex flex-wrap gap-2">
              {about.operational_areas.map((area, idx) => (
                <span key={idx} className="text-xs bg-gold/20 text-gold px-3 py-1 rounded-full">
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