import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { AlertCircle, Clock, PhoneCall } from 'lucide-react';

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(from + (to - from) * easeProgress);
      
      if (nodeRef.current) {
        nodeRef.current.textContent = current.toString();
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{from}</span>;
}

export default function Problem() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">THE REALITY</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-serif font-bold leading-tight">
              இந்த வெயிலில் AC போச்சா? <br />
              <span className="text-gray-500">Technician கிடைக்கலையா?</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed">
              Summer peak-ல் Salem முழுவதும் AC mechanics-க்கு demand அதிகம். சரியான நேரத்துக்கு service கிடைக்காம மக்கள் கஷ்டப்படுறாங்க.
            </motion.p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <PhoneCall className="w-8 h-8 text-gold-400 mb-6" />
              <div className="text-4xl font-bold text-gray-900 mb-2 flex items-baseline gap-1">
                <Counter from={0} to={50} />
                <span className="text-gold-500">+</span>
              </div>
              <p className="text-gray-600 font-medium">Daily Service Calls in Salem</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl relative overflow-hidden group sm:translate-y-8">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Clock className="w-8 h-8 text-red-400 mb-6" />
              <div className="text-4xl font-bold text-gray-900 mb-2 flex items-baseline gap-1">
                <Counter from={0} to={3} />
                <span className="text-gray-500 mx-1">-</span>
                <Counter from={0} to={5} />
              </div>
              <p className="text-gray-600 font-medium">Days Average Waiting Time</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
