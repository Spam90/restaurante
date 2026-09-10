import Reveal from "@/components/Reveal/Reveal";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import LocationMap from "@/components/LocationMap/LocationMap";
import styles from "./LocationSection.module.css";

/** "Encuéntranos." — envuelve el mapa estilizado + bloque de dirección. */
export default function LocationSection() {
  return (
    <section className={styles.section} id="location" aria-label="Ubicación">
      <div className="container">
        <SectionHeader number="06" label="Ubicación" />
        <Reveal className={styles.mapWrap} delay={100}>
          <LocationMap />
        </Reveal>
      </div>
    </section>
  );
}
