import Link from "next/link";
import Reveal from "@/components/Reveal/Reveal";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { menuCategories } from "@/data/menu";
import { formatPrice } from "@/lib/format";
import styles from "./MenuIndex.module.css";

/**
 * Anticipación del menú en portada: algunos platos representativos
 * de varias categorías, que conducen a la página interactiva completa.
 */
export default function MenuIndex() {
  const picks = [
    menuCategories.find((c) => c.id === "starters")?.items[0],
    menuCategories.find((c) => c.id === "mains")?.items[0],
    menuCategories.find((c) => c.id === "drinks")?.items[0],
  ].filter(Boolean) as { name: string; description: string; price: number; tag?: string }[];

  return (
    <section className={styles.section} id="menu">
      <div className="container">
        <SectionHeader number="03" label="El menú" title="Se come aquí, últimamente" />

        <div className={styles.list}>
          {picks.map((item, i) => (
            <Reveal key={item.name} delay={i * 90}>
              <div className={styles.item}>
                <span className={styles.category}>
                  {["Entradas", "Principales", "Barra"][i]}
                </span>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.desc}>{item.description}</p>
                <span className={styles.price}>{formatPrice(item.price)}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.ctaRow}>
          <Link href="/menu" className={styles.cta}>
            El menú completo
            <span aria-hidden="true"> →</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
