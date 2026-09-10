import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import MenuExplorer from "@/components/MenuExplorer/MenuExplorer";
import ReservationCta from "@/components/ReservationCta/ReservationCta";
import { restaurantConfig } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Menú",
  description: `Desayuno, brunch, entradas, principales, mariscos, carnes, postres y bebidas en ${restaurantConfig.name} — ${restaurantConfig.city}.`,
  alternates: {
    canonical: "/menu",
  },
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        kicker="Menú"
        title="El menú."
        lead="Todo lo de abajo sale de una sola cocina — cocinado a la temporada, con precio justo, y mejor pedido para el centro de la mesa."
        image={{
          src: restaurantConfig.images.intro.src,
          alt: restaurantConfig.images.intro.alt,
        }}
      />
      <section className="container" style={{ paddingBlock: "clamp(3rem, 8vh, 6rem)" }}>
        <MenuExplorer />
      </section>
      <ReservationCta />
    </>
  );
}
