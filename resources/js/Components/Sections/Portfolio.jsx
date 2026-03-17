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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-24">
          {displayClients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-6 bg-navy/5 rounded-2xl grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img src={client.logo} alt={client.name} className="max-h-12 w-auto object-contain" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="grid md:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h4 className="text-white text-xl font-bold">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}