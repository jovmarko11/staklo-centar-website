import { site } from "@/lib/site";
import Phone from "./Phone";
import styles from "./Footer.module.css";

const columns = [
  {
    title: "Usluge",
    links: [
      { label: "Šoferšajbne", href: "#usluge" },
      { label: "Bočna i zadnja", href: "#usluge" },
      { label: "ADAS kalibracija", href: "#usluge" },
    ],
  },
  {
    title: "Firma",
    links: [
      { label: "O nama", href: "#zasto-mi" }, // → /o-nama kad napravimo stranu
      { label: "Radovi", href: "#radovi" },
      { label: "Za servise", href: "#za-servise" },
    ],
  },
];

// "Sastavnica" — tabela u uglu svakog tehničkog crteža. Potpis sajta.
const year = new Date().getFullYear();
const titleBlock = [
  { k: "Naziv", v: "Staklo Centar Beograd" },
  { k: "Delatnost", v: "Prodaja i ugradnja auto-stakala" },
  { k: "Lokacija", v: "Beograd, Srbija" },
  { k: "Razmera", v: "1 : 1" },
  { k: "List", v: "01 / 01" },
];

// Veliki natpis kao SVG: textLength ga uvek razvuče tačno na širinu, na svakom ekranu.
function Wordmark() {
  return (
    <svg className={styles.wordmark} viewBox="0 0 1000 124" role="img" aria-label="Staklo Centar">
      <defs>
        <clipPath id="wordmark-fill">
          <rect className={styles.wordmarkWipe} x="0" y="0" width="1000" height="124" />
        </clipPath>
      </defs>
      <text x="0" y="112" textLength="1000" lengthAdjust="spacingAndGlyphs" className={styles.wordmarkOutline}>
        STAKLO CENTAR
      </text>
      <text x="0" y="112" textLength="1000" lengthAdjust="spacingAndGlyphs" className={styles.wordmarkFill} clipPath="url(#wordmark-fill)">
        STAKLO CENTAR
      </text>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ---- gornji deo: brend + kolone ---- */}
      <div className={styles.top}>
        <div className={styles.brand}>
          <span className={styles.logo} aria-hidden="true">S</span>
          <div>
            <p className={styles.brandName}>STAKLO CENTAR BEOGRAD</p>
            <p className={styles.tagline}>Prodaja i ugradnja auto-stakala. Beograd i okolina, Srbija.</p>
          </div>
        </div>

        <nav className={styles.columns} aria-label="Linkovi u podnožju">
          {columns.map((col) => (
            <div key={col.title} className={styles.col}>
              <p className={styles.colTitle}>{col.title}</p>
              {col.links.map((l) => (
                <a key={l.label} href={l.href} className={styles.link}>{l.label}</a>
              ))}
            </div>
          ))}

          <div className={styles.col}>
            <p className={styles.colTitle}>Kontakt</p>
            <Phone phone={site.phones.landline} className={styles.link} />
            <Phone phone={site.phones.mobile} className={styles.link} />
            <span className={styles.link}>{site.address.street}, {site.address.city}</span>
          </div>
        </nav>
      </div>

      {/* ---- veliki natpis sa oznakama za sečenje u uglovima ---- */}
      <div className={styles.wordmarkWrap}>
        <span className={`${styles.crop} ${styles.cropTL}`} aria-hidden="true" />
        <span className={`${styles.crop} ${styles.cropTR}`} aria-hidden="true" />
        <span className={`${styles.crop} ${styles.cropBL}`} aria-hidden="true" />
        <span className={`${styles.crop} ${styles.cropBR}`} aria-hidden="true" />
        <Wordmark />
      </div>

      {/* ---- sastavnica ---- */}
      <div className={styles.titleBlock}>
        {titleBlock.map((c) => (
          <div key={c.k} className={styles.cell}>
            <span className={styles.cellKey}>{c.k}</span>
            <span className={styles.cellValue}>{c.v}</span>
          </div>
        ))}
        <a href="#" className={`${styles.cell} ${styles.toTop}`}>
          <span className={styles.cellKey}>Nazad</span>
          <span className={styles.cellValue}>
            NA VRH <span className={styles.toTopArrow} aria-hidden="true">↑</span>
          </span>
        </a>
      </div>

      <p className={styles.copy}>
        © {year} STAKLO CENTAR BEOGRAD. SVA PRAVA ZADRŽANA.
      </p>
    </footer>
  );
}
