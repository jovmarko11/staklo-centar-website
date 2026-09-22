import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Wholesale from "@/components/Wholesale";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <main>
          <Hero />
          <Features />
          <Services />
          <Process />
          <Gallery />
          <Wholesale />
          <WhyUs />
          <Contact />
        </main>
        <Footer />
      </div>
      <MobileBar />
    </>
  );
}
