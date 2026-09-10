import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";
import SignatureDishes from "@/components/SignatureDishes/SignatureDishes";
import MenuIndex from "@/components/MenuIndex/MenuIndex";
import ExperienceGallery from "@/components/ExperienceGallery/ExperienceGallery";
import Story from "@/components/Story/Story";
import SocialProof from "@/components/SocialProof/SocialProof";
import ReservationCta from "@/components/ReservationCta/ReservationCta";
import InstagramStrip from "@/components/InstagramStrip/InstagramStrip";
import LocationSection from "@/components/LocationSection/LocationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <SignatureDishes />
      <MenuIndex />
      <ExperienceGallery />
      <Story />
      <SocialProof />
      <ReservationCta />
      <InstagramStrip />
      <LocationSection />
    </>
  );
}
