import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        {/* sledeće: Kako radimo, Galerija, Veleprodaja, Zašto mi, Kontakt, Footer */}
      </main>
    </div>
  );
}
