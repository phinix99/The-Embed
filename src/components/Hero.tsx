import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-6xl mx-auto relative overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left z-10"
        >
          <h1 className="font-sans text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] font-semibold tracking-tight text-ink mb-6 max-w-2xl mx-auto lg:mx-0 text-balance">
            Build the growth engine <span className="font-serif italic font-medium text-green-deep">during a defined sprint.</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-muted max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
            Not advising from the outside. Inside the team, owning the work, for the stretch that decides whether the next phase lands.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <a 
              href="https://calendar.app.google/fonV4aoPSDFeuwfx7" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-sm tracking-wide font-semibold bg-ink text-paper px-8 py-4 rounded-full hover:bg-green hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Book an intro call
            </a>
            <a 
              href="#process" 
              className="hidden items-center gap-2 text-sm tracking-wide font-semibold text-ink hover:text-green transition-colors"
            >
              <PlayCircle className="w-5 h-5" />
              How it works
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md lg:w-[460px] shrink-0 relative mt-10 lg:mt-0"
        >
          {/* Image Box */}
          <div className="relative aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-green/10 to-tan/10 border-2 border-line/60 shadow-2xl overflow-hidden group">
            <img 
              src="https://res.cloudinary.com/dtom0ivbp/image/upload/v1783776066/Ishita_pi23eh.png" 
              alt="Ishita Shah" 
              className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle inner overlay */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-ink/5 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
