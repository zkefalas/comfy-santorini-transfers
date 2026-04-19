'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaViber, FaPhoneAlt } from 'react-icons/fa';

const InstantBooking = () => {
  const phoneNumber = "+306934566077";
  const whatsappMessage = encodeURIComponent("Hello! I would like to inquire about a VIP transfer in Santorini.");

  const bookingOptions = [
    {
      id: 1,
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      link: `https://wa.me/${phoneNumber.replace('+', '')}?text=${whatsappMessage}`,
      color: 'text-[#25D366]', // Επίσημο χρώμα WhatsApp
      bg: 'bg-[#25D366]/10',
      label: 'Chat with us'
    },
    {
      id: 2,
      name: 'Viber',
      icon: <FaViber />,
      // Link για Viber (λειτουργεί σε κινητά και desktop με εγκατεστημένη εφαρμογή)
      link: `viber://chat?number=%2B${phoneNumber.replace('+', '')}`,
      color: 'text-[#7360f2]', // Επίσημο χρώμα Viber
      bg: 'bg-[#7360f2]/10',
      label: 'Message us'
    },
    {
      id: 3,
      name: 'Direct Call',
      icon: <FaPhoneAlt />,
      link: `tel:${phoneNumber}`,
      color: 'text-white',
      bg: 'bg-white/10',
      label: 'Speak with us'
    }
  ];

  return (
    <section className="relative pt-4 pb-24 bg-black overflow-hidden">
      <div className="w-full max-w-[1440px] px-[20px] md:px-[50px] mx-auto">
        <div className="flex flex-col items-center text-center space-y-16">
          
          {/* Title & Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Πιο φωτεινό Available 24/7 */}
            <span className="font-montserrat text-[12px] text-white/80 uppercase tracking-[0.6em] block font-semibold">
              Available 24/7
            </span>
            <h2 className="font-montserrat text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">
              Instant <span className="text-white/40">Booking</span>
            </h2>
            <p className="font-poppins text-white/50 text-sm md:text-lg max-w-xl mx-auto font-light leading-relaxed">
              Choose your preferred way to contact us and get an immediate response for your transfer.
            </p>
          </motion.div>

          {/* Icons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {bookingOptions.map((option, index) => (
              <motion.a
                key={option.id}
                href={option.link}
                // Target blank μόνο για το WhatsApp/Viber web αν χρειαστεί
                target={option.name !== 'Direct Call' ? "_blank" : "_self"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative flex flex-col items-center p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500"
              >
                {/* Colored Icon Circle */}
                <div className={`w-24 h-24 rounded-full ${option.bg} flex items-center justify-center text-4xl ${option.color} mb-6 transition-all duration-500 group-hover:scale-110 shadow-2xl`}>
                  {option.icon}
                </div>
                
                {/* Label */}
                <span className="font-montserrat text-[15px] text-white font-bold uppercase tracking-[0.2em]">
                  {option.name}
                </span>
                
                <p className="mt-2 font-poppins text-[13px] text-white/40 group-hover:text-white/70 transition-colors">
                  {option.label}
                </p>

                {/* Subtle Glow Background Effect */}
                <div className={`absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10 ${option.bg}`} />
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstantBooking;