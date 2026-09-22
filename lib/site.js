// ============================================================
// PODACI O FIRMI — jedino mesto gde se menjaju kontakt podaci.
// PLACEHOLDER: sve vrednosti sa "X" ili [UGLASTIM] zagradama
// moraju da se zamene pravim podacima pre objave sajta.
// Kad je `href` null, broj se prikazuje kao tekst (ne kao link za poziv).
// ============================================================

export const site = {
  name: "Staklo Centar",
  city: "Čačak",

  phones: {
    // fiksni / dežurni
    landline: { label: "032 XX XX XX", href: null }, // npr. "tel:+38132345678"
    // mobilni
    mobile: { label: "06X XXX XXXX", href: null }, // npr. "tel:+381651234567"
  },

  address: {
    street: "[ADRESA]",
    zip: "32000",
    city: "Čačak",
  },

  hours: [
    { days: "Pon–Pet", time: "[XX–XXh]" },
    { days: "Subota", time: "[XX–XXh]" },
    { days: "Nedelja", time: "[ZATVORENO?]" },
  ],
};

// Linkovi iz glavnog menija. Za sad vode na sekcije landing strane;
// kasnije, kad svaka stavka dobije svoju stranu, menjamo samo `href`.
export const nav = [
  { label: "Usluge", href: "#usluge" },
  { label: "Kako radimo", href: "#kako-radimo" },
  { label: "Radovi", href: "#radovi" },
  { label: "Za servise", href: "#za-servise" },
  { label: "Kontakt", href: "#kontakt" },
];
