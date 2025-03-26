'use client';

import { motion } from 'framer-motion';

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
            {/* Team members would go here */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gray-800 mb-4"></div>
              <h3 className="text-xl font-bold">Jane Doe</h3>
              <p className="text-gray-400">Creative Director</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gray-800 mb-4"></div>
              <h3 className="text-xl font-bold">John Smith</h3>
              <p className="text-gray-400">Lead Developer</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gray-800 mb-4"></div>
              <h3 className="text-xl font-bold">Emily Johnson</h3>
              <p className="text-gray-400">UX Designer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 