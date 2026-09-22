import { IconShield, IconClock, IconGlass, IconDocument, IconPin } from "./ui/icons";
import styles from "./Features.module.css";

// short = kraća verzija za mobilni (gde se razlikuje)
const items = [
  { text: "Garancija na ugradnju", Icon: IconShield },
  { text: "Isti dan / brzo", Icon: IconClock },
  { text: "Originalna (OEM) stakla", short: "OEM stakla", Icon: IconGlass },
  { text: "Rad sa osiguranjem", Icon: IconDocument },
  { text: "Dolazak na adresu", Icon: IconPin },
];

export default function Features() {
  return (
    <section className={styles.features} aria-label="Prednosti">
      {items.map(({ text, short, Icon }, i) => (
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
      ))}
    </section>
  );
}
