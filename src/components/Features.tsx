'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Island Expert',
    description: 'Mastering Santorini’s routes with precision and local insight.',
  },
  {
    title: 'Safe & Secure',
    description: 'A professional driving experience focused on absolute reliability.',
  },
  {
    title: '24/7 Service',
    description: 'Dedicated round-the-clock transport tailored to your schedule.',
  },
  {
    title: 'Luxury Quality',
    description: 'Redefining every ride with personalized care and premium comfort.',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-black w-full flex justify-center">
      <div className="w-full max-w-[1440px] px-[50px]">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px] lg:gap-[40px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              // ΝΕΑ ΚΙΝΗΣΗ: Scale από 0.95 και Blur
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 1.5, // Ακόμα πιο αργό για να "αναπνέει"
                ease: [0.19, 1, 0.22, 1], // Apple-style expo easing
                delay: index * 0.1 // Μικρό stagger για να υπάρχει μια "κίνηση" στο μάτι
              }}
              className="group flex flex-col p-10 rounded-[40px] bg-[#151515] border border-white/5 hover:border-white/10 hover:bg-[#1a1a1a] transition-all duration-700 min-h-[170px] justify-center"
            >
              {/* Title */}
              <h3 className="font-montserrat text-[12px] font-bold text-white mb-3 uppercase tracking-[0.3em]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-poppins text-white/40 text-[11px] leading-relaxed tracking-wider font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;