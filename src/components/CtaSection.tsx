'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingModal from './BookingModal';

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Διασφαλίζουμε ότι το component θα κάνει render τα animations 
  // ΜΟΝΟ αφού φορτώσει πλήρως στον browser (Client-side)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Αν δεν έχει γίνει το mount, επιστρέφουμε ένα απλό structure 
  // χωρίς animations για να ταυτίζεται με το Server Rendered HTML
  if (!isMounted) {
    return (
      <section className="relative z-30 bg-black">
        <div className="max-w-[1500px] mx-auto px-8 md:px-16 pt-32 pb-20 md:pt-48 max-md:-mt-[230px] md:-mt-10">
          <div className="flex flex-col md:flex-row w-full items-center">
            <div className="w-full md:w-1/2 flex justify-start text-center md:text-left">
              <h2 className="font-cinzel text-lg md:text-xl lg:text-[22px] text-white tracking-[0.2em] uppercase">
                Redefine Your Santorini Experience
              </h2>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
              <button className="w-full md:w-[60%] lg:w-[50%] h-[70px] bg-white text-black font-montserrat font-bold text-[14px] md:text-[16px] tracking-[0.12em] uppercase rounded-[20px] px-6">
                Book Your Ride Now
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-30 bg-black">
      <div className="max-w-[1500px] mx-auto px-8 md:px-16 
                      pt-32 pb-20 md:pt-48 
                      max-md:-mt-[230px]
                      md:-mt-10">
        
        <div className="flex flex-col md:flex-row w-full items-center">
          
          <div className="w-full md:w-1/2 flex justify-start text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-cinzel text-lg md:text-xl lg:text-[22px] text-white tracking-[0.2em] uppercase md:whitespace-nowrap"
            >
              Redefine Your Santorini Experience
            </motion.h2>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, backgroundColor: '#f3f3f3' }}
              whileTap={{ scale: 0.98 }}
              className="group relative 
                         w-full md:w-[60%] lg:w-[50%] h-[70px] 
                         bg-white text-black font-montserrat font-bold 
                         text-[14px] md:text-[16px] tracking-[0.12em] 
                         uppercase whitespace-nowrap rounded-[20px] 
                         shadow-2xl px-6"
            >
              Book Your Ride Now
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <BookingModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTASection;