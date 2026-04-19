'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  const [formData, setFormData] = useState({
    serviceType: '',
    pickup: '',
    dropoff: '',
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    adults: '',
    kids: '',
    suitcases: '',
    bags: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 1. Προετοιμασία μηνύματος για WhatsApp & Viber
  const message = `New Booking Request:
- Service: ${formData.serviceType}
- From: ${formData.pickup}
- To: ${formData.dropoff}
- Date/Time: ${formData.date} at ${formData.time}
- Name: ${formData.fullName}
- Phone: ${formData.phone}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/306934566077?text=${encodedMessage}`;
  const viberUrl = `viber://chat?number=306934566077`;

  // 2. Η συνάρτηση που στέλνει το Email ΑΥΤΟΜΑΤΑ (χωρίς να ανοίγει το Outlook)
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Σταματάει το άνοιγμα του mail app
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSent(true);
        setTimeout(() => {
          onClose();
          setIsSent(false);
        }, 4000);
      } else {
        alert("Failed to send email. Please use WhatsApp.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[30px] shadow-2xl overflow-y-auto max-h-[95vh] scrollbar-hide"
      >
        <div className="p-8 md:p-12">
          <AnimatePresence mode="wait">
            {isSent ? (
              <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="font-cinzel text-2xl text-white mb-4 uppercase tracking-widest">Request Sent!</h3>
                <p className="font-montserrat text-white/60 text-sm tracking-[0.1em]">We will contact you shortly to confirm your booking.</p>
              </motion.div>
            ) : (
              <motion.div key="form">
                <h2 className="font-cinzel text-2xl text-white mb-2 tracking-widest uppercase text-center">Booking Request</h2>
                <p className="font-montserrat text-[11px] text-white/60 uppercase tracking-[0.4em] text-center mb-10">COMFY SANTORINI TRANSFERS</p>

                <form className="space-y-6" onSubmit={handleEmailSubmit}>
                  
                  {/* Service Type */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">Service Type</label>
                    <select name="serviceType" required onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-montserrat text-sm appearance-none cursor-pointer" style={{ backgroundColor: '#111' }}>
                      <option value="">Select Service Type</option>
                      <option value="Airport Transfer">Airport Transfer</option>
                      <option value="Port Transfer">Port Transfer</option>
                      <option value="Point-to-Point">Point-to-Point / Hotel Transfer</option>
                      <option value="Island Tour">Island Tour</option>
                      <option value="VIP Taxi">VIP Taxi Service</option>
                    </select>
                  </div>

                  {/* Pickup & Dropoff */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">Pickup Location</label>
                      <input name="pickup" required onChange={handleChange} type="text" placeholder="e.g. Airport, Hotel" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-white/30" />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">Drop-off Location</label>
                      <input name="dropoff" required onChange={handleChange} type="text" placeholder="e.g. Oia, Port" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-white/30" />
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                      <input name="fullName" required onChange={handleChange} type="text" placeholder="Your Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-white/30" />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                      <input name="email" required onChange={handleChange} type="email" placeholder="email@example.com" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-white/30" />
                    </div>
                  </div>

                  {/* Phone, Date, Time */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">Phone</label>
                      <input name="phone" required onChange={handleChange} type="tel" placeholder="+30..." className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-white/30" />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">Date</label>
                      <input name="date" required onChange={handleChange} type="date" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-montserrat text-sm [color-scheme:dark] focus:outline-none" />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">Time</label>
                      <input name="time" required onChange={handleChange} type="time" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-montserrat text-sm [color-scheme:dark] focus:outline-none" />
                    </div>
                  </div>

                  {/* Passengers & Baggage */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">Number of Passengers</label>
                      <div className="flex gap-4">
                        <input name="adults" onChange={handleChange} type="number" placeholder="Adults" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none" />
                        <input name="kids" onChange={handleChange} type="number" placeholder="Kids" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none" />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">Number of Baggage</label>
                      <div className="flex gap-4">
                        <input name="suitcases" onChange={handleChange} type="number" placeholder="Suitcases" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none" />
                        <input name="bags" onChange={handleChange} type="number" placeholder="Bags" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none" />
                      </div>
                    </div>
                  </div>

                  {/* --- ΤΑ 3 ΚΟΥΜΠΙΑ --- */}
                  <div className="pt-6 space-y-4">
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] text-center mb-4">Send request via:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      
                      {/* 1. WhatsApp */}
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#25D366] text-white py-4 rounded-xl font-montserrat font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all text-center">
                         WhatsApp
                      </a>

                      {/* 2. Official Email (ΤΟ ΔΙΟΡΘΩΜΕΝΟ ΚΟΥΜΠΙ) */}
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="flex items-center justify-center bg-white text-black py-4 rounded-xl font-montserrat font-bold text-[10px] uppercase tracking-widest hover:bg-[#f0f0f0] transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? 'Sending...' : 'Official Email'}
                      </button>

                      {/* 3. Viber */}
                      <a href={viberUrl} className="flex items-center justify-center bg-[#7360f2] text-white py-4 rounded-xl font-montserrat font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all text-center">
                         Viber
                      </a>

                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingModal;