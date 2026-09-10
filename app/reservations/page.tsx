import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import ReservationCta from "@/components/ReservationCta/ReservationCta";
import { restaurantConfig } from "@/data/restaurant";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Reservas",
  description: `Solicita una mesa en ${restaurantConfig.name}, ${restaurantConfig.city}. Cena de lunes a domingo.`,
  alternates: {
    canonical: "/reservations",
  },
};

export default function ReservationsPage() {
  return (
    <>
      <PageHero
        kicker="Reservas"
        title="Tu mesa te espera."
        lead="Dinos cuándo y cuántos serán. Un miembro del equipo confirma cada solicitud personalmente."
        image={{
          src: restaurantConfig.images.introDetail.src,
          alt: restaurantConfig.images.introDetail.alt,
        }}
      />
      <div className="container">
        <ReservationCta standalone />
      </div>
      <p className={`container ${styles.houseNote}`}>
        La barra es siempre sin reserva. Entra y te buscamos un taburete.
      </p>
    </>
  );
}
