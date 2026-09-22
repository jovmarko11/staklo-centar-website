import DimensionLine from "./ui/DimensionLine";
import {
  IconWindshieldSwap,
  IconRockChip,
  IconSideWindow,
  IconAdasCamera,
  IconSuctionLifter,
} from "./ui/icons";
import styles from "./Services.module.css";

// desc = pun opis (desktop), short = kraći opis (mobilni, po dizajnu)
const services = [
  {
    title: "Zamena šoferšajbne",
    desc: "Demontaža i ugradnja novog stakla uz originalna lepila i propisano vreme sušenja.",
    short: "Originalna lepila, propisano sušenje.",
    Icon: IconWindshieldSwap,
  },
  {
    title: "Popravka udara kamena",
    desc: "Sanacija manjih oštećenja i pukotina za oko 30 minuta, bez zamene stakla.",
    short: "Sanacija za oko 30 minuta.",
    Icon: IconRockChip,
  },
  {
    title: "Bočna i zadnja stakla",
    desc: "Kaljena stakla, grejači i senzori za putnička, dostavna i teretna vozila.",
    short: "Kaljena stakla, grejači i senzori.",
    Icon: IconSideWindow,
  },
  {
    title: "ADAS kalibracija kamera",
    shortTitle: "ADAS kalibracija",
    desc: "Kalibracija kamera i senzora nakon zamene šoferšajbne, po specifikaciji proizvođača.",
    short: "Po specifikaciji proizvođača.",
    Icon: IconAdasCamera,
  },
  {
    title: "Ugradnja",
    desc: "U radionici ili na vašoj adresi, sa proverom zaptivanja pre predaje vozila.",
    short: "U radionici ili na vašoj adresi.",
    Icon: IconSuctionLifter,
  },
];

export default function Services() {
  return (
    <section id="usluge" className={styles.services}>
      <div className={styles.head}>
        <h2 className={styles.title}>Usluge</h2>
        <DimensionLine label="05 USLUGA · PROCENA PO MODELU" className={styles.dimension} />
        <p className={styles.intro}>
          Bez fiksnih cenovnika. Procena se radi po modelu vozila i tipu stakla.
        </p>
      </div>

      <ul className={styles.list}>
        {services.map((s, i) => (
          <li key={s.title} className={styles.row}>
            <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
            <s.Icon className={styles.icon} />

            <h3 className={styles.name}>
              {s.shortTitle ? (
                <>
                  <span className={styles.long}>{s.title}</span>
                  <span className={styles.short}>{s.shortTitle}</span>
                </>
              ) : (
                s.title
              )}
            </h3>

            <p className={styles.desc}>
              <span className={styles.long}>{s.desc}</span>
              <span className={styles.short}>{s.short}</span>
            </p>

            <a href="#kontakt" className={styles.link}>
              PROCENA <span className={styles.arrow} aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
