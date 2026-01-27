// Mock Data for FitZone Gym Standalone Website

export const gymInfo = {
  name: "FitZone Gym",
  tagline: "Transformez votre corps, transformez votre vie",
  phone: "+22879703341",
  whatsapp: "22879703341",
  email: "contact@fitzonegym.com",
  address: "123 Avenue des Sports, 75015 Paris, France",
  coordinates: { lat: 48.8566, lng: 2.3522 },
  
  socialMedia: {
    facebook: "https://facebook.com/fitzonegym",
    instagram: "https://instagram.com/fitzonegym",
    youtube: "https://youtube.com/@fitzonegym",
    tiktok: "",
    linkedin: ""
  }
};

export const gymStats = {
  activeMembers: "500+",
  certifiedCoaches: "15+",
  openingHours: "7/7j"
};

export const fitnessAdvice = {
  sectionTitle: "Nos Conseils Fitness",
  sectionSubtitle: "Des astuces de nos experts pour optimiser vos entraînements",
  tips: [
    {
      id: 1,
      title: "Hydratation",
      description: "Buvez au moins 2L d'eau par jour et hydratez-vous avant, pendant et après l'entraînement pour des performances optimales.",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400"
    },
    {
      id: 2,
      title: "Récupération",
      description: "Le repos est essentiel. Accordez-vous 7-8h de sommeil et des jours de récupération pour laisser vos muscles se reconstruire.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400"
    },
    {
      id: 3,
      title: "Nutrition",
      description: "Une alimentation équilibrée est la clé. Privilégiez les protéines, les glucides complexes et les bons lipides.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400"
    },
    {
      id: 4,
      title: "Échauffement",
      description: "Ne négligez jamais l'échauffement ! 10-15 minutes de préparation réduisent les risques de blessures de 50%.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400"
    }
  ]
};

export const aboutContent = {
  story: "Fondée en 2018, FitZone Gym est née de la passion de transformer des vies à travers le fitness. Notre mission est de créer un environnement où chacun, quel que soit son niveau, peut atteindre ses objectifs de santé et de bien-être.",
  philosophy: "Nous croyons que le fitness va au-delà de l'apparence physique. C'est un mode de vie qui combine entraînement intelligent, nutrition équilibrée et mentalité positive. Chez FitZone, nous créons une communauté de soutien où chaque membre est encouragé à dépasser ses limites.",
  values: [
    "Excellence dans chaque entraînement",
    "Communauté et soutien mutuel",
    "Innovation et équipements de pointe",
    "Accompagnement personnalisé"
  ]
};

export const coaches = [
  {
    id: 1,
    name: "Marc Dubois",
    title: "Coach Principal & Fondateur",
    specialties: ["Musculation", "Nutrition", "Crossfit"],
    bio: "15 ans d'expérience en coaching sportif. Champion national de crossfit 2020.",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb"
  },
  {
    id: 2,
    name: "Sophie Martin",
    title: "Coach Yoga & Pilates",
    specialties: ["Yoga", "Pilates", "Méditation"],
    bio: "Certifiée yoga depuis 10 ans. Spécialiste en récupération et souplesse.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
  },
  {
    id: 3,
    name: "Thomas Laurent",
    title: "Coach HIIT & Cardio",
    specialties: ["HIIT", "Cardio", "Perte de poids"],
    bio: "Expert en entraînement haute intensité et transformation physique.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
  }
];

export const programs = [
  {
    id: 1,
    name: "Musculation",
    description: "Développez votre masse musculaire avec nos programmes personnalisés et équipements de pointe.",
    duration: "Sessions de 60-90 min",
    level: "Tous niveaux",
    schedule: "Lun-Ven: 6h-22h, Sam-Dim: 8h-20h",
    price: "49€/mois",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    benefits: ["Gain de force", "Masse musculaire", "Métabolisme accru"]
  },
  {
    id: 2,
    name: "Crossfit",
    description: "Entraînement fonctionnel intense combinant force, cardio et agilité.",
    duration: "Sessions de 60 min",
    level: "Intermédiaire à avancé",
    schedule: "Lun-Sam: 7h, 12h, 18h",
    price: "69€/mois",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    benefits: ["Endurance", "Force explosive", "Communauté"]
  },
  {
    id: 3,
    name: "Yoga & Pilates",
    description: "Améliorez votre souplesse, posture et bien-être mental avec nos cours guidés.",
    duration: "Sessions de 60 min",
    level: "Tous niveaux",
    schedule: "Mar-Jeu: 9h, 18h30",
    price: "45€/mois",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb",
    benefits: ["Souplesse", "Relaxation", "Posture"]
  },
  {
    id: 4,
    name: "HIIT & Cardio",
    description: "Brûlez des calories et améliorez votre condition physique avec nos sessions haute intensité.",
    duration: "Sessions de 45 min",
    level: "Tous niveaux",
    schedule: "Lun-Ven: 7h, 12h30, 19h",
    price: "55€/mois",
    image: "https://images.unsplash.com/photo-1765728617805-b9f22d64e5b3",
    benefits: ["Perte de poids", "Cardio", "Énergie"]
  }
];

export const scheduleSlots = [
  { time: "06:00", available: true },
  { time: "07:00", available: true },
  { time: "08:00", available: true },
  { time: "09:00", available: true },
  { time: "10:00", available: true },
  { time: "12:00", available: true },
  { time: "12:30", available: true },
  { time: "18:00", available: true },
  { time: "18:30", available: true },
  { time: "19:00", available: true },
  { time: "20:00", available: true }
];

export const gallery = {
  sectionTitle: "Notre Galerie",
  sectionSubtitle: "Découvrez l'ambiance de notre salle en images et vidéos",
  items: [
    {
      id: 1,
      type: "image",
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
      thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400",
      title: "Espace Musculation",
      description: "Notre zone de musculation équipée des dernières machines"
    },
    {
      id: 2,
      type: "image",
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800",
      thumbnail: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400",
      title: "Zone Cardio",
      description: "Tapis de course, vélos et elliptiques dernière génération"
    },
    {
      id: 3,
      type: "video",
      src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400",
      title: "Cours de CrossFit",
      description: "Découvrez l'intensité de nos cours collectifs"
    },
    {
      id: 4,
      type: "image",
      src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
      thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400",
      title: "Cours Collectifs",
      description: "Des cours pour tous les niveaux dans une ambiance motivante"
    },
    {
      id: 5,
      type: "image",
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
      title: "Espace Yoga",
      description: "Un espace calme et zen pour vos séances de yoga"
    },
    {
      id: 6,
      type: "video",
      src: "https://www.youtube.com/watch?v=example123",
      thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400",
      title: "Séance HIIT",
      description: "Une séance HIIT intense avec notre coach Thomas"
    },
    {
      id: 7,
      type: "image",
      src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800",
      thumbnail: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400",
      title: "Vestiaires Modernes",
      description: "Des vestiaires propres et bien équipés"
    },
    {
      id: 8,
      type: "image",
      src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800",
      thumbnail: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400",
      title: "Zone Stretching",
      description: "Espace dédié aux étirements et à la récupération"
    }
  ]
};

export const testimonials = [
  {
    id: 1,
    name: "Julie Moreau",
    rating: 5,
    comment: "FitZone a transformé ma vie ! L'équipe est incroyable, les coachs sont à l'écoute et les résultats sont au rendez-vous. J'ai perdu 15kg en 6 mois !",
    date: "2025-01-15",
    program: "HIIT & Cardio"
  },
  {
    id: 2,
    name: "Pierre Dupont",
    rating: 5,
    comment: "Meilleure salle de sport de Paris ! Les équipements sont top, l'ambiance est motivante et les cours de Crossfit sont exceptionnels.",
    date: "2025-01-10",
    program: "Crossfit"
  },
  {
    id: 3,
    name: "Marie Leclerc",
    rating: 5,
    comment: "Je recommande à 100% ! Les cours de Yoga m'ont aidée à gérer mon stress et à améliorer ma posture. Sophie est une coach formidable.",
    date: "2024-12-20",
    program: "Yoga & Pilates"
  },
  {
    id: 4,
    name: "Alexandre Bernard",
    rating: 5,
    comment: "Excellent rapport qualité-prix. Les programmes sont variés et adaptés à tous les niveaux. J'ai pris 8kg de muscle en 4 mois !",
    date: "2024-12-15",
    program: "Musculation"
  },
  {
    id: 5,
    name: "Camille Rousseau",
    rating: 5,
    comment: "Une vraie communauté ! On se sent soutenu et encouragé. Les résultats sont impressionnants et l'atmosphère est conviviale.",
    date: "2024-12-05",
    program: "Crossfit"
  }
];