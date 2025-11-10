export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    hero: {
      title: "Event Producer & Creative Director",
      subtitle: "Transforming visions into unforgettable experiences",
      cta: "View Portfolio"
    },
    about: {
      title: "About Me",
      description: "With over 15 years of experience in event production, I specialize in bringing creative visions to life. From intimate corporate gatherings to large-scale concerts and conventions, I deliver exceptional experiences that exceed expectations.",
      yearsExperience: "Years Experience",
      eventsProduced: "Events Produced",
      happyClients: "Happy Clients"
    },
    experience: {
      title: "Expertise",
      corporate: {
        title: "Corporate Events",
        description: "High-impact conferences, product launches, and team building experiences"
      },
      concerts: {
        title: "Concerts & Shows",
        description: "Large-scale music events with comprehensive production management"
      },
      parties: {
        title: "Personal Celebrations",
        description: "Bespoke experiences for weddings, anniversaries, and private parties"
      },
      conventions: {
        title: "Conventions & Forums",
        description: "Multi-day events with seamless logistics and attendee engagement"
      }
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "A selection of memorable events I've had the pleasure to produce",
      viewMore: "View Project"
    },
    footer: {
      title: "Let's Create Something Amazing",
      subtitle: "Ready to bring your vision to life? Get in touch.",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      rights: "All rights reserved."
    }
  },
  es: {
    nav: {
      about: "Acerca",
      experience: "Experiencia",
      portfolio: "Portafolio",
      contact: "Contacto"
    },
    hero: {
      title: "Productor de Eventos y Director Creativo",
      subtitle: "Transformando visiones en experiencias inolvidables",
      cta: "Ver Portafolio"
    },
    about: {
      title: "Acerca de Mí",
      description: "Con más de 15 años de experiencia en producción de eventos, me especializo en dar vida a visiones creativas. Desde reuniones corporativas íntimas hasta conciertos y convenciones a gran escala, ofrezco experiencias excepcionales que superan las expectativas.",
      yearsExperience: "Años de Experiencia",
      eventsProduced: "Eventos Producidos",
      happyClients: "Clientes Satisfechos"
    },
    experience: {
      title: "Experiencia",
      corporate: {
        title: "Eventos Corporativos",
        description: "Conferencias de alto impacto, lanzamientos de productos y experiencias de team building"
      },
      concerts: {
        title: "Conciertos y Shows",
        description: "Eventos musicales a gran escala con gestión integral de producción"
      },
      parties: {
        title: "Celebraciones Personales",
        description: "Experiencias personalizadas para bodas, aniversarios y fiestas privadas"
      },
      conventions: {
        title: "Convenciones y Foros",
        description: "Eventos de múltiples días con logística impecable y participación del público"
      }
    },
    portfolio: {
      title: "Portafolio",
      subtitle: "Una selección de eventos memorables que he tenido el placer de producir",
      viewMore: "Ver Proyecto"
    },
    footer: {
      title: "Creemos Algo Increíble Juntos",
      subtitle: "¿Listo para dar vida a tu visión? Contáctame.",
      email: "Correo",
      phone: "Teléfono",
      linkedin: "LinkedIn",
      rights: "Todos los derechos reservados."
    }
  },
  fr: {
    nav: {
      about: "À Propos",
      experience: "Expérience",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    hero: {
      title: "Producteur d'Événements et Directeur Créatif",
      subtitle: "Transformer des visions en expériences inoubliables",
      cta: "Voir le Portfolio"
    },
    about: {
      title: "À Propos de Moi",
      description: "Avec plus de 15 ans d'expérience dans la production d'événements, je me spécialise dans la concrétisation de visions créatives. Des réunions d'entreprise intimes aux concerts et conventions à grande échelle, je propose des expériences exceptionnelles qui dépassent les attentes.",
      yearsExperience: "Années d'Expérience",
      eventsProduced: "Événements Produits",
      happyClients: "Clients Satisfaits"
    },
    experience: {
      title: "Expertise",
      corporate: {
        title: "Événements d'Entreprise",
        description: "Conférences à fort impact, lancements de produits et expériences de team building"
      },
      concerts: {
        title: "Concerts et Spectacles",
        description: "Événements musicaux à grande échelle avec gestion complète de la production"
      },
      parties: {
        title: "Célébrations Personnelles",
        description: "Expériences sur mesure pour mariages, anniversaires et fêtes privées"
      },
      conventions: {
        title: "Conventions et Forums",
        description: "Événements de plusieurs jours avec logistique fluide et engagement du public"
      }
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Une sélection d'événements mémorables que j'ai eu le plaisir de produire",
      viewMore: "Voir le Projet"
    },
    footer: {
      title: "Créons Quelque Chose d'Extraordinaire",
      subtitle: "Prêt à donner vie à votre vision? Contactez-moi.",
      email: "Email",
      phone: "Téléphone",
      linkedin: "LinkedIn",
      rights: "Tous droits réservés."
    }
  }
};

export type Language = keyof typeof translations;
export type Translations = typeof translations.es;
