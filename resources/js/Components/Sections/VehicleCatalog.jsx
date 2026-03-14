// resources/js/Components/Sections/VehicleCatalog.jsx
import { motion } from 'motion/react';
import VehicleCard from '@/Components/UI/VehicleCard';
import { mockVehicles } from '@/utils/mockData';

export default function VehicleCatalog() {
  // 🔄 Nanti ganti dengan data dari backend:
  // const { vehicles } = usePage().props;
  const vehicles = mockVehicles;

  return (
    <section id="armada" className="py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 📌 Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">
            Katalog Unit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy">
            Pilih Armada <span className="text-gold italic">Terbaik</span>
          </h2>
          <p className="text-navy/60 mt-4 max-w-2xl mx-auto">
            Semua unit kami terawat, bersertifikat, dan dilengkapi fasilitas premium untuk kenyamanan perjalanan Anda.
          </p>
        </motion.div>

        {/* 🚐 Grid Katalog */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          ))}
        </div>

        {/* 📞 CTA Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contact" 
            className="btn-gold inline-flex items-center gap-2"
          >
            Konsultasi Kebutuhan Armada
          </a>
          <p className="text-sm text-navy/40 mt-4">
            * Klik "Pesan Unit Ini" untuk langsung chat via WhatsApp
          </p>
        </motion.div>

      </div>
    </section>
  );
}