import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal/Reveal";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { restaurantConfig } from "@/data/restaurant";
import styles from "./Intro.module.css";

export default function Intro() {
  const { images } = restaurantConfig;

  return (
    <section className={styles.section} id="about">
      <div className={`container ${styles.grid}`}>
        <SectionHeader number="01" label="La casa" />

        <Reveal className={styles.textCol}>
          <h2 className={styles.title}>
            La buena comida merece un buen lugar.
          </h2>
          <p className={styles.copy}>
            La casa es cocina y mesa — dos palabras para una misma idea.
            La cocina sigue la temporada, la barra se toma su oficio en serio
            y las salas están pensadas para que nadie tenga prisa por irse.
          </p>
          <p className={styles.copy}>
            Ven por un almuerzo largo, una cena tranquila o la hora entre las
            dos. La mesa es tuya.
          </p>
          <Link href="/menu" className={styles.link}>
            Ver el menú
            <span aria-hidden="true"> →</span>
          </Link>
        </Reveal>

        <Reveal className={styles.imageWrap} delay={120}>
          <figure className={styles.figure}>
            <Image
              src={images.intro.src}
              alt={images.intro.alt}
              width={1500}
              height={1000}
              sizes="(min-width: 1024px) 56vw, 92vw"
              className={styles.image}
            />
          </figure>
          {/* Small overlapping detail image — breaks the grid on purpose */}
          <figure className={styles.detail}>
            <Image
              src={images.introDetail.src}
              alt={images.introDetail.alt}
              width={900}
              height={1125}
              sizes="160px"
              className={styles.detailImage}
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
