import { motion } from 'motion/react';
import Band from './Band';

const moments = [
  {
    idx: '01',
    title: "You've raised, now you have to build the engine",
    desc: "The deck promised a GTM motion. Someone has to actually stand it up, positioning, first channels, the repeatable path to revenue. That's the sprint.",
  },
  {
    idx: '02',
    title: "You're entering India, SEA, or the GCC",
    desc: "New market, no on-ground playbook. I map the accounts, the ownership structures behind them, and the partner paths that open more than one door at once.",
  },
  {
    idx: '03',
    title: "You need a channel or partner program stood up",
    desc: "Direct sales only takes you so far. I design and launch the partner motion, who to sign, what the program looks like, how pipeline actually flows through it.",
  }
];

export default function Moments() {
  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <span className="font-sans text-[11px] tracking-[0.24em] uppercase text-green font-semibold block mb-6">Who I work with</span>
          <Band className="mb-6" />
          <h2 className="font-sans text-4xl md:text-5xl lg:text-[3rem] leading-[1.1] font-semibold tracking-tight text-ink max-w-2xl">
            Three moments where an embedded operator <span className="font-serif italic font-medium text-green-deep">changes the outcome.</span>
          </h2>
        </div>
        
        <div className="flex flex-col">
          {moments.map((moment, i) => (
            <motion.div 
              key={moment.idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group flex flex-col lg:flex-row gap-6 lg:gap-16 py-12 lg:py-16 border-t border-line hover:bg-white/50 transition-colors duration-500 rounded-3xl lg:px-8 -mx-8 px-8"
            >
              <div className="lg:w-32 shrink-0">
                <span className="font-serif italic text-4xl text-tan group-hover:text-green transition-colors duration-300">
                  {moment.idx}
                </span>
              </div>
              <div className="lg:w-5/12">
                <h3 className="font-sans text-2xl lg:text-3xl font-semibold text-ink tracking-tight">
                  {moment.title}
                </h3>
              </div>
              <div className="lg:w-7/12 flex items-start">
                <p className="font-sans text-muted text-lg leading-relaxed pt-1">
                  {moment.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

