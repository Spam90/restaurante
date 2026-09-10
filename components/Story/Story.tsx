import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { restaurantConfig } from "@/data/restaurant";
import styles from "./Story.module.css";

export default function Story() {
  const { images, name } = restaurantConfig;

  return (
    <section className={styles.section} id="story">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.imageCol}>
          <figure className={styles.figure}>
            <Image
              src={images.story.src}
              alt={images.story.alt}
              width={1400}
              height={1750}
              sizes="(min-width: 900px) 44vw, 92vw"
              className={styles.image}
            />
          </figure>
          <span className={styles.year} aria-hidden="true">
            Desde {restaurantConfig.established}
          </span>
        </Reveal>

        <div className={styles.textCol}>
          <SectionHeader number="04" label="La casa" />
          <Reveal>
            <h2 className={styles.title}>Hecho para quedarse.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.copy}>
              {name} nació de una observación sencilla: nadie en esta ciudad
              tiene prisa, pero todo parece apurado. Así que construimos lo
              contrario — una casa con salas que te piden quedarte. Sillas
              para horas. Luz que cambia con la tarde. Un menú que premia la
              segunda visita.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className={styles.copy}>
              La cocina cocina lo que permite la temporada. La barra sirve lo
              que pide la noche. El resto — las mesas largas, la terraza, el
              rincón junto a la ventana — es simplemente para ti.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <span className={styles.signature} aria-hidden="true">
              — la casa
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
