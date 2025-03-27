'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <motion.footer 
      className="bg-black text-white py-12 sm:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[85%] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16">
              <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
                <defs>
                  <clipPath clipPathUnits="userSpaceOnUse" id="cp2">
                    <path d="m987.12 619.71c-5.14-1.71-11.14-1.71-16.28-1.71-24.86 0-47.15 13.71-60 35.14l-84.86-20.57c11.14-66.86-12-132.86-56.57-178.28l87.43-103.72c19.71 12.86 43.71 19.72 68.57 19.72 3.43 0 6.86 0 10.28-0.86 71.15-6 123.43-67.72 117.43-138.86-5.14-66-63.43-116.57-127.71-118.28-0.86 0-0.86 0-1.72 0-0.85 0-0.85 0-1.71 0q-3.86 0-7.71 0c-71.15 6-123.43 67.71-117.43 138.85 2.57 29.15 14.57 55.72 32.57 76.29l-86.57 104.57c-20.57-14.57-44.57-26.57-70.29-32.57-16.28-4.29-32.57-6-48.86-6-32.57 0-63.42 7.71-91.71 22.28l-105.43-175.71c15.43-13.71 27.43-31.71 32.57-53.14 13.72-54.86-20.57-110.57-75.43-124.29-8.57-1.71-16.28-2.57-24.85-2.57-46.29 0-88.29 31.71-99.43 78.86-12.86 54 20.57 109.71 76.28 123.43 8.58 1.71 16.29 2.57 24.86 2.57 12.86 0 25.72-2.57 37.72-6.86l104.57 174.86c-33.43 24.85-60 59.14-73.72 101.14l-111.43-27.43c-1.71-36.86-27.42-69.43-65.14-78.86q-10.28-2.57-20.57-2.57c-38.57 0-73.71 26.57-83.14 65.15-11.15 46.28 17.14 92.57 62.57 103.71q10.28 2.57 20.57 2.57c35.14 0 67.71-22.28 80.57-56.57l108.86 26.57c-11.14 67.72 12 133.72 56.57 179.14l-104.57 124.29c-15.43-9.43-33.43-14.57-52.29-14.57-2.57 0-6 0-8.57 0-56.57 4.28-98.57 54-94.28 110.57 4.28 54 49.71 94.29 102 94.29 2.57 0 6 0 8.57 0 56.57-4.29 98.57-54 94.28-110.58-1.71-22.28-10.28-42-24-58.28l104.57-123.43c20.58 14.57 44.58 26.57 70.29 32.57 16.29 4.29 32.57 6 48.86 6 32.57 0 63.43-7.71 91.71-22.28l106.29 175.71c-15.43 13.71-27.43 31.71-32.57 53.14-13.72 54.86 20.57 110.57 75.42 124.29 8.58 1.71 16.29 2.57 24.86 2.57 46.29 0 88.29-31.71 99.43-78.86 13.71-54.85-20.57-110.57-75.43-124.28-8.57-1.72-16.28-2.57-24.86-2.57-12.85 0-25.71 2.57-37.71 6.85l-105.43-174c33.43-24.85 60-59.14 73.72-101.14l84 20.57c0 31.72 20.57 60 52.28 67.72 5.14 1.71 11.14 1.71 16.29 1.71 30.85 0 59.14-21.43 66.85-52.29 9.43-36.85-13.71-74.57-50.57-84z"/>
                  </clipPath>
                </defs>
                <g>
                  <g>
                    <g clipPath="url(#cp2)">
                      <path fill="currentColor" d="m987.1 619.7c-5.1-1.7-11.1-1.7-16.3-1.7-24.8 0-47.1 13.7-60 35.1l-84.8-20.5c11.1-66.9-12-132.9-56.6-178.3l87.4-103.7c19.8 12.8 43.8 19.7 68.6 19.7 3.4 0 6.9 0 10.3-0.9 71.1-6 123.4-67.7 117.4-138.8-5.1-66-63.4-116.6-127.7-118.3-0.8 0-0.8 0-1.7 0-0.9 0-0.9 0-1.7 0q-3.9 0-7.7 0c-71.2 6-123.5 67.7-117.5 138.8 2.6 29.2 14.6 55.8 32.6 76.3l-86.6 104.6c-20.5-14.6-44.5-26.6-70.2-32.6-16.3-4.3-32.6-6-48.9-6-32.6 0-63.4 7.7-91.7 22.3l-105.4-175.7c15.4-13.7 27.4-31.7 32.5-53.1 13.7-54.9-20.5-110.6-75.4-124.3-8.6-1.7-16.3-2.6-24.9-2.6-46.2 0-88.2 31.7-99.4 78.9-12.8 54 20.6 109.7 76.3 123.4 8.6 1.7 16.3 2.6 24.9 2.6 12.8 0 25.7-2.6 37.7-6.9l104.5 174.9c-33.4 24.8-60 59.1-73.7 101.1l-111.4-27.4c-1.7-36.9-27.4-69.5-65.1-78.9q-10.3-2.6-20.6-2.6c-38.6 0-73.7 26.6-83.2 65.2-11.1 46.3 17.2 92.6 62.6 103.7q10.3 2.6 20.6 2.6c35.1 0 67.7-22.3 80.6-56.6l108.8 26.6c-11.1 67.7 12 133.7 56.6 179.1l-104.6 124.3c-15.4-9.4-33.4-14.6-52.3-14.6-2.5 0-6 0-8.5 0-56.6 4.3-98.6 54-94.3 110.6 4.3 54 49.7 94.3 102 94.3 2.5 0 6 0 8.5 0 56.6-4.3 98.6-54 94.3-110.6-1.7-22.3-10.3-42-24-58.3l104.6-123.4c20.6 14.6 44.6 26.6 70.3 32.6 16.3 4.3 32.6 6 48.8 6 32.6 0 63.5-7.7 91.8-22.3l106.2 175.7c-15.4 13.7-27.4 31.7-32.5 53.1-13.7 54.9 20.5 110.6 75.4 124.3 8.6 1.7 16.3 2.6 24.9 2.6 46.2 0 88.2-31.7 99.4-78.9 13.7-54.8-20.6-110.5-75.4-124.2-8.6-1.8-16.3-2.6-24.9-2.6-12.9 0-25.7 2.6-37.7 6.8l-105.4-174c33.4-24.8 60-59.1 73.7-101.1l84 20.6c0 31.7 20.5 60 52.3 67.7 5.1 1.7 11.1 1.7 16.2 1.7 30.9 0 59.2-21.4 66.9-52.3 9.4-36.8-13.7-74.6-50.6-84z"/>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <p className="text-base sm:text-lg text-white/60 max-w-xs">
              Challenge core assumptions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/branding" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Branding</Link></li>
              <li><Link href="/services/web-development" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/product-design" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Product Design</Link></li>
              <li><Link href="/services/digital-marketing" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/software-development" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Software Development</Link></li>
              <li><Link href="/services/ai-solutions" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link href="/services/seo" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">SEO</Link></li>
              <li><Link href="/services/analytics" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Analytics</Link></li>
              <li><Link href="/services/print-design" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Print Design</Link></li>
              <li><Link href="/services/business-cards" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Business Cards</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base sm:text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/work" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="/careers" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base sm:text-lg font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-base sm:text-lg text-white/60">
            ©Aurora 2020 - {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}