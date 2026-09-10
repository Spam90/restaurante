import Link from "next/link";
import { restaurantConfig } from "@/data/restaurant";
import styles from "./Footer.module.css";

const nav = [
  { href: "/menu", label: "Menú" },
  { href: "/reservations", label: "Reservas" },
  { href: "/experience", label: "Experiencia" },
  { href: "/location", label: "Ubicación" },
];

export default function Footer() {
  const { name, tagline, contact, address, hours, instagram } = restaurantConfig;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <p className={styles.reserveLine}>Haz una reserva.</p>
          <Link href="/reservations" className={styles.reserveLink}>
            Reservar mesa
            <span aria-hidden="true"> →</span>
          </Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <p className={styles.name}>{name}</p>
            <p className={styles.tagline}>{tagline}</p>
            <address className={styles.address}>
              {address.street}
              <br />
              {address.city}, {address.country}
            </address>
          </div>

          <nav className={styles.col} aria-label="Footer">
            <h3 className={styles.colTitle}>Explorar</h3>
            <ul className={styles.links}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contacto</h3>
            <ul className={styles.links}>
              <li>
                <a href={contact.phoneHref} className={styles.link}>
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className={styles.link}>
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Instagram — {instagram.handle}
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Horarios</h3>
            <ul className={styles.hours}>
              {hours.map((h) => (
                <li key={h.days} className={styles.hoursLine}>
                  <span>{h.days}</span>
                  <span className={styles.hoursTime}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {name} — {tagline}
          </p>
          <p className={styles.credit}>
            {address.city} · Fotografías de presentación
          </p>
        </div>
      </div>
    </footer>
  );
}
