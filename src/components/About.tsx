import { Award, Users, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profile from '../assets/profile.png';

export function About() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    {
      icon: Calendar,
      value: '15+',
      label: t.about.yearsExperience
    },
    {
      icon: Award,
      value: '500+',
      label: t.about.eventsProduced
    },
    {
      icon: Users,
      value: '200+',
      label: t.about.happyClients
    }
  ];

  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t.about.title}
            </motion.h2>
          </motion.div>

          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Profile Photo */}
            <motion.div
              className="lg:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative">
                {/* Decorative gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-amber-600 rounded-3xl blur opacity-75" />
                <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-black">
                  <ImageWithFallback
                    src={profile}
                    alt="Gabriel Martinez - Event Producer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-gray-400 text-xl leading-relaxed">
                {t.about.description}
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500 group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-amber-600 text-white mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-10 h-10" aria-hidden="true" />
                  </motion.div>
                  <motion.div
                    className="text-5xl bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent mb-3"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5, type: 'spring' }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}