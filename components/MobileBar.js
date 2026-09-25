import { site } from "@/lib/content";
import styles from "./MobileBar.module.css";

// Fiksna traka na dnu ekrana — vidi se samo na mobilnom (CSS).
// Levo: lokacija u Google mapama, desno (narandžasto): poziv na glavni broj.
export default function MobileBar() {
  const mapHref = site.mapsUrl ?? "#kontakt";

  return (
    <nav className={styles.bar} aria-label="Brze akcije">
      <a
        href={mapHref}
        className={styles.call}
        {...(site.mapsUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <svg className={styles.icon} viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 18.5 C10 18.5 4 13 4 8.5 A6 6 0 0 1 16 8.5 C16 13 10 18.5 10 18.5 Z" />
          <circle cx="10" cy="8.5" r="2.2" />
        </svg>
        MAPA
      </a>
      <a href={site.phones.primary.href} className={styles.cta}>
        <svg className={styles.icon} viewBox="0 0 20 20" aria-hidden="true">
          <path d="M5 2 H8 L9.5 6 L7.5 7.5 Q9 11 12.5 12.5 L14 10.5 L18 12 V15 Q18 18 15 18 Q2 17 2 5 Q2 2 5 2 Z" />
        </svg>
        POZOVI
      </a>
    </nav>
  );
}
