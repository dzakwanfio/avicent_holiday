import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials({ testimonials }) {
  const displayTestimonials = testimonials || [];

  return (
    <section id="testimonials" className="py-24 bg-navy/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Testimoni</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Apa Kata <span className="text-gold italic">Mereka?</span></h2>
          <p className="text-navy/60">Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah beberapa pengalaman dari klien yang telah menggunakan layanan kami.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-navy/5 relative group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-8 right-8 text-gold/10 group-hover:text-gold/20 transition-colors duration-300">
                <Quote size={48} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-navy/70 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img src={testimonial.avatar || testimonial.image} alt={testimonial.customer_name || testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-gold/20" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="text-sm font-bold text-navy">{testimonial.customer_name || testimonial.name}</h4>
                  <p className="text-[10px] text-navy/50 uppercase tracking-widest font-bold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}