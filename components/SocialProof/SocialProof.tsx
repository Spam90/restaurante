import Reveal from "@/components/Reveal/Reveal";
import { restaurantConfig } from "@/data/restaurant";
import styles from "./SocialProof.module.css";

/**
 * Una línea discreta de reputación — una cita editorial y una
 * valoración, claramente marcadas como ilustrativas.
 */
export default function SocialProof() {
  const { social } = restaurantConfig;

  return (
    <section className={styles.section} aria-label="Opiniones de comensales">
      <Reveal className={`container ${styles.inner}`}>
        <blockquote className={styles.quote}>
          <p>{social.quote}</p>
        </blockquote>
        <div className={styles.ratingBox}>
          <span className={styles.rating}>{social.rating}</span>
          <span className={styles.ratingLabel}>{social.ratingLabel}</span>
          <span className={styles.ratingNote}>{social.ratingNote}</span>
        </div>
      </Reveal>
    </section>
  );
}
