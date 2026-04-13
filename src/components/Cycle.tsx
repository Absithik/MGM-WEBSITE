import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const steps = [
  {
    day: "Day 1–10",
    title: "Launch Operations",
    desc: "Setup, team allocation, and initial marketing push in Salem."
  },
  {
    day: "Day 11–30",
    title: "Peak Demand Execution",
    desc: "Handling 50+ calls daily. Maximizing service output and revenue."
  },
  {
    day: "Day 31–45",
    title: "Completion & Updates",
    desc: "Wrapping up operations, accounting, and sharing personal updates with partners."
  }
];

export default function Cycle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 relative bg-black-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-6">
            <span className="text-gradient-gold">45 Days</span> Operation Cycle
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Clear, transparent, and fast-paced execution.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 -translate-x-1/2 origin-top shadow-[0_0_15px_rgba(212,175,55,0.5)]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-24 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-black-900 border-2 border-gold-500 -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(212,175,55,0.8)]" />

                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="glass-panel-gold p-8 rounded-2xl inline-block w-full max-w-md hover:-translate-y-2 transition-transform duration-300">
                      <span className="text-gold-400 font-mono text-sm font-bold tracking-wider uppercase mb-2 block">
                        {step.day}
                      </span>
                      <h3 className="text-2xl font-bold text-black mb-3">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block glass-panel px-8 py-6 rounded-2xl border-gold-500/30">
            <p className="text-xl md:text-2xl font-serif text-black">
              "இந்த cycle-ல் இணைஞ்சவங்களுக்கு நாங்க <span className="text-gold-400 italic">personally update</span> தருவோம்."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
