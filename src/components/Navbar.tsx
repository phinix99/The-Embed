import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-line transition-all duration-300`}
    >
      <div className={`max-w-5xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'}`}>
        <div className="flex flex-col -space-y-1.5 justify-center">
          <span className={`font-sans tracking-[0.2em] uppercase font-semibold text-ink/70 transition-all duration-300 ${isScrolled ? 'text-[10px]' : 'text-xs'}`}>
            The
          </span>
          <span className={`font-serif tracking-tight italic font-bold text-ink leading-none transition-all duration-300 ${isScrolled ? 'text-2xl' : 'text-4xl'}`}>
            Embed
          </span>
        </div>
        <a 
          href="https://calendar.app.google/fonV4aoPSDFeuwfx7" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase font-medium bg-ink text-paper px-6 py-3 rounded-full hover:bg-green transition-colors duration-300"
        >
          Book a call
        </a>
      </div>
    </motion.header>
  );
}
