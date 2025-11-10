import { Mail, Phone, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../styles/globals.css";

export function Footer() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const contactInfo = [
    {
      icon: Mail,
      label: t.footer.email,
      value: "gabriel.martinez@eventproducer.com",
      href: "mailto:gabriel.martinez@eventproducer.com",
    },
    {
      icon: Phone,
      label: t.footer.phone,
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: Linkedin,
      label: t.footer.linkedin,
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/gabrielmartinez",
    },
  ];

  return (
    <footer
      id="contact"
      className="bg-black relative overflow-hidden"
      ref={ref}
    >
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent mb-4">
              {t.footer.title}
            </h2>
            <motion.p
              className="text-gray-400 text-xl"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t.footer.subtitle}
            </motion.p>
          </motion.div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.icon === Linkedin ? "_blank" : undefined}
                  rel={
                    info.icon === Linkedin ? "noopener noreferrer" : undefined
                  }
                  className="group relative"
                  aria-label={`${info.label}: ${info.value}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl backdrop-blur-sm border border-white/10 group-hover:border-purple-500/50 transition-all duration-500" />

                  {/* Gradient Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-amber-600/0 group-hover:from-purple-600/10 group-hover:to-amber-600/10 rounded-2xl transition-all duration-500" />

                  {/* Content */}
                  <div className="relative flex flex-col items-center text-center p-8">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-amber-600 flex items-center justify-center mb-5 shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </motion.div>
                    <div className="text-gray-400 mb-2 group-hover:text-gray-300 transition-colors">
                      {info.label}
                    </div>
                    <div className="text-white group-hover:text-purple-300 transition-colors">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
          />

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent">
                GM
              </span>
              <span className="text-gray-400">Gabriel Martinez</span>
            </div>
            <div className="text-gray-500">
              © {new Date().getFullYear()} {t.footer.rights}
              <a
                className="from-purple-600 to-amber-600 bg-clip-text a-link"
                href="https://www.linkedin.com/in/pandrea04/"
              >
                Paola Anaya
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
