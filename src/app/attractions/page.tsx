"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  IoTimeOutline, 
  IoStarOutline, 
  IoLocationOutline, 
  IoCloseOutline, 
  IoHelpCircleOutline 
} from 'react-icons/io5';
import CtaSection from '@/components/CtaSection';

const tourOptions = [
  {
    title: "Santorini Half Day Private Tour",
    duration: "4-5 Hours",
    description: "Ideal for discovering the island's high points. Visit the famous blue domes of Oia, walk through scenic Imerovigli, and capture the panoramic essence of Santorini at a relaxed pace.",
    image: "/tour1.webp" 
  },
  {
    title: "Santorini Full Day Private Experience",
    duration: "8-9 Hours",
    description: "A comprehensive journey across the island. From the northern artistic vibes of Oia to the southern volcanic history of Akrotiri and the famous black sand beaches.",
    image: "/tour2.webp"
  }
];

const stickyAttractions = [
  {
    title: "The Peak of Serenity",
    subtitle: "Prophet Elias Monastery",
    location: "Pyrgos Summit, Santorini",
    description: "Perched on the highest point of the island, 567 meters above sea level, this 18th-century monastery offers an unparalleled 360-degree view of the entire Santorini archipelago and the Aegean Sea.",
    image: "/attraction1.webp"
  },
  {
    title: "The Medieval Jewel",
    subtitle: "Pyrgos Village",
    location: "Central Santorini",
    description: "Once the capital of Santorini, Pyrgos remains a hidden gem of medieval architecture. Wander through labyrinthine alleys, past blue-domed churches and fortified Venetian castle walls.",
    image: "/attraction2.webp"
  },
  {
    title: "The Essence of Cyclades",
    subtitle: "Oia & Blue Domes",
    location: "North Santorini (Caldera)",
    description: "Explore the most photographed village in the Mediterranean. Famous for its artistic soul and the iconic blue-domed churches that contrast beautifully with the white cave houses.",
    image: "/attraction3.webp"
  },
  {
    title: "The Minoan Pompeii",
    subtitle: "Akrotiri Prehistoric City",
    location: "South Santorini",
    description: "Step back 3,600 years into one of the most important settlements of the Aegean. Frozen in time by a volcanic eruption, Akrotiri reveals a sophisticated ancient civilization.",
    image: "/attraction4.webp"
  },
  {
    title: "A Volcanic Shoreline",
    subtitle: "Red & Black Beaches",
    location: "Santorini Coastline",
    description: "Experience a coastline like no other. From the exotic Red Beach to the endless black sands of Perissa, Santorini's shores are a geological masterpiece of volcanic earth.",
    image: "/attraction5.webp"
  },
  {
    title: "The Taste of Volcanic Earth",
    subtitle: "Traditional Wineries",
    location: "Vineyards of Santorini",
    description: "Indulge in world-renowned Assyrtiko wine. Visit prestigious wineries to enjoy professional tasting sessions where the mineral notes of volcanic soil meet spectacular Caldera views.",
    image: "/attraction6.webp"
  }
];

const tourFaqs = [
  { 
    question: "What are the must-see attractions on a Santorini private tour?", 
    answer: "Essential stops include Oia for its sunset views, the Blue Domes of Firostefani, the summit of Prophet Elias, and the Akrotiri excavations. Our private tours are designed to cover these highlights comfortably." 
  },
  { 
    question: "Can I customize the itinerary of my Santorini tour?", 
    answer: "Absolutely. Our bespoke tours are 100% flexible. You can choose to spend more time at a winery in Megalochori or focus on the hidden medieval gems of central Santorini." 
  }
];

export default function AttractionsPage() {
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  // JSON-LD Schema for Local SEO & AI
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Things to Do in Santorini - Private Sightseeing Tours",
    "description": "Discover the top attractions in Santorini, including Oia, Akrotiri, and private winery tours with Comfy Santorini Transfers.",
    "itemListElement": stickyAttractions.map((att, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": att.subtitle,
      "description": att.description
    }))
  };

  return (
    <div className="bg-black min-h-screen relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* FLOATING FAQ BUTTON */}
      <button 
        onClick={() => setIsFaqOpen(true)}
        className="fixed bottom-8 right-8 z-[100] bg-white text-black p-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-110 transition-all font-montserrat font-bold text-[10px] uppercase tracking-widest border border-white"
      >
        <IoHelpCircleOutline size={20} />
        <span className="hidden md:inline">Quick Tour FAQ</span>
      </button>

      {/* FAQ MODAL */}
      {isFaqOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsFaqOpen(false)} />
          <div className="relative bg-[#0a0a0a] border border-white/10 w-full max-w-2xl rounded-[30px] overflow-hidden shadow-2xl">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-[#0f0f0f]">
              <h2 className="font-cinzel text-xl text-white tracking-widest uppercase">Tour Info</h2>
              <button onClick={() => setIsFaqOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <IoCloseOutline size={30} />
              </button>
            </div>
            <div className="p-8 space-y-6">
              {tourFaqs.map((faq, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-montserrat text-white text-[11px] uppercase tracking-[0.2em] font-bold">{faq.question}</h4>
                  <p className="font-poppins text-white/50 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/attractionshero.webp" 
            alt="Santorini Private Sightseeing Tours"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6 pt-32">
          <h1 className="font-cinzel text-3xl md:text-6xl text-white tracking-[0.2em] uppercase mb-8 leading-tight">
            Discover the beauties <br /> 
            <span className="text-white/60 text-2xl md:text-4xl italic tracking-[0.1em]">of Santorini</span>
          </h1>
          <div className="w-20 h-[1px] bg-white/40 mx-auto mb-8" />
          <p className="font-poppins text-white/90 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto italic font-light uppercase tracking-widest">
            "Your bespoke journey to the Aegean's most iconic landscapes starts with Comfy Santorini"
          </p>
        </div>
      </section>

      {/* TOUR OPTIONS SECTION */}
      <section className="py-24 px-6 md:px-[50px] max-w-[1440px] mx-auto bg-black">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-white tracking-[0.2em] uppercase">Private Tour Packages</h2>
          <div className="w-24 h-[1px] bg-white/30 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {tourOptions.map((tour, index) => (
            <div key={index} className="group relative bg-[#0a0a0a] border border-white/5 rounded-[40px] overflow-hidden hover:border-white/20 transition-all duration-700 shadow-2xl">
              <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden">
                <Image src={tour.image} alt={tour.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full z-10">
                  <div className="flex items-center gap-2 text-white text-[10px] uppercase tracking-widest font-montserrat font-semibold">
                    <IoTimeOutline size={14} /> {tour.duration}
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 space-y-6">
                <h3 className="font-cinzel text-2xl text-white tracking-[0.1em]">{tour.title}</h3>
                <p className="font-poppins text-white/50 text-sm leading-relaxed">{tour.description}</p>
                <div className="pt-8">
                  <Link href="/contact" className="flex items-center justify-center w-full bg-white text-black py-5 rounded-full font-montserrat font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-black hover:text-white border border-white transition-all duration-500">
                    Book This Experience
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STICKY REVEAL SECTION */}
      <section className="relative bg-black" style={{ height: `${(stickyAttractions.length + 1) * 100}vh` }}>
        
        {/* Sticky Background Image */}
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
          <Image 
            src="/attractionssticky.webp" 
            alt="Santorini Landscape Highlights" 
            fill 
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute bottom-10 right-10 font-cinzel text-[80px] md:text-[180px] text-white/[0.03] pointer-events-none select-none uppercase tracking-tighter">
            Treasures
          </div>
        </div>

        <div className="relative z-10 -mt-[100vh]">
          {/* Introductory Scene */}
          <div className="flex flex-col items-center justify-center h-screen px-6">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <IoStarOutline className="mx-auto text-white/30" size={40} />
              <h4 className="font-cinzel text-white text-2xl md:text-5xl tracking-[0.2em] leading-tight uppercase">
                "The ultimate bridge between you and the treasures of Santorini"
              </h4>
              <div className="w-16 h-[1px] bg-white/30 mx-auto" />
            </div>
          </div>

          {/* Attraction Scenes Loop */}
          {stickyAttractions.map((attraction, index) => (
            <div key={index} className="h-screen flex items-center justify-center px-6 md:px-[100px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-[1600px] mx-auto w-full">
                
                {/* Image Side */}
                <div 
                  className={`relative h-[300px] md:h-[600px] w-full rounded-[30px] overflow-hidden shadow-2xl border border-white/10 ${index % 2 !== 0 ? 'md:order-last' : ''}`}
                >
                  <Image src={attraction.image} alt={attraction.subtitle} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Text Side */}
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-center gap-3 text-white/50 font-montserrat text-xs uppercase tracking-widest font-bold">
                    <IoLocationOutline size={16} className="text-white/30" /> {attraction.location}
                  </div>
                  
                  <h3 className="font-cinzel text-white leading-tight">
                    <span className="block text-sm md:text-base text-white/50 mb-2 tracking-[0.2em] uppercase">{attraction.title}</span>
                    <span className="text-3xl md:text-5xl tracking-wider">{attraction.subtitle}</span>
                  </h3>
                  
                  <div className="w-20 h-[1px] bg-white/30" />
                  
                  <p className="font-poppins text-white/70 text-sm md:text-lg leading-relaxed max-w-xl font-light">
                    {attraction.description}
                  </p>
                  
                  <div className="pt-6">
                    <Link href="/contact" className="inline-block border border-white/20 text-white py-4 px-10 rounded-full font-montserrat font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500">
                      Book a transfer to this location
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <div className="relative z-20 bg-black pt-20 pb-20 border-t border-white/5">
        <CtaSection />
      </div>

    </div>
  );
}