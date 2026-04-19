'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      // Στέλνουμε κενά τα υπόλοιπα πεδία που περιμένει το API του booking
      serviceType: `Contact Form Inquiry: ${formData.get('subject')}`,
      pickup: 'N/A',
      dropoff: 'N/A',
      date: 'N/A',
      time: 'N/A',
      adults: '0',
      kids: '0',
      suitcases: '0',
      bags: '0',
      phone: 'N/A'
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
        <h3 className="font-cinzel text-2xl text-white mb-4">Message Sent!</h3>
        <p className="font-poppins text-white/50 mb-8">We will get back to you at comfysantorinitransfers@gmail.com</p>
        <button onClick={() => setStatus('idle')} className="text-white underline uppercase text-xs">Send another</button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] text-white/40 uppercase tracking-widest ml-4">Full Name</label>
          <input name="fullName" required type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:border-white/30 outline-none" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] text-white/40 uppercase tracking-widest ml-4">Email Address</label>
          <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:border-white/30 outline-none" placeholder="john@example.com" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] text-white/40 uppercase tracking-widest ml-4">Subject</label>
        <select name="subject" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white outline-none appearance-none" style={{ backgroundColor: '#0a0a0a' }}>
          <option>General Inquiry</option>
          <option>Private Tour Request</option>
          <option>Special Event</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] text-white/40 uppercase tracking-widest ml-4">Your Message</label>
        <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-[25px] px-6 py-4 text-white focus:border-white/30 outline-none resize-none" placeholder="How can we help?"></textarea>
      </div>
      <button type="submit" disabled={status === 'sending'} className="w-full bg-white text-black font-bold py-5 rounded-full uppercase text-xs tracking-widest disabled:opacity-50">
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;