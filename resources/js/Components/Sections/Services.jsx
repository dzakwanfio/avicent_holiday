import { motion } from 'motion/react';
import { Bus, Map, Users, Calendar, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Bus size={32} />,
      title: "Sewa Bus Pariwisata",
      description: "Kami menyediakan armada Big Bus JB5 & JB3+ terbaru dengan fasilitas premium untuk kenyamanan perjalanan Anda.",
      features: ["AC & Audio System", "Reclining Seat", "USB Charger", "Driver Profesional"]
    },
    {
      icon: <Map size={32} />,
      title: "Paket Wisata Domestik",
      description: "Jelajahi keindahan Indonesia dengan paket wisata yang terencana dengan baik dan harga yang kompetitif.",
      features: ["Akomodasi Hotel", "Tiket Masuk Wisata", "Pemandu Wisata", "Konsumsi & Snack"]
    },
    {
      icon: <Users size={32} />,
      title: "Corporate Outing",
      description: "Layanan khusus untuk kegiatan outing kantor, gathering, dan perjalanan dinas perusahaan Anda.",
      features: ["Custom Itinerary", "Team Building", "Dokumentasi", "Laporan Perjalanan"]
    },
    {
      icon: <Calendar size={32} />,
      title: "Antar Jemput Bandara",
      description: "Layanan transportasi khusus untuk penjemputan dan pengantaran ke bandara dengan armada yang nyaman.",
      features: ["Tepat Waktu", "Bantuan Bagasi", "Armada Bersih", "Harga Flat"]
    }
  ];

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
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-navy/5 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-navy/5 text-gold rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-navy mb-4">
                {service.title}
              </h3>

              <p className="text-sm text-navy/60 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-xs text-navy/70 flex items-center gap-2">
                    <div className="w-1 h-1 bg-gold rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="text-gold font-bold text-sm flex items-center gap-2 group/link">
                Pesan Sekarang
                <ArrowRight
                  size={16}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}