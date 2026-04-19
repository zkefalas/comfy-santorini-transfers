'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Reenie_Beanie } from 'next/font/google';

const reenie = Reenie_Beanie({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const santoriniImages = [
  { src: '/santorini1.webp', alt: 'Santorini 1', caption: 'Goodmorning Santorini!' },
  { src: '/santorini2.webp', alt: 'Santorini 2', caption: 'Aegean view!' },
  { src: '/santorini3.webp', alt: 'Santorini 3', caption: 'Monastery of Profitis Ilias' },
  { src: '/santorini4.webp', alt: 'Santorini 4', caption: 'The Akrotiri Lighthouse' },
  { src: '/santorini5.webp', alt: 'Santorini 5', caption: "Santorini's Black Beach" },
  { src: '/santorini6.webp', alt: 'Santorini 6', caption: 'The Red Beach' },
  { src: '/santorini7.webp', alt: 'Santorini 7', caption: 'Oia' },
];

const Services = () => {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const transferItems = [
    "Reliable Transfers to/from Santorini International Airport (JTR)",
    "Seamless Pickups to/from Athinios Port Santorini",
    "Door-to-door Private Transfers to your Hotel or Villa",
    "Point-to-Point Rides to Oia, Fira, Imerovigli & Akrotiri",
    "VIP Private Transfers for Weddings and Executive Events"
  ];

  const polaroidVariants: Variants = {
    hidden: { opacity: 0, y: 100, rotate: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: (i - 3) * 8,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.2,
        delay: i * 0.1,
      },
    }),
  };

  const textContainerVariants: Variants = {
    hidden: { opacity: 0, x: 70 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="w-full max-w-[1440px] px-[20px] md:px-[50px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-16 lg:gap-24 items-center">
          
          {/* GALLERY SIDE */}
          <div 
            className="relative h-[500px] md:h-[650px] w-full flex items-center justify-center lg:justify-start lg:ml-[100px] -mt-[50px] sm:mt-0 scale-[0.85] sm:scale-100"
          >
            {santoriniImages.map((image, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={polaroidVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="absolute w-[210px] sm:w-[260px] md:w-[300px] cursor-pointer"
                style={{
                  transformOrigin: 'bottom center',
                  zIndex: 10 - index,
                }}
                onClick={() => {
                  setImageIndex(index);
                  setOpen(true);
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -30, 
                  zIndex: 50,
                  transition: { duration: 0.3 } 
                }}
              >
                {/* Polaroid Frame */}
                <div className="bg-white p-2 sm:p-3 pb-12 sm:pb-16 shadow-2xl border border-gray-200">
                  <div className="relative aspect-[1/1] overflow-hidden bg-gray-100">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  {/* Handwritten Caption */}
                  <div className="mt-3 sm:mt-5 text-center px-2">
                    <p className={`${reenie.className} text-black/80 text-lg sm:text-2xl leading-none transform -rotate-1 tracking-tight`}>
                      {image.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CONTENT SIDE */}
          <motion.div 
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col space-y-12 lg:pl-10 relative z-20"
          >
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="font-montserrat text-[10px] text-white/30 uppercase tracking-[0.5em] block">
                  Santorini Mobility Experts
                </span>
                <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter leading-none">
                  Transfer <br /> 
                  <span className="text-white/40">Services</span>
                </h2>
              </div>
              
              <ul className="space-y-5">
                {transferItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-5 group">
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-white/20 group-hover:bg-white transition-all duration-300" />
                    <p className="font-poppins text-white/50 text-[14px] leading-relaxed group-hover:text-white transition-colors">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-12 border-t border-white/5 space-y-8">
              <div className="space-y-3">
                <span className="font-montserrat text-[10px] text-white/30 uppercase tracking-[0.5em] block">
                  Tailored Explorations
                </span>
                <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter leading-none">
                  Santorini <br /> 
                  <span className="text-white/40">Private Tours</span>
                </h2>
              </div>
              <p className="font-poppins text-white/70 text-[15px] leading-relaxed font-light italic border-l-2 border-white/10 pl-6">
                "Experience the island like a local. From Oia sunsets to hidden gems, we create itineraries designed for your ultimate comfort."
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imageIndex}
        slides={santoriniImages.map(img => ({ src: img.src, alt: img.alt }))}
      />
    </section>
  );
};

export default Services;