import { site, nav, isLinkActive } from "@/lib/content";
import Phone from "./Phone";
import LogoMark from "./ui/LogoMark";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* BLOK 1 — brend */}
      <a href="#" className={styles.brand} aria-label={`${site.fullName} — početak strane`}>
        <span className={styles.logo} aria-hidden="true"><LogoMark className={styles.logoMark} /></span>
        <span className={styles.brandText}>
          <span className={styles.brandName}>{site.name.toUpperCase()}</span>
          <span className={styles.brandSub}>{site.headerSub}</span>
        </span>
      </a>

      {/* BLOK 2 — navigacija (sakriva se ispod 1100px) */}
      <nav className={styles.nav} aria-label="Glavni meni">
        {nav.filter((item) => isLinkActive(item.href)).map((item) => (
          <a key={item.href} href={item.href} className={styles.navLink}>
            {item.label}
          </a>
        ))}
      </nav>

      {/* BLOK 3 — telefon + CTA */}
      <div className={styles.actions}>
        <div className={styles.phoneBox}>
          <span className={styles.phoneLabel}>
            {site.landlineIs24h && <span className={styles.live} aria-hidden="true" />}
            {site.landlineIs24h ? "DEŽURNI TELEFON" : "TELEFON"}
          </span>
          <Phone phone={site.phones.landline} className={styles.phone} />
        </div>
        <a href="#kontakt" className={styles.cta}>
          <span className={styles.ctaText}>ZATRAŽI PROCENU</span>
          <span className={styles.ctaArrow} aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
