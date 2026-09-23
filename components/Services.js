import DimensionLine from "./ui/DimensionLine";
import { services } from "@/lib/content";
import { ICONS } from "./ui/icons";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="usluge" className={styles.services}>
      <div className={styles.head}>
        <h2 className={styles.title}>Usluge</h2>
        <DimensionLine label={`${String(services.items.length).padStart(2, "0")} USLUGA · PROCENA PO MODELU`} className={styles.dimension} />
        <p className={styles.intro}>
          {services.intro}
        </p>
      </div>

      <ul className={styles.list}>
        {services.items.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
          <li key={s.title} className={styles.row}>
            <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
            <Icon className={styles.icon} />

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
          );
        })}
      </ul>
    </section>
  );
}
