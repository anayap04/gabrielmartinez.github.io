import { Briefcase, Music, PartyPopper, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Experience() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      icon: Briefcase,
      title: t.experience.corporate.title,
      description: t.experience.corporate.description,
      gradient: 'from-purple-500 to-purple-600',
      delay: 0
    },
    {
      icon: Music,
      title: t.experience.concerts.title,
      description: t.experience.concerts.description,
      gradient: 'from-amber-500 to-orange-600',
      delay: 0.1
    },
    {
      icon: PartyPopper,
      title: t.experience.parties.title,
      description: t.experience.parties.description,
      gradient: 'from-pink-500 to-rose-600',
      delay: 0.2
    },
    {
      icon: Users,
      title: t.experience.conventions.title,
      description: t.experience.conventions.description,
      gradient: 'from-teal-500 to-cyan-600',
      delay: 0.3
    }
  ];

  return (
    <section id="experience" className="py-32 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent mb-4">
              {t.experience.title}
            </h2>
          </motion.div>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: exp.delay + 0.3, duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500" />
                  
                  {/* Hover Gradient Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative p-10">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} text-white mb-6 shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8" aria-hidden="true" />
                    </motion.div>

                    <h3 className="text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {exp.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {exp.description}
                    </p>

                    {/* Decorative corner */}
                    <motion.div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`}
                    />
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
