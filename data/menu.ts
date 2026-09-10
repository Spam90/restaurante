import { unsplash } from "@/lib/images";
import type { ImageAsset } from "./restaurant";

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  image?: ImageAsset;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  note?: string;
  items: MenuItem[];
};

const img = (id: string, alt: string, w = 1000): ImageAsset => ({
  src: unsplash(id, w),
  alt,
});

/**
 * Todos los platos y precios son ficticios, escritos para la
 * presentación. Sustituye los arrays con un menú real — la
 * interfaz se adapta a cualquier número de categorías o platos.
 */
export const menuCategories: MenuCategory[] = [
  {
    id: "breakfast",
    label: "Desayuno",
    note: "Se sirve hasta las 11:30",
    items: [
      {
        name: "Desayuno de la Casa",
        description: "Huevos al gusto, pan de masa madre, fruta de mercado, café de origen",
        price: 650,
        image: img("photo-1533089860892-a7c6f0a88666", "Un huevo frito sobre tostada de masa madre con tomates"),
      },
      {
        name: "Hotcakes de Ricota",
        description: "Mantequilla batida con miel, tomillo, bayas asadas",
        price: 580,
      },
      {
        name: "Shakshuka Verde",
        description: "Tomatillo, queso feta, pan de masa madre tostado",
        price: 620,
      },
      {
        name: "Aguacate & Huevo Escalfado",
        description: "Multigrano, aceite de guindilla, lima",
        price: 540,
      },
      {
        name: "Bowl de Granola",
        description: "Yogur griego, coco, fruta de temporada",
        price: 450,
      },
      {
        name: "Croissant & Mantequilla de Guayaba",
        description: "Horneado cada mañana, café de origen",
        price: 320,
      },
    ],
  },
  {
    id: "brunch",
    label: "Brunch",
    note: "Fines de semana · 11:30 — 3:00",
    items: [
      {
        name: "Tabla de Brunch",
        description: "Huevos, salmón curado, quesos, conservas — para dos",
        price: 1850,
        tag: "Para la mesa",
      },
      {
        name: "Revuelto de Trufa",
        description: "Brioche, cebollino, papa crujiente",
        price: 720,
      },
      {
        name: "Benedict de Cangrejo",
        description: "Salsa holandesa de limón, hojas verdes aliñadas",
        price: 890,
      },
      {
        name: "Torrijas",
        description: "Plátano caramelizado, sirope de ron, pecanas",
        price: 560,
      },
      {
        name: "Lomo & Huevos",
        description: "Chimichurri, papas de desayuno",
        price: 1150,
      },
    ],
  },
  {
    id: "starters",
    label: "Entradas",
    items: [
      {
        name: "Burrata",
        description: "Tomate heirloom, aceite de albahaca, pan de masa madre a la brasa",
        price: 950,
        image: img("photo-1592417817098-8fd3d9eb14a5", "Tomates heirloom con pan desmenuzado y albahaca"),
      },
      {
        name: "Pulpo a la Brasa",
        description: "Cítricos, hierbas, pimentón ahumado",
        price: 1250,
        image: img("photo-1476224203421-9ac39bcb3327", "Pulpo a la brasa sobre una ensalada aliñada"),
      },
      {
        name: "Atún Crudo",
        description: "Aguacate, sésamo, ponzu",
        price: 1100,
      },
      {
        name: "Carpaccio de Res",
        description: "Alcaparras, parmesano, alioli de mostaza",
        price: 980,
      },
      {
        name: "Calamares Crujientes",
        description: "Alioli de limón, guindilla encurtida",
        price: 750,
      },
      {
        name: "Sopa del Día",
        description: "Pregunta a tu mesero",
        price: 420,
      },
    ],
  },
  {
    id: "mains",
    label: "Principales",
    items: [
      {
        name: "Wagyu Tagliata",
        description: "Ajo asado, jus de romero, fritas",
        price: 2450,
        image: img("photo-1558030006-450675393462", "Wagyu tagliata en rebanadas sobre una tabla"),
      },
      {
        name: "Salmón Sellado",
        description: "Relish de pepino, hojas tiernas, beurre rouge",
        price: 1450,
        image: img("photo-1467003909585-2f8a72700288", "Filete de salmón sellado sobre hojas con mantequilla de vino tinto"),
      },
      {
        name: "Pato Crujiente",
        description: "Endivia, naranja, jus gras",
        price: 1950,
        image: img("photo-1543826173-70651703c5a4", "Pata de pato crujiente presentada en gres oscuro"),
      },
      {
        name: "Penne al Ragù",
        description: "Ragù lento de res, parmesano, pimienta negra",
        price: 1180,
        image: img("photo-1621996346565-e3dbc646d9a9", "Penne con ragù de res y parmesano"),
      },
      {
        name: "Risotto de Setas Salvajes",
        description: "Parmesano añejo, aceite de trufa",
        price: 1350,
      },
      {
        name: "Hamburguesa de la Casa",
        description: "Res madurada en seco, gruyère, brioche, fritas",
        price: 980,
      },
      {
        name: "Raviolo di Zucca",
        description: "Mantequilla noisette, salvia, amaretto",
        price: 1180,
      },
    ],
  },
  {
    id: "seafood",
    label: "Mariscos",
    note: "La captura cambia con la marea",
    items: [
      {
        name: "Linguine de Camarones",
        description: "Ajo, guindilla, tomate cherry, limón",
        price: 1650,
        image: img("photo-1563379926898-05f4575a45d8", "Linguine con camarones y tomates cherry en sartén"),
      },
      {
        name: "Gambas al Ajillo",
        description: "Aceitunas, limón, pan a la brasa",
        price: 1250,
        image: img("photo-1559737558-2f5a35f4523b", "Gambas a la brasa con limón en plato blanco"),
      },
      {
        name: "Chillo Entero a la Brasa",
        description: "Mojo de ajo, plátano, hojas verdes aliñadas",
        price: 2100,
        tag: "Para la mesa",
      },
      {
        name: "Tabla de Mariscos",
        description: "Ostras, camarones, ceviche, cangrejo — para dos",
        price: 3400,
        tag: "Para la mesa",
      },
      {
        name: "Aguachile de Camarones",
        description: "Pepino, cebolla morada, lima",
        price: 1150,
      },
      {
        name: "Ceviche Clásico",
        description: "Leche de tigre, boniato, cancha",
        price: 850,
      },
    ],
  },
  {
    id: "meats",
    label: "Carnes",
    note: "De la parrilla · cortes de 350 g",
    items: [
      {
        name: "Ribeye 350 g",
        description: "Mantequilla de médula, fritas",
        price: 2900,
      },
      {
        name: "Filet Mignon",
        description: "Reducción de vino tinto, puré de papas",
        price: 2650,
      },
      {
        name: "Churrasco",
        description: "Chimichurri, cebollas a la parrilla",
        price: 2200,
      },
      {
        name: "Cordero a la Rack",
        description: "Corteza de pistacho, jus de menta",
        price: 2550,
      },
      {
        name: "Chuleta Milanesa",
        description: "Rúcula, limón, parmesano",
        price: 1450,
      },
      {
        name: "Media Pollo Asado",
        description: "Jus gras, hierbas",
        price: 1250,
      },
    ],
  },
  {
    id: "desserts",
    label: "Postres",
    items: [
      {
        name: "Fondant de Chocolate",
        description: "Caramelo salado, helado de dulce de leche",
        price: 580,
        image: img("photo-1551024506-0bccd828d307", "Fondant de chocolate con caramelo sobre helado"),
      },
      {
        name: "Tarta de Frambuesa y Pistacho",
        description: "Mascarpone, frambuesas frescas",
        price: 520,
      },
      {
        name: "Tres Leches",
        description: "Estilo torreja, espuma de ron",
        price: 480,
      },
      {
        name: "Panna Cotta",
        description: "Fruta de la pasión, crumble de coco",
        price: 450,
      },
      {
        name: "Tabla de Quesos",
        description: "Conservas, miel, galletitas — para dos",
        price: 890,
      },
      {
        name: "Affogato",
        description: "Espresso, helado de vainilla",
        price: 380,
      },
    ],
  },
  {
    id: "drinks",
    label: "Bebidas",
    note: "La barra abierta hasta el cierre",
    items: [
      {
        name: "Negroni de la Casa",
        description: "Gin envejecido en barrica, campari, vermut dulce",
        price: 620,
        image: img("photo-1514362545857-3bc16c4c7d1b", "Un cóctel oscuro batido en frío con romero y cítricos"),
      },
      {
        name: "Old Fashioned de la Casa",
        description: "Demerara, bitter de naranja, hielo claro",
        price: 650,
      },
      {
        name: "Spritz de Jardín",
        description: "Saúco, pepino, prosecco",
        price: 580,
      },
      {
        name: "Sangría Roja",
        description: "Vino tinto, fruta de temporada — en jarra",
        price: 450,
      },
      {
        name: "Vino por Copa",
        description: "Tinto · blanco · rosado, lista rotativa",
        price: 480,
        tag: "Desde",
      },
      {
        name: "Verdant",
        description: "Menta, lima, tónica — sin alcohol",
        price: 420,
        tag: "Sin alcohol",
      },
      {
        name: "Café de Origen",
        description: "Espresso o filtrado, granos dominicanos",
        price: 220,
      },
    ],
  },
];

/** Destacados en la portada — un plato principal grande y dos de apoyo. */
export const signatureDishes: (MenuItem & { index: string })[] = [
  {
    index: "01",
    name: "Wagyu Tagliata",
    description: "Ajo asado, jus de romero, fritas",
    price: 2450,
    image: img("photo-1558030006-450675393462", "Wagyu tagliata en rebanadas con jus de romero", 1400),
  },
  {
    index: "02",
    name: "Pulpo a la Brasa",
    description: "Cítricos, hierbas, pimentón ahumado",
    price: 1250,
    image: img("photo-1476224203421-9ac39bcb3327", "Pulpo a la brasa sobre hojas verdes", 1000),
  },
  {
    index: "03",
    name: "Burrata",
    description: "Tomate heirloom, aceite de albahaca, pan a la brasa",
    price: 950,
    image: img("photo-1592417817098-8fd3d9eb14a5", "Burrata con tomates heirloom y pan a la brasa", 1000),
  },
];

