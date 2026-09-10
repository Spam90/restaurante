"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Render a different semantic element (section, figure, div…). */
  as?: ElementType;
  className?: string;
  /** Extra transition delay, in ms, for staggered compositions. */
  delay?: number;
  style?: CSSProperties;
};

/**
 * Añade un fundido/deslizamiento suave cuando el elemento entra en el viewport.
 * Falls back to fully visible content when JS is disabled.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={["reveal", className].filter(Boolean).join(" ")}
      style={{
        ...style,
        ...(delay ? { transitionDelay: `${delay}ms` } : null),
      }}
    >
      {children}
    </Tag>
  );
}
