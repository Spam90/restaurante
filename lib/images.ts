/**
 * Build a remote image URL.
 * Swap this single helper when a client provides their own photography
 * (e.g. local files in /public or a CDN) — every component consumes it
 * a través de `data/restaurant.ts` y `data/menu.ts`, nunca directamente.
 */
export function unsplash(id: string, width = 1600): string {
  return `https://images.unsplash.com/${id}?q=80&w=${width}&auto=format&fit=crop`;
}
