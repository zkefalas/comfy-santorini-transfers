'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Έλεγχος αν ο χρήστης έχει ήδη κάνει κάποια επιλογή
    const consent = localStorage.getItem('cookie-consent');
    
    // Αν δεν υπάρχει τίποτα στο localStorage, το εμφανίζουμε αμέσως
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAction = (status: 'accepted' | 'declined') => {
    // Αποθηκεύουμε την επιλογή μόνιμα στον browser του χρήστη
    localStorage.setItem('cookie-consent', status);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          // Το z-index πρέπει να είναι το υψηλότερο στο site
          className="fixed bottom-0 left-0 right-0 md:bottom-8 md:left-1/2 md:-translate-x-1/2 w-full md:w-auto md:min-w-[600px] z-[10000] p-4 md:p-0"
        >
          <div className="bg-[#111] border border-white/10 p-6 md:p-8 rounded-[20px] md:rounded-[30px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl">
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-montserrat text-[10px] text-white/40 uppercase tracking-[0.3em] mb-2 font-bold">
                GDPR & Cookie Compliance
              </h4>
              <p className="font-poppins text-white/70 text-[12px] md:text-[13px] leading-relaxed">
                We use essential cookies to provide a premium experience. By accepting, you agree to our 
                <span className="text-white font-semibold italic ml-1">Privacy Policy</span>.
              </p>
            </div>

            <div className="flex gap-4 w-full md:w-auto">
              <button
                onClick={() => handleAction('accepted')}
                className="flex-1 md:px-10 py-4 bg-white text-black font-montserrat text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-[#e0e0e0] transition-all duration-300"
              >
                Accept All
              </button>
              <button
                onClick={() => handleAction('declined')}
                className="flex-1 md:px-10 py-4 bg-transparent border border-white/20 text-white font-montserrat text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-white/5 transition-all duration-300"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;