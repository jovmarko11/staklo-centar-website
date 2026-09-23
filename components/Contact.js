import { site } from "@/lib/site";
import OpeningHours from "./OpeningHours";
import styles from "./Contact.module.css";

// Forma "Zatraži besplatnu procenu" dolazi kasnije (treba backend).
// Do tada levo su telefoni i šta pripremiti za poziv.

const phones = [
  { number: site.phones.landline.label, href: site.phones.landline.href, label: "DEŽURNI TELEFON", big: true },
  { number: site.phones.mobile.label, href: site.phones.mobile.href, label: "MOBILNI" },
];

const checklist = [
  "Marka, model i godište vozila",
  "Fotografija oštećenja",
  "Da li idete preko osiguranja",
];

function PhoneRow({ phone }) {
  // Ako imamo pravi broj → ceo red je link za poziv; inače običan blok.
  const Tag = phone.href ? "a" : "div";
  return (
    <Tag
      {...(phone.href ? { href: phone.href } : {})}
      className={`${styles.phoneRow} ${phone.big ? styles.phoneBig : ""}`}
    >
      <span className={styles.phoneLabel}>{phone.label}</span>
      <span className={styles.phoneNumber}>{phone.number}</span>
      <span className={styles.callHint} aria-hidden="true">POZOVI →</span>
    </Tag>
  );
}

function Checkbox() {
  return (
    <svg className={styles.check} viewBox="0 0 18 18" aria-hidden="true">
      <rect x="0.5" y="0.5" width="17" height="17" className={styles.checkBox} />
      <path d="M4 9.5 L7.5 13 L14 5.5" className={styles.checkMark} />
    </svg>
  );
}

// Placeholder mape: mreža kao milimetarski papir, krugovi udaljenosti i oznaka lokacije.
function MapPlaceholder() {
  const { lat, lng } = site.coords;
  return (
    <div className={styles.map}>
      <div className={styles.rings} aria-hidden="true">
        <span /><span /><span />
      </div>

      <svg className={styles.pin} viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" />
        <path d="M20 2 V11 M20 29 V38 M2 20 H11 M29 20 H38" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className={styles.mapLabel}>
        <span className={styles.mapTitle}>MAPA — BEOGRAD</span>
        <span className={styles.mapCoords}>
          {lat.toFixed(4)}° N · {lng.toFixed(4)}° E
        </span>
      </div>

      <div className={styles.mapScale} aria-hidden="true">
        <span className={styles.mapScaleBar} />
        <span>200 m</span>
      </div>
    </div>
  );
}

export default function Contact() {
  const { street, zip, city } = site.address;

  return (
    <section id="kontakt" className={styles.contact}>
      {/* ================= LEVO ================= */}
      <div className={styles.main}>
        <p className={styles.eyebrow}>
          <span className={styles.dash} aria-hidden="true" />
          KONTAKT
        </p>

        <h2 className={styles.title}>
          <span className={styles.long}>Zatražite besplatnu procenu</span>
          <span className={styles.short}>Kontakt</span>
        </h2>
        <p className={styles.lead}>
          Pozovite nas ili svratite u radionicu. Odgovaramo u toku radnog dana, najčešće za
          30 minuta.
        </p>

        <div className={styles.phones}>
          {phones.map((p) => (
            <PhoneRow key={p.label} phone={p} />
          ))}
        </div>

        <div className={styles.prepare}>
          <p className={styles.smallLabel}>ZA BRŽU PROCENU PRIPREMITE</p>
          <ul className={styles.checklist}>
            {checklist.map((item) => (
              <li key={item} className={styles.checkItem}>
                <Checkbox />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ================= DESNO ================= */}
      <div className={styles.side}>
        <div className={styles.hoursBox}>
          <OpeningHours hours={site.hours} />
        </div>

        <div className={styles.location}>
          <p className={styles.smallLabel}>LOKACIJA</p>
          <address className={styles.address}>
            {street}
            <br />
            {zip} {city}
          </address>
        </div>

        <MapPlaceholder />
      </div>
    </section>
  );
}
