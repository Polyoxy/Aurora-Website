'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.header 
      className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">Aurora</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/work" className="text-white hover:text-orange-500 transition-colors">
            Work
          </Link>
          <Link href="/services" className="text-white hover:text-orange-500 transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-white hover:text-orange-500 transition-colors">
            About us
          </Link>
          <Link href="/clients" className="text-white hover:text-orange-500 transition-colors">
            Clients
          </Link>
        </nav>
        
        <Link 
          href="/contact" 
          className="hidden md:block px-5 py-2.5 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
        >
          Let's Collaborate
        </Link>
        
        <button className="md:hidden text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar; 