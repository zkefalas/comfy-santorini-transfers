'use client';
import { useState } from 'react';
import Modal from './LegalModals';
import { IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';

const Footer = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const privacyContent = (
    <div className="space-y-4 text-white/70">
      <p className="text-white font-bold text-lg">Privacy Policy</p>
      <p><strong>Data We Collect:</strong> We collect your name, phone, and booking details exclusively for your transfer service.</p>
      <p><strong>Use of Data:</strong> Your data is never shared with third parties, except for necessary communication regarding your ride.</p>
      <p><strong>GDPR:</strong> You have the right to request deletion of your data at any time.</p>
    </div>
  );

  const termsContent = (
    <div className="space-y-4 text-white/70">
      <p className="text-white font-bold text-lg">Terms of Use</p>
      <p><strong>Cancellations:</strong> Free cancellation up to 24 hours before pickup.</p>
      <p><strong>Delays:</strong> We monitor flights/ferries and wait for you at no extra initial cost.</p>
      <p><strong>Conduct:</strong> We maintain a high standard of service and expect mutual respect for our drivers and vehicles.</p>
    </div>
  );

  return (
    <footer className="bg-black py-24 border-t border-white/5 relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[50px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16">
          
          {/* LEFT SIDE: LOGO & BRAND NAME */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Comfy Santorini Transfers Logo" 
                className="h-[120px] md:h-[160px] w-auto object-contain brightness-110 hover:scale-105 transition-transform duration-500" 
              />
            </div>
            {/* ΕΝΗΜΕΡΩΜΕΝΟ COPYRIGHT */}
            <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] text-center md:text-left">
              © 2026 COMFY SANTORINI TRANSFERS
            </p>
          </div>

          {/* MIDDLE SIDE: SOCIAL MEDIA LINKS */}
          <div className="flex gap-10 text-white/30 text-3xl justify-center items-center">
            {/* Εδώ θα βάλεις το link του Instagram αργότερα */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#E1306C] transition-all transform hover:-translate-y-2 duration-300"
            >
              <IoLogoInstagram />
            </a>
            {/* Εδώ θα βάλεις το link του Facebook αργότερα */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#1877F2] transition-all transform hover:-translate-y-2 duration-300"
            >
              <IoLogoFacebook />
            </a>
          </div>

          {/* RIGHT SIDE: LEGAL LINKS */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-12 text-[11px] font-montserrat uppercase tracking-[0.3em] items-center">
            <button 
              onClick={() => setActiveModal('privacy')} 
              className="text-white/40 hover:text-white transition-colors py-2"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveModal('terms')} 
              className="text-white/40 hover:text-white transition-colors py-2"
            >
              Terms of Use
            </button>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal(null)} 
        title="Privacy Policy" 
        content={privacyContent} 
      />
      <Modal 
        isOpen={activeModal === 'terms'} 
        onClose={() => setActiveModal(null)} 
        title="Terms of Use" 
        content={termsContent} 
      />
    </footer>
  );
};

export default Footer;