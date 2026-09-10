/** Los precios se guardan como números y se formatean en un solo lugar. */
export function formatPrice(value: number): string {
  return `RD$ ${value.toLocaleString("es-DO")}`;
}

export function formatEventDate(date: Date): string {
  return date.toLocaleDateString("es-DO", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
