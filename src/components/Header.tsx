import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import logoImg from '../assets/mgm_logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled ? 'py-4 glass-panel' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logoImg}
            alt="MGM Logo"
            className="h-20 md:h-44 w-auto object-contain"
          />
        </div>
        <button
          onClick={scrollToForm}
          className="px-6 py-2 rounded-full border border-gold-500/50 text-gold-300 text-sm font-medium hover:bg-gold-500/10 transition-colors"
        >
          Join Now
        </button>
      </div>
    </motion.header>
  );
}
