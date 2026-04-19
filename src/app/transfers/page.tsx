import { Metadata } from 'next';
import Image from 'next/image';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import CtaSection from '@/components/CtaSection';

export const metadata: Metadata = {
  title: 'Santorini Transfer Services | Luxury Private Car & Tours',
  description: 'Premium private transportation in Santorini. Experience elegance, safety, and discreet luxury with our professional chauffeur services.',
};

const serviceHighlights = [
  "Spacious, modern premium vehicles",
  "Climate control & high-speed Wi-Fi access",
  "Complimentary bottled water & amenities",
  "Available child seats upon request",
  "Professional drivers with discreet presence"
];

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] w-full flex items-center overflow-hidden">
        
        {/* Background Images Strategy */}
        <div className="absolute inset-0 z-0">
          {/* DESKTOP IMAGE */}
          <div className="hidden md:block h-full w-full relative">
            <Image
              src="/aboutus.webp"
              alt="Santorini Luxury Transfer Desktop"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>

          {/* MOBILE IMAGE */}
          <div className="block md:hidden h-full w-full relative">
            <Image
              src="/herotranfers.webp"
              alt="Santorini Luxury Transfer Mobile"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-black" />
        </div>

        {/* CONTENT CONTAINER - Mobile: pt-[440px] / Desktop: pt-72 */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-[50px] w-full pt-[440px] md:pt-72 pb-10 md:pb-20">
          <div className="max-w-3xl" data-aos="fade-right">
            
            {/* HERO CONTENT BOX - Transparent glass box for Mobile */}
            <div className="bg-black/30 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-[30px] border border-white/10 md:border-none">
              
              <h1 className="font-cinzel text-2xl md:text-5xl lg:text-5xl text-white tracking-[0.2em] uppercase leading-tight mb-8">
                Santorini <br />
                <span className="text-white/70 text-xl md:text-4xl">Transfer Services</span>
              </h1>
              
              <div className="space-y-8">
                <p className="font-poppins text-white/90 text-sm md:text-lg leading-relaxed max-w-2xl border-l border-white/30 pl-6">
                  At <span className="text-white font-semibold tracking-wide">Comfy Santorini Transfers</span>, we prioritize your comfort. Our mission is to deliver an elite transportation experience where <span className="italic text-white/70 font-light">elegance meets safety</span>.
                </p>

                <div className="flex flex-col gap-3 pt-2">
                  {serviceHighlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <IoCheckmarkCircleOutline className="text-white/40 shrink-0" size={16} />
                      <span className="font-montserrat text-[10px] md:text-[12px] uppercase tracking-[0.2em] text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="font-poppins text-white/40 text-[11px] md:text-sm italic pt-4">
                  "We don’t just transport you; we curate a seamless travel experience."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED SERVICES SECTION */}
      <section className="relative z-20 py-24 bg-black border-t border-white/5 -mt-10 md:mt-0">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            
            {/* Airport & Port */}
            <div className="flex flex-col space-y-5 group" data-aos="fade-up">
              <h3 className="font-cinzel text-base text-white tracking-[0.2em] uppercase min-h-[50px] flex items-center">
                Airport & Port
              </h3>
              <div className="w-12 h-[1px] bg-white/30 group-hover:w-full transition-all duration-700" />
              <p className="font-poppins text-white/50 text-[13px] leading-relaxed">
                Punctual 24/7 connections for JTR Airport and Athinios Port. Enjoy a stress-free arrival with real-time tracking.
              </p>
            </div>

            {/* Private Chauffeur */}
            <div className="flex flex-col space-y-5 group" data-aos="fade-up" data-aos-delay="100">
              <h3 className="font-cinzel text-base text-white tracking-[0.2em] uppercase min-h-[50px] flex items-center">
                Private Chauffeur
              </h3>
              <div className="w-12 h-[1px] bg-white/30 group-hover:w-full transition-all duration-700" />
              <p className="font-poppins text-white/50 text-[13px] leading-relaxed">
                Discover the island at your own pace. Discreet, high-end service for all your daily movements and dinner transfers.
              </p>
            </div>

            {/* Tailored Tours */}
            <div className="flex flex-col space-y-5 group" data-aos="fade-up" data-aos-delay="200">
              <h3 className="font-cinzel text-base text-white tracking-[0.2em] uppercase min-h-[50px] flex items-center">
                Tailored Tours
              </h3>
              <div className="w-12 h-[1px] bg-white/30 group-hover:w-full transition-all duration-700" />
              <p className="font-poppins text-white/50 text-[13px] leading-relaxed">
                Custom itineraries designed around your preferences. Explore hidden gems and iconic views with our local expertise.
              </p>
            </div>

            {/* Events - Σκέτο Events για να χωράει παντού */}
            <div className="flex flex-col space-y-5 group" data-aos="fade-up" data-aos-delay="300">
              <h3 className="font-cinzel text-base text-white tracking-[0.2em] uppercase min-h-[50px] flex items-center">
                Events
              </h3>
              <div className="w-12 h-[1px] bg-white/30 group-hover:w-full transition-all duration-700" />
              <p className="font-poppins text-white/50 text-[13px] leading-relaxed">
                Expertly coordinated transport for weddings and corporate events. We ensure elegance and synchronization for every guest.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="pb-20 bg-black">
        <CtaSection />
      </div>

    </div>
  );
}