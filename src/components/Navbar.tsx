'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Προσθήκη του FAQ στα links
  const navLinks = [
    { name: 'Services', href: '/transfers' },
    { name: 'Attractions', href: '/attractions' },
    { name: 'FAQ', href: '/faq' }, // Νέο Link
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-8 md:px-16 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' 
          : 'bg-transparent py-8 border-b border-transparent'
      }`}
    >
      <div className="max-w-[1500px] mx-auto flex justify-between items-center h-full">
        
        {/* Λογότυπο */}
        <Link href="/" className="flex items-center z-[110]">
          <Image 
            src="/logo.png" 
            alt="COMFY Logo"
            width={500} 
            height={150}
            priority
            className={`w-auto object-contain cursor-pointer transition-all duration-500 ${
              scrolled ? 'h-16 md:h-20' : 'h-28 md:h-36'
            }`} 
          />
        </Link>

        {/* Desktop Μενού */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="py-2 inline-block">
                  <span className="text-white/60 font-montserrat text-[12px] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 hover:text-white">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Button */}
        <button 
          className="md:hidden z-[110] text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <motion.span animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }} className="w-full h-[1px] bg-white block origin-center"></motion.span>
            <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-full h-[1px] bg-white block"></motion.span>
            <motion.span animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }} className="w-full h-[1px] bg-white block origin-center"></motion.span>
          </div>
        </button>

        {/* Mobile Menu Box */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
              />
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.4 }}
                className="fixed top-0 right-0 h-screen w-[80%] bg-black z-[100] flex flex-col items-start justify-center px-12 border-l border-white/10"
              >
                <ul className="flex flex-col space-y-12 w-full">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        onClick={() => setIsOpen(false)} 
                        className="text-white/70 text-sm uppercase tracking-[0.4em] font-montserrat hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};

export default Navbar;