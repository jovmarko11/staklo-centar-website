import DimensionLine from "./ui/DimensionLine";
import { site, services } from "@/lib/content";
import { ICONS } from "./ui/icons";
import styles from "./Services.module.css";

export default function Services() {
  const n = services.items.length;
  return (
    <section id="usluge" className={styles.services}>
      <div className={styles.head}>
        <h2 className={styles.title}>Usluge</h2>
        <DimensionLine label={`${String(n).padStart(2, "0")} ${n % 10 >= 2 && n % 10 <= 4 && (n < 12 || n > 14) ? "USLUGE" : "USLUGA"} · PROCENA PO MODELU`} className={styles.dimension} />
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

            {s.desc && (
              <p className={styles.desc}>
                <span className={styles.long}>{s.desc}</span>
                <span className={styles.short}>{s.short}</span>
              </p>
            )}

            <a href={site.phones.primary.href} className={styles.link}>
              POZOVI <span className={styles.arrow} aria-hidden="true">→</span>
            </a>
          </li>
          );
        })}
      </ul>
    </section>
  );
}
