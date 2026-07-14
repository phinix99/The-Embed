import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="book" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="bg-green text-paper rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl flex flex-col md:flex-row gap-16 items-center"
      >
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-deep rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none" />

        <div className="flex-1 relative z-10 text-center md:text-left">
          <div className="h-[3px] bg-paper/40 rounded-sm w-11 mb-8 mx-auto md:mx-0" />
          <span className="font-sans text-[11px] tracking-[0.24em] uppercase text-paper/80 font-semibold block mb-6">Start here</span>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-semibold tracking-tight text-paper mb-6">
            Tell me the moment <br className="hidden lg:block"/>
            <span className="font-serif italic font-medium text-tan">you're in.</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-paper/70 leading-relaxed max-w-md mx-auto md:mx-0">
            A 20-minute call. No pitch, we work out if an embedded sprint fits.
          </p>
        </div>
        
        <div className="w-full md:w-[400px] shrink-0 relative z-10">
          <a 
            href="https://calendar.app.google/fonV4aoPSDFeuwfx7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-paper/20 bg-paper/5 backdrop-blur-md rounded-[2rem] p-10 text-paper hover:text-tan text-lg tracking-wide font-medium flex flex-col items-center justify-center min-h-[300px] shadow-inner relative group cursor-pointer hover:bg-paper/10 transition-all duration-500 hover:scale-[1.02] block"
          >
            <span className="mb-4 text-center text-2xl font-serif block">Schedule a Time</span>
            <span className="text-sm text-paper/60 font-normal text-center max-w-[200px] group-hover:text-paper/80 transition-colors block mx-auto">
              Opens Google Calendar
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

