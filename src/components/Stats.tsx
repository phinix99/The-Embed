import { motion } from 'motion/react';

export default function Stats() {
  return (
    <section className="px-6 pb-24 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="bg-green text-paper rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-center gap-16 md:gap-0 divide-y divide-paper/10 md:divide-y-0 md:divide-x border border-paper/10"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-deep rounded-full blur-3xl opacity-60 translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-deep rounded-full blur-3xl opacity-40 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="flex-1 text-center md:text-right md:pr-20 relative z-10 w-full pb-12 md:pb-0">
          <span className="block font-sans text-7xl md:text-8xl lg:text-[7rem] font-semibold mb-4 tracking-tight text-paper">
            10<span className="font-serif italic font-medium text-tan">×</span>
          </span>
          <p className="font-sans text-paper/70 text-lg leading-relaxed max-w-xs mx-auto md:ml-auto md:mr-0">
            Scaled Delhivery Direct from ~500 to ~5,000 orders/day.
          </p>
        </div>

        <div className="flex-1 text-center md:text-left pt-12 md:pt-0 md:pl-20 relative z-10 w-full">
          <span className="block font-sans text-7xl md:text-8xl lg:text-[7rem] font-semibold mb-4 tracking-tight text-paper">
            2<span className="font-serif italic font-medium text-tan">-sided</span>
          </span>
          <p className="font-sans text-paper/70 text-lg leading-relaxed max-w-xs mx-auto md:ml-0">
            Marketplace growth through Zomato's hypergrowth years, supply onboarding, demand, retention.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

