// resources/js/Components/Sections/WhyChooseUs.jsx
import { motion } from 'motion/react';
import { 
  Armchair, Shield, Wallet, Users, Calendar, 
  Headset, MapPin, Bus 
} from 'lucide-react';
import { mockBenefits } from '@/utils/mockData';

const iconMap = { 
  Armchair, Shield, Wallet, Users, Calendar, 
  Headset, MapPin, Bus 
};

export default function WhyChooseUs() {
  const benefits = mockBenefits;

  return (
    <section id="why-us" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Decorative Gold Circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Keunggulan Kami</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Manfaat Menyewa Bus <span className="text-gold italic">Pariwisata</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Mengapa memilih Avicent Holiday untuk perjalanan wisata Anda?
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold/20 text-gold rounded-xl flex items-center justify-center mb-4">
                  {Icon && <Icon size={24} />}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}