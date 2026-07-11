import { motion } from 'motion/react';
import Band from './Band';

export default function Process() {
  return (
    <section className="py-24 border-t border-line bg-card/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-sans text-[11px] tracking-[0.24em] uppercase text-green font-semibold block mb-6">How the engagement works</span>
          <Band className="mb-6" />
          <h2 className="font-sans text-4xl md:text-5xl lg:text-[3rem] leading-[1.1] font-semibold tracking-tight text-ink max-w-2xl">
            Embedded, defined, <span className="font-serif italic font-medium text-green-deep">accountable.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Item 1: Wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-green text-paper rounded-[2rem] p-10 md:p-12 shadow-xl flex flex-col justify-between"
          >
            <span className="font-sans text-[11px] tracking-[0.16em] uppercase text-paper/70 font-semibold mb-8 block">
              01 The Model
            </span>
            <p className="font-serif text-2xl md:text-3xl leading-snug">
              Embedded in your team for a defined sprint with clear ownership, not a slide deck handed over from the outside.
            </p>
          </motion.div>

          {/* Item 2: Square */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 bg-tan/20 rounded-[2rem] p-10 md:p-12 flex flex-col justify-between"
          >
            <span className="font-sans text-[11px] tracking-[0.16em] uppercase text-green-deep font-semibold mb-8 block">
              02 The Scope
            </span>
            <p className="font-sans text-ink text-lg leading-relaxed">
              One motion at a time: GTM build, market entry, or a partner program. Depth over breadth. We agree the outcome before we start.
            </p>
          </motion.div>

          {/* Item 3: Square */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 bg-paper border border-line rounded-[2rem] p-10 md:p-12 shadow-sm flex flex-col justify-between"
          >
            <span className="font-sans text-[11px] tracking-[0.16em] uppercase text-green font-semibold mb-8 block">
              03 The Structure
            </span>
            <p className="font-sans text-ink text-lg leading-relaxed">
              Retainer-based, with a success fee tied to pipeline I actually source. Aligned to the long arc of B2B, not billed by the hour.
            </p>
          </motion.div>

          {/* Item 4: Wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-ink text-paper rounded-[2rem] p-10 md:p-12 shadow-xl flex flex-col justify-between"
          >
            <span className="font-sans text-[11px] tracking-[0.16em] uppercase text-paper/50 font-semibold mb-8 block">
              04 The Handover
            </span>
            <p className="font-serif text-2xl md:text-3xl leading-snug">
              You keep the system, not the dependency. Templates, account maps, and a motion your team can run once the sprint ends.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
