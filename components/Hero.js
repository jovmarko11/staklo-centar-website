import { site, hero } from "@/lib/content";
import Phone from "./Phone";
import HeroDrawing from "./HeroDrawing";
import styles from "./Hero.module.css";

// Neki tekstovi su u dizajnu kraći na mobilnom — renderujemo obe verzije,
// a CSS (.long / .short) prikazuje odgovarajuću.
export default function Hero() {
  const { from, to, scaleMax: max } = hero.badge;
  return (
    <section className={styles.hero}>
      {/* LEVO — tekst */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>
          <span className={styles.dash} aria-hidden="true" />
          <span className={styles.long}>{hero.eyebrow}</span>
          <span className={styles.short}>{hero.eyebrowShort}</span>
        </p>

        <h1 className={styles.title}>
          {hero.title}{" "}
          <span className={styles.accent}>{hero.titleAccent}</span>
        </h1>

        <p className={styles.lead}>
          <span className={styles.long}>{hero.lead}</span>
          <span className={styles.short}>{hero.leadShort}</span>
        </p>

        <div className={styles.buttons}>
          <a href="#kontakt" className={styles.btnPrimary}>
            <span className={styles.btnText}>ZATRAŽI PROCENU</span>
          </a>
          <a href="#radovi" className={styles.btnSecondary}>
            <span className={styles.btnText}>POGLEDAJ RADOVE</span>
            <span className={styles.btnArrow} aria-hidden="true">↓</span>
          </a>
        </div>

        <div className={styles.callRow}>
          <span className={styles.callLabel}>{hero.callLabel}</span>
          <Phone phone={site.phones.mobile} className={styles.callPhone} />
        </div>
      </div>

      {/* DESNO — tehnički list sa crtežom vozila (fotografija dolazi kasnije) */}
      <div className={styles.media}>
        <div className={styles.sheetHead} aria-hidden="true">
          <span>SL. 01 — BOČNI IZGLED</span>
          <span>RAZMERA 1:20 · MM</span>
        </div>

        {/* legenda — kao na pravom listu crteža */}
        <ul className={styles.legend} aria-hidden="true">
          <li><span className={styles.swGlass} />STAKLO</li>
          <li><span className={styles.swLine} />KONTURA</li>
          <li><span className={styles.swDim} />KOTE (MM)</li>
        </ul>

        <div className={styles.drawingWrap}>
          <HeroDrawing />
        </div>

        <div className={styles.badge}>
          <div className={styles.badgeValue}>{hero.badge.value}</div>
          <div className={styles.badgeLabel}>{hero.badge.label}</div>
          {/* skala 0–max min sa istaknutim opsegom from–to (računa se iz content.js) */}
          <div className={styles.badgeScale} aria-hidden="true">
            <span
              className={styles.badgeRange}
              style={{ left: `${(from / max) * 100}%`, width: `${((to - from) / max) * 100}%` }}
            />
          </div>
          <div className={styles.badgeTicks} aria-hidden="true">
            <span>0</span>
            <span style={{ left: `${(from / max) * 100}%` }}>{from}</span>
            <span style={{ left: `${(to / max) * 100}%` }}>{to}</span>
            <span>{max}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
