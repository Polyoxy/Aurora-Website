'use client';

import { motion } from 'framer-motion';

export default function ClientsPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-[95%] mx-auto px-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Clients
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We've had the privilege of working with innovative companies across various industries. 
          Here are some of the partners we've collaborated with to create exceptional digital experiences.
        </motion.p>
        
        {/* Featured Clients */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-white">Featured Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="flex items-center justify-center bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 h-32">
                <div className="w-full h-8 bg-gray-800 rounded"></div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Client Testimonials */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-white">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 italic mb-6">
                "Aurora transformed our digital presence with their innovative approach. 
                Their team understood our vision and delivered a solution that exceeded our expectations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 mr-4"></div>
                <div>
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-gray-400 text-sm">CEO, TechInnovate</p>
                </div>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 italic mb-6">
                "Working with Aurora was a game-changer for our business. Their strategic approach 
                and attention to detail resulted in a product that our users love."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 mr-4"></div>
                <div>
                  <h3 className="font-bold">Michael Chen</h3>
                  <p className="text-gray-400 text-sm">Product Director, Nexus Labs</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-white">Success Stories</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 aspect-video bg-gray-800 rounded-xl"></div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2">Quantum Brand Transformation</h3>
                <p className="text-gray-300 mb-4">
                  We helped Quantum Technologies redefine their brand identity and digital presence, 
                  resulting in a 40% increase in user engagement and a 25% boost in conversion rates.
                </p>
                <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                  Read case study
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="ml-2 transform group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M4.16669 10H15.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.8334 5L15.8334 10L10.8334 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 aspect-video bg-gray-800 rounded-xl"></div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2">Nebula Analytics Dashboard</h3>
                <p className="text-gray-300 mb-4">
                  We developed a custom analytics dashboard for Nebula Inc., helping them visualize 
                  complex data and make informed business decisions, leading to a 35% improvement in operational efficiency.
                </p>
                <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                  Read case study
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="ml-2 transform group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M4.16669 10H15.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.8334 5L15.8334 10L10.8334 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 