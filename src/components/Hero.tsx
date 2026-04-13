import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 45, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Parallax effect for floating elements
    if (containerRef.current) {
      gsap.to('.floating-circle', {
        y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed') || '1')) * ScrollTrigger.maxScroll(window),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0,
        }
      });
    }

    // Countdown logic (simulated 45 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 45);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients & Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black-800 via-white to-white z-0" />

      {/* Floating Orbs */}
      <div className="floating-circle absolute top-1/4 left-1/4 w-64 h-64 bg-gold-500/10 rounded-full blur-[100px] z-0" data-speed="0.5" />
      <div className="floating-circle absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-[120px] z-0" data-speed="0.8" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="space-y-8"
        >
          {/* Countdown */}
          <motion.div variants={textVariants} className="inline-flex items-center gap-4 px-6 py-3 rounded-full glass-panel-gold mb-8">
            <span className="text-gold-300 text-sm uppercase tracking-widest font-semibold">Time Remaining</span>
            <div className="flex gap-3 text-gold-400 font-mono text-lg">
              <span>{timeLeft.days.toString().padStart(2, '0')}d</span>
              <span>:</span>
              <span>{timeLeft.hours.toString().padStart(2, '0')}h</span>
              <span>:</span>
              <span>{timeLeft.minutes.toString().padStart(2, '0')}m</span>
              <span>:</span>
              <span>{timeLeft.seconds.toString().padStart(2, '0')}s</span>
            </div>
          </motion.div>

          <motion.h1 variants={textVariants} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-black leading-tight">
            இந்த Summer Salem-ல் <br className="hidden md:block" />
            <span className="text-gradient-gold">45 நாள்</span> — ஒரு வாய்ப்பு. <br className="hidden md:block" />
            சிலருக்கு மட்டும்.
          </motion.h1>

          <motion.p variants={textVariants} className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            AC & home service demand peak-ல் இருக்கு. நாங்க operate பண்றோம்.
          </motion.p>

          <motion.div variants={textVariants} className="pt-8">
            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black-900 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative flex items-center gap-2">
                Details தெரிஞ்சுக்க
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
