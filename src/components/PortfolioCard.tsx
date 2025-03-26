'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PortfolioCardProps {
  id: string;
  title: string;
  category: string;
  services: string[];
  image: string;
  color?: string;
}

const PortfolioCard = ({ id, title, category, services, image, color = 'orange' }: PortfolioCardProps) => {
  return (
    <Link href={`/work/${id}`}>
      <motion.div 
        className="portfolio-card aspect-[5/3] relative overflow-hidden group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 z-10" />
        
        {/* Blur Circle */}
        <div 
          className={`blur-circle w-64 h-64 top-[-20%] right-[-10%] opacity-20 ${color === 'orange' ? 'bg-orange-500' : 'bg-blue-500'}`}
        />
        
        {/* Content */}
        <div className="portfolio-card-content absolute inset-0 p-8 flex flex-col justify-end z-20">
          <div className="overflow-hidden">
            <motion.span 
              className="text-sm font-medium text-orange-500 block mb-2"
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {category}
            </motion.span>
          </div>
          
          <div className="overflow-hidden">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h3>
          </div>
          
          <div className="overflow-hidden">
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-white/10 backdrop-blur-sm text-xs px-3 py-1 rounded-full text-white"
                >
                  {service}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PortfolioCard; 