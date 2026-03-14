import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Blog() {
  const posts = [
    {
      title: "Tips Memilih Bus Pariwisata untuk Perjalanan Jauh",
      excerpt: "Memilih bus yang tepat sangat penting untuk kenyamanan perjalanan jarak jauh. Berikut adalah beberapa hal yang perlu Anda perhatikan...",
      date: "15 Mei 2024",
      author: "Admin",
      image: "https://picsum.photos/seed/blog1/600/400"
    },
    {
      title: "5 Destinasi Wisata Terpopuler di Bali Tahun 2024",
      excerpt: "Bali selalu menjadi primadona wisata. Simak daftar destinasi yang wajib Anda kunjungi tahun ini bersama Avicent Holiday...",
      date: "10 Mei 2024",
      author: "Admin",
      image: "https://picsum.photos/seed/blog2/600/400"
    },
    {
      title: "Pentingnya Asuransi Perjalanan Saat Berwisata",
      excerpt: "Keamanan adalah prioritas utama. Mengapa asuransi perjalanan sangat penting untuk setiap trip Anda? Simak penjelasannya...",
      date: "05 Mei 2024",
      author: "Admin",
      image: "https://picsum.photos/seed/blog3/600/400"
    }
  ];

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
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[16/10]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-navy uppercase tracking-widest">
                  Travel Tips
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-navy/40 mb-4 font-bold uppercase tracking-widest">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  {post.author}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300 leading-tight">
                {post.title}
              </h3>
              
              <p className="text-sm text-navy/60 mb-6 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-2 text-gold font-bold text-sm group/link">
                Baca Selengkapnya
                <div className="w-8 h-[2px] bg-gold group-hover/link:w-12 transition-all duration-300" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}