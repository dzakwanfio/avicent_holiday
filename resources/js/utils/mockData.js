// resources/js/utils/mockData.js

export const mockContact = {
  whatsapp: '62857-8888-9995', // Format: 628xxx (dari PDF: 0857-8888-9995)
  email: 'info@avicentholiday.com',
  address: 'Jl. Basuki Rahmad (Selatan Taman Kota), Madiun, Jawa Timur',
  google_maps_embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273673756475!2d106.816666!3d-6.225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMzAuMCJTIDEwNsKwNDknMDAuMCJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid',
};

export const mockAbout = {
  company_name: "Avicent Holiday",
  brand_name: "Transport & Tour Pariwisata",
  location: "Madiun",
  profile: `Avicent Holiday hadir di Kota Madiun sebagai penyedia jasa transportasi dan layanan tour pariwisata yang terpercaya. Sebagai kota yang berkembang pesat dan menjadi jalur penghubung penting di Jawa Timur, Madiun memiliki potensi besar dalam bidang perjalanan wisata, baik untuk kebutuhan rekreasi keluarga, study tour sekolah, perjalanan religi, hingga kunjungan instansi.`,
  
  description: `Avicent Holiday berkomitmen menghadirkan solusi transportasi pariwisata yang modern dan berkualitas. Dengan armada bus pariwisata yang terawat, fasilitas lengkap, serta didukung oleh tim yang berpengalaman, kami siap memberikan pengalaman perjalanan yang berkesan bagi setiap pelanggan.`,

  closing: `Kami percaya, perjalanan wisata bukan hanya tentang destinasi, tetapi juga tentang kenyamanan dan kebersamaan yang tercipta selama perjalanan. Dengan semangat tersebut, Avicent Holiday hadir untuk memberikan layanan terbaik dan menjadi pilihan utama masyarakat dalam merencanakan perjalanan wisata yang menyenangkan dan tak terlupakan.`,

  vision: "Menjadi biro perjalanan bus pariwisata terdepan di Indonesia yang terpercaya, profesional, dan mengutamakan kenyamanan serta keselamatan pelanggan dalam setiap perjalanan.",

  mission: [
    {
      title: "Layanan Berkualitas",
      description: "Menyediakan layanan transportasi wisata yang aman, nyaman, dan berkualitas tinggi dengan armada bus modern dan terawat."
    },
    {
      title: "Pelayanan Profesional",
      description: "Memberikan pengalaman perjalanan terbaik melalui pelayanan profesional, ramah, dan tepat waktu."
    },
    {
      title: "Kepuasan Pelanggan",
      description: "Menjaga kepuasan pelanggan dengan sistem pemesanan yang mudah, harga yang transparan, dan dukungan pelanggan yang responsif."
    },
    {
      title: "Pengembangan Destinasi",
      description: "Mengembangkan jaringan dan destinasi wisata untuk memenuhi kebutuhan berbagai segmen pelanggan, baik lokal maupun nasional."
    },
    {
      title: "Keselamatan Prioritas",
      description: "Berkomitmen pada keselamatan dan kepatuhan regulasi melalui pelatihan kru secara berkala dan perawatan armada yang rutin."
    },
    {
      title: "Dukung Pariwisata",
      description: "Berperan aktif dalam memajukan pariwisata Indonesia dengan mendukung perjalanan yang edukatif, ramah lingkungan, dan berbudaya."
    }
  ],

  experience: "Melayani kebutuhan perjalanan wisata keluarga, study tour sekolah, ziarah religi, outing perusahaan, dan kunjungan instansi dengan armada yang nyaman, aman, dan terawat.",

  operational_areas: ["Madiun", "Jawa Timur", "Jawa Tengah", "Yogyakarta", "Jawa Barat", "Jakarta", "Jawa & Bali"],
};

export const mockBenefits = [
  {
    icon: "Armchair", // atau "Bus"
    title: "Kenyamanan Perjalanan",
    description: "Armada Avicent Holiday dilengkapi dengan fasilitas modern seperti AC, reclining seat, sound system, dan hiburan, sehingga perjalanan jauh tetap nyaman dan menyenangkan."
  },
  {
    icon: "Shield",
    title: "Keamanan Terjamin",
    description: "Setiap armada selalu dirawat secara rutin dan didukung pengemudi berpengalaman yang memahami rute wisata, memastikan perjalanan aman dan lancar."
  },
  {
    icon: "Wallet",
    title: "Hemat Biaya",
    description: "Menyewa satu bus untuk rombongan lebih ekonomis dibandingkan menggunakan banyak kendaraan pribadi, karena biaya bahan bakar, tol, dan parkir menjadi lebih efisien."
  },
  {
    icon: "Users",
    title: "Kebersamaan Lebih Terjaga",
    description: "Perjalanan dengan satu bus memungkinkan rombongan tetap bersama, sehingga suasana lebih seru, akrab, dan penuh kebersamaan."
  },
  {
    icon: "Calendar",
    title: "Fleksibilitas Perjalanan",
    description: "Jadwal dan rute dapat disesuaikan dengan kebutuhan pelanggan, baik untuk perjalanan wisata, study tour, ziarah religi, outing perusahaan, maupun acara keluarga."
  },
  {
    icon: "Headset",
    title: "Pelayanan Profesional",
    description: "Tim Avicent Holiday selalu siap memberikan layanan ramah, tepat waktu, dan sigap dalam membantu kebutuhan pelanggan selama perjalanan."
  },
];

export const mockVehicles = [
  {
    id: 1,
    name: "BABY POOH - Jetbus 5",
    type: "bus",
    seat_capacity: 32,
    facilities: ["AC", "Reclining Seat", "LegRest", "Karaoke", "Televisi Digital", "WiFi", "Dispenser", "Charger Phone", "Safety Belt", "Fire Extinguisher", "First Aid Kit", "Selimut", "Bantal"],
    photo: "images/BABYPOOHJETBUS5.png", 
    pdf_file: "/docs/COMPROV.pdf",
    description: "Armada Baby Pooh dengan konfigurasi Jetbus 5, dilengkapi fasilitas lengkap untuk perjalanan jauh yang nyaman.",
    is_active: true,
  },
  {
    id: 2,
    name: "BABY SHARK - Jetbus 5",
    type: "bus",
    seat_capacity: 32,
    facilities: ["AC", "Reclining Seat", "LegRest", "Karaoke", "Televisi Digital", "WiFi", "Dispenser", "Charger Phone", "Safety Belt", "Fire Extinguisher", "First Aid Kit", "Selimut", "Bantal"],
    photo: "images/BABYSHARKJETBUS5.png",
    pdf_file: "/docs/COMPROV.pdf",
    description: "Armada Baby Shark dengan konfigurasi Jetbus 5, ideal untuk rombongan keluarga dan study tour.",
    is_active: true,
  },
  {
    id: 3,
    name: "BABY WOLF - Jetbus 5",
    type: "bus",
    seat_capacity: 32,
    facilities: ["AC", "Reclining Seat", "LegRest", "Karaoke", "Televisi Digital", "WiFi", "Dispenser", "Charger Phone", "Safety Belt", "Fire Extinguisher", "First Aid Kit", "Selimut", "Bantal"],
    photo: "images/BABYWOLFJETBUS5.png",
    pdf_file: "/docs/COMPROV.pdf",
    description: "Armada Baby Wolf dengan konfigurasi Jetbus 5, siap melayani perjalanan wisata dan outing perusahaan.",
    is_active: true,
  },
  {
    id: 4,
    name: "BABY COALA - Jetbus 3+",
    type: "bus",
    seat_capacity: 32,
    facilities: ["AC", "Reclining Seat", "Karaoke", "Televisi Digital", "WiFi", "Dispenser", "Charger Phone", "Safety Belt", "Fire Extinguisher", "First Aid Kit"],
    photo: "images/BABYCOALAJETBUS3+.png",
    pdf_file: "/docs/COMPROV.pdf",
    description: "Armada Baby Coala dengan konfigurasi Jetbus 3+, cocok untuk perjalanan jarak menengah.",
    is_active: true,
  },
  {
    id: 5,
    name: "BABY BEAR - Jetbus 5",
    type: "bus",
    seat_capacity: 32,
    facilities: ["AC", "Reclining Seat", "LegRest", "Karaoke", "Televisi Digital", "WiFi", "Dispenser", "Charger Phone", "Safety Belt", "Fire Extinguisher", "First Aid Kit", "Selimut", "Bantal"],
    photo: "images/BABYBEARJETBUS5.png",
    pdf_file: "/docs/COMPROV.pdf",
    description: "Armada Baby Bear dengan konfigurasi Jetbus 5, dilengkapi fasilitas premium untuk kenyamanan maksimal.",
    is_active: true,
  },
];

export const mockPosts = [
  {
    id: 1,
    title: "Study Tour SMA Negeri Madiun ke Yogyakarta",
    excerpt: "Rombongan 200 siswa menikmati perjalanan nyaman dengan armada Big Bus Avicent Holiday.",
    content: "Pada tanggal 15-17 Mei 2024, Avicent Holiday mendapat kepercayaan untuk mengantar rombongan study tour...",
    featured_image: "https://picsum.photos/seed/study-tour-madiun/800/400",
    published_at: "2024-05-20",
    is_published: true,
  },
  {
    id: 2,
    title: "Ziarah Wali Gresik & Surabaya",
    excerpt: "Perjalanan religi bersama keluarga besar Avicent Holiday dengan fasilitas lengkap.",
    content: "Rombongan ziarah religi menikmati perjalanan dengan armada Baby Shark yang nyaman...",
    featured_image: "https://picsum.photos/seed/ziarah-gresik/800/400",
    published_at: "2024-05-10",
    is_published: true,
  },
  {
    id: 3,
    title: "Outing Company PT Madiun Sejahtera",
    excerpt: "Acara outing kantor yang sukses dengan layanan lengkap dari Avicent Holiday.",
    content: "Tim HRD PT Madiun Sejahtera memilih Avicent Holiday untuk mengantar 150 karyawan...",
    featured_image: "https://picsum.photos/seed/outing-madiun/800/400",
    published_at: "2024-05-05",
    is_published: true,
  },
];

export const mockTestimonials = [
  {
    id: 1,
    customer_name: "Budi Santoso",
    role: "Kepala Sekolah SMA Negeri Madiun",
    content: "Pelayanan Avicent Holiday sangat memuaskan. Armada Baby Pooh sangat nyaman untuk study tour siswa kami. Driver ramah dan tepat waktu.",
    avatar: "https://picsum.photos/seed/user-madiun-1/100/100",
    rating: 5,
    is_featured: true,
  },
  {
    id: 2,
    customer_name: "Siti Aminah",
    role: "Ketua PKK Kelurahan Madiun",
    content: "Terima kasih Avicent Holiday atas pelayanan ziarah wali yang sangat baik. Armada bersih, fasilitas lengkap, dan harga sangat terjangkau.",
    avatar: "https://picsum.photos/seed/user-madiun-2/100/100",
    rating: 5,
    is_featured: true,
  },
  {
    id: 3,
    customer_name: "Ahmad Fauzi",
    role: "HRD PT Madiun Sejahtera",
    content: "Sudah 3 kali kami menggunakan jasa Avicent Holiday untuk outing karyawan. Selalu puas dengan pelayanan dan kenyamanannya. Highly recommended!",
    avatar: "https://picsum.photos/seed/user-madiun-3/100/100",
    rating: 5,
    is_featured: true,
  },
];