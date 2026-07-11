import { motion } from 'motion/react';
import Band from './Band';

const engagements = [
  { name: "Three Fourths Solution", type: "Global Expansions" },
  { name: "Classic Consultants", type: "GTM, new markets" },
  { name: "AnswerTrace", type: "GTM strategy" },
  { name: "One Grip", type: "co-founder" }
];

export default function Engagements() {
  return (
    <section className="py-24 border-t border-line">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center flex flex-col items-center">
          <div className="inline-block bg-tan/20 border border-tan/40 text-tan-deep font-medium text-[11px] tracking-[0.03em] px-3 py-1 rounded-md mb-8">
            Note: Only publicly-attributable engagements listed
          </div>
          <span className="font-sans text-[11px] tracking-[0.24em] uppercase text-green font-semibold block mb-6">Selected engagements</span>
          <Band className="mb-6 mx-auto" />
          <h2 className="font-sans text-4xl md:text-5xl lg:text-[3rem] leading-[1.1] font-semibold tracking-tight text-ink max-w-2xl">
            Where I'm currently <span className="font-serif italic font-medium text-green-deep">embedded.</span>
          </h2>
        </div>

        <div className="flex flex-col border-t border-line mt-12 mb-12">
          {engagements.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-line group cursor-default"
            >
              <span className="font-sans text-xl md:text-2xl font-medium text-ink group-hover:translate-x-2 transition-transform duration-300">
                {item.name}
              </span>
              <span className="font-serif italic text-muted text-lg mt-2 sm:mt-0">
                {item.type}
              </span>
            </motion.div>
          ))}
        </div>
        
        <p className="font-sans text-muted text-base max-w-2xl mx-auto text-center leading-relaxed">
          Across brand &amp; PR networks, ERP, and AI-visibility platforms — from India into Japan, SEA, and the GCC.
        </p>
      </div>
    </section>
  );
}

