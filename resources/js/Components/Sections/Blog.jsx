import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

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
          <Link href="/blog" className="btn-outline flex items-center gap-2 text-sm">
            Lihat Semua Artikel
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-navy/5 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/10]">
                <img
                  src={post.featured_image || post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
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

              <h3 className="text-lg font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300 leading-tight flex-1">
                {post.title}
              </h3>

              <p className="text-xs text-navy/60 mb-6 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>

              <a
                href={post.content}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gold font-bold text-sm group/link mt-auto"
              >
                Baca Selengkapnya
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}