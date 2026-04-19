"use client";

import { useState } from 'react';
import Image from 'next/image';
import { IoSearchOutline, IoChevronDownOutline, IoCloseOutline } from 'react-icons/io5';
import CtaSection from '@/components/CtaSection';

const allFaqs = [
  { 
    category: "Getting Around",
    question: "Is there Uber or Lyft in Santorini? (Updated 2026 Guide)", 
    answer: "No, standard Uber or Lyft services are not available in Santorini. While there is a localized Uber Taxi app, availability is extremely limited and prices surge during peak hours. Pre-booking a private transfer with Comfy Santorini ensures a fixed price and a professional driver waiting for you, regardless of demand." 
  },
  { 
    category: "Transfers",
    question: "How to get from Fira to Oia: What is the best way?", 
    answer: "You have three main options: The public bus (very crowded, especially in summer), the 10km hiking trail (a beautiful 3-4 hour walk), or a private transfer. A private transfer with Comfy Santorini takes only 20 minutes in air-conditioned luxury, offering door-to-door service and avoiding the heat and crowds." 
  },
  { 
    category: "Airport Guide",
    question: "What are the common Santorini Airport transfer mistakes to avoid?", 
    answer: "The biggest mistakes are: not pre-booking (taxi queues at JTR can exceed an hour), assuming public buses run 24/7, and using unlicensed drivers. Always book with a licensed company like Comfy Santorini to ensure safety, insurance, and fixed professional rates." 
  },
  { 
    category: "Airport Guide",
    question: "How does Santorini Airport (JTR) transfer work for arrivals?", 
    answer: "When you book with us, your driver monitors your flight in real-time for any delays. He will meet you at the arrivals hall holding a 'Comfy Santorini' sign with your name. We assist with your luggage and lead you to your luxury vehicle parked in the VIP area just steps from the terminal." 
  },
  { 
    category: "Travel Tips",
    question: "Is Santorini worth visiting in October? Weather & Tips", 
    answer: "Absolutely! October is considered the 'secret' perfect month. The weather is warm (22-24°C), the sea is still pleasant for swimming, and the massive summer crowds have left. It's the ideal time for private tours and enjoying the sunset in Oia without the typical congestion." 
  },
  { 
    category: "Port Services",
    question: "Where is the meeting point for private transfers at Santorini Port?", 
    answer: "At Athinios Ferry Port, your driver will be waiting at the designated arrival area holding a 'Comfy Santorini' sign with your name. Because the port is extremely congested during ferry arrivals, having a pre-booked driver is the fastest way to reach your destination." 
  },
  { 
    category: "Tours",
    question: "Can I create a custom private tour itinerary in Santorini?", 
    answer: "Yes, our private tours are 100% customizable. You can work with your professional driver to include specific spots like Oia, Imerovigli, the Red Beach, or traditional wineries in Megalochori. We tailor the duration and the stops to fit your personal interests and schedule." 
  },
  { 
    category: "General",
    question: "What is your cancellation policy for private bookings?", 
    answer: "We offer a very flexible 24-hour cancellation policy. You can cancel your private transfer or tour up to 24 hours before the scheduled pickup time for a full refund, no questions asked." 
  }
];

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = allFaqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // JSON-LD Schema for SEO & AI
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-black min-h-screen relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO / SEARCH SECTION */}
      <section className="relative pt-64 md:pt-80 pb-24 px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-cinzel text-3xl md:text-6xl text-white tracking-[0.2em] uppercase mb-8 leading-tight">
            How can we <br className="md:hidden" /> <span className="text-white/50 italic">help?</span>
          </h1>
          
          <div className="relative max-w-2xl mx-auto mt-12">
            <IoSearchOutline className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={24} />
            <input 
              type="text"
              placeholder="Search for 'Uber', 'Airport', 'October'..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-6 px-16 text-white font-poppins focus:outline-none focus:border-white/30 transition-all backdrop-blur-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              >
                <IoCloseOutline size={24} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* STICKY ACCORDION SECTION */}
      <section className="relative min-h-[120vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
          <Image 
            src="/attractionssticky.webp" 
            alt="Santorini FAQ Background" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="relative z-10 -mt-[80vh] pb-32 px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-white/10 rounded-2xl bg-black/60 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/20 shadow-2xl"
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-montserrat uppercase tracking-[0.3em] text-white/30 font-bold group-hover:text-white/50 transition-colors">
                        {faq.category}
                      </span>
                      <h3 className="font-montserrat text-sm md:text-base text-white uppercase tracking-widest leading-relaxed pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <IoChevronDownOutline 
                      className={`text-white/40 flex-shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-white' : ''}`} 
                      size={20} 
                    />
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="px-8 pb-8 pt-4 font-poppins text-white/60 text-sm md:text-base leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20">
                <p className="font-poppins text-white/30 italic uppercase tracking-widest">No results found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <div className="relative z-20 bg-black pt-10 pb-20 border-t border-white/5">
        <CtaSection />
      </div>
    </div>
  );
}