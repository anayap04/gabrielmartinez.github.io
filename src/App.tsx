import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LanguageProvider } from './contexts/LanguageContext';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Page load animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-20 h-20 border-4 border-purple-500 border-t-amber-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              <motion.span
                className="text-2xl bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                EP
              </motion.span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            className="min-h-screen bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CustomCursor />
            <Header />
            <main>
              <Hero />
              <About />
              <Experience />
              <Portfolio />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageProvider>
  );
}
