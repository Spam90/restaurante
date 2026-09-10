import Reveal from "@/components/Reveal/Reveal";
import { restaurantConfig } from "@/data/restaurant";
import styles from "./LocationMap.module.css";

/**
 * Mapa estilizado y autocontenido: las calles son SVG decorativo
 * y la marca señala la dirección. Sustituye el mapa interno por
 * un embed real (Google Maps / Mapbox) sin tocar el diseño.
 */
export default function LocationMap({ className }: { className?: string }) {
  const { address, contact, mapsUrl, hours } = restaurantConfig;

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      <div className={styles.map} role="img" aria-label={`Mapa estilizado — ${address.full}`}>
        <svg viewBox="0 0 600 420" className={styles.svg} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
          {/* blocks */}
          <rect width="600" height="420" fill="var(--color-base-soft)" />
          <g stroke="var(--line)" strokeWidth="1.4">
            <line x1="0" y1="90" x2="600" y2="70" />
            <line x1="0" y1="200" x2="600" y2="185" />
            <line x1="0" y1="310" x2="600" y2="300" />
            <line x1="120" y1="0" x2="140" y2="420" />
            <line x1="300" y1="0" x2="310" y2="420" />
            <line x1="470" y1="0" x2="475" y2="420" />
          </g>
          {/* water */}
          <path
            d="M0 395 Q 160 370 320 390 T 600 380 L 600 420 L 0 420 Z"
            fill="rgba(124,128,109,0.22)"
          />
          {/* the avenue, slightly emphasized */}
          <line x1="300" y1="0" x2="310" y2="420" stroke="var(--line)" strokeWidth="7" opacity="0.5" />
        </svg>

        <span className={styles.pin} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z" />
            <circle cx="12" cy="10" r="2.6" />
          </svg>
        </span>
      </div>

      <div className={styles.info}>
        <Reveal>
          <h3 className={styles.title}>Encuéntranos.</h3>
        </Reveal>
        <Reveal delay={90}>
          <address className={styles.address}>
            {address.street}
            <br />
            {address.city}
            <br />
            {address.country}
          </address>
          <p className={styles.note}>{address.note}</p>
        </Reveal>
        <Reveal delay={160}>
          <a className={styles.phone} href={contact.phoneHref}>
            {contact.phone}
          </a>
          <ul className={styles.hours}>
            {hours.map((h) => (
              <li key={h.days} className={styles.hoursLine}>
                <span>{h.days}</span>
                <span aria-hidden="true" className={styles.hoursDots} />
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={220} className={styles.actions}>
          <a className={styles.primaryAction} href={mapsUrl} target="_blank" rel="noopener noreferrer">
            Cómo llegar
          </a>
          <a className={styles.secondaryAction} href={contact.phoneHref}>
            Llamar
          </a>
        </Reveal>
      </div>
    </div>
  );
}
