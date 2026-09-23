import { features } from "@/lib/content";
import { ICONS } from "./ui/icons";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <section className={styles.features} aria-label="Prednosti">
      {features.map(({ text, short, icon }, i) => {
        const Icon = ICONS[icon];
        return (
        <div key={text} className={styles.item}>
          <div className={styles.row}>
            <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
            <Icon className={styles.icon} />
          </div>
          <span className={styles.text}>
            {short ? (
              <>
                <span className={styles.long}>{text}</span>
                <span className={styles.short}>{short}</span>
              </>
            ) : (
              text
            )}
          </span>
        </div>
        );
      })}
    </section>
  );
}
