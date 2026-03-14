// resources/js/utils/mockData.js

export const mockVehicles = [
  {
    id: 1,
    name: "Big Bus JB5 - Mercedes OH 1626",
    type: "bus", // 'bus' | 'hiace'
    seat_capacity: 59,
    facilities: ["AC Double Blower", "Reclining Seat", "USB Charger", "Audio System", "Toilet"],
    photo: "https://picsum.photos/seed/bus1/800/600",
    pdf_file: "/docs/katalog-bigbus-jb5.pdf", // Nanti dari backend: /storage/...
    description: "Armada Big Bus terbaru dengan kenyamanan maksimal untuk perjalanan jarak jauh.",
    is_active: true,
  },
  {
    id: 2,
    name: "Hiace Premio - Toyota",
    type: "hiace",
    seat_capacity: 14,
    facilities: ["AC", "Reclining Seat", "USB Charger", "Audio System"],
    photo: "https://picsum.photos/seed/hiace1/800/600",
    pdf_file: "/docs/katalog-hiace-premio.pdf",
    description: "Hiace Premio nyaman untuk grup kecil, keluarga, atau perjalanan dinas.",
    is_active: true,
  },
];

export const mockAbout = {
  company_name: "PT AVICENT INDO UTAMA",
  brand_name: "Avicent Holiday",
  profile: "Berdiri dengan visi untuk menjadi mitra perjalanan terdepan di Indonesia, Avicent Holiday berkomitmen memberikan layanan transportasi dan paket wisata yang mengutamakan kenyamanan, keamanan, dan kepuasan pelanggan.",
  business_description: "Kami menyediakan layanan sewa bus pariwisata, paket wisata domestik, corporate outing, dan antar-jemput bandara dengan armada terbaru dan driver profesional.",
  experience: "10+ tahun pengalaman melayani berbagai instansi, sekolah, dan komunitas di seluruh Indonesia.",
  operational_areas: ["Jakarta", "Bandung", "Bali", "Yogyakarta", "Surabaya", "Lombok", "Seluruh Jawa & Bali"],
};

export const mockAdvantages = [
  {
    icon: "Shield", // lucide-react icon name
    title: "Armada Terbaru",
    description: "Semua unit kami berusia maksimal 3 tahun, terawat rutin, dan lolos uji kelayakan jalan."
  },
  {
    icon: "UserCheck",
    title: "Driver Profesional",
    description: "Driver bersertifikat, ramah, berpengalaman, dan menguasai rute di seluruh Indonesia."
  },
  {
    icon: "Clock",
    title: "Respon Cepat",
    description: "Customer service siap 24/7 untuk konsultasi dan bantuan darurat selama perjalanan."
  },
  {
    icon: "BadgeDollarSign",
    title: "Harga Transparan",
    description: "Tidak ada biaya tersembunyi. Harga sudah termasuk BBM, tol, parkir, dan driver."
  },
];

export const mockPosts = [
  {
    id: 1,
    title: "Study Tour SMA Negeri 1 Jakarta ke Yogyakarta",
    excerpt: "Rombongan 200 siswa menikmati perjalanan nyaman dengan armada Big Bus Avicent Holiday.",
    content: "Pada tanggal 15-17 Mei 2024, Avicent Holiday mendapat kepercayaan untuk mengantar rombongan study tour...",
    featured_image: "https://picsum.photos/seed/news1/800/400",
    published_at: "2024-05-20",
    is_published: true,
  },
  {
    id: 2,
    title: "Corporate Gathering PT Maju Jaya di Bali",
    excerpt: "Acara outing kantor yang sukses dengan layanan lengkap dari Avicent Holiday.",
    content: "Tim HRD PT Maju Jaya memilih Avicent Holiday untuk mengantar 150 karyawan dalam acara gathering...",
    featured_image: "https://picsum.photos/seed/news2/800/400",
    published_at: "2024-05-10",
    is_published: true,
  },
];

export const mockTestimonials = [
  {
    id: 1,
    customer_name: "Budi Santoso",
    role: "HR Manager PT Maju Jaya",
    content: "Pelayanan Avicent Holiday sangat memuaskan. Bus JB5-nya sangat nyaman, bersih, dan drivernya sangat profesional.",
    avatar: "https://picsum.photos/seed/user1/100/100",
    rating: 5,
    is_featured: true,
  },
  {
    id: 2,
    customer_name: "Siti Aminah",
    role: "Ketua Komite Sekolah",
    content: "Anak-anak merasa aman dan nyaman selama study tour. Terima kasih Avicent Holiday!",
    avatar: "https://picsum.photos/seed/user2/100/100",
    rating: 5,
    is_featured: true,
  },
];

export const mockContact = {
  whatsapp: "6281234567890",
  email: "info@avicentholiday.com",
  address: "Jl. Raya Wisata No. 123, Jakarta Selatan, Indonesia",
  google_maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273673756475!2d106.816666!3d-6.225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMzAuMCJTIDEwNsKwNDknMDAuMCJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid",
};