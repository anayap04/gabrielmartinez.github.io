import { useState } from 'react';
import { Play, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  type: 'image' | 'video';
  videoUrl?: string;
}

export function Portfolio() {
  const { t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Tech Summit 2024',
      category: 'Corporate Event',
      image: 'https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzYyNzk2MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'A three-day technology conference featuring keynote speakers, breakout sessions, and networking events for 2,000+ attendees.',
      type: 'image'
    },
    {
      id: 2,
      title: 'Summer Music Festival',
      category: 'Concert',
      image: 'https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjI3MzQwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Multi-stage outdoor festival with comprehensive production management including stage design, lighting, and sound.',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: 'Product Launch Gala',
      category: 'Corporate Event',
      image: 'https://images.unsplash.com/photo-1758315228959-5c8e2c29393a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBsYW5uaW5nJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzYyODEwOTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Exclusive product launch event with immersive brand experiences, live entertainment, and interactive installations.',
      type: 'image'
    },
    {
      id: 4,
      title: 'International Convention',
      category: 'Convention',
      image: 'https://images.unsplash.com/photo-1592654365675-f3c799bf0196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwdmVudWV8ZW58MXx8fHwxNzYyODEwOTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Five-day international convention with simultaneous translation, exhibition floor, and networking lounges.',
      type: 'image'
    },
    {
      id: 5,
      title: 'Luxury Wedding',
      category: 'Personal Event',
      image: 'https://images.unsplash.com/photo-1760331339913-da9637154477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGFydHklMjBldmVudHxlbnwxfHx8fDE3NjI4MTA5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Bespoke wedding experience with custom décor, gourmet catering, and entertainment for 300 guests.',
      type: 'image'
    },
    {
      id: 6,
      title: 'Industry Forum 2024',
      category: 'Forum',
      image: 'https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzYyNzk2MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Professional forum featuring panel discussions, workshops, and interactive sessions for industry leaders.',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  return (
    <>
      <section id="portfolio" className="py-32 bg-black relative overflow-hidden" ref={ref}>
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent mb-4">
                {t.portfolio.title}
              </h2>
              <motion.p
                className="text-gray-400 max-w-2xl mx-auto text-xl"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {t.portfolio.subtitle}
              </motion.p>
            </motion.div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index + 0.4, duration: 0.6 }}
                  onClick={() => setSelectedItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedItem(item);
                    }
                  }}
                  aria-label={`View details for ${item.title}`}
                  whileHover={{ y: -10 }}
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-purple-900/20 to-amber-900/20">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  </div>

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Badge className="bg-gradient-to-r from-purple-600 to-amber-600 text-white w-fit mb-3 border-none">
                      {item.category}
                    </Badge>
                    <h3 className="text-white mb-3">{item.title}</h3>
                    <div className="flex items-center gap-2 text-gray-300">
                      {item.type === 'video' ? (
                        <Play className="w-5 h-5" aria-hidden="true" />
                      ) : (
                        <ExternalLink className="w-5 h-5" aria-hidden="true" />
                      )}
                      <span>{t.portfolio.viewMore}</span>
                    </div>
                  </motion.div>

                  {/* Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-all duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-gradient-to-r from-purple-600 to-amber-600 text-white border-none">
                    {selectedItem.category}
                  </Badge>
                </div>

                <h2 className="text-white">{selectedItem.title}</h2>
                
                {selectedItem.type === 'video' && selectedItem.videoUrl ? (
                  <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <iframe
                      src={selectedItem.videoUrl}
                      title={selectedItem.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <ImageWithFallback
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <p className="text-gray-400 text-lg leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
