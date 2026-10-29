import Image from "next/image";
import DimensionLine from "./ui/DimensionLine";
import styles from "./Gallery.module.css";

import { works } from "@/lib/content";

// Radovi (vozilo, opis, putanja do fotografije) se upisuju u lib/content.js → `works`.
// Slike su ručno pripremljene (800×800, ~100 KB); next/image ih učitava tek kad se skroluje do galerije (lazy-load).

const pad = (n) => String(n).padStart(2, "0");

export default function Gallery() {
  return (
    <section id="radovi" className={styles.gallery}>
      <div className={styles.head}>
        <h2 className={styles.title}>
          <span className={styles.long}>Galerija radova</span>
          <span className={styles.short}>Radovi</span>
        </h2>
        <DimensionLine label={`${pad(works.length)} RADOVA · IZ RADIONICE`} className={styles.dimension} />
      </div>

      <ul className={styles.grid}>
        {works.map((w, i) => (
          <li key={w.src} className={styles.card}>
            {/* oznake za sečenje u uglovima (vide se na hover) */}
            <span className={`${styles.crop} ${styles.cTL}`} aria-hidden="true" />
            <span className={`${styles.crop} ${styles.cTR}`} aria-hidden="true" />
            <span className={`${styles.crop} ${styles.cBL}`} aria-hidden="true" />
            <span className={`${styles.crop} ${styles.cBR}`} aria-hidden="true" />

            <div className={styles.photo}>
              <Image
                src={w.src}
                alt={w.alt}
                fill
                sizes="(max-width: 900px) 50vw, 400px"
                className={styles.img}
              />
              <span className={styles.tag}>RAD {pad(i + 1)}</span>
            </div>

            <div className={styles.caption}>
              <p className={styles.captionTitle}>{w.title}</p>
              <p className={styles.captionDesc}>{w.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
