import { motion } from 'motion/react';
import {
  Armchair,
  Shield,
  Wallet,
  Users,
  Calendar,
  Headset,
  MapPin,
  Bus
} from 'lucide-react';
import { mockBenefits } from '@/utils/mockData';

const iconMap = {
  Armchair,
  Shield,
  Wallet,
  Users,
  Calendar,
  Headset,
  MapPin,
  Bus
};

export default function WhyChooseUs() {
  const benefits = mockBenefits;

  return (
    <section id="why-us" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">
            Keunggulan Layanan
          </span>

          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Manfaat Menyewa Bus <span className="text-gold italic">Pariwisata</span>
          </h2>

          <p className="text-white/65 max-w-3xl mx-auto leading-relaxed">
            Bersama Avicent Holiday, perjalanan rombongan menjadi lebih nyaman, aman,
            hemat, fleksibel, dan menyenangkan untuk berbagai kebutuhan wisata,
            study tour, ziarah, outing perusahaan, maupun acara keluarga.
          </p>
        </motion.div>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-sm p-7 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gold/20 text-gold rounded-2xl flex items-center justify-center mb-5 group-hover:bg-gold/30 transition-colors">
                  {Icon && <Icon size={26} />}
                </div>

                <h4 className="text-lg font-bold mb-3 text-white">
                  {item.title}
                </h4>

                <p className="text-sm text-white/65 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gold/15 to-gold/5 border border-gold/20 rounded-3xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Bus className="text-gold" size={24} />
              <h3 className="text-2xl font-bold font-serif text-white">
                Solusi Perjalanan Rombongan yang Lebih Praktis
              </h3>
            </div>
            <p className="text-white/75 max-w-3xl mx-auto leading-relaxed">
              Avicent Holiday hadir dengan armada terawat, fasilitas lengkap, dan
              pelayanan profesional untuk memberikan pengalaman perjalanan yang aman,
              nyaman, dan berkesan bagi setiap pelanggan.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}