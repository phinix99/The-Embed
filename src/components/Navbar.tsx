import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-line"
    >
      <div className="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
        <span className="font-sans text-sm tracking-widest uppercase font-semibold text-ink">
          The Embed
        </span>
        <a 
          href="https://calendar.app.google/1Vr9M6WL1aPiyfhk6" 
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
