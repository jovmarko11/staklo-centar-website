import { site } from "@/lib/site";
import Phone from "./Phone";
import HeroDrawing from "./HeroDrawing";
import styles from "./Hero.module.css";

// Neki tekstovi su u dizajnu kraći na mobilnom — renderujemo obe verzije,
// a CSS (.long / .short) prikazuje odgovarajuću.
export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* LEVO — tekst */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>
          <span className={styles.dash} aria-hidden="true" />
          <span className={styles.long}>PRODAJA + PROFESIONALNA UGRADNJA</span>
          <span className={styles.short}>PRODAJA + UGRADNJA</span>
        </p>

        <h1 className={styles.title}>
          Za čas ti zamenimo glass —{" "}
          <span className={styles.accent}>brzo sa garancijom.</span>
        </h1>

        <p className={styles.lead}>
          <span className={styles.long}>
            Šoferšajbne, bočna i zadnja stakla za sve marke vozila. Radimo direktno sa
            osiguranjem, dolazimo na adresu u Beogradu i okolini.
          </span>
          <span className={styles.short}>
            Sve marke vozila, rad sa osiguranjem, dolazak na adresu.
          </span>
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
          <span className={styles.callLabel}>POZOVITE ODMAH</span>
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
          <div className={styles.badgeValue}>60–90</div>
          <div className={styles.badgeLabel}>MINUTA ZAMENA</div>
          {/* skala 0–120 min sa istaknutim opsegom 60–90 */}
          <div className={styles.badgeScale} aria-hidden="true">
            <span className={styles.badgeRange} />
          </div>
          <div className={styles.badgeTicks} aria-hidden="true">
            <span>0</span><span>60</span><span>90</span><span>120</span>
          </div>
        </div>
      </div>
    </section>
  );
}
