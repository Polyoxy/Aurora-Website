'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold
      const isScrolled = currentScrollY > 50;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling down & past initial threshold
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm' : 'top-8'
      } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[95%] mx-auto">
        <div className={`flex justify-between items-center px-16 ${scrolled ? 'py-3' : 'py-4'}`}>
          <Link href="/" className="text-4xl font-bold text-white">
            Aurora
          </Link>
          
          <div className="hidden md:flex items-center space-x-14">
            <Link href="/work" className="text-2xl text-white hover:text-gray-300">
              Work
            </Link>
            <Link href="/services" className="text-2xl text-white hover:text-gray-300">
              Services
            </Link>
            <Link href="/about" className="text-2xl text-white hover:text-gray-300">
              About Us
            </Link>
            <Link href="/clients" className="text-2xl text-white hover:text-gray-300">
              Clients
            </Link>
            
            <Link 
              href="/contact" 
              className="rounded-[20px] bg-white px-7 py-2.5 text-2xl font-normal text-black transition-all duration-300 hover:bg-[#2dde98]"
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
      </div>
    </motion.header>
  );
} 