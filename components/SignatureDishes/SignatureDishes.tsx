import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal/Reveal";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { signatureDishes } from "@/data/menu";
import { formatPrice } from "@/lib/format";
import styles from "./SignatureDishes.module.css";

/**
 * Editorial composition: one large lead plate, two supporting.
 * Deliberately NOT a uniform three-card grid.
 */
export default function SignatureDishes() {
  const [lead, ...supporting] = signatureDishes;

  return (
    <section className={styles.section} id="signature">
      <div className="container">
        <SectionHeader number="02" label="De la cocina" />

        <div className={styles.layout}>
          <Reveal className={styles.lead}>
            <Link href="/menu" className={styles.leadLink} aria-label={`${lead.name} — ver el menú`}>
              <figure className={styles.leadFigure}>
                <Image
                  src={lead.image!.src}
                  alt={lead.image!.alt}
                  width={1400}
                  height={1750}
                  sizes="(min-width: 900px) 44vw, 92vw"
                  className={styles.leadImage}
                />
              </figure>
              <div className={styles.leadMeta}>
                <span className={styles.index} aria-hidden="true">
                  {lead.index}
                </span>
                <div>
                  <h3 className={styles.name}>{lead.name}</h3>
                  <p className={styles.desc}>{lead.description}</p>
                  <p className={styles.price}>{formatPrice(lead.price)}</p>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className={styles.supporting}>
            {supporting.map((dish, i) => (
              <Reveal key={dish.name} delay={i * 120}>
                <Link href="/menu" className={styles.card} aria-label={`${dish.name} — ver el menú`}>
                  <figure className={styles.cardFigure}>
                    <Image
                      src={dish.image!.src}
                      alt={dish.image!.alt}
                      width={1000}
                      height={750}
                      sizes="(min-width: 900px) 24vw, 46vw"
                      className={styles.cardImage}
                    />
                  </figure>
                  <div className={styles.cardMeta}>
                    <span className={styles.index} aria-hidden="true">
                      {dish.index}
                    </span>
                    <div>
                      <h3 className={styles.name}>{dish.name}</h3>
                      <p className={styles.desc}>{dish.description}</p>
                      <p className={styles.price}>{formatPrice(dish.price)}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className={styles.more}>
          <Link href="/menu" className={styles.moreLink}>
            Explorar el menú completo
            <span aria-hidden="true"> →</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
