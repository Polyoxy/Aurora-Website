'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from '@/components/PortfolioCard';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  services: string[];
  image: string;
}

// Fallback data
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
  {
    id: 'project4',
    title: 'Eclipse E-Commerce Platform',
    category: 'Website Development',
    services: ['E-Commerce', 'UX Design', 'Front-end Development'],
    image: '/images/portfolio/project4.jpg',
  },
  {
    id: 'project5',
    title: 'Zenith Marketing Campaign',
    category: 'Brand Strategy',
    services: ['Campaign Strategy', 'Art Direction', 'Copywriting'],
    image: '/images/portfolio/project5.jpg',
  },
  {
    id: 'project6',
    title: 'Polaris Data Visualization',
    category: 'Product Design',
    services: ['UI Design', 'Data Visualization', 'UX Research'],
    image: '/images/portfolio/project6.jpg',
  },
];

export default function WorkPage() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Product Design', 'Branding', 'Website Development', 'App Development', 'Brand Strategy'];

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Work</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore our portfolio of successful projects. From revolutionary digital experiences to impactful brand identities, we create solutions that drive growth and transformation.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category 
                  ? 'bg-gray-700 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioCard 
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              services={item.services}
              image={item.image}
              color={index % 2 === 0 ? 'gray' : 'gray'}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 