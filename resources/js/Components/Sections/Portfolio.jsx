import { motion } from 'motion/react';

export default function Portfolio({ clients, projects }) {
  const displayClients = clients || [];
  const displayProjects = projects || [];

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Portofolio & Klien</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Dipercaya Oleh <span className="text-gold italic">Ratusan</span> Klien</h2>
          <p className="text-navy/60">Kami bangga telah menjadi bagian dari perjalanan berharga berbagai instansi, sekolah, dan komunitas di seluruh Indonesia.</p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
          {displayClients.slice(0, 6).map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-6 bg-navy/5 rounded-3xl grayscale hover:grayscale-0 transition-all duration-300 aspect-square group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-[80%] object-contain group-hover:scale-110 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="grid md:grid-cols-3 gap-8">
          {displayProjects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] shadow-lg aspect-square"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/40 to-transparent p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">{project.category}</span>
                <h4 className="text-white text-xl font-bold leading-tight">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}