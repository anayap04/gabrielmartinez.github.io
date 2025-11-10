import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.3), rgba(245, 158, 11, 0.2), transparent 70%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Parallax Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * -1.5,
          y: mousePosition.y * -1.5
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Name */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-2xl md:text-3xl text-gray-400">
              Gabriel Martinez
            </span>
          </motion.div>

          {/* Animated Title */}
          <div className="mb-8 overflow-hidden">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-purple-400 via-amber-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t.hero.title}
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-gray-400 mb-12 max-w-2xl mx-auto text-xl md:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Button
              onClick={scrollToPortfolio}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-white px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              {t.hero.cta}
            </Button>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            className="mt-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => {
          const element = document.getElementById('about');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
        }}
      >
        <ChevronDown className="w-8 h-8" aria-hidden="true" />
      </motion.button>
    </section>
  );
}