import DimensionLine from "./ui/DimensionLine";
import { IconPhoneCamera, IconCalendar, IconWindshieldInstall, IconCertificate } from "./ui/icons";
import styles from "./Process.module.css";

const steps = [
  { title: "Pošaljite model vozila", desc: "Marka, model, godina i fotografija oštećenja.", meta: "Poziv ili poruka", Icon: IconPhoneCamera },
  { title: "Procena i termin", desc: "Besplatna procena i slobodan termin, najčešće istog dana.", meta: "Najčešće istog dana", Icon: IconCalendar },
  { title: "Ugradnja", desc: "60–90 minuta, u radionici ili na vašoj adresi.", meta: "60–90 min", Icon: IconWindshieldInstall },
  { title: "Garancija", desc: "Pisana garancija na ugradnju i zaptivanje.", meta: "Pisani dokument", Icon: IconCertificate },
];

export default function Process() {
  return (
    <section id="kako-radimo" className={styles.process}>
      <div className={styles.head}>
        <h2 className={styles.title}>Kako radimo</h2>
        <DimensionLine label="04 KORAKA · OD POZIVA DO GARANCIJE" className={styles.dimension} />
      </div>

      {/* Tok kao dijagram: iznad kartica ide "šina" sa čvorovima.
          Pređeš li mišem preko koraka N, šina se popuni do tog koraka. */}
      <ol className={styles.grid}>
        {steps.map(({ title, desc, meta, Icon }, i) => (
          <li key={title} className={styles.step}>
            <div className={styles.track} aria-hidden="true">
              <span className={styles.node} />
              <span className={styles.seg} />
              {i < steps.length - 1 && <span className={styles.arrowHead} />}
            </div>

            <div className={styles.top}>
              <span className={styles.num}>{i + 1}</span>
              <Icon className={styles.icon} />
            </div>

            <h3 className={styles.name}>{title}</h3>
            <p className={styles.desc}>{desc}</p>

            <p className={styles.meta}>
              <span className={styles.metaKey}>KORAK {i + 1}/{steps.length}</span>
              <span className={styles.metaVal}>{meta}</span>
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
