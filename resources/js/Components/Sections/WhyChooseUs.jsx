import { motion } from 'motion/react';
import { Shield, Clock, Award, Heart } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Shield size={24} />,
      title: "Keamanan Terjamin",
      description: "Armada kami selalu dalam kondisi prima dan dilengkapi dengan asuransi perjalanan untuk ketenangan Anda."
    },
    {
      icon: <Clock size={24} />,
      title: "Tepat Waktu",
      description: "Kami menghargai waktu Anda. Driver kami selalu standby lebih awal untuk memastikan jadwal perjalanan sesuai rencana."
    },
    {
      icon: <Award size={24} />,
      title: "Driver Profesional",
      description: "Driver kami telah melalui pelatihan khusus, ramah, dan memiliki pengetahuan rute yang luas di seluruh Indonesia."
    },
    {
      icon: <Heart size={24} />,
      title: "Pelayanan Prima",
      description: "Customer service kami siap membantu Anda 24/7 untuk konsultasi perjalanan dan bantuan darurat."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Decorative Gold Circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Keunggulan Kami</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Mengapa Memilih <br />
              <span className="text-gold italic">Avicent Holiday?</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Kami tidak hanya sekadar menyewakan bus, kami memberikan pengalaman perjalanan yang berkesan dengan standar kualitas yang tidak tertandingi.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-gold/20 text-gold rounded-xl flex items-center justify-center border border-gold/10">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{reason.title}</h4>
                    <p className="text-sm text-white/60 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border-8 border-white/5 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/bus-interior/800/1000" 
                alt="Bus Interior" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -right-10 bg-gold p-8 rounded-3xl shadow-2xl text-center hidden md:block">
              <span className="text-5xl font-bold block mb-1">10+</span>
              <span className="text-xs uppercase tracking-widest font-bold opacity-80">Tahun Pengalaman</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}