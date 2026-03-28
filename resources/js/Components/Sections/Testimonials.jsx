import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Testimonials({ testimonials }) {
  const displayTestimonials = testimonials || [];

  return (
    <section id="testimonials" className="py-24 bg-navy/5 relative overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block"
          >
            Testimoni
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-navy mb-6"
          >
            Apa Kata <span className="text-gold italic">Mereka?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-navy/60"
          >
            Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah beberapa pengalaman dari klien yang telah menggunakan layanan kami.
          </motion.p>
        </div>

        <div className="relative px-4 md:px-12">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            watchOverflow={false}
            pagination={{
              el: '.testimonial-pagination',
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-8"
          >
            {displayTestimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-navy/5 relative group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full min-h-[320px]">
                  <div className="absolute top-8 right-8 text-gold/10 group-hover:text-gold/20 transition-colors duration-300">
                    <Quote size={48} />
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="text-navy/70 italic mb-8 leading-relaxed flex-1 text-justify">
                    "{testimonial.content}"
                  </p>


                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-navy/5">
                    <img
                      src={testimonial.avatar || testimonial.image || 'https://ui-avatars.com/api/?name=' + (testimonial.customer_name || testimonial.name)}
                      alt={testimonial.customer_name || testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold/20 flex-shrink-0"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-navy truncate max-w-[150px]">{testimonial.customer_name || testimonial.name}</h4>
                      <p className="text-[10px] text-navy/50 uppercase tracking-widest font-bold">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="testimonial-pagination flex justify-center mt-8"></div>

          {/* Custom Navigation */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-12 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-navy/5 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-300 group/nav disabled:opacity-50">
            <ChevronLeft size={24} className="group-hover/nav:-translate-x-0.5 transition-transform" />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-12 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-navy/5 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-300 group/nav disabled:opacity-50">
            <ChevronRight size={24} className="group-hover/nav:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}