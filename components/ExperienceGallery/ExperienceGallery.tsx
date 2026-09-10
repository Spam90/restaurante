import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { galleryImages } from "@/data/gallery";
import { restaurantConfig } from "@/data/restaurant";
import styles from "./ExperienceGallery.module.css";

/**
 * Masonry-style editorial wall. Each image keeps its own aspect
 * ratio (set in data/gallery.ts) — no uniform grid.
 */
export default function ExperienceGallery() {
  return (
    <section className={styles.section} id="experience">
      <div className="container">
        <SectionHeader number="03" label="Las salas" title="La experiencia" />
      </div>

      <div className={`container ${styles.wall}`}>
        {galleryImages.map((image, i) => (
          <Reveal
            key={image.src}
            className={styles.cell}
            delay={(i % 3) * 90}
          >
            <figure className={styles.figure}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={750}
                sizes="(min-width: 900px) 33vw, 92vw"
                className={styles.image}
                style={{ aspectRatio: image.ratio }}
              />
              <figcaption className={styles.caption}>
                <span className={styles.captionIndex} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {image.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal as="p" className={`container ${styles.note}`}>
        {restaurantConfig.city} · Salas para quedarse — el comedor, la
        terraza, la barra y el rincón pequeño donde las mañanas empiezan
        despacio.
      </Reveal>
    </section>
  );
}
