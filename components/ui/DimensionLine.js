import styles from "./DimensionLine.module.css";

// Kotna linija kao na tehničkom crtežu: |◄──── NATPIS ────►|
// Na hover roditelja (bilo gde u sekciji) se ne menja — sama linija
// ima blagi efekat kad se pređe mišem preko nje.
export default function DimensionLine({ label, className = "" }) {
  return (
    <div className={`${styles.dimension} ${className}`} aria-hidden="true">
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
