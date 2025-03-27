'use client';

import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-[95%] mx-auto px-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We offer a comprehensive range of services to help businesses succeed in the digital landscape.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Strategy</h2>
            <p className="text-gray-300 mb-4">
              Develop a clear roadmap for your brand's digital success with our strategic consulting services.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Brand Strategy</li>
              <li>• Customer Research</li>
              <li>• Competitor Analysis</li>
              <li>• Content Strategy</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Design</h2>
            <p className="text-gray-300 mb-4">
              Create memorable visual experiences that resonate with your audience and strengthen your brand.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Visual Identity</li>
              <li>• UI/UX Design</li>
              <li>• Website Design</li>
              <li>• Motion Design</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Development</h2>
            <p className="text-gray-300 mb-4">
              Build scalable, high-performance digital products with our expert development team.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Front-end Development</li>
              <li>• Back-end Development</li>
              <li>• E-Commerce Integration</li>
              <li>• CMS Implementation</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 