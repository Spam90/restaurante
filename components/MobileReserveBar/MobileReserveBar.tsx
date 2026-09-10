"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileReserveBar.module.css";

/**
 * CTA móvil persistente — aparece tras el hero, oculto en la propia
 * página de reservas. El layout ya reserva espacio para él
 * (padding inferior del body en viewports pequeños).
 */
export default function MobileReserveBar() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/reservations") return null;

  return (
    <div
      className={[styles.bar, visible ? styles.visible : ""].join(" ")}
      aria-hidden={!visible}
    >
      <Link
        href="/reservations"
        className={styles.cta}
        tabIndex={visible ? 0 : -1}
      >
        Reservar mesa
      </Link>
    </div>
  );
}
