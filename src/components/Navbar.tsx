import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-line"
    >
      <div className="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex flex-col leading-tight">
          <span className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-ink/70">
            The
          </span>
          <span className="font-serif text-2xl tracking-tight italic font-bold text-ink leading-none">
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
