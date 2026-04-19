'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CtaSection from '@/components/CtaSection';
import Features from '@/components/Features';
import About from '@/components/About';
import Services from '@/components/Services';
import InstantBooking from '@/components/InstantBooking';

export default function Home() {
  return (
    // ΔΙΟΡΘΩΣΗ: Προσθήκη "flex" πριν το "flex-col" και αφαίρεση περιττών κενών
    <main className="relative min-h-screen bg-black flex flex-col">
      
      <Navbar />

      <Hero />

      {/* Φόρμα κράτησης */}
      <CtaSection />

      {/* Πλεονεκτήματα (4 κουτιά) */}
      <Features />

      {/* About Section */}
      <About />

      {/* Gallery & Υπηρεσίες */}
      <Services />

      {/* Νέο Section: Instant Booking */}
      <InstantBooking />
      
    </main>
  );
}