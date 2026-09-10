"use client";

import { useState, type FormEvent } from "react";
import { restaurantConfig } from "@/data/restaurant";
import { formatEventDate } from "@/lib/format";
import styles from "./Reservation.module.css";

type Status = "idle" | "loading" | "success" | "error";

type Details = {
  date: string;
  time: string;
  guests: string;
};

const times = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM",
  "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM",
];

/**
 * Formulario de solicitud: simula el flujo de envío y muestra una
 * confirmación elegante. El manejador de envío es el único lugar
 * donde conectar después OpenTable / SevenRooms / Resy / una API
 * propia.
 */
export default function Reservation({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [details, setDetails] = useState<Details | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload: Details = {
      date: String(data.get("date") ?? ""),
      time: String(data.get("time") ?? ""),
      guests: String(data.get("guests") ?? "2"),
    };

    setStatus("loading");

    // Solicitud simulada — sustituye por el endpoint real de reservas.
    await new Promise((resolve) => setTimeout(resolve, 1400));

    // Comportamiento de demo: fallo ocasional para poder ver el estado de error.
    const shouldFail = Math.random() < 0.125;

    if (shouldFail) {
      setStatus("error");
      return;
    }

    setDetails(payload);
    setStatus("success");
    form.reset();
  }

  const parsedDate =
    details?.date && !Number.isNaN(new Date(details.date).getTime())
      ? formatEventDate(new Date(`${details.date}T12:00:00`))
      : details?.date;

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      {status === "success" && details ? (
        <Confirmation
          parsedDate={parsedDate ?? ""}
          details={details}
          onReset={() => {
            setStatus("idle");
            setDetails(null);
          }}
        />
      ) : (
        <ReservationForm onSubmit={handleSubmit} status={status} times={times} />
      )}
    </div>
  );
}

/* ── Confirmation state ─────────────────────────────────────── */

function Confirmation({
  parsedDate,
  details,
  onReset,
}: {
  parsedDate: string;
  details: Details;
  onReset: () => void;
}) {
  return (
    <div className={styles.confirmation} role="status">
      <span className={styles.confirmMark} aria-hidden="true">
        ✓
      </span>
      <h3 className={styles.confirmTitle}>Hemos recibido tu solicitud.</h3>
      <p className={styles.confirmCopy}>
        Las reservas se guardan unos minutos — un miembro del equipo de sala
        confirmará por teléfono en breve.
      </p>
      <dl className={styles.confirmDetails}>
        <div>
          <dt>Fecha</dt>
          <dd>{parsedDate}</dd>
        </div>
        <div>
          <dt>Hora</dt>
          <dd>{details.time}</dd>
        </div>
        <div>
          <dt>Comensales</dt>
          <dd>{details.guests}</dd>
        </div>
      </dl>
      <button type="button" className={styles.againLink} onClick={onReset}>
        Hacer otra solicitud
      </button>
    </div>
  );
}

/* ── Form ───────────────────────────────────────────────────── */

function ReservationForm({
  onSubmit,
  status,
  times,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  status: Status;
  times: string[];
}) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="res-date">
            Fecha
          </label>
          <input
            className={styles.input}
            id="res-date"
            name="date"
            type="date"
            required
            min={new Date().toISOString().slice(0, 10)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="res-time">
            Hora
          </label>
          <select
            className={styles.input}
            id="res-time"
            name="time"
            required
            defaultValue="8:00 PM"
          >
            {times.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="res-guests">
            Comensales
          </label>
          <select
            className={styles.input}
            id="res-guests"
            name="guests"
            required
            defaultValue="2"
          >
            {["1", "2", "3", "4", "5", "6", "7", "8+"].map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="res-name">
            Nombre
          </label>
          <input
            className={styles.input}
            id="res-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Nombre completo"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="res-phone">
            Teléfono
          </label>
          <input
            className={styles.input}
            id="res-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+1 809 000 0000"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="res-email">
            Correo
          </label>
          <input
            className={styles.input}
            id="res-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className={styles.footer}>
        <button
          type="submit"
          className={styles.submit}
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <span className={styles.spinner} aria-hidden="true" />
              Enviando…
            </>
          ) : (
            "Solicitar mesa"
          )}
        </button>

        {status === "error" ? (
          <p className={styles.error} role="alert">
            Algo falló de nuestro lado — inténtalo de nuevo o llama al{" "}
            <a href={restaurantConfig.contact.phoneHref}>
              {restaurantConfig.contact.phone}
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
