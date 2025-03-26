'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PortfolioCard from '@/components/PortfolioCard';

// Sample portfolio data (you'll replace this with Firebase data later)
const portfolioItems = [
  {
    id: 'project1',
    title: 'Nebula Analytics Dashboard',
    category: 'Product Design',
    services: ['UI Design', 'UX Research', 'Development'],
    image: '/images/portfolio/project1.jpg',
  },
  {
    id: 'project2',
    title: 'Quantum Brand Identity',
    category: 'Branding',
    services: ['Visual Identity', 'Brand Strategy', 'Art Direction'],
    image: '/images/portfolio/project2.jpg',
  },
  {
    id: 'project3',
    title: 'Solstice Mobile Application',
    category: 'App Development',
    services: ['UI Design', 'Front-end Development', 'User Testing'],
    image: '/images/portfolio/project3.jpg',
  },
];

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative z-10">
          <div className="blur-circle w-96 h-96 top-[-20%] right-[-10%] opacity-20 bg-orange-500 floating" />
          <div className="blur-circle w-96 h-96 bottom-[-20%] left-[-10%] opacity-20 bg-orange-700 floating" style={{ animationDelay: '-4s' }} />
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            We are a full-cycle partner,{' '}
            <span className="text-gradient">empowering businesses</span> and people to lead their digital journeys
          </motion.h1>
          
          <motion.div
            className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10 mb-12 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-2xl text-orange-500">Brand</span>
              <span className="text-2xl text-white">+</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-2xl text-orange-500">Website</span>
              <span className="text-2xl text-white">+</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-2xl text-orange-500">Product</span>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We join forces with enterprise companies and visionary startups, leveraging our full-cycle digital expertise to create brands, experiences, and products that drive growth and transformation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors inline-block"
            >
              Let's Collaborate
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our work,<br />your success story</h2>
              <p className="text-gray-400 max-w-xl">From revolutionizing digital experiences to creating impactful brands, we're in the business of making a positive impact on our collective future.</p>
            </div>
            <Link 
              href="/work" 
              className="mt-6 sm:mt-0 text-orange-500 hover:text-orange-400 font-medium flex items-center group"
            >
              View All Work
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
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard 
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                services={item.services}
                image={item.image}
                color={index % 2 === 0 ? 'orange' : 'blue'}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-24 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <motion.div 
              className="p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-orange-500 mb-2">150+</h3>
              <p className="text-gray-400">Projects completed over the years</p>
            </motion.div>
            
            <motion.div 
              className="p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-orange-500 mb-2">25+</h3>
              <p className="text-gray-400">Team members across the globe</p>
            </motion.div>
            
            <motion.div 
              className="p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-orange-500 mb-2">10+</h3>
              <p className="text-gray-400">Enterprise clients</p>
            </motion.div>
            
            <motion.div 
              className="p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-orange-500 mb-2">5M+</h3>
              <p className="text-gray-400">Users impacted by our work every day</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="blur-circle w-96 h-96 top-[10%] right-[10%] opacity-20 bg-orange-600 floating" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's get to work and create something<br /> we can all be <span className="text-gradient">proud of</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors inline-block"
            >
              Let's Collaborate
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
