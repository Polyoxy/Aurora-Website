'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We are a team of passionate designers, developers, and strategists dedicated to creating exceptional digital experiences.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-orange-500">Our Mission</h2>
            <p className="text-gray-300">
              To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact. 
              We believe in combining creativity with technology to build solutions that are not just visually appealing but also functionally 
              superior and aligned with business objectives.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-orange-500">Our Vision</h2>
            <p className="text-gray-300">
              To be the leading creative force in digital transformation, setting new standards for excellence in design, 
              user experience, and technical implementation. We envision a world where digital experiences are seamless, 
              inclusive, and enhance the quality of people's lives.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-orange-500">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-400">We strive for excellence in every aspect of our work, from design to development.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-400">We embrace new technologies and innovative approaches to solve complex challenges.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-400">We believe in the power of teamwork and collaborative problem-solving.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-400">We act with honesty, transparency, and ethical responsibility in all our interactions.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-orange-500">Our Team</h2>
          <p className="text-gray-300 mb-8">
            Our diverse team brings together expertise from various disciplines, creating a synergy of skills that 
            enables us to deliver exceptional results across different industries and project types.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-32 h-32 rounded-full bg-gray-800 mb-4 overflow-hidden relative">
                <Image 
                  src="https://avatars.githubusercontent.com/Polyoxy"
                  alt="Polyoxy" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Polyoxy</h3>
              <p className="text-gray-400 mb-2">Full-stack Developer & Web3 Enthusiast</p>
              <p className="text-sm text-gray-500 text-center mb-4">"Code like a machine, design like an artist, execute like a hustler."</p>
              <Link 
                href="https://github.com/Polyoxy" 
                target="_blank"
                className="flex items-center text-sm text-orange-500 hover:text-orange-400 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Profile
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-32 h-32 rounded-full bg-gray-800 mb-4 overflow-hidden relative">
                <Image 
                  src="https://avatars.githubusercontent.com/choppa1chop"
                  alt="choppa1chop" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">choppa1chop</h3>
              <p className="text-gray-400 mb-2">UX Designer & Frontend Developer</p>
              <p className="text-sm text-gray-500 text-center mb-4">"Creating intuitive digital experiences that truly connect with users."</p>
              <Link 
                href="https://github.com/choppa1chop" 
                target="_blank"
                className="flex items-center text-sm text-orange-500 hover:text-orange-400 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Profile
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-32 h-32 rounded-full bg-gray-800 mb-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-orange-500">
                  <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold">Join Our Team</h3>
              <p className="text-gray-400 mb-2">We're always looking for talent</p>
              <p className="text-sm text-gray-500 text-center mb-4">"Become part of our creative journey and help shape the digital future."</p>
              <Link 
                href="/contact" 
                className="flex items-center text-sm text-orange-500 hover:text-orange-400 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Apply Now
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 