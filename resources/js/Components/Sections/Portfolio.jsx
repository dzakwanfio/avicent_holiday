import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Portfolio({ projects }) {
  const displayProjects = projects || [];

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block"
          >
            Portofolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-navy mb-6"
          >
            Dipercaya Oleh <span className="text-gold italic">Ratusan</span> Klien
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-navy/60"
          >
            Kami bangga telah menjadi bagian dari perjalanan berharga berbagai instansi, sekolah, dan komunitas di seluruh Indonesia melalaui layanan transportasi terpercaya.
          </motion.p>
        </div>

        <div className="relative px-4 md:px-12">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            watchOverflow={false}
            grabCursor={true}
            pagination={{
              el: '.portfolio-pagination',
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: '.portfolio-button-prev',
              nextEl: '.portfolio-button-next',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {displayProjects.map((project, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="group relative overflow-hidden rounded-[2.5rem] shadow-lg aspect-square">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/40 to-transparent p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">{project.category}</span>
                    <h4 className="text-white text-xl font-bold leading-tight">{project.title}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="portfolio-pagination flex justify-center mt-4 relative z-20"></div>

          {/* Custom Navigation */}
          <button className="portfolio-button-prev absolute left-0 top-1/2 -translate-y-12 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-navy/5 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-300 group/nav disabled:opacity-50">
            <ChevronLeft size={24} className="group-hover/nav:-translate-x-0.5 transition-transform" />
          </button>
          <button className="portfolio-button-next absolute right-0 top-1/2 -translate-y-12 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-navy/5 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-300 group/nav disabled:opacity-50">
            <ChevronRight size={24} className="group-hover/nav:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}