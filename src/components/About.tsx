'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-12 bg-black w-full flex justify-center items-center">
      <div className="w-full max-w-[1440px] px-4 md:pl-[50px] md:pr-[20px]">
        
        {/* Main Container */}
        <div className="relative w-full flex flex-col lg:flex-row min-h-auto lg:min-h-[550px] rounded-[30px] md:rounded-[50px] overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl">
          
          {/* IMAGE SECTION */}
          <div className="relative w-full h-[300px] lg:h-full lg:absolute lg:inset-0 z-0">
            {/* Desktop Overlay */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
            
            <motion.img
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              src="/aboutus.webp"
              alt="Comfy Santorini Transfers Luxury Car"
              className="w-full h-full object-cover object-[right_bottom]"
            />
          </div>

          {/* CONTENT SECTION */}
          <div className="relative z-20 w-full lg:w-1/2 p-8 md:p-16 lg:pl-12 lg:-ml-6 flex items-center bg-black lg:bg-transparent">
            <div className="max-w-xl">
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                className="flex flex-col space-y-8"
              >
                {/* Header με το νέο όνομα COMFY SANTORINI TRANSFERS */}
                <div className="space-y-4">
                  <span className="font-montserrat text-[10px] text-white/40 uppercase tracking-[0.6em]">
                    COMFY SANTORINI TRANSFERS
                  </span>
                  <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-white uppercase tracking-tight leading-[1.1]">
                    Redefining <br />
                    <span className="text-white/40 font-light italic text-2xl md:text-4xl">Island Mobility.</span>
                  </h2>
                </div>

                {/* Text Content (Montserrat & Poppins mix) */}
                <div className="space-y-6">
                  <p className="font-poppins text-white/80 text-[14px] leading-relaxed tracking-wide font-light text-justify md:text-left">
                    The premier choice for **private transfers and VIP tours** in the enchanting Santorini. Whether you’re visiting the island for holidays or business, we are here to provide you with a transportation experience marked by comfort, style, and reliability.
                  </p>
                  
                  <div className="border-l-2 border-white/20 pl-6 py-1">
                    <p className="font-poppins text-white/50 text-[13px] leading-relaxed tracking-wide font-light italic">
                      "We established a service that exudes luxury, safety, and personalized care. We take care of every detail to ensure your journey begins and ends in the best possible way."
                    </p>
                  </div>

                  <p className="font-poppins text-white/80 text-[14px] leading-relaxed tracking-wide font-light">
                    Our experienced and courteous staff is always at your service to meet your every need, with consistency and discretion.
                  </p>
                </div>

                {/* Stats (Montserrat) */}
                <div className="pt-6 flex gap-10 items-center">
                  <div className="flex flex-col">
                    <span className="font-montserrat text-xs font-bold text-white tracking-widest uppercase">24/7</span>
                    <span className="font-montserrat text-[8px] text-white/30 uppercase tracking-[0.2em]">Service</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-montserrat text-xs font-bold text-white tracking-widest uppercase">Elite</span>
                    <span className="font-montserrat text-[8px] text-white/30 uppercase tracking-[0.2em]">Standards</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;