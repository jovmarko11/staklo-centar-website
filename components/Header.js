import { site, nav, isLinkActive } from "@/lib/content";
import Phone from "./Phone";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* BLOK 1 — brend */}
      <a href="#" className={styles.brand} aria-label={`${site.fullName} — početak strane`}>
        {/* zvanični logo (public/logo.svg) — SVG je oštar na svakoj veličini */}
        <Image src="/logo.svg" alt="" width={342} height={157} priority unoptimized className={styles.logo} />
        <span className={styles.brandSub}>
          {site.headerSub.split(" / ").map((line) => <span key={line}>{line}</span>)}
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
            {site.primaryIs24h && <span className={styles.live} aria-hidden="true" />}
            {site.primaryIs24h ? "DEŽURNI TELEFON" : "TELEFON"}
          </span>
          <Phone phone={site.phones.primary} className={styles.phone} />
        </div>
        <a href={site.phones.primary.href} className={styles.cta}>
          <span className={styles.ctaText}>POZOVI</span>
          <span className={styles.ctaArrow} aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
