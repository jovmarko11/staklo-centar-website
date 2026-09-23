import DimensionLine from "./ui/DimensionLine";
import styles from "./WhyUs.module.css";

import { whyUs } from "@/lib/content";

// Brojke i recenzije se upisuju u lib/content.js → `whyUs`.

// Oznaka za poravnanje u uglu kartice (kao na tehničkom crtežu)
function Crosshair({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M10 0 V20 M0 10 H20" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

// 5 zvezdica; poslednja je popunjena delimično (npr. 4,9 → 90%)
function Stars({ rating }) {
  const d = "M10 1.5 L12.6 7 L18.5 7.6 L14 11.6 L15.3 17.5 L10 14.5 L4.7 17.5 L6 11.6 L1.5 7.6 L7.4 7 Z";
  return (
    <div className={styles.stars} aria-label={`Ocena ${String(rating).replace(".", ",")} od 5`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - i)); // 0..1
        return (
          <svg key={i} className={styles.star} viewBox="0 0 20 20" aria-hidden="true">
            <defs>
              <clipPath id={`star-clip-${i}`}>
                <rect x="0" y="0" width={20 * fill} height="20" />
              </clipPath>
            </defs>
            <path d={d} className={styles.starOutline} />
            <path d={d} className={styles.starFill} clipPath={`url(#star-clip-${i})`} />
          </svg>
        );
      })}
    </div>
  );
}

export default function WhyUs() {
  if (!whyUs.enabled) return null;
  const { stats, reviews } = whyUs;
  return (
    <section id="zasto-mi" className={styles.why}>
      <div className={styles.head}>
        <h2 className={styles.title}>Zašto mi</h2>
        {/* kotna linija kao na nacrtu */}
        <DimensionLine label="BROJKE / UTISCI KUPACA" />
      </div>

      {/* ---- brojke ---- */}
      <ul className={styles.stats}>
        {stats.map((s) => (
          <li key={s.label} className={styles.stat}>
            <Crosshair className={styles.crosshair} />

            <p className={`${styles.value} ${s.rating ? styles.valueAccent : ""}`}>
              <span className={styles.long}>
                {s.value}
                <span className={styles.suffix}>{s.suffix}</span>
              </span>
              <span className={styles.short}>{s.mobile}</span>
            </p>
            <p className={styles.label}>
              <span className={styles.long}>{s.label}</span>
              <span className={styles.short}>{s.short}</span>
            </p>

            {s.rating ? <Stars rating={s.rating} /> : <div className={styles.ruler} aria-hidden="true" />}
          </li>
        ))}
      </ul>

      {/* ---- recenzije (na mobilnom: horizontalni skrol) ---- */}
      <ul className={styles.reviews}>
        {reviews.map((r) => (
          <li key={r.author} className={styles.review}>
            <span className={styles.quoteMark} aria-hidden="true">„</span>
            <blockquote className={styles.quote}>„{r.text}“</blockquote>
            <p className={styles.author}>{r.author}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
