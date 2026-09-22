import { site } from "@/lib/site";
import Phone from "./Phone";
import styles from "./Wholesale.module.css";

const benefits = [
  { title: "Veleprodaja stakala i pribora", desc: "Šoferšajbne, bočna i zadnja stakla, lepila, letvice i senzori." },
  { title: "Brza isporuka", desc: "Čačak istog dana, okolina do 24 sata." },
  { title: "Uslovi za partnere", desc: "Rabat po obimu, odloženo plaćanje." },
  { title: "Tehnička podrška i garancija", desc: "Pomoć pri ugradnji i garancija na svaku stavku." },
];

const facts = [
  { value: "Isti dan", label: "Isporuka u Čačku" },
  { value: "Do 24h", label: "Okolina Čačka" },
  { value: "Rabat", label: "Po obimu" },
];

const range = ["Šoferšajbne", "Bočna stakla", "Zadnja stakla", "Lepila", "Letvice", "Senzori"];

// Tehnički crtež šoferšajbne (dekoracija) — kotne linije kao na nacrtu.
function Blueprint({ className }) {
  return (
    <svg className={className} viewBox="0 0 320 210" fill="none" aria-hidden="true">
      {/* staklo */}
      <path d="M52 34 Q160 14 268 34 L300 150 Q160 166 20 150 Z" stroke="currentColor" strokeWidth="1.5" />
      {/* crni obod (sitoštampa) */}
      <path d="M62 44 Q160 26 258 44 L286 142 Q160 156 34 142 Z" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
      {/* zona senzora / kamere */}
      <rect x="146" y="26" width="28" height="18" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="160" cy="35" r="4" stroke="currentColor" strokeWidth="1" />
      {/* osa simetrije */}
      <path d="M160 6 V176" stroke="currentColor" strokeWidth="0.75" strokeDasharray="10 4 2 4" />
      {/* kota — širina */}
      <path d="M20 158 V192 M300 158 V192 M20 184 H300" stroke="currentColor" strokeWidth="0.9" />
      <path d="M20 184 l8 -3 v6 z M300 184 l-8 -3 v6 z" fill="currentColor" />
      <text x="160" y="178" textAnchor="middle" className="bp-text">1450</text>
      {/* kota — visina */}
      <path d="M268 34 H314 M300 150 H314 M308 34 V150" stroke="currentColor" strokeWidth="0.9" />
      <path d="M308 34 l-3 8 h6 z M308 150 l-3 -8 h6 z" fill="currentColor" />
      <text x="0" y="0" textAnchor="middle" transform="translate(302 96) rotate(-90)" className="bp-text">880</text>
    </svg>
  );
}

export default function Wholesale() {
  return (
    <section id="za-servise" className={styles.wholesale}>
      {/* LEVO — narandžasti panel */}
      <div className={styles.panel}>
        <p className={styles.eyebrow}>
          <span className={styles.dash} aria-hidden="true" />
          ZA AUTO-SERVISE
        </p>

        <h2 className={styles.title}>
          <span className={styles.long}>Veleprodaja stakala za servise</span>
          <span className={styles.short}>Veleprodaja stakala</span>
        </h2>

        <p className={styles.lead}>
          Veleprodajne cene, isporuka u Čačku istog dana, tehnička podrška i garancija na
          svaku stavku.
        </p>

        <div className={styles.actions}>
          <a href="#kontakt" className={styles.cta}>
            POSTANITE PARTNER <span className={styles.arrow} aria-hidden="true">→</span>
          </a>
          <div className={styles.callBox}>
            <span className={styles.callLabel}>ILI POZOVITE</span>
            <Phone phone={site.phones.landline} className={styles.callPhone} />
          </div>
        </div>

        <Blueprint className={styles.blueprint} />

        <dl className={styles.facts}>
          {facts.map((f) => (
            <div key={f.value} className={styles.fact}>
              <dt className={styles.factValue}>{f.value}</dt>
              <dd className={styles.factLabel}>{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* DESNO — pogodnosti + asortiman */}
      <div className={styles.side}>
        <p className={styles.sideLabel}>ŠTA DOBIJATE KAO PARTNER</p>

        <ol className={styles.list}>
          {benefits.map((b, i) => (
            <li key={b.title} className={styles.item}>
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className={styles.itemTitle}>{b.title}</h3>
                <p className={styles.itemDesc}>{b.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className={`${styles.sideLabel} ${styles.rangeLabel}`}>ASORTIMAN</p>
        <ul className={styles.range}>
          {range.map((r) => (
            <li key={r} className={styles.rangeItem}>{r}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
