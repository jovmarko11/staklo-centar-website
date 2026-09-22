import { site, nav } from "@/lib/site";
import Phone from "./Phone";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* BLOK 1 — brend */}
      <a href="#" className={styles.brand} aria-label="Staklo Centar — početak strane">
        <span className={styles.logo} aria-hidden="true">S</span>
        <span className={styles.brandText}>
          <span className={styles.brandName}>STAKLO CENTAR</span>
          <span className={styles.brandSub}>ČAČAK / AUTO-STAKLA</span>
        </span>
      </a>

      {/* BLOK 2 — navigacija (sakriva se ispod 1100px) */}
      <nav className={styles.nav} aria-label="Glavni meni">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className={styles.navLink}>
            {item.label}
          </a>
        ))}
      </nav>

      {/* BLOK 3 — telefon + CTA */}
      <div className={styles.actions}>
        <div className={styles.phoneBox}>
          <span className={styles.phoneLabel}>DEŽURNI TELEFON</span>
          <Phone phone={site.phones.landline} className={styles.phone} />
        </div>
        <a href="#kontakt" className={styles.cta}>ZATRAŽI PROCENU</a>
      </div>
    </header>
  );
}
