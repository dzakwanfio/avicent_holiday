import { Head } from '@inertiajs/react';
import { motion, useScroll, useSpring } from 'motion/react';

import Navbar from '@/Components/Layout/Navbar';
import Footer from '@/Components/Layout/Footer';

import Hero from '@/Components/Sections/Hero';
import About from '@/Components/Sections/About';
import Services from '@/Components/Sections/Services';
import WhyChooseUs from '@/Components/Sections/WhyChooseUs';
import VehicleCatalog from '@/Components/Sections/VehicleCatalog';
import Portfolio from '@/Components/Sections/Portfolio';
import Testimonials from '@/Components/Sections/Testimonials';
import Blog from '@/Components/Sections/Blog';
import Contact from '@/Components/Sections/Contact';

import WhatsAppButton from '@/Components/UI/WhatsAppbutton';

export default function Welcome({ services, vehicles, clients, projects, testimonials, posts }) {
  // Progress bar scroll animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <Head title="Avicent Holiday - Sewa Bus & Travel Terpercaya" />

      <div className="relative">
        {/* 📊 Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gold z-[60] origin-left"
          style={{ scaleX }}
        />

        {/* 🧭 Navbar */}
        <Navbar />

        {/* 📄 Main Content - Semua Section (urut sesuai navigasi) */}
        <main id="home">
          <Hero />                    {/* id="home" (default) */}
          <About />                   {/* id="about" */}
          <Services services={services} />                {/* id="services" */}
          <WhyChooseUs />             {/* id="why-us" ✅ TAMBAHKAN INI */}
          <VehicleCatalog vehicles={vehicles} />          {/* id="armada" ✅ TAMBAHKAN INI */}
          <Portfolio clients={clients} projects={projects} />               {/* id="portfolio" */}
          <Testimonials testimonials={testimonials} />            {/* id="testimonials" */}
          <Blog posts={posts} />                    {/* id="blog" */}
          <Contact />                 {/* id="contact" */}
        </main>

        {/* 🦶 Footer */}
        <Footer />

        {/* 💬 Floating WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </>
  );
}