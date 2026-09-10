import Reveal from "@/components/Reveal/Reveal";
import Reservation from "@/components/Reservation/Reservation";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { restaurantConfig } from "@/data/restaurant";
import styles from "./ReservationCta.module.css";

/**
 * "Tu mesa te espera." — el formulario de solicitud vive aquí en la
 * portada; /reservations reutiliza el mismo componente a todo lo ancho.
 */
export default function ReservationCta({ standalone = false }: { standalone?: boolean }) {
  const { contact } = restaurantConfig;

  return (
    <section
      className={styles.section}
      id="reservations"
      aria-label="Reservas"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <SectionHeader
            number={standalone ? "02" : "05"}
            label="Reservas"
            tone="dark"
          />
          <Reveal>
            <h2 className={styles.title}>Tu mesa te espera.</h2>
            <p className={styles.copy}>
              Las solicitudes las confirma personalmente el equipo de sala.
              Para esta noche, el camino más rápido es una llamada —{" "}
              <a href={contact.phoneHref} className={styles.phoneInline}>
                {contact.phone}
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className={styles.notes}>
              <li>Grupos de 9 o más por teléfono</li>
              <li>La terraza se atiende por orden de llegada en las noches agradables</li>
              <li>Mantenemos la mesa durante 15 minutos pasada la hora</li>
            </ul>
          </Reveal>
        </div>

        <Reveal className={styles.formWrap} delay={140}>
          <div className={styles.formCard}>
            <Reservation />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
