import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  kicker: string;
  title: string;
  lead?: string;
  image: { src: string; alt: string };
};

/** Compact editorial header for interior pages. */
export default function PageHero({ kicker, title, lead, image }: PageHeroProps) {
  return (
    <header className={styles.header}>
      <div className={styles.media}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.scrim} aria-hidden="true" />
      </div>

      <div className={`container ${styles.inner}`}>
        <Reveal>
          <p className={styles.kicker}>{kicker}</p>
          <h1 className={styles.title}>{title}</h1>
          {lead ? <p className={styles.lead}>{lead}</p> : null}
        </Reveal>
      </div>
    </header>
  );
}
