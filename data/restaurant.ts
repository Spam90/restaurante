import { unsplash } from "@/lib/images";

export type ImageAsset = { src: string; alt: string };

/**
 * ─────────────────────────────────────────────────────────────
 *  FUENTE ÚNICA DE VERDAD
 *  Para rebautizar este sitio con otro restaurante, edita este
 *  archivo (además de data/menu.ts y data/gallery.ts). Los
 *  componentes nunca fijan nombres, precios, direcciones ni
 *  fotos a mano.
 * ─────────────────────────────────────────────────────────────
 */
export const restaurantConfig = {
  name: "Restaurante",
  monogram: "R.",
  tagline: "Cocina & Mesa",
  city: "Santo Domingo",
  established: "2019",
  description:
    "Una cocina contemporánea y una mesa de encuentro en Santo Domingo — producto de temporada, un bar serio y salas pensadas para quedarse un poco más.",

  contact: {
    phone: "+1 809 000 0000",
    phoneHref: "tel:+18090000000",
    email: "reservas@restaurante.do",
  },

  address: {
    street: "Av. Ejemplo 123",
    city: "Santo Domingo",
    country: "República Dominicana",
    full: "Av. Ejemplo 123, Santo Domingo, República Dominicana",
    note: "Esquina con la calle 5.ª, a dos cuadras del Malecón.",
  },

  mapsUrl: "https://maps.google.com/?q=Santo+Domingo+Dominican+Republic",

  hours: [
    { days: "Lunes — Jueves", time: "12:00 PM — 11:00 PM" },
    { days: "Viernes — Sábado", time: "12:00 PM — 12:00 AM" },
    { days: "Domingo", time: "12:00 PM — 10:00 PM" },
  ],
  heroHours: ["Cena", "Lun — Dom", "12 PM — 12 AM"] as const,

  instagram: {
    handle: "@restaurante.rd",
    url: "https://instagram.com/restaurante.rd",
  },

  siteUrl: "https://www.restaurante.do",
  cuisine: ["Contemporánea", "Mediterránea", "Mariscos"],
  priceRange: "$$",

  /** Prueba social discreta. Las cifras son ilustrativas por diseño. */
  social: {
    rating: "4.8",
    ratingLabel: "Valoración de comensales",
    ratingNote: "Cifras ilustrativas.",
    quote: "“Una noche para repetir.”",
  },

  /** Paleta consumida por el tema; se inyecta como variables CSS. */
  colors: {
    base: "#F4EFE7",
    ink: "#211E1A",
    muted: "#756C61",
    accent: "#A65F45",
    accentAlt: "#7C806D",
  },

  images: {
    hero: {
      src: unsplash("photo-1552566626-52f8b828add9", 2200),
      alt: "Luz cálida sobre el comedor y la barra del restaurante",
    },
    intro: {
      src: unsplash("photo-1414235077428-338989a2e8c0", 1500),
      alt: "Un plato servido en una mesa compartida, las copas captando la luz",
    },
    introDetail: {
      src: unsplash("photo-1470337458703-46ad1756a187", 900),
      alt: "Un cóctel filtrado sobre un único cubo de hielo transparente",
    },
    story: {
      src: unsplash("photo-1537047902294-62a40c20a6ae", 1400),
      alt: "La sala acristalada, mesas vestidas entre plantas altas",
    },
  } satisfies Record<string, ImageAsset>,
};

export type RestaurantConfig = typeof restaurantConfig;
