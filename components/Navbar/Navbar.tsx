"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { restaurantConfig } from "@/data/restaurant";
import styles from "./Navbar.module.css";

const links = [
  { href: "/menu", label: "Menú" },
  { href: "/experience", label: "Experiencia" },
  { href: "/location", label: "Ubicación" },
  { href: "/#about", label: "Nosotros" },
];

export default function Navbar() {
  const { name, tagline, monogram, contact } = restaurantConfig;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del body mientras el menú móvil está abierto + cierra con Escape
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Cierra el menú cuando cambia la ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={[
        styles.header,
        scrolled ? styles.scrolled : "",
        open ? styles.menuOpen : "",
      ].join(" ")}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={close} aria-label={`${name} — ${tagline}, ir al inicio`}>
          <span className={styles.monogram} aria-hidden="true">
            {monogram}
          </span>
          <span className={styles.brandText}>
            <span className={styles.name}>{name}</span>
            <span className={styles.tagline}>{tagline}</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[styles.link, pathname === link.href ? styles.active : ""].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/reservations" className={styles.cta}>
            Reservar mesa
          </Link>

          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.burgerLine} aria-hidden="true" />
            <span className={styles.burgerLine} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={styles.mobileMenu}
        role="dialog"
        aria-modal="true"
        aria-label="Menú del sitio"
        hidden={!open}
      >
        <div className={styles.mobileInner}>
          <nav className={styles.mobileNav} aria-label="Móvil">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                onClick={close}
                tabIndex={open ? 0 : -1}
              >
                <span className={styles.mobileIndex} aria-hidden="true">
                  0{i + 1}
                </span>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.mobileMeta}>
            <Link href="/reservations" className={styles.mobileCta} onClick={close} tabIndex={open ? 0 : -1}>
              Reservar mesa
            </Link>
            <a href={contact.phoneHref} className={styles.phone} tabIndex={open ? 0 : -1}>
              {contact.phone}
            </a>
            <span className={styles.hours}>{restaurantConfig.heroHours[1]} · {restaurantConfig.heroHours[2]}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
