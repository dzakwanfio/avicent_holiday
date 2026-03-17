import { motion } from 'motion/react';
import { Link } from '@inertiajs/react';
import { Bus, Map, Users, Calendar, ArrowRight, Cog } from 'lucide-react';

const IconMap = {
  Bus: Bus,
  Map: Map,
  Users: Users,
  Calendar: Calendar,
  Cog: Cog
};

export default function Services({ services }) {
  const displayServices = services || [];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">
            Layanan Kami
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Solusi Perjalanan <span className="text-gold italic">Lengkap</span>
          </h2>

          <p className="text-navy/60">
            Kami berkomitmen memberikan pengalaman terbaik melalui berbagai layanan transportasi dan wisata yang disesuaikan dengan kebutuhan Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayServices.map((service, index) => {
            const IconComponent = IconMap[service.icon] || Cog;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  boxShadow: "0 25px 50px -12px rgba(0, 33, 71, 0.15)",
                  borderColor: "rgba(197, 160, 89, 0.3)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  // entry animation delay
                  delay: index * 0.1,
                  // allow hover to ignore the entry delay
                  y: { delay: 0, duration: 0.2 }
                }}
                className="bg-white border border-navy/5 p-8 rounded-3xl group flex flex-col cursor-pointer transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-navy/5 text-gold rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 tracking-tight group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-sm text-navy/60 mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features && service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-xs text-navy/70 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold/40 rounded-full group-hover:bg-gold transition-colors" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/#contact" className="text-gold font-bold text-sm flex items-center gap-2 group/link mt-auto">
                  Pesan Sekarang
                  <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}