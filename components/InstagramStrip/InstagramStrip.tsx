import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import { restaurantConfig } from "@/data/restaurant";
import styles from "./InstagramStrip.module.css";

/** Seis marcos editoriales sacados de la experiencia, guiados por @handle. */
const frames = [
  { id: "photo-1476224203421-9ac39bcb3327", alt: "Pulpo a la brasa sobre hojas verdes", ratio: "4 / 5" },
  { id: "photo-1517248135467-4c7edcad34c4", alt: "El comedor antes del servicio", ratio: "1 / 1" },
  { id: "photo-1559339352-11d035aa65de", alt: "La terraza a la hora dorada", ratio: "4 / 5" },
  { id: "photo-1551024506-0bccd828d307", alt: "Postre con caramelo servido en mesa", ratio: "1 / 1" },
  { id: "photo-1495474472287-4d71bcdd2085", alt: "Café de la mañana en el rincón del café", ratio: "4 / 5" },
  { id: "photo-1552566626-52f8b828add9", alt: "Luz de la tarde sobre la barra", ratio: "1 / 1" },
];

export default function InstagramStrip() {
  const { instagram } = restaurantConfig;

  return (
    <section className={styles.section} aria-label="Instagram">
      <Reveal className={`container ${styles.head}`}>
        <span className="label">Sigue la mesa</span>
        <a
          className={styles.handle}
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {instagram.handle}
        </a>
      </Reveal>

      <Reveal className={styles.strip} delay={120}>
        {frames.map((frame) => (
          <a
            key={frame.id}
            className={styles.cell}
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${instagram.handle} en Instagram`}
          >
            <Image
              src={`https://images.unsplash.com/${frame.id}?q=80&w=700&auto=format&fit=crop`}
              alt={frame.alt}
              width={700}
              height={700}
              sizes="(min-width: 900px) 17vw, 33vw"
              className={styles.image}
              style={{ aspectRatio: frame.ratio }}
            />
          </a>
        ))}
      </Reveal>
    </section>
  );
}
