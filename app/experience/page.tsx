import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import ExperienceGallery from "@/components/ExperienceGallery/ExperienceGallery";
import SocialProof from "@/components/SocialProof/SocialProof";
import InstagramStrip from "@/components/InstagramStrip/InstagramStrip";
import ReservationCta from "@/components/ReservationCta/ReservationCta";
import { restaurantConfig } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Experiencia",
  description: `Las salas, la terraza, la barra — una velada en ${restaurantConfig.name}, ${restaurantConfig.city}.`,
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        kicker="Experiencia"
        title="Una velada aquí."
        lead="Empieza en la barra, deriva hacia la terraza, termina en la mesa nueve. La mayoría de las noches se ordenan solas — las salas simplemente hacen hueco."
        image={{
          src: restaurantConfig.images.story.src,
          alt: restaurantConfig.images.story.alt,
        }}
      />
      <ExperienceGallery />
      <SocialProof />
      <InstagramStrip />
      <ReservationCta />
    </>
  );
}
