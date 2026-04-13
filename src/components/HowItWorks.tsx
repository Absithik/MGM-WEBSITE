import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FormInput, PhoneCall, Building2, Handshake } from 'lucide-react';

const steps = [
  { icon: FormInput, title: "Fill Form", desc: "Submit your basic details below." },
  { icon: PhoneCall, title: "Get Call", desc: "Our team will contact you." },
  { icon: Building2, title: "Visit Office", desc: "Come to our Salem office." },
  { icon: Handshake, title: "Decide", desc: "Understand and make a decision." }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-4">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
        </div>



        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-black/10" />
          <motion.div
            className="hidden md:block absolute top-10 left-0 h-px bg-gradient-to-r from-gold-300 to-gold-600 shadow-[0_0_10px_rgba(212,175,55,0.8)] origin-left"
            style={{ width: lineWidth }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center relative">
                  {/* Vertical Line (Mobile) */}
                  {idx !== steps.length - 1 && (
                    <div className="md:hidden absolute top-20 bottom-[-3rem] w-px bg-black/10" />
                  )}

                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.2 }}
                    className="w-20 h-20 rounded-full glass-panel-gold flex items-center justify-center mb-6 relative z-10"
                  >
                    <Icon className="w-8 h-8 text-gold-500" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-gold-500 text-xs flex items-center justify-center font-bold text-gold-600">
                      {idx + 1}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.2 + 0.2 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
