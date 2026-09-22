import Header from "@/components/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        {/* sledeće sekcije: Hero, Prednosti, Usluge, Kako radimo, Galerija,
            Veleprodaja, Zašto mi, Kontakt, Footer */}
      </main>
    </div>
  );
}
