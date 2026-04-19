'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const Hero = () => {
  const dropIn: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-start overflow-hidden bg-black">
      
      {/* 1. Εικόνες Φόντου */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {/* DESKTOP */}
        <div className="hidden md:block h-full w-full">
          <Image
            src="/hero1.webp" 
            alt="COMFY Luxury VIP transfers"
            fill
            priority
            className="object-cover object-[center_70%] opacity-60 scale-105" 
          />
        </div>

        {/* MOBILE */}
        <div className="block md:hidden h-full w-full">
          <Image
            src="/hero2.webp" 
            alt="COMFY Luxury VIP transfers"
            fill
            priority
            className="object-cover object-center opacity-65" 
          />
        </div>

        {/* Pure Black Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/70 z-10" />
      </div>

      {/* 2. Περιεχόμενο */}
      <div className="relative z-20 text-center flex flex-col items-center px-4 pt-72 md:pt-56 lg:pt-[230px]"> 
        <motion.h1 
          className="font-cinzel font-bold text-5xl md:text-7xl lg:text-[100px] text-white tracking-[0.3em] uppercase leading-none"
          initial="hidden"
          animate="visible"
          variants={dropIn}
        >
          COMFY
        </motion.h1>

        <div className="w-16 md:w-24 h-[1px] bg-white/40 mt-4 mb-4"></div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-montserrat font-bold text-[9px] md:text-[11px] text-white/90 tracking-[0.6em] uppercase"
        >
          Elite Transfers and Tailored Tours
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;