import { site } from "@/lib/site";
import Phone from "./Phone";
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
            osiguranjem, dolazimo na adresu u Čačku i okolini.
          </span>
          <span className={styles.short}>
            Sve marke vozila, rad sa osiguranjem, dolazak na adresu.
          </span>
        </p>

        <div className={styles.buttons}>
          <a href="#kontakt" className={styles.btnPrimary}>ZATRAŽI PROCENU</a>
          <a href="#radovi" className={styles.btnSecondary}>POGLEDAJ RADOVE</a>
        </div>

        <div className={styles.callRow}>
          <span className={styles.callLabel}>POZOVITE ODMAH</span>
          <Phone phone={site.phones.mobile} className={styles.callPhone} />
        </div>
      </div>

      {/* DESNO — fotografija (placeholder dok fotograf ne pošalje) */}
      <div className={styles.media}>
        <span className={styles.mediaLabel}>
          <span className={styles.long}>FOTOGRAFIJA<br />RADIONICA / UGRADNJA</span>
          <span className={styles.short}>FOTOGRAFIJA — RADIONICA</span>
        </span>
        <div className={styles.badge}>
          <div className={styles.badgeValue}>60–90</div>
          <div className={styles.badgeLabel}>MINUTA ZAMENA</div>
        </div>
      </div>
    </section>
  );
}
