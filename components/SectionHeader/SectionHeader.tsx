import type { CSSProperties } from "react";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  number: string;
  label: string;
  title?: string;
  /** Light header for dark bands. */
  tone?: "light" | "dark";
  style?: CSSProperties;
};

/**
 * Cabecera editorial de sección: filete + fila de etiqueta "02 — El menú",
 * opcionalmente un título serif grande.
 */
export default function SectionHeader({
  number,
  label,
  title,
  tone = "dark",
  style,
}: SectionHeaderProps) {
  return (
    <Reveal
      as="header"
      className={[styles.header, tone === "dark" ? "" : styles.dark].join(" ")}
      style={style}
    >
      <div className={styles.row}>
        <span className={styles.index} aria-hidden="true">
          {number}
        </span>
        <span className={styles.hairline} aria-hidden="true" />
        <span className="label">{label}</span>
      </div>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
    </Reveal>
  );
}
