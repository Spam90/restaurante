import Link from "next/link";
import { restaurantConfig } from "@/data/restaurant";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.kicker}>404</p>
        <h1 className={styles.title}>Esa mesa no está puesta.</h1>
        <p className={styles.copy}>
          La página que buscabas no está en el menú. La cocina,
          sin embargo, sigue abierta.
        </p>
        <div className={styles.links}>
          <Link href="/" className={styles.primary}>
            Volver a la casa
          </Link>
          <Link href="/menu" className={styles.secondary}>
            Ver el menú
          </Link>
        </div>
        <p className={styles.phone}>{restaurantConfig.contact.phone}</p>
      </div>
    </section>
  );
}
