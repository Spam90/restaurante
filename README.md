# Demo premium — sitio web para restaurantes

Demostración comercial de un sitio web para restaurantes, construida con
**Next.js (App Router) + React + TypeScript + CSS Modules**.

Es una pieza de venta: se muestra al dueño de un restaurante y, cambiando solo
los archivos de `data/`, se convierte en la web real del cliente.

---

## Puesta en marcha

```bash
npm install
npm run dev        # desarrollo  → http://localhost:3000
npm run build      # build de producción
npm start          # sirve el build → por defecto usa PORT 3100 si está definido
```

## Rutas

| Ruta            | Contenido                                  |
| --------------- | ------------------------------------------ |
| `/`             | Portada completa                           |
| `/menu`         | Menú interactivo por categorías + búsqueda |
| `/reservations` | Formulario de reserva con confirmación     |
| `/experience`   | Galería editorial (masonry)                |
| `/location`     | Ubicación, mapa estilizado y horarios      |

## Cómo personalizarla para un cliente

Todo el contenido vive en **tres archivos** — los componentes nunca fijan
nombres, precios, direcciones ni fotos:

- **`data/restaurant.ts`** — nombre, tagline, teléfono, email, dirección,
  horarios, Instagram, gastronomía, paleta de colores y fotografías del hero.
  La paleta se inyecta como variables CSS automáticamente.
- **`data/menu.ts`** — categorías y platos. Añade o quita platos; la interfaz
  se adapta sola. Destacados de la portada en `signatureDishes`.
- **`data/gallery.ts`** — las 8 imágenes de la galería de la experiencia,
  con sus pies editoriales y proporciones (`ratio`).

Para sustituir las fotos de Unsplash por fotos reales, cambia solo la función
`unsplash()` en `lib/images.ts` (por rutas locales en `public/` o un CDN);
ningún componente consume URLs directamente.

### Detalles

- **Idioma:** todo el contenido visible está en español. SEO (title,
  description, Open Graph, canonical, robots, sitemap, JSON-LD Restaurant)
  se genera desde `data/restaurant.ts`.
- **Reservas:** el formulario simula el envío (estados idle/loading/success/
  error). El punto de conexión con OpenTable / SevenRooms / Resy / API propia
  / WhatsApp está marcado dentro de `components/Reservation/Reservation.tsx`.
- **Accesibilidad:** HTML semántico, aria-labels, navegación por teclado,
  focus visible, contraste y `alt` en todas las imágenes.
- **Rendimiento:** Next/Image con `sizes`, fuentes auto-optimizadas, animaciones
  solo con `prefers-reduced-motion` respetado.

## Estructura

```
app/          páginas (/, /menu, /reservations, /experience, /location, sitemap, robots)
components/   Navbar, Hero, Intro, SignatureDishes, MenuExplorer, Reservation,
              Story, LocationMap, SocialProof, InstagramStrip, Footer, …
data/         restaurant.ts · menu.ts · gallery.ts   ← edita solo esto
lib/          format.ts (precios/fechas) · images.ts (URL de fotos)
```
