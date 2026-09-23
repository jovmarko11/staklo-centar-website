import { site } from "@/lib/content";
import styles from "./MobileBar.module.css";

// Fiksna traka na dnu ekrana — vidi se samo na mobilnom (CSS).
// Dok nemamo pravi broj, "POZOVI" vodi na kontakt sekciju.
export default function MobileBar() {
  const callHref = site.phones.landline.href ?? "#kontakt";

  return (
    <nav className={styles.bar} aria-label="Brze akcije">
      <a href={callHref} className={styles.call}>
        <svg className={styles.icon} viewBox="0 0 20 20" aria-hidden="true">
          <path d="M5 2 H8 L9.5 6 L7.5 7.5 Q9 11 12.5 12.5 L14 10.5 L18 12 V15 Q18 18 15 18 Q2 17 2 5 Q2 2 5 2 Z" />
        </svg>
        POZOVI
      </a>
      <a href="#kontakt" className={styles.cta}>
        PROCENA
        <span className={styles.arrow} aria-hidden="true">→</span>
      </a>
    </nav>
  );
}
