'use client';

import { motion, useMotionValue, useTransform, useSpring, useScroll, useTransform as useMotionTransform } from 'framer-motion';
import Link from 'next/link';
import PortfolioCard from '@/components/PortfolioCard';
import { useEffect, useState, useRef } from 'react';
import HomeFooter from '@/components/HomeFooter';
import GradientTitle from '@/components/GradientTitle';
import Image from 'next/image';

// Animated number component for counting animations
function AnimatedNumber({ value, className }: { value: number, className?: string }) {
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  return (
    <motion.p className={className}>
      {useTransform(springValue, (latest) => Math.round(latest))}
    </motion.p>
  );
}

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

// Logo component with static SVG
function Logo() {
  return (
    <div className="absolute top-8 sm:top-16 left-8 sm:left-16 z-50">
      <svg 
        className="w-12 h-12 sm:w-16 sm:h-16" 
        version="1.2" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 1200"
      >
        <g>
          <path 
            fill="#ffffff" 
            d="m987.1 619.7c-5.1-1.7-11.1-1.7-16.3-1.7-24.8 0-47.1 13.7-60 35.1l-84.8-20.5c11.1-66.9-12-132.9-56.6-178.3l87.4-103.7c19.8 12.8 43.8 19.7 68.6 19.7 3.4 0 6.9 0 10.3-0.9 71.1-6 123.4-67.7 117.4-138.8-5.1-66-63.4-116.6-127.7-118.3-0.8 0-0.8 0-1.7 0-0.9 0-0.9 0-1.7 0q-3.9 0-7.7 0c-71.2 6-123.5 67.7-117.5 138.8 2.6 29.2 14.6 55.8 32.6 76.3l-86.6 104.6c-20.5-14.6-44.5-26.6-70.2-32.6-16.3-4.3-32.6-6-48.9-6-32.6 0-63.4 7.7-91.7 22.3l-105.4-175.7c15.4-13.7 27.4-31.7 32.5-53.1 13.7-54.9-20.5-110.6-75.4-124.3-8.6-1.7-16.3-2.6-24.9-2.6-46.2 0-88.2 31.7-99.4 78.9-12.8 54 20.6 109.7 76.3 123.4 8.6 1.7 16.3 2.6 24.9 2.6 12.8 0 25.7-2.6 37.7-6.9l104.5 174.9c-33.4 24.8-60 59.1-73.7 101.1l-111.4-27.4c-1.7-36.9-27.4-69.5-65.1-78.9q-10.3-2.6-20.6-2.6c-38.6 0-73.7 26.6-83.2 65.2-11.1 46.3 17.2 92.6 62.6 103.7q10.3 2.6 20.6 2.6c35.1 0 67.7-22.3 80.6-56.6l108.8 26.6c-11.1 67.7 12 133.7 56.6 179.1l-104.6 124.3c-15.4-9.4-33.4-14.6-52.3-14.6-2.5 0-6 0-8.5 0-56.6 4.3-98.6 54-94.3 110.6 4.3 54 49.7 94.3 102 94.3 2.5 0 6 0 8.5 0 56.6-4.3 98.6-54 94.3-110.6-1.7-22.3-10.3-42-24-58.3l104.6-123.4c20.6 14.6 44.6 26.6 70.3 32.6 16.3 4.3 32.6 6 48.8 6 32.6 0 63.5-7.7 91.8-22.3l106.2 175.7c-15.4 13.7-27.4 31.7-32.5 53.1-13.7 54.9 20.5 110.6 75.4 124.3 8.6 1.7 16.3 2.6 24.9 2.6 46.2 0 88.2-31.7 99.4-78.9 13.7-54.8-20.6-110.5-75.4-124.2-8.6-1.8-16.3-2.6-24.9-2.6-12.9 0-25.7 2.6-37.7 6.8l-105.4-174c33.4-24.8 60-59.1 73.7-101.1l84 20.6c0 31.7 20.5 60 52.3 67.7 5.1 1.7 11.1 1.7 16.2 1.7 30.9 0 59.2-21.4 66.9-52.3 9.4-36.8-13.7-74.6-50.6-84z"
          />
        </g>
      </svg>
      <div className="mt-2 flex">
        <span className="text-base sm:text-lg text-white font-normal mr-1">Aurora</span>
        <span className="text-base sm:text-lg text-white font-normal opacity-60">Agency</span>
      </div>
    </div>
  );
}

// Animated text component with dynamic letter scramble
function AnimatedText() {
  const [text, setText] = useState("Scale");
  const [isScrambling, setIsScrambling] = useState(false);
  const words = ["Scale", "Your", "Business"];
  const currentIndex = useRef(0);

  useEffect(() => {
    const scrambleText = () => {
      const currentWord = words[currentIndex.current];
      let scrambled = currentWord;
      let iterations = 0;
      const maxIterations = 20; // More iterations for smoother effect

      const interval = setInterval(() => {
        scrambled = currentWord
          .split("")
          .map((letter, index) => {
            // Smoother probability curve
            const progress = iterations / maxIterations;
            const probability = Math.sin(progress * Math.PI) * 0.7;
            
            if (Math.random() < probability) {
              // Use more readable characters for smoother look
              const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
              return chars[Math.floor(Math.random() * chars.length)];
            }
            return letter;
          })
          .join("");

        setText(scrambled);
        iterations++;

        if (iterations >= maxIterations) {
          clearInterval(interval);
          setText(currentWord);
          setIsScrambling(false);
          
          // Longer pause between words
          setTimeout(() => {
            currentIndex.current = (currentIndex.current + 1) % words.length;
            setIsScrambling(true);
            scrambleText();
          }, 1500);
        }
      }, 30); // Faster updates for smoother effect

      return () => clearInterval(interval);
    };

    const timer = setTimeout(() => {
      setIsScrambling(true);
      scrambleText();
    }, 2000);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div className="text-center -mt-20">
      <h3 className="text-[12vw] font-bold text-white opacity-80 z-20">
        <span className="inline-block font-mono transition-all duration-500 ease-in-out">
          {text}
        </span>
      </h3>
    </div>
  );
}

// Add this new component for parallax project cards
function ParallaxProjectCard({ 
  children, 
  className = "", 
  delay = 0,
  direction = "left"
}: { 
  children: React.ReactNode, 
  className?: string,
  delay?: number,
  direction?: "left" | "right"
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useMotionTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useMotionTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const x = useMotionTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [100, -100] : [-100, 100]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, x }}
      className={className}
      initial={{ opacity: 0, y: 50, x: direction === "left" ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="pt-40">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="max-w-[95%] w-full mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10 text-center">
          {/* Main heading - with mobile responsiveness */}
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-8xl font-normal mx-auto text-white pb-12 sm:pb-24 max-w-[1400px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="whitespace-normal sm:whitespace-nowrap px-4">We are a full-cycle partner,</div>
            <div className="whitespace-normal sm:whitespace-nowrap px-4">empowering businesses and</div>
            <div className="whitespace-normal sm:whitespace-nowrap px-4">people to lead their digital journeys</div>
          </motion.h1>
          
          {/* "We unite" section - with mobile responsiveness */}
          <motion.div
            className="mt-12 sm:mt-24 max-w-[1400px] mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* First line */}
            <div className="flex flex-wrap justify-center items-center text-4xl sm:text-6xl lg:text-8xl font-normal">
              <span className="mr-4 text-[#808080]">We unite</span>
              <div className="bg-[#808080] hover:bg-[#2dde98] transition-colors duration-300 rounded-[32px] px-6 sm:px-10 py-2 sm:py-4 mx-2 my-2">
                <span className="font-normal text-black">Brand</span>
              </div>
              <span className="mx-4 text-[#808080]">+</span>
              <div className="bg-[#808080] hover:bg-[#2dde98] transition-colors duration-300 rounded-[32px] px-6 sm:px-10 py-2 sm:py-4 mx-2 my-2">
                <span className="font-normal text-black">Website</span>
              </div>
              <span className="mx-4 text-[#808080]">+</span>
            </div>
            
            {/* Second line */}
            <div className="flex flex-wrap justify-center items-center text-4xl sm:text-6xl lg:text-8xl font-normal mt-4">
              <div className="bg-[#808080] hover:bg-[#2dde98] transition-colors duration-300 rounded-[32px] px-6 sm:px-10 py-2 sm:py-4 mx-2 my-2">
                <span className="font-normal text-black">Product</span>
            </div>
              <span className="ml-4 text-[#808080]">under one vision.</span>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="min-h-screen py-32 sm:py-48 bg-black text-white">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            {/* Top Row - Equal width boxes */}
          <motion.div 
              className="col-span-1 lg:col-span-4 p-6 sm:p-10 bg-[#808080] rounded-[20px]"
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
            >
              <h3 className="text-4xl sm:text-7xl lg:text-8xl font-medium text-black">$2.8M+</h3>
              <p className="text-black text-base sm:text-2xl mt-4">Revenue generated for clients since 2020</p>
          </motion.div>
          
            <motion.div 
              className="col-span-1 lg:col-span-4 p-6 sm:p-10 bg-[#808080] rounded-[20px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
            >
              <h3 className="text-4xl sm:text-7xl lg:text-8xl font-medium text-black">92+</h3>
              <p className="text-black text-base sm:text-2xl mt-4">Projects delivered across 2 countries</p>
            </motion.div>
            
            <motion.div 
              className="col-span-1 lg:col-span-4 p-6 sm:p-10 bg-[#808080] rounded-[20px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
            >
              <h3 className="text-4xl sm:text-7xl lg:text-8xl font-medium text-black">15+</h3>
              <p className="text-black text-base sm:text-2xl mt-4">Team members across offices</p>
            </motion.div>

            {/* Bottom Row - Uneven width boxes */}
            <motion.div
              className="col-span-1 lg:col-span-3 p-6 sm:p-10 bg-[#808080] rounded-[20px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
            >
              <h3 className="text-4xl sm:text-7xl lg:text-8xl font-medium text-black">6+</h3>
              <p className="text-black text-base sm:text-2xl mt-4">Enterprise clients served</p>
            </motion.div>
            
            <motion.div 
              className="col-span-2 lg:col-span-6 p-6 sm:p-10 bg-[#808080] rounded-[20px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
            >
              <h3 className="text-4xl sm:text-7xl lg:text-8xl font-medium text-black">2020</h3>
              <p className="text-black text-base sm:text-2xl mt-4">Founded as an independently owned agency</p>
            </motion.div>
            
            <motion.div 
              className="col-span-1 lg:col-span-3 p-6 sm:p-10 bg-[#808080] rounded-[20px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
            >
              <h3 className="text-4xl sm:text-7xl lg:text-8xl font-medium text-black">2</h3>
              <p className="text-black text-base sm:text-2xl mt-4">Countries with active operations</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Aurora Agency Section */}
      <section className="min-h-screen relative my-12 sm:my-24 overflow-hidden rounded-[30px] backdrop-blur-lg bg-black bg-opacity-75">
        {/* Video Container */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[30px]">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute w-full h-full object-cover"
            style={{
              minWidth: '100%',
              minHeight: '100%',
              objectFit: 'cover',
              borderRadius: '30px'
            }}
            src="/videos/Landing Page/8100336-uhd_4096_2160_25fps.mp4"
          />
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[30px]" />
        </div>
        
        {/* Content Area with Play Button */}
        <div className="min-h-[93vh] relative z-10 flex items-center justify-center px-4 sm:px-8">
          <div className="max-w-[95%] w-full mx-auto relative">
            {/* Logo Component */}
            <div className="absolute top-8 sm:top-16 left-8 sm:left-16 z-50">
              <img 
                src="/symbol-white.svg" 
                alt="Aurora Agency" 
                className="w-12 h-12 sm:w-16 sm:h-16"
              />
              <div className="mt-2 flex">
                <span className="text-base sm:text-lg text-white font-normal mr-1">Aurora</span>
                <span className="text-base sm:text-lg text-white font-normal opacity-60">Agency</span>
              </div>
            </div>
            
            {/* Animated Text */}
            <AnimatedText />
          </div>
        </div>
      </section>

      {/* Business Cards Section */}
      <motion.section 
        className="relative bg-black text-white min-h-screen flex items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
          <Image
            src="/images/business-cards/Final-Front.png"
            alt="Aurora Business Cards"
            fill
            className="object-cover object-center blur-xl"
            priority
          />
        </div>
        <div className="relative z-20 w-full py-24 sm:py-32">
          <div className="max-w-[85%] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl sm:text-6xl lg:text-8xl font-normal">
                  Crafting memorable<br />first impressions
                </h2>
                <p className="text-xl sm:text-2xl text-[#808080] max-w-2xl">
                  From elegant business cards to comprehensive print materials, we create physical touchpoints that reflect your brand's sophistication and attention to detail.
                </p>
                <Link 
                  href="/services/print-design" 
                  className="inline-flex items-center text-xl sm:text-2xl group text-[#808080] hover:text-white transition-colors"
                >
                  Explore our print services
                  <svg 
                    className="w-8 h-8 ml-3 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:hidden"></div>
                <Image
                  src="/images/business-cards/Final-Front.png"
                  alt="Aurora Business Cards"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Global Presence Section */}
      <motion.section 
        className="relative bg-black text-white min-h-screen flex items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
      >
        <div className="w-full py-24 sm:py-32">
          <div className="max-w-[85%] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
              >
                <h2 className="text-4xl sm:text-6xl lg:text-8xl font-normal">
                  Global reach,<br />local impact
                </h2>
                <p className="text-xl sm:text-2xl text-[#808080] max-w-2xl">
                  From North America to Europe, we're helping businesses transform their digital presence and create lasting impressions across continents.
                </p>
                <div className="flex gap-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
                  >
                    <AnimatedNumber 
                      value={2} 
                      className="text-4xl sm:text-5xl lg:text-6xl font-normal"
                    />
                    <p className="text-xl sm:text-2xl text-[#808080]">Continents</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
                  >
                    <AnimatedNumber 
                      value={92} 
                      className="text-4xl sm:text-5xl lg:text-6xl font-normal"
                    />
                    <p className="text-xl sm:text-2xl text-[#808080]">Projects</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
                  >
                    <AnimatedNumber 
                      value={15} 
                      className="text-4xl sm:text-5xl lg:text-6xl font-normal"
                    />
                    <p className="text-xl sm:text-2xl text-[#808080]">Team members</p>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div 
                className="relative h-[600px] sm:h-[700px] lg:h-[800px]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
              >
                <Image
                  src="/images/world/World_map_with_points.svg"
                  alt="Global Presence Map"
                  fill
                  className="object-contain brightness-[4] scale-125 [&>*]:fill-white"
                  priority
                />
                {/* Presence Indicators */}
                <div className="absolute inset-0">
                  {/* North America - NYC */}
                  <motion.div 
                    className="absolute top-[38%] left-[13%] w-2 h-2 rounded-full bg-[#2dde98] shadow-[0_0_10px_4px_rgba(45,222,152,0.3)] ring-2 ring-[#2dde98] ring-opacity-20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
                  />
                  
                  {/* Europe - London */}
                  <motion.div 
                    className="absolute top-[32%] left-[48%] w-2 h-2 rounded-full bg-[#2dde98] shadow-[0_0_10px_4px_rgba(45,222,152,0.3)] ring-2 ring-[#2dde98] ring-opacity-20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section 
        className="min-h-screen py-32 sm:py-48 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
      >
        <div className="max-w-[85%] mx-auto px-4">
          {/* Title area with minimalist design */}
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-[5rem] leading-tight font-normal text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
          >
            Our work,<br />
            your success story
          </motion.h2>

          {/* Project Display */}
          <div className="mt-16 sm:mt-32 space-y-24 sm:space-y-32">
            {/* First Project - Notebook MCP */}
            <ParallaxProjectCard direction="left" delay={0.1}>
              <div className="relative max-w-full sm:max-w-[80%]">
                {/* Gradient Background */}
                <div className="aspect-[16/9] w-full rounded-lg overflow-hidden mb-4 sm:mb-6 animate-gradient gradient-1">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white text-4xl font-medium">Notebook MCP</div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-xl sm:text-2xl font-medium text-black">Notebook MCP</h3>
                  <p className="text-base sm:text-lg text-black/80 max-w-3xl">
                    AI-powered note-taking platform that transforms your thoughts into actionable insights
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/10 rounded-full text-xs sm:text-sm text-black font-medium">AI Integration</span>
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/10 rounded-full text-xs sm:text-sm text-black font-medium">LLM Technology</span>
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/10 rounded-full text-xs sm:text-sm text-black font-medium">Cloud Sync</span>
                  </div>
                  
                  {/* View Button */}
                  <Link 
                    href="/work/notebook-mcp" 
                    className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-medium transition-transform hover:scale-105"
                  >
                    View
                  </Link>
                </div>
              </div>
            </ParallaxProjectCard>

            {/* Second Project - Mesh Visual Flow Lab */}
            <ParallaxProjectCard direction="right" delay={0.2}>
              <div className="relative max-w-full sm:max-w-[60%] ml-auto">
                {/* Gradient Background */}
                <div className="aspect-[4/3] w-full rounded-lg overflow-hidden mb-4 sm:mb-6 animate-gradient gradient-2">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white text-4xl font-medium">Mesh</div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-xl sm:text-2xl font-medium text-black">Mesh - Visual Flow Lab</h3>
                  <p className="text-base sm:text-lg text-black/80 max-w-2xl">
                    Collaborative project planning platform with real-time node-based workflow visualization
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/10 rounded-full text-xs sm:text-sm text-black font-medium">Real-time Collaboration</span>
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/10 rounded-full text-xs sm:text-sm text-black font-medium">Node-based Planning</span>
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/10 rounded-full text-xs sm:text-sm text-black font-medium">Video Integration</span>
                  </div>
                  
                  {/* View Button */}
                  <Link 
                    href="/work/mesh" 
                    className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-medium transition-transform hover:scale-105"
                  >
                    View
                  </Link>
                </div>
              </div>
            </ParallaxProjectCard>

            {/* Third Project - Shine MCRM */}
            <ParallaxProjectCard direction="left" delay={0.3}>
              <div className="relative max-w-full sm:max-w-[70%]">
                {/* Gradient Background */}
                <div className="aspect-[4/3] w-full rounded-lg overflow-hidden mb-4 sm:mb-6 animate-gradient gradient-3">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white text-4xl font-medium">Shine</div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-xl sm:text-2xl font-medium text-black">Shine MCRM</h3>
                  <p className="text-base sm:text-lg text-black/80 max-w-2xl">
                    All-in-one business management dashboard with integrated CRM capabilities
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/10 rounded-full text-xs sm:text-sm text-black font-medium">Business Analytics</span>
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/10 rounded-full text-xs sm:text-sm text-black font-medium">CRM Integration</span>
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/10 rounded-full text-xs sm:text-sm text-black font-medium">Dashboard Design</span>
                  </div>
                  
                  {/* View Button */}
                  <Link 
                    href="/work/shine" 
                    className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-medium transition-transform hover:scale-105"
                  >
                    View
                  </Link>
                </div>
              </div>
            </ParallaxProjectCard>

            {/* Fourth Project - Classified.AI */}
            <ParallaxProjectCard direction="right" delay={0.4}>
              <div className="relative max-w-full sm:max-w-[85%] ml-auto">
                {/* Gradient Background */}
                <div className="aspect-[21/9] w-full rounded-lg overflow-hidden mb-4 sm:mb-6 animate-gradient gradient-4">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white text-4xl font-medium">Classified.AI</div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-xl sm:text-2xl font-medium text-black">Classified.AI</h3>
                  <p className="text-base sm:text-lg text-black/80 max-w-3xl">
                    Advanced AI-powered classification system for intelligent data organization
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/10 rounded-full text-xs sm:text-sm text-black font-medium">Machine Learning</span>
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/10 rounded-full text-xs sm:text-sm text-black font-medium">Data Processing</span>
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/10 rounded-full text-xs sm:text-sm text-black font-medium">AI Integration</span>
                  </div>
                  
                  {/* View Button */}
                  <Link 
                    href="/work/classified-ai" 
                    className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-medium transition-transform hover:scale-105"
                  >
                    View
                  </Link>
                </div>
              </div>
            </ParallaxProjectCard>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="min-h-screen bg-white text-black relative overflow-hidden flex items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="text-xl sm:text-3xl md:text-5xl font-normal mb-8 sm:mb-16 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
          >
            <span className="text-black">We join forces with enterprise companies and visionary startups,</span>{" "}
            <span className="text-[#808080]">leveraging our full-cycle digital expertise to create brands, experiences, and products that drive growth and transformation, impacting millions every day.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
            className="mt-6 sm:mt-10"
          >
            <Link 
              href="/contact" 
              className="rounded-[20px] bg-black px-6 sm:px-10 py-3 sm:py-4 text-lg sm:text-[24px] font-normal text-white transition-all duration-300 hover:bg-[#2dde98] hover:text-black"
            >
              Let's Collaborate
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <HomeFooter />
    </div>
  );
}


