import { site, nav, isLinkActive } from "@/lib/content";
import { isReal } from "@/lib/seo";
import Phone from "./Phone";
import Image from "next/image";
import styles from "./Footer.module.css";

// 8.5 → "08:30", 14 → "14:00"
const pad = (n) => String(n).padStart(2, "0");
const hhmm = (h) => `${pad(Math.floor(h))}:${pad(Math.round((h % 1) * 60))}`;

// Zvanični podaci o firmi — Zakon o elektronskoj trgovini (čl. 6) traži da budu
// stalno dostupni. Prikazani kao "sastavnica" tehničkog crteža.
// Placeholderi ("[MATIČNI BROJ]") se ne prikazuju dok se ne upiše pravi podatak.
const legal = [
  { k: "Poslovno ime", v: site.legalName, wide: true },
  { k: "Sedište", v: site.legalSeat },
  { k: "Registar", v: site.registry },
  { k: "Matični broj", v: site.mb },
  { k: "PIB", v: site.pib },
].filter((i) => isReal(i.v));

const year = new Date().getFullYear();

function ColTitle({ children }) {
  return (
    <p className={styles.colTitle}>
      <span className={styles.dash} aria-hidden="true" />
      {children}
    </p>
  );
}

export default function Footer() {
  const { primary, secondary } = site.phones;
  const { street, zip, municipality, city } = site.address;

  return (
    <footer className={styles.footer}>
      {/* ================= gornji deo: 4 kolone ================= */}
      <div className={styles.top}>
        {/* ---- brend + glavni poziv ---- */}
        <div className={`${styles.col} ${styles.brandCol}`}>
          <Image src="/logo.svg" alt={site.fullName} width={342} height={157} unoptimized className={styles.logo} />
          <p className={styles.tagline}>{site.tagline}</p>

          {primary.href && (
            <a href={primary.href} className={styles.cta}>
              <span className={styles.ctaLabel}>POZOVI</span>
              <span className={styles.ctaNumber}>{primary.label}</span>
              <span className={styles.ctaArrow} aria-hidden="true">→</span>
            </a>
          )}
        </div>

        {/* ---- meni ---- */}
        <nav className={`${styles.col} ${styles.navCol}`} aria-label="Linkovi u podnožju">
          <ColTitle>Meni</ColTitle>
          {nav.filter((l) => isLinkActive(l.href)).map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>{l.label}</a>
          ))}
        </nav>

        {/* ---- kontakt ---- */}
        <div className={styles.col}>
          <ColTitle>Kontakt</ColTitle>
          <Phone phone={primary} className={styles.link} />
          <Phone phone={secondary} className={styles.link} />
          {site.email && (
            <a href={`mailto:${site.email}`} className={styles.link}>{site.email}</a>
          )}
          <a
            href={site.mapsUrl ?? "#kontakt"}
            className={`${styles.link} ${styles.address}`}
            {...(site.mapsUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {street}
            <br />
            {zip} {municipality ? `${municipality}, ${city}` : city}
          </a>
        </div>

        {/* ---- radno vreme ---- */}
        <div className={styles.col}>
          <ColTitle>Radno vreme</ColTitle>
          <dl className={styles.hours}>
            {site.hours.map((h) => (
              <div key={h.label} className={styles.hoursRow}>
                <dt>{h.label}</dt>
                <dd className={h.closed ? styles.closed : undefined}>
                  {h.closed ? "Zatvoreno" : `${hhmm(h.open)}–${hhmm(h.close)}`}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ================= sastavnica: zvanični podaci (APR) ================= */}
      <dl className={styles.legal}>
        {legal.map((i) => (
          <div key={i.k} className={`${styles.cell} ${i.wide ? styles.cellWide : ""}`}>
            <dt className={styles.cellKey}>{i.k}</dt>
            <dd className={styles.cellValue}>{i.v}</dd>
          </div>
        ))}
      </dl>

      {/* ================= dno ================= */}
      <div className={styles.bottom}>
        <p>© {year} {site.fullName}. Sva prava zadržana.</p>
        <a href="#" className={styles.toTop}>
          Na vrh <span className={styles.toTopArrow} aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
