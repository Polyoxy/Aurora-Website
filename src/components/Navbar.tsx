'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set the background change once scrolled past 20px
      setScrolled(currentScrollY > 20);

      // Hide the navbar when scrolling down, show it when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Framer Motion variants for visible and hidden states
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hidden: { opacity: 1, y: '-100%', transition: { duration: 0.3 } }
  };

  return (
    <motion.header
      variants={variants}
      initial="visible"
      animate={hidden ? 'hidden' : 'visible'}
      className={`fixed w-full z-50 transition-all duration-100 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm' : 'top-8'
      }`}
    >
      <div className="max-w-[95%] mx-auto">
        <div className={`flex justify-between items-center px-16 ${scrolled ? 'py-3.5' : 'py-4'}`}>
          <Link href="/" className="text-4xl font-bold text-white">
            Aurora
          </Link>
          
          <div className="hidden md:flex items-center space-x-14">
            <Link href="/work" className="text-[24px] text-white hover:text-gray-300">
              Work
            </Link>
            <Link href="/services" className="text-[24px] text-white hover:text-gray-300">
              Services
            </Link>
            <Link href="/about" className="text-[24px] text-white hover:text-gray-300">
              About Us
            </Link>
            <Link href="/clients" className="text-[24px] text-white hover:text-gray-300">
              Clients
            </Link>
            
            <Link
              href="/contact"
              className="rounded-[20px] bg-white px-7 py-2.5 text-[24px] font-normal text-black transition-all duration-300 hover:bg-[#2dde98]"
            >
              Let's Collaborate
            </Link>
          </div>
          
          <button
            onClick={toggleMenu}
            className="text-3xl text-white focus:outline-none md:hidden"
          >
            {isMenuOpen ? '×' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/95 backdrop-blur-sm overflow-hidden"
        >
          <div className="px-4 py-6 space-y-6">
            <Link 
              href="/work" 
              className="block text-2xl text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              href="/services" 
              className="block text-2xl text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="block text-2xl text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/clients" 
              className="block text-2xl text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </Link>
            <Link
              href="/contact"
              className="block rounded-[20px] bg-white px-6 py-3 text-2xl font-normal text-black transition-all duration-300 hover:bg-[#2dde98] text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's Collaborate
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
