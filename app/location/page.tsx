import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import LocationMap from "@/components/LocationMap/LocationMap";
import ReservationCta from "@/components/ReservationCta/ReservationCta";
import InstagramStrip from "@/components/InstagramStrip/InstagramStrip";
import { restaurantConfig } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Ubicación",
  description: `${restaurantConfig.address.full} — ${restaurantConfig.contact.phone}. Horarios y cómo llegar.`,
  alternates: {
    canonical: "/location",
  },
};

export default function LocationPage() {
  return (
    <>
      <PageHero
        kicker="Ubicación"
        title="Encuéntranos."
        lead={`${restaurantConfig.address.street}, ${restaurantConfig.address.city} — a dos cuadras del mar, en la esquina de los faroles.`}
        image={{
          src: restaurantConfig.images.hero.src,
          alt: restaurantConfig.images.hero.alt,
        }}
      />
      <section className="container" style={{ paddingBlock: "clamp(3.5rem, 9vh, 6.5rem)" }}>
        <LocationMap />
      </section>
      <ReservationCta />
      <InstagramStrip />
    </>
  );
}
