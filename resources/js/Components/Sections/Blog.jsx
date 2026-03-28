import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Blog({ posts }) {
  const displayPosts = posts || [];

  return (
    <section id="blog" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Berita & Artikel</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy">Informasi <span className="text-gold italic">Terbaru</span></h2>
          </div>
          <Link href="/blog" className="btn-outline flex items-center gap-2 text-sm group">
            Lihat Semua Artikel
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="relative px-2 md:px-20">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            watchOverflow={false}
            pagination={{
              el: '.blog-pagination',
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: '.blog-prev',
              nextEl: '.blog-next',
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-8"
          >
            {displayPosts.map((post, index) => (
              <SwiperSlide key={index} className="!flex h-full pb-2">
                <article className="bg-white border border-navy/5 p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col w-full h-full">
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/10]">
                    <img
                      src={post.featured_image || post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-navy uppercase tracking-widest">
                      Berita
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-[10px] text-navy/40 mb-4 font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.published_at ? new Date(post.published_at).toLocaleDateString('id-ID') : post.date}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300 leading-tight line-clamp-2 min-h-[3.5rem]">
                    {post.title}
                  </h3>

                  <p className="text-xs text-navy/60 mb-6 line-clamp-2 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <a
                    href={post.content}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gold font-bold text-sm group/link mt-auto pt-4 border-t border-navy/5"
                  >
                    Baca Selengkapnya
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="blog-pagination flex justify-center mt-8"></div>

          {/* Navigation Buttons */}
          <button className="blog-prev absolute -left-4 md:-left-12 top-1/2 -translate-y-12 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-navy/5 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-300 group/nav disabled:opacity-50">
            <ChevronLeft size={24} className="group-hover/nav:-translate-x-0.5 transition-transform" />
          </button>
          <button className="blog-next absolute -right-4 md:-right-12 top-1/2 -translate-y-12 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-navy/5 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-300 group/nav disabled:opacity-50">
            <ChevronRight size={24} className="group-hover/nav:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}