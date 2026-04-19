import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { IoMailOutline, IoCallOutline, IoLogoWhatsapp, IoLocationOutline } from 'react-icons/io5';
import { FaViber } from 'react-icons/fa'; // Χρειάζεται εγκατάσταση react-icons/fa αν δεν υπάρχει

export const metadata: Metadata = {
  title: 'Contact Us | Comfy Santorini Transfers',
  description: 'Get in touch with Comfy Santorini Transfers for your luxury private ride. Available 24/7 for airport and port pickups.',
};

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen pt-48 pb-20 md:pt-60"> {/* Αυξήσαμε το Padding Top */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-[50px]">
        
        {/* HEADER */}
        <div className="mb-20 text-center md:text-left" data-aos="fade-up">
          <h1 className="font-cinzel text-4xl md:text-6xl text-white tracking-[0.3em] uppercase mb-6">
            Contact Us
          </h1>
          <p className="font-montserrat text-white/50 text-sm tracking-[0.2em] uppercase">
            We are at your service 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* LEFT SIDE: INFO */}
          <div className="space-y-12" data-aos="fade-right">
            <div>
              <h3 className="font-cinzel text-xl text-white tracking-widest mb-8 uppercase">Direct Contact</h3>
              <div className="space-y-6">
                
                {/* PHONE */}
                <a href="tel:+306934566077" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <IoCallOutline size={20} />
                  </div>
                  <span className="font-poppins text-white/70 group-hover:text-white">+30 693 456 6077</span>
                </a>
                
                {/* WHATSAPP */}
                <a href="https://wa.me/306934566077" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white group-hover:border-[#25D366] transition-all duration-500">
                    <IoLogoWhatsapp size={20} />
                  </div>
                  <span className="font-poppins text-white/70 group-hover:text-white">WhatsApp Chat</span>
                </a>

                {/* VIBER */}
                <a href="viber://chat?number=%2B306934566077" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#7360F2] group-hover:text-white group-hover:border-[#7360F2] transition-all duration-500">
                    <FaViber size={20} />
                  </div>
                  <span className="font-poppins text-white/70 group-hover:text-white">Viber Message</span>
                </a>

                {/* EMAIL */}
                <a href="mailto:comfysantorinitransfers@gmail.com" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <IoMailOutline size={20} />
                  </div>
                  <span className="font-poppins text-white/70 group-hover:text-white text-sm md:text-base">
                    comfysantorinitransfers@gmail.com
                  </span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-cinzel text-xl text-white tracking-widest mb-6 uppercase">Location</h3>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40">
                  <IoLocationOutline size={20} />
                </div>
                <span className="font-poppins text-white/70">Fira, Santorini, Greece, 84700</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-[30px]" data-aos="fade-left">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}