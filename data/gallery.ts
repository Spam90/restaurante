import type { ImageAsset } from "./restaurant";

export type ExperienceImage = ImageAsset & {
  /** Pie editorial que se muestra al pasar el cursor (desktop) / debajo (móvil). */
  caption: string;
  /** Proporción CSS, p. ej. "3 / 4". Varíala — la cuadrícula debe respirar. */
  ratio: string;
};

export const galleryImages: ExperienceImage[] = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop",
    alt: "El comedor principal al anochecer, mesas vestidas para el servicio",
    caption: "El comedor, 8:04 PM",
    ratio: "4 / 3",
  },
  {
    src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1400&auto=format&fit=crop",
    alt: "Un cocinero terminando platos bajo las lámparas de cobre del pase",
    caption: "En el pase",
    ratio: "3 / 4",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400&auto=format&fit=crop",
    alt: "La terraza vestida para la cena a la hora dorada",
    caption: "Hora dorada en la terraza",
    ratio: "1 / 1",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1400&auto=format&fit=crop",
    alt: "Una bebida colándose a través de una malla fina sobre un cubo de hielo grande",
    caption: "Primer servicio de la noche",
    ratio: "4 / 3",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1400&auto=format&fit=crop",
    alt: "Manos picando hierbas sobre una tabla en la cocina",
    caption: "Mise en place",
    ratio: "3 / 4",
  },
  {
    src: "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1400&auto=format&fit=crop",
    alt: "Amigos compartiendo platos y vino sobre una mesa animada",
    caption: "Sábado, mesa nueve",
    ratio: "4 / 3",
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1400&auto=format&fit=crop",
    alt: "Un cóctel oscuro batido en frío adornado con cítricos y romero",
    caption: "Del cuaderno de la barra",
    ratio: "3 / 4",
  },
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1400&auto=format&fit=crop",
    alt: "Una mesa de rincón en el café con café de la mañana y zumo",
    caption: "Mañanas lentas",
    ratio: "1 / 1",
  },
];
