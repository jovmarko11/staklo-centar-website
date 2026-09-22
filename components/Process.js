import styles from "./Process.module.css";

const steps = [
  { title: "Pošaljite model vozila", desc: "Marka, model, godina i fotografija oštećenja." },
  { title: "Procena i termin", desc: "Besplatna procena i slobodan termin, najčešće istog dana." },
  { title: "Ugradnja", desc: "60–90 minuta, u radionici ili na vašoj adresi." },
  { title: "Garancija", desc: "Pisana garancija na ugradnju i zaptivanje." },
];

export default function Process() {
  return (
    <section id="kako-radimo" className={styles.process}>
      <h2 className={styles.title}>Kako radimo</h2>

      <ol className={styles.grid}>
        {steps.map((step, i) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.num}>{i + 1}</span>
            <h3 className={styles.name}>{step.title}</h3>
            <p className={styles.desc}>{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
