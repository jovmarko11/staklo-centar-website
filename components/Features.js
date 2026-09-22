import styles from "./Features.module.css";

// short = kraća verzija za mobilni (gde se razlikuje)
const items = [
  { text: "Garancija na ugradnju" },
  { text: "Isti dan / brzo" },
  { text: "Originalna (OEM) stakla", short: "OEM stakla" },
  { text: "Rad sa osiguranjem" },
  { text: "Dolazak na adresu" },
];

export default function Features() {
  return (
    <section className={styles.features} aria-label="Prednosti">
      {items.map((item, i) => (
        <div key={item.text} className={styles.item}>
          <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
          <span className={styles.text}>
            {item.short ? (
              <>
                <span className={styles.long}>{item.text}</span>
                <span className={styles.short}>{item.short}</span>
              </>
            ) : (
              item.text
            )}
          </span>
        </div>
      ))}
    </section>
  );
}
