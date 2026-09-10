"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Image from "next/image";
import { menuCategories, type MenuItem } from "@/data/menu";
import { formatPrice } from "@/lib/format";
import styles from "./MenuExplorer.module.css";

type DisplayItem = MenuItem & { category?: string };

type Props = {
  className?: string;
};

/**
 * Menú digital: carril de categorías + búsqueda, los platos cambian
 * con un fundido suave. Los datos vienen de data/menu.ts — añade
 * una categoría allí y aparece aquí.
 */
export default function MenuExplorer({ className }: Props) {
  const [activeId, setActiveId] = useState(menuCategories[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const activeCategory =
    menuCategories.find((c) => c.id === activeId) ?? menuCategories[0];

  const isSearching = deferredQuery.trim().length > 0;

  const items = useMemo<DisplayItem[]>(() => {
    const q = deferredQuery.trim().toLowerCase();
    if (!q) return activeCategory?.items ?? [];
    return menuCategories
      .flatMap((c) =>
        c.items.map((item) => ({ ...item, category: c.label }))
      )
      .filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
  }, [deferredQuery, activeCategory]);

  return (
    <div className={[styles.explorer, className].filter(Boolean).join(" ")}>
      {/* Search */}
      <div className={styles.searchRow}>
        <label className={styles.searchLabel} htmlFor="menu-search">
          Buscar en el menú
        </label>
        <input
          id="menu-search"
          type="search"
          className={styles.search}
          placeholder="Prueba “pulpo”, “wagyu”, “negroni”…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />
      </div>

      {/* Category rail */}
      <nav className={styles.rail} aria-label="Categorías del menú">
        <ul className={styles.railList}>
          {menuCategories.map((category) => {
            const active = !isSearching && category.id === activeId;
            return (
              <li key={category.id}>
                <button
                  type="button"
                  className={[styles.railButton, active ? styles.railActive : ""].join(" ")}
                  aria-pressed={active}
                  onClick={() => {
                    setQuery("");
                    setActiveId(category.id);
                  }}
                >
                  {category.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Items */}
      <div className={styles.panel} key={isSearching ? "search" : activeId}>
        <header className={styles.panelHeader}>
          <h3 className={styles.panelTitle}>
            {isSearching
              ? `Resultados para “${deferredQuery.trim()}”`
              : activeCategory?.label}
          </h3>
          {!isSearching && activeCategory?.note ? (
            <p className={styles.panelNote}>{activeCategory.note}</p>
          ) : null}
        </header>

        {items.length === 0 ? (
          <p className={styles.empty}>
            Nada en el menú coincide con eso — pregunta en la barra, ellos
            suelen saber.
          </p>
        ) : (
          <ul className={styles.items}>
            {items.map((item) => (
              <li key={`${item.category ?? ""}-${item.name}`} className={styles.item}>
                {item.image ? (
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={320}
                    height={240}
                    sizes="(min-width: 768px) 220px, 45vw"
                    className={styles.itemImage}
                  />
                ) : null}
                <div className={styles.itemBody}>
                  <div className={styles.itemHead}>
                    <h4 className={styles.itemName}>{item.name}</h4>
                    <span className={styles.dots} aria-hidden="true" />
                    <span className={styles.itemPrice}>{formatPrice(item.price)}</span>
                  </div>
                  <p className={styles.itemDesc}>
                    {item.tag ? <span className={styles.tag}>{item.tag}</span> : null}
                    {item.description}
                  </p>
                  {isSearching ? (
                    <span className={styles.itemCategory}>{item.category}</span>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
