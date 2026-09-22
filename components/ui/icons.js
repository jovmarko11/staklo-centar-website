// Tehničke ikonice (linijski crtež). Svaki element ima pathLength="1",
// pa CSS može da ih "iscrta" animacijom stroke-dashoffset 1 → 0.
const common = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "square",
  strokeLinejoin: "miter",
  "aria-hidden": true,
};

/* ---------- 24×24: traka prednosti ---------- */

export function IconShield(props) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.5" {...common} {...props}>
      <path pathLength="1" d="M12 3 L19 6 V11 C19 15.5 16 19 12 21 C8 19 5 15.5 5 11 V6 Z" />
      <path pathLength="1" d="M9 12 L11.2 14.2 L15.5 9.8" />
    </svg>
  );
}

export function IconClock(props) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.5" {...common} {...props}>
      <circle pathLength="1" cx="12" cy="12.5" r="8" />
      <path pathLength="1" d="M12 8 V12.5 L15 14.5" />
      <path pathLength="1" d="M10 2.5 H14 M12 2.5 V4.5" />
    </svg>
  );
}

export function IconGlass(props) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.5" {...common} {...props}>
      <path pathLength="1" d="M5 7.5 Q12 5 19 7.5 L21.5 17 Q12 19 2.5 17 Z" />
      <path pathLength="1" d="M8 10 L6.8 14.5" />
    </svg>
  );
}

export function IconDocument(props) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.5" {...common} {...props}>
      <path pathLength="1" d="M6 3 H14 L18 7 V21 H6 Z" />
      <path pathLength="1" d="M14 3 V7 H18" />
      <path pathLength="1" d="M9 12 H15 M9 15.5 H15 M9 19 H12" />
    </svg>
  );
}

export function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.5" {...common} {...props}>
      <path pathLength="1" d="M12 21.5 C12 21.5 5 15 5 9.8 A7 7 0 0 1 19 9.8 C19 15 12 21.5 12 21.5 Z" />
      <circle pathLength="1" cx="12" cy="9.8" r="2.5" />
    </svg>
  );
}

/* ---------- 48×48: usluge ---------- */

export function IconWindshieldSwap(props) {
  return (
    <svg viewBox="0 0 48 48" strokeWidth="1.5" {...common} {...props}>
      <path pathLength="1" d="M9 14 Q24 9 39 14 L44 34 Q24 38 4 34 Z" />
      <path pathLength="1" d="M15 21 H31 M27 17.5 L31 21 L27 24.5" />
      <path pathLength="1" d="M33 28 H17 M21 24.5 L17 28 L21 31.5" />
    </svg>
  );
}

export function IconRockChip(props) {
  return (
    <svg viewBox="0 0 48 48" strokeWidth="1.5" {...common} {...props}>
      <path pathLength="1" d="M9 14 Q24 9 39 14 L44 34 Q24 38 4 34 Z" />
      <circle pathLength="1" cx="28" cy="23" r="2" />
      <path pathLength="1" d="M29.5 21.5 L34 17 M30 23.5 L36 25 M28.8 25 L31 31 M26.3 24.2 L21 28.5 M26.4 21.8 L22 18.5" />
    </svg>
  );
}

export function IconSideWindow(props) {
  return (
    <svg viewBox="0 0 48 48" strokeWidth="1.5" {...common} {...props}>
      <path pathLength="1" d="M5 35 L16 13 H34 Q43 13 43 22 V35 Z" />
      <path pathLength="1" d="M10.5 31.5 L18.5 16.5 H33.5 Q39.5 16.5 39.5 22.5 V31.5 Z" strokeDasharray="2 2.5" />
      <path pathLength="1" d="M26 13 V35" />
    </svg>
  );
}

export function IconAdasCamera(props) {
  return (
    <svg viewBox="0 0 48 48" strokeWidth="1.5" {...common} {...props}>
      <path pathLength="1" d="M5 18 H19 V30 H5 Z" />
      <circle pathLength="1" cx="12" cy="24" r="3" />
      <path pathLength="1" d="M19 21 L41 12 M19 27 L41 36" />
      <path pathLength="1" d="M37 24 H45 M41 20 V28" />
      <circle pathLength="1" cx="41" cy="24" r="2.5" />
    </svg>
  );
}

export function IconSuctionLifter(props) {
  return (
    <svg viewBox="0 0 48 48" strokeWidth="1.5" {...common} {...props}>
      <path pathLength="1" d="M10 12 H38 V16 H10 Z" />
      <path pathLength="1" d="M16 16 V23 M32 16 V23" />
      <path pathLength="1" d="M8 29 Q8 23 16 23 Q24 23 24 29 Z" />
      <path pathLength="1" d="M24 29 Q24 23 32 23 Q40 23 40 29 Z" />
      <path pathLength="1" d="M3 34 H45" strokeDasharray="3 3" />
    </svg>
  );
}

/* ---------- 48×48: koraci "Kako radimo" ---------- */

export function IconPhoneCamera(props) {
  return (
    <svg viewBox="0 0 48 48" strokeWidth="1.5" {...common} {...props}>
      <path pathLength="1" d="M14 4 H34 V44 H14 Z" />
      <path pathLength="1" d="M21 8 H27 M22 40 H26" />
      <path pathLength="1" d="M18 15 H30 V32 H18 Z" />
      <circle pathLength="1" cx="24" cy="23.5" r="4" />
    </svg>
  );
}

export function IconCalendar(props) {
  return (
    <svg viewBox="0 0 48 48" strokeWidth="1.5" {...common} {...props}>
      <path pathLength="1" d="M6 10 H42 V42 H6 Z" />
      <path pathLength="1" d="M6 18 H42 M15 5 V14 M33 5 V14" />
      <path pathLength="1" d="M12 25 H17 M21.5 25 H26.5 M31 25 H36 M12 33 H17 M21.5 33 H26.5" />
      <path pathLength="1" d="M30 30 H37 V37 H30 Z" />
    </svg>
  );
}

export function IconWindshieldInstall(props) {
  return (
    <svg viewBox="0 0 48 48" strokeWidth="1.5" {...common} {...props}>
      <path pathLength="1" d="M10 8 Q24 4 38 8 L42 22 Q24 25 6 22 Z" />
      <path pathLength="1" d="M24 26 V37 M19.5 32.5 L24 37 L28.5 32.5" />
      <path pathLength="1" d="M4 44 L8 40 H40 L44 44" />
    </svg>
  );
}

export function IconCertificate(props) {
  return (
    <svg viewBox="0 0 48 48" strokeWidth="1.5" {...common} {...props}>
      <path pathLength="1" d="M5 7 H43 V33 H5 Z" />
      <path pathLength="1" d="M11 14 H37 M11 20 H27" />
      <circle pathLength="1" cx="34" cy="31" r="6" />
      <path pathLength="1" d="M30.5 36 L28.5 44 L32 42 L34 45 L36 37" />
    </svg>
  );
}
