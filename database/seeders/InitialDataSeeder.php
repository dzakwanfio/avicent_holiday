<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;
use App\Models\Vehicle;
use App\Models\Client;
use App\Models\Project;
use App\Models\Testimonial;
use App\Models\Post;
use Illuminate\Support\Str;

class InitialDataSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Services
        $services = [
            [
                'title' => 'Sewa Bus Pariwisata',
                'description' => 'Kami menyediakan armada Big Bus JB5 & JB3+ terbaru dengan fasilitas premium untuk kenyamanan perjalanan Anda.',
                'icon' => 'Bus',
                'features' => ['AC & Audio System', 'Reclining Seat', 'USB Charger', 'Driver Profesional'],
            ],
            [
                'title' => 'Paket Wisata Domestik',
                'description' => 'Jelajahi keindahan Indonesia dengan paket wisata yang terencana dengan baik dan harga yang kompetitif.',
                'icon' => 'Map',
                'features' => ['Akomodasi Hotel', 'Tiket Masuk Wisata', 'Pemandu Wisata', 'Konsumsi & Snack'],
            ],
            [
                'title' => 'Corporate Outing',
                'description' => 'Layanan khusus untuk kegiatan outing kantor, gathering, dan perjalanan dinas perusahaan Anda.',
                'icon' => 'Users',
                'features' => ['Custom Itinerary', 'Team Building', 'Dokumentasi', 'Laporan Perjalanan'],
            ],
            [
                'title' => 'Antar Jemput Bandara',
                'description' => 'Layanan transportasi khusus untuk penjemputan dan pengantaran ke bandara dengan armada yang nyaman.',
                'icon' => 'Calendar',
                'features' => ['Tepat Waktu', 'Bantuan Bagasi', 'Armada Bersih', 'Harga Flat'],
            ],
        ];
        foreach ($services as $s) Service::create($s);

        // 2. Vehicles
        $vehicles = [
            [
                'name' => 'BABY POOH - Jetbus 5',
                'type' => 'bus',
                'seat_capacity' => 32,
                'facilities' => ['AC', 'Reclining Seat', 'LegRest', 'Karaoke', 'Televisi Digital', 'WiFi', 'Dispenser', 'Charger Phone', 'Safety Belt', 'Fire Extinguisher', 'First Aid Kit', 'Selimut', 'Bantal'],
                'photo' => '/images/BABYPOOHJETBUS5.png',
                'pdf_file' => '/docs/COMPROV.pdf',
                'description' => 'Armada Baby Pooh dengan konfigurasi Jetbus 5, dilengkapi fasilitas lengkap untuk perjalanan jauh yang nyaman.',
            ],
            [
                'name' => 'BABY SHARK - Jetbus 5',
                'type' => 'bus',
                'seat_capacity' => 32,
                'facilities' => ['AC', 'Reclining Seat', 'LegRest', 'Karaoke', 'Televisi Digital', 'WiFi', 'Dispenser', 'Charger Phone', 'Safety Belt', 'Fire Extinguisher', 'First Aid Kit', 'Selimut', 'Bantal'],
                'photo' => '/images/BABYSHARKJETBUS5.png',
                'pdf_file' => '/docs/COMPROV.pdf',
                'description' => 'Armada Baby Shark dengan konfigurasi Jetbus 5, ideal untuk rombongan keluarga and study tour.',
            ],
            [
                'name' => 'BABY WOLF - Jetbus 5',
                'type' => 'bus',
                'seat_capacity' => 32,
                'facilities' => ['AC', 'Reclining Seat', 'LegRest', 'Karaoke', 'Televisi Digital', 'WiFi', 'Dispenser', 'Charger Phone', 'Safety Belt', 'Fire Extinguisher', 'First Aid Kit', 'Selimut', 'Bantal'],
                'photo' => '/images/BABYWOLFJETBUS5.png',
                'pdf_file' => '/docs/COMPROV.pdf',
                'description' => 'Armada Baby Wolf dengan konfigurasi Jetbus 5, siap melayani perjalanan wisata and outing perusahaan.',
            ],
            [
                'name' => 'BABY COALA - Jetbus 3+',
                'type' => 'bus',
                'seat_capacity' => 32,
                'facilities' => ['AC', 'Reclining Seat', 'Karaoke', 'Televisi Digital', 'WiFi', 'Dispenser', 'Charger Phone', 'Safety Belt', 'Fire Extinguisher', 'First Aid Kit'],
                'photo' => '/images/BABYCOALAJETBUS3+.png',
                'pdf_file' => '/docs/COMPROV.pdf',
                'description' => 'Armada Baby Coala dengan konfigurasi Jetbus 3+, cocok untuk perjalanan jarak menengah.',
            ],
            [
                'name' => 'BABY BEAR - Jetbus 5',
                'type' => 'bus',
                'seat_capacity' => 32,
                'facilities' => ['AC', 'Reclining Seat', 'LegRest', 'Karaoke', 'Televisi Digital', 'WiFi', 'Dispenser', 'Charger Phone', 'Safety Belt', 'Fire Extinguisher', 'First Aid Kit', 'Selimut', 'Bantal'],
                'photo' => '/images/BABYBEARJETBUS5.png',
                'pdf_file' => '/docs/COMPROV.pdf',
                'description' => 'Armada Baby Bear dengan konfigurasi Jetbus 5, dilengkapi fasilitas premium untuk kenyamanan maksimal.',
            ],
        ];
        foreach ($vehicles as $v) Vehicle::create($v);

        // 3. Clients
        for ($i = 1; $i <= 6; $i++) {
            Client::create([
                'name' => "Client $i",
                'logo' => "https://picsum.photos/seed/client$i/200/100",
            ]);
        }

        // 4. Projects
        $projects = [
            ['title' => 'Tour Bali 2023', 'category' => 'Paket Wisata', 'image' => 'https://picsum.photos/seed/bali/600/400'],
            ['title' => 'Gathering Bank Mandiri', 'category' => 'Corporate Outing', 'image' => 'https://picsum.photos/seed/gathering/600/400'],
            ['title' => 'Study Tour SMA 1', 'category' => 'Sewa Bus', 'image' => 'https://picsum.photos/seed/school/600/400'],
        ];
        foreach ($projects as $p) Project::create($p);

        // 5. Testimonials
        $testimonials = [
            [
                'customer_name' => 'Budi Santoso',
                'role' => 'Kepala Sekolah SMA Negeri Madiun',
                'content' => 'Pelayanan Avicent Holiday sangat memuaskan. Armada Baby Pooh sangat nyaman untuk study tour siswa kami. Driver ramah dan tepat waktu.',
                'avatar' => 'https://picsum.photos/seed/user-madiun-1/100/100',
                'rating' => 5,
            ],
            [
                'customer_name' => 'Siti Aminah',
                'role' => 'Ketua PKK Kelurahan Madiun',
                'content' => 'Terima kasih Avicent Holiday atas pelayanan ziarah wali yang sangat baik. Armada bersih, fasilitas lengkap, dan harga sangat terjangkau.',
                'avatar' => 'https://picsum.photos/seed/user-madiun-2/100/100',
                'rating' => 5,
            ],
            [
                'customer_name' => 'Ahmad Fauzi',
                'role' => 'HRD PT Madiun Sejahtera',
                'content' => 'Sudah 3 kali kami menggunakan jasa Avicent Holiday untuk outing karyawan. Selalu puas dengan pelayanan dan kenyamanannya. Highly recommended!',
                'avatar' => 'https://picsum.photos/seed/user-madiun-3/100/100',
                'rating' => 5,
            ],
        ];
        foreach ($testimonials as $t) Testimonial::create($t);

        // 6. Posts
        $posts = [
            [
                'title' => 'Study Tour SMA Negeri Madiun ke Yogyakarta',
                'slug' => Str::slug('Study Tour SMA Negeri Madiun ke Yogyakarta'),
                'excerpt' => 'Rombongan 200 siswa menikmati perjalanan nyaman dengan armada Big Bus Avicent Holiday.',
                'content' => 'Pada tanggal 15-17 Mei 2024, Avicent Holiday mendapat kepercayaan untuk mengantar rombongan study tour...',
                'featured_image' => 'https://picsum.photos/seed/study-tour-madiun/800/400',
                'published_at' => now(),
                'is_published' => true,
            ],
            [
                'title' => 'Ziarah Wali Gresik & Surabaya',
                'slug' => Str::slug('Ziarah Wali Gresik & Surabaya'),
                'excerpt' => 'Perjalanan religi bersama keluarga besar Avicent Holiday dengan fasilitas lengkap.',
                'content' => 'Rombongan ziarah religi menikmati perjalanan dengan armada Baby Shark yang nyaman...',
                'featured_image' => 'https://picsum.photos/seed/ziarah-gresik/800/400',
                'published_at' => now(),
                'is_published' => true,
            ],
            [
                'title' => 'Outing Company PT Madiun Sejahtera',
                'slug' => Str::slug('Outing Company PT Madiun Sejahtera'),
                'excerpt' => 'Acara outing kantor yang sukses dengan layanan lengkap dari Avicent Holiday.',
                'content' => 'Tim HRD PT Madiun Sejahtera memilih Avicent Holiday untuk mengantar 150 karyawan...',
                'featured_image' => 'https://picsum.photos/seed/outing-madiun/800/400',
                'published_at' => now(),
                'is_published' => true,
            ],
        ];
        foreach ($posts as $po) Post::create($po);
    }
}
