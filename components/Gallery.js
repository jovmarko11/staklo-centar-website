import styles from "./Gallery.module.css";

// PLACEHOLDER: nazivi radova su iz dizajna. Kad fotograf pošalje slike,
// ovde upisujemo prave radove i putanje do slika (npr. "/images/radovi/golf7-pre.jpg").
// Dok je `before`/`after` null, prikazuje se sivo polje.
const works = [
  { title: "Golf 7 — šoferšajbna", before: null, after: null },
  { title: "Škoda Octavia — zadnje staklo", before: null, after: null },
  { title: "Passat B8 — popravka udara", before: null, after: null },
  { title: "Fiat Punto — bočno staklo", before: null, after: null },
  { title: "Transporter T6 — šoferšajbna", before: null, after: null },
  { title: "BMW 320d — ADAS kalibracija", before: null, after: null },
];

function Photo({ src, label, variant, alt }) {
  return (
    <div className={`${styles.photo} ${styles[variant]}`}>
      {src && <img src={src} alt={alt} className={styles.img} loading="lazy" />}
      <span className={styles.tag}>{label}</span>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="radovi" className={styles.gallery}>
      <div className={styles.head}>
        <h2 className={styles.title}>
          <span className={styles.long}>Galerija radova</span>
          <span className={styles.short}>Radovi</span>
        </h2>
        {/* TODO: postaje link ka strani /radovi kad je napravimo */}
        <span className={styles.more}>PRE / POSLE · SVI RADOVI →</span>
      </div>

      <ul className={styles.grid}>
        {works.map((w) => (
          <li key={w.title} className={styles.card}>
            <div className={styles.pair}>
              <Photo src={w.before} label="PRE" variant="before" alt={`${w.title} — pre`} />
              <Photo src={w.after} label="POSLE" variant="after" alt={`${w.title} — posle`} />
            </div>
            <p className={styles.caption}>{w.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
