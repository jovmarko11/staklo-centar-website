import styles from "./HeroDrawing.module.css";

// Tehnički crtež vozila (bočni izgled) sa kotama i oznakama stakala.
// Linije se "iscrtaju" pri učitavanju strane (CSS animacija),
// a pređeš li mišem preko stakla ili njegove oznake — ono se istakne.
// Kote su dimenzije jednog kompaktnog hečbeka (mm).

const d = (s) => ({ style: { "--d": `${s}s` } }); // kašnjenje animacije

export default function HeroDrawing() {
  return (
    <svg className={styles.drawing} viewBox="12 56 584 336" role="img"
      aria-label="Tehnički crtež vozila sa označenim šoferšajbnom, bočnim i zadnjim staklom">

      {/* ---------- tlo ---------- */}
      <path pathLength="1" className={`${styles.line} ${styles.thin}`} {...d(0)} d="M20 332 H585" />

      {/* ---------- karoserija ---------- */}
      <path pathLength="1" className={`${styles.line} ${styles.body}`} {...d(0.1)}
        d="M60 306 L58 256 Q58 234 74 228 L210 206 L296 146 L432 144 L508 198 Q540 204 546 224 L548 270 L546 306 L488 306 A48 48 0 0 0 392 306 L198 306 A48 48 0 0 0 102 306 Z" />

      {/* linija struka, vrata, kvake, svetla */}
      <path pathLength="1" className={`${styles.line} ${styles.thin}`} {...d(0.5)}
        d="M214 208 L506 202 M368 152 V300 M236 206 V300 M330 226 H346 M430 224 H446" />
      <path pathLength="1" className={`${styles.line} ${styles.thin}`} {...d(0.6)}
        d="M61 244 L88 238 V249 L60 253 Z M540 214 H546 L547 238 H540 Z" />

      {/* ---------- točkovi ---------- */}
      {[150, 440].map((cx, i) => (
        <g key={cx}>
          <circle pathLength="1" className={`${styles.line} ${styles.body}`} {...d(0.4 + i * 0.1)} cx={cx} cy="298" r="34" />
          <circle pathLength="1" className={`${styles.line} ${styles.thin}`} {...d(0.6 + i * 0.1)} cx={cx} cy="298" r="20" />
          <circle pathLength="1" className={`${styles.line} ${styles.thin}`} {...d(0.7 + i * 0.1)} cx={cx} cy="298" r="4" />
          {/* osa točka */}
          <path pathLength="1" className={`${styles.line} ${styles.axis}`} {...d(0.8)} d={`M${cx} 252 V344 M${cx - 46} 298 H${cx + 46}`} />
        </g>
      ))}

      {/* ---------- STAKLA + oznake (hover grupe) ---------- */}
      <g className={styles.part}>
        <polygon className={styles.glass} points="212,205 294,148 305,148 229,204" />
        <path pathLength="1" className={`${styles.line} ${styles.leader}`} {...d(1.1)} d="M258 176 L204 112 H108" />
        <rect className={styles.dot} x="255" y="173" width="6" height="6" />
        <text className={styles.callout} x="108" y="104">01 ŠOFERŠAJBNA</text>
      </g>

      <g className={styles.part}>
        <polygon className={styles.glass} points="240,203 300,152 364,152 364,203" />
        <polygon className={styles.glass} points="372,152 428,152 480,202 372,202" />
        <path pathLength="1" className={`${styles.line} ${styles.leader}`} {...d(1.2)} d="M330 180 V70 H356" />
        <rect className={styles.dot} x="327" y="177" width="6" height="6" />
        <text className={styles.callout} x="360" y="74">02 BOČNA STAKLA</text>
      </g>

      <g className={styles.part}>
        <polygon className={styles.glass} points="436,146 446,146 512,196 500,198" />
        <path pathLength="1" className={`${styles.line} ${styles.leader}`} {...d(1.3)} d="M472 170 L514 112 H548" />
        <rect className={styles.dot} x="469" y="167" width="6" height="6" />
        <text className={styles.callout} x="548" y="104" textAnchor="end">03 ZADNJE STAKLO</text>
      </g>

      {/* ---------- ugao šoferšajbne (šestar) ---------- */}
      <path pathLength="1" className={`${styles.line} ${styles.axis}`} {...d(1.0)} d="M210 206 H276" />
      <path pathLength="1" className={`${styles.line} ${styles.arc}`} {...d(1.2)} d="M256 206 A46 46 0 0 0 246.8 178.4" />
      <text className={styles.dim} x="262" y="196">37°</text>

      {/* ---------- kote ---------- */}
      {/* međuosovinsko rastojanje */}
      <path pathLength="1" className={`${styles.line} ${styles.dimLine}`} {...d(1.4)} d="M150 336 V356 M440 336 V356 M150 350 H440" />
      <path className={styles.arrow} d="M150 350 l8 -3 v6 z M440 350 l-8 -3 v6 z" />
      <text className={styles.dim} x="295" y="345" textAnchor="middle">2 637</text>

      {/* ukupna dužina */}
      <path pathLength="1" className={`${styles.line} ${styles.dimLine}`} {...d(1.5)} d="M58 312 V386 M548 312 V386 M58 380 H548" />
      <path className={styles.arrow} d="M58 380 l8 -3 v6 z M548 380 l-8 -3 v6 z" />
      <text className={styles.dim} x="303" y="375" textAnchor="middle">4 255</text>

      {/* visina */}
      <path pathLength="1" className={`${styles.line} ${styles.dimLine}`} {...d(1.6)} d="M440 144 H590 M552 332 H590 M582 144 V332" />
      <path className={styles.arrow} d="M582 144 l-3 8 h6 z M582 332 l-3 -8 h6 z" />
      <text className={styles.dim} x="0" y="0" textAnchor="middle" transform="translate(575 238) rotate(-90)">1 452</text>
    </svg>
  );
}
