import Image from "next/image";
import Link from "next/link";
import { restaurantConfig } from "@/data/restaurant";
import styles from "./Hero.module.css";

export default function Hero() {
  const { name, tagline, images, heroHours, contact } = restaurantConfig;

  return (
    <section className={styles.hero} aria-label={`${name} — ${tagline}`}>
      <div className={styles.media}>
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.scrim} aria-hidden="true" />
      </div>

      <div className={styles.inner}>
        <p className={styles.kicker}>
          {restaurantConfig.city} · Desde {restaurantConfig.established}
        </p>

        <h1 className={styles.title}>
          <span className={styles.name}>{name}</span>
          <span className={styles.tagline}>{tagline}</span>
        </h1>

        <p className={styles.invite}>Una invitación a comer bien.</p>

        <div className={styles.actions}>
          <Link href="/menu" className={styles.primary}>
            Ver menú
          </Link>
          <Link href="/reservations" className={styles.secondary}>
            Reservar mesa
          </Link>
        </div>

        <ul className={styles.meta} aria-label="Horario de servicio">
          {heroHours.map((line) => (
            <li key={line} className={styles.metaLine}>
              {line}
            </li>
          ))}
        </ul>
      </div>

      <a href={`tel:${contact.phoneHref.replace("tel:", "")}`} className={styles.phone}>
        {contact.phone}
      </a>
    </section>
  );
}
