import DimensionLine from "./ui/DimensionLine";
import styles from "./Gallery.module.css";

import { works } from "@/lib/content";

// Radovi (i putanje do fotografija) se upisuju u lib/content.js → `works`.
// Dok je `before`/`after` null, umesto fotografije se prikazuje tehnički crtež.

/* ---------- crteži (placeholder dok nema fotografija) ---------- */

const SHAPES = {
  windshield: "M22 22 Q60 12 98 22 L110 70 Q60 80 10 70 Z",
  rear: "M26 26 Q60 18 94 26 L104 62 Q60 70 16 62 Z",
  chip: "M22 22 Q60 12 98 22 L110 70 Q60 80 10 70 Z",
  adas: "M22 22 Q60 12 98 22 L110 70 Q60 80 10 70 Z",
  side: "M12 72 L36 22 H86 Q108 22 108 44 V72 Z",
};

// Pukotine za "PRE" — polazna tačka udara i zrakaste naprsline
const CRACKS = {
  windshield: "M70 40 L84 30 M70 40 L88 46 M70 40 L74 58 M70 40 L56 50 M70 40 L60 30 M74 58 L66 72 M88 46 L104 52",
  rear: "M52 42 L40 34 M52 42 L66 36 M52 42 L50 56 M50 56 L60 64",
  chip: "M64 42 L70 36 M64 42 L72 45 M64 42 L66 50 M64 42 L57 46 M64 42 L58 37",
  adas: "M40 48 L52 40 M40 48 L28 42 M40 48 L44 62 M44 62 L36 72",
  side: "M64 46 L78 36 M64 46 L82 54 M64 46 L58 60 M64 46 L48 40 M78 36 L90 28",
};

function Art({ kind, state }) {
  const isPre = state === "pre";
  return (
    <svg className={`${styles.art} ${isPre ? styles.artPre : styles.artPost}`} viewBox="0 0 120 90" aria-hidden="true">
      <path pathLength="1" className={styles.artShape} d={SHAPES[kind]} />
      {kind === "adas" && (
        /* kamera iza retrovizora + vidno polje */
        <g>
          <path pathLength="1" className={styles.artThin} d="M54 20 H66 V28 H54 Z" />
          <path pathLength="1" className={`${styles.artThin} ${styles.artFov}`} d="M60 28 L40 60 M60 28 L80 60" />
        </g>
      )}
      {isPre ? (
        <path pathLength="1" className={styles.artCrack} d={CRACKS[kind]} />
      ) : (
        /* posle: kvačica + oznaka "OK" */
        <path pathLength="1" className={styles.artCheck} d="M50 48 L57 55 L72 38" />
      )}
    </svg>
  );
}

function Photo({ src, label, variant, alt, kind }) {
  return (
    <div className={`${styles.photo} ${styles[variant]}`}>
      {src ? (
        <img src={src} alt={alt} className={styles.img} loading="lazy" />
      ) : (
        <Art kind={kind} state={variant === "before" ? "pre" : "post"} />
      )}
      <span className={styles.tag}>{label}</span>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="radovi" className={styles.gallery}>
      <div className={styles.head}>
        <h2 className={styles.title}>
          <span className={styles.long}>Galerija radova</span>
          <span className={styles.short}>Radovi</span>
        </h2>
        <DimensionLine label={`${String(works.length).padStart(2, "0")} RADOVA · PRE / POSLE`} className={styles.dimension} />
        {/* TODO: postaje link ka strani /radovi kad je napravimo */}
        <span className={styles.more}>SVI RADOVI →</span>
      </div>

      <ul className={styles.grid}>
        {works.map((w, i) => (
          <li key={w.title} className={styles.card}>
            {/* oznake za sečenje u uglovima (vide se na hover) */}
            <span className={`${styles.crop} ${styles.cTL}`} aria-hidden="true" />
            <span className={`${styles.crop} ${styles.cTR}`} aria-hidden="true" />
            <span className={`${styles.crop} ${styles.cBL}`} aria-hidden="true" />
            <span className={`${styles.crop} ${styles.cBR}`} aria-hidden="true" />

            <div className={styles.pair}>
              <Photo src={w.before} label="PRE" variant="before" alt={`${w.title} — pre`} kind={w.kind} />
              <span className={styles.divider} aria-hidden="true">
                <span className={styles.handle} />
              </span>
              <Photo src={w.after} label="POSLE" variant="after" alt={`${w.title} — posle`} kind={w.kind} />
            </div>

            <div className={styles.caption}>
              <span className={styles.code}>RAD {String(i + 1).padStart(2, "0")}</span>
              <p className={styles.captionText}>{w.title}</p>
              <span className={styles.captionArrow} aria-hidden="true">→</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
