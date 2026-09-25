"use client";

// Klijentska komponenta: jedino ovde treba JavaScript u browseru,
// jer "danas" i "sada" zavise od trenutka kad posetilac otvori sajt
// (strana se generiše unapred, pri build-u).
import { useEffect, useState } from "react";
import styles from "./OpeningHours.module.css";

const START = 6;  // vremenska traka ide od 06h…
const END = 22;   // …do 22h
const SPAN = END - START;

const pad = (n) => String(n).padStart(2, "0");
// 8 → "08", 8.5 → "08:30"
const fmt = (h) => (h % 1 === 0 ? pad(h) : `${pad(Math.floor(h))}:${pad(Math.round((h % 1) * 60))}`);

// Dan i sat se računaju po vremenu u Srbiji, ne po satu posetioca
// (da i neko iz inostranstva vidi tačno "otvoreno / zatvoreno").
const WEEKDAYS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
function belgradeTime(date) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Europe/Belgrade",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23",
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value])
  );
  return { day: WEEKDAYS[parts.weekday], hour: Number(parts.hour) + Number(parts.minute) / 60 };
}
const pct = (h) => `${((Math.min(Math.max(h, START), END) - START) / SPAN) * 100}%`;

export default function OpeningHours({ hours }) {
  const [now, setNow] = useState(null); // null dok se ne učita u browseru

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 60_000); // osvežava se na minut
    return () => clearInterval(id);
  }, []);

  const bg = now ? belgradeTime(now) : null;
  const today = bg ? bg.day : null;
  const hourNow = bg ? bg.hour : null;

  const rows = hours.map((h) => {
    const known = h.closed || (h.open != null && h.close != null);
    const text = h.closed ? "Zatvoreno" : known ? `${fmt(h.open)}–${fmt(h.close)}h` : "[XX–XXh]";
    const isToday = today != null && h.days.includes(today);
    const isOpen = isToday && known && !h.closed && hourNow >= h.open && hourNow < h.close;
    return { ...h, known, text, isToday, isOpen };
  });

  const todayRow = rows.find((r) => r.isToday);
  const showStatus = todayRow && todayRow.known;

  return (
    <div className={styles.hours}>
      <div className={styles.head}>
        <span className={styles.label}>RADNO VREME</span>
        {showStatus && (
          <span className={`${styles.status} ${todayRow.isOpen ? styles.open : styles.closed}`}>
            <span className={styles.dot} aria-hidden="true" />
            {todayRow.isOpen ? "SADA OTVORENO" : "SADA ZATVORENO"}
          </span>
        )}
      </div>

      <ul className={styles.list}>
        {rows.map((r) => (
          <li key={r.label} className={`${styles.row} ${r.isToday ? styles.today : ""}`}>
            <span className={styles.day}>
              {r.label}
              {r.isToday && <span className={styles.todayTag}>DANAS</span>}
            </span>
            <span className={styles.time}>{r.text}</span>

            <div className={styles.bar} aria-hidden="true">
              {r.known && !r.closed && (
                <span
                  className={styles.segment}
                  style={{ left: pct(r.open), width: `calc(${pct(r.close)} - ${pct(r.open)})` }}
                />
              )}
              {r.isToday && hourNow >= START && hourNow <= END && (
                <span className={styles.nowMarker} style={{ left: pct(hourNow) }} />
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* skala ispod traka */}
      <div className={styles.scale} aria-hidden="true">
        {[6, 10, 14, 18, 22].map((h) => (
          <span key={h} style={{ left: pct(h) }}>{pad(h)}</span>
        ))}
      </div>
    </div>
  );
}
