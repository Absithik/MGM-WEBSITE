import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

const targets = [
  "Salem resident with some savings.",
  "Business mindset person looking for short-term opportunities.",
  "Wants to participate without investing big money."
];

export default function WhoIsThisFor() {
  return (
    <section className="py-24 relative bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-white to-white" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-4">
            Who is this <span className="text-gradient-gold">For?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {targets.map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
              className="glass-panel p-8 rounded-2xl border-gold-500/20 flex flex-col items-center text-center"
              style={{ perspective: 1000 }}
            >
              <CheckCircle2 className="w-10 h-10 text-gold-600 mb-6" />
              <p className="text-lg text-gray-800 font-medium">{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-panel border-red-500/30 bg-red-50/50 p-6 rounded-2xl flex items-start gap-4">
            <XCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
            <div>
              <h4 className="text-red-600 font-bold text-lg mb-2 tracking-wide uppercase">Not For</h4>
              <p className="text-gray-600">
                Quick-rich scheme seekers, people expecting guaranteed fixed returns without understanding business operations, or those not from Salem/surrounding areas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
