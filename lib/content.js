// ============================================================================
//  SAV SADRŽAJ SAJTA — jedino mesto gde se menjaju tekstovi i podaci.
//
//  • Redosled prati upitnik „Staklo Centar — upitnik sa podacima za sajt“.
//    Oznaka „// P8“ znači: odgovor na pitanje 8 iz upitnika ide ovde.
//  • PLACEHOLDER: sve sa "X", [UGLASTIM ZAGRADAMA] ili označeno kao
//    PRIMER mora se zameniti pravim podatkom pre objave sajta.
//  • Menjaj samo vrednosti između navodnika — ne diraj nazive polja.
//  • Za sekcije: `enabled: false` sklanja celu sekciju sa sajta.
// ============================================================================


/* ───────────────────────── 1. OSNOVNI PODACI O FIRMI ───────────────────────── */

export const site = {
  name: "Staklo Centar",                  // P2  brend (kratko, u headeru)
  fullName: "Staklo Centar Beograd",      // P2  pun naziv (footer, naslov taba, SEO)
  legalName: "[ZVANIČAN NAZIV IZ APR-a]", // P1  (ide u podnožje / SEO)
  legalForm: "[PR / D.O.O.]",             // P3
  mb: "[MATIČNI BROJ]",                   // P4
  pib: "[PIB]",                           // P4
  foundedYear: null,                      // P5  npr. 2008
  city: "Beograd",
  tagline: "Prodaja i ugradnja auto-stakala. Beograd i okolina, Srbija.", // P7
  headerSub: "BEOGRAD / AUTO-STAKLA",     // mali red ispod naziva u headeru

  /* ──────────────── 2. KONTAKT ──────────────── */
  // Kad je `href` null, broj se prikazuje kao tekst (ne kao link za poziv).
  phones: {
    landline: { label: "032 XX XX XX", href: null }, // P8  npr. href: "tel:+381111234567"
    mobile: { label: "06X XXX XXXX", href: null },   // P10 npr. href: "tel:+381651234567"
  },
  landlineIs24h: true,                    // P9  false → piše „TELEFON“ umesto „DEŽURNI TELEFON“
  viber: null,                            // P11 npr. "+381651234567"
  whatsapp: null,                         // P11
  email: null,                            // P12 npr. "info@staklocentar.rs"
  responseTime: "Odgovaramo u toku radnog dana, najčešće za 30 minuta.", // P14

  /* ──────────────── 3. LOKACIJA I RADNO VREME ──────────────── */
  address: {
    street: "[ADRESA]",                   // P15
    zip: "[PTT]",                         // P16
    city: "Beograd",
    municipality: null,                   // P16 npr. "Novi Beograd"
  },
  mapsUrl: null,                          // P17 link sa Google mapa
  // Centar Beograda (Trg republike) — PLACEHOLDER; zameniti koordinatama radnje (P17).
  coords: { lat: 44.8163, lng: 20.4602 },
  directions: null,                       // P18 orijentir, parking…

  // Radno vreme. `days`: 0 = nedelja, 1 = ponedeljak … 6 = subota.
  // Sa pravim satima se automatski prikazuju trake i „SADA OTVORENO / ZATVORENO“.
  hours: [
    { label: "Pon–Pet", days: [1, 2, 3, 4, 5], open: 8, close: 16 },  // P19
    { label: "Subota", days: [6], open: 8, close: 14 },               // P20
    { label: "Nedelja", days: [0], open: 8, close: 14, closed: false }, // P21 neradna → closed: true
  ],

  /* ──────────────── 4. DOLAZAK NA ADRESU ──────────────── */
  mobileService: true,                    // P23
  serviceArea: ["Beograd i okolina"],     // P24/P25 npr. ["Novi Beograd", "Zemun", "Voždovac"]

  /* ──────────────── 12. INTERNET PRISUSTVO ──────────────── */
  url: "https://staklo-centar-website.vercel.app", // P70 pravi domen, npr. "https://staklocentar.rs"
  social: {
    googleBusiness: null,                 // P71
    instagram: null,                      // P72
    facebook: null,                       // P72
    tiktok: null,                         // P72
  },
};


/* ───────────────────────── MENI (glavna navigacija) ───────────────────────── */
// Za sad vode na sekcije landing strane; kad stavke dobiju svoje strane, menja se samo `href`.
export const nav = [
  { label: "Usluge", href: "#usluge" },
  { label: "Kako radimo", href: "#kako-radimo" },
  { label: "Radovi", href: "#radovi" },
  { label: "Za servise", href: "#za-servise" },
  { label: "Kontakt", href: "#kontakt" },
];


/* ───────────────────────── HERO (vrh strane) ───────────────────────── */
// `short` = kraća verzija za mobilni.
export const hero = {
  eyebrow: "PRODAJA + PROFESIONALNA UGRADNJA",
  eyebrowShort: "PRODAJA + UGRADNJA",
  title: "Za čas ti zamenimo glass —",    // P67 / P68 (ti ili Vi)
  titleAccent: "brzo sa garancijom.",
  lead: "Šoferšajbne, bočna i zadnja stakla za sve marke vozila. Radimo direktno sa osiguranjem, dolazimo na adresu u Beogradu i okolini.",
  leadShort: "Sve marke vozila, rad sa osiguranjem, dolazak na adresu.",
  callLabel: "POZOVITE ODMAH",
  badge: { value: "60–90", label: "MINUTA ZAMENA", from: 60, to: 90, scaleMax: 120 }, // P42
};

// Traka sa 5 prednosti ispod hero-a. `icon`: shield | clock | glass | document | pin
export const features = [
  { text: "Garancija na ugradnju", icon: "shield" },                              // P43
  { text: "Isti dan / brzo", icon: "clock" },                                     // P41
  { text: "Originalna (OEM) stakla", short: "OEM stakla", icon: "glass" },        // P38
  { text: "Rad sa osiguranjem", icon: "document" },                               // P44
  { text: "Dolazak na adresu", icon: "pin" },                                     // P23
];


/* ───────────────────────── 5. USLUGE ───────────────────────── */
// `icon`: windshieldSwap | rockChip | sideWindow | adasCamera | suctionLifter
// `slug` će biti adresa podstrane, npr. /usluge/zamena-sofersajbne
export const services = {
  intro: "Bez fiksnih cenovnika. Procena se radi po modelu vozila i tipu stakla.", // P39
  items: [
    {
      slug: "zamena-sofersajbne",
      title: "Zamena šoferšajbne",                                               // P28
      desc: "Demontaža i ugradnja novog stakla uz originalna lepila i propisano vreme sušenja.",
      short: "Originalna lepila, propisano sušenje.",
      icon: "windshieldSwap",
    },
    {
      slug: "popravka-udara-kamena",
      title: "Popravka udara kamena",                                            // P30
      desc: "Sanacija manjih oštećenja i pukotina za oko 30 minuta, bez zamene stakla.",
      short: "Sanacija za oko 30 minuta.",
      icon: "rockChip",
    },
    {
      slug: "bocna-i-zadnja-stakla",
      title: "Bočna i zadnja stakla",                                            // P31
      desc: "Kaljena stakla, grejači i senzori za putnička, dostavna i teretna vozila.",
      short: "Kaljena stakla, grejači i senzori.",
      icon: "sideWindow",
    },
    {
      slug: "adas-kalibracija",
      title: "ADAS kalibracija kamera",                                          // P32
      shortTitle: "ADAS kalibracija",
      desc: "Kalibracija kamera i senzora nakon zamene šoferšajbne, po specifikaciji proizvođača.",
      short: "Po specifikaciji proizvođača.",
      icon: "adasCamera",
    },
    {
      slug: "ugradnja",
      title: "Ugradnja",                                                         // P33
      desc: "U radionici ili na vašoj adresi, sa proverom zaptivanja pre predaje vozila.",
      short: "U radionici ili na vašoj adresi.",
      icon: "suctionLifter",
    },
  ],
};


/* ───────────────────────── 6. KAKO RADIMO ───────────────────────── */
// `icon`: phoneCamera | calendar | windshieldInstall | certificate
export const steps = [
  { title: "Pošaljite model vozila", desc: "Marka, model, godina i fotografija oštećenja.", meta: "Poziv ili poruka", icon: "phoneCamera" },            // P40
  { title: "Procena i termin", desc: "Besplatna procena i slobodan termin, najčešće istog dana.", meta: "Najčešće istog dana", icon: "calendar" },     // P41
  { title: "Ugradnja", desc: "60–90 minuta, u radionici ili na vašoj adresi.", meta: "60–90 min", icon: "windshieldInstall" },                          // P42
  { title: "Garancija", desc: "Pisana garancija na ugradnju i zaptivanje.", meta: "Pisani dokument", icon: "certificate" },                            // P43
];


/* ───────────────────────── 8. GALERIJA RADOVA ───────────────────────── */
// PRIMER — nazivi su iz dizajna. Kad stignu fotografije (P48–P53), upisati
// pravo vozilo i putanje, npr. before: "/images/radovi/golf7-pre.jpg".
// Dok je before/after null, prikazuje se tehnički crtež.
// `kind`: windshield | rear | side | chip | adas
export const works = [
  { title: "Golf 7 — šoferšajbna", kind: "windshield", before: null, after: null },          // P48
  { title: "Škoda Octavia — zadnje staklo", kind: "rear", before: null, after: null },       // P49
  { title: "Passat B8 — popravka udara", kind: "chip", before: null, after: null },          // P50
  { title: "Fiat Punto — bočno staklo", kind: "side", before: null, after: null },           // P51
  { title: "Transporter T6 — šoferšajbna", kind: "windshield", before: null, after: null },  // P52
  { title: "BMW 320d — ADAS kalibracija", kind: "adas", before: null, after: null },         // P53
];


/* ───────────────────────── 9. VELEPRODAJA ZA SERVISE ───────────────────────── */
export const wholesale = {
  enabled: true,                                                   // P56 false → sekcija se sklanja
  eyebrow: "ZA AUTO-SERVISE",
  title: "Veleprodaja stakala za servise",
  titleShort: "Veleprodaja stakala",
  lead: "Veleprodajne cene, isporuka u Beogradu istog dana, tehnička podrška i garancija na svaku stavku.",
  benefits: [
    { title: "Veleprodaja stakala i pribora", desc: "Šoferšajbne, bočna i zadnja stakla, lepila, letvice i senzori." }, // P59
    { title: "Brza isporuka", desc: "Beograd istog dana, okolina do 24 sata." },                                        // P57
    { title: "Uslovi za partnere", desc: "Rabat po obimu, odloženo plaćanje." },                                        // P58
    { title: "Tehnička podrška i garancija", desc: "Pomoć pri ugradnji i garancija na svaku stavku." },                  // P60
  ],
  facts: [
    { value: "Isti dan", label: "Isporuka u Beogradu" },           // P57
    { value: "Do 24h", label: "Okolina Beograda" },                // P57
    { value: "Rabat", label: "Po obimu" },                         // P58
  ],
  range: ["Šoferšajbne", "Bočna stakla", "Zadnja stakla", "Lepila", "Letvice", "Senzori"], // P59
  phone: null,  // P61 poseban broj za veleprodaju, npr. { label: "06X XXX XXXX", href: "tel:+38164…" }; null → glavni broj
};


/* ───────────────────────── 10. ZAŠTO MI — brojke i recenzije ───────────────────────── */
// PRIMER — brojke i recenzije NISU prave. Zameniti pre objave (P63–P66)
// ili postaviti `enabled: false` dok ne stignu pravi podaci.
export const whyUs = {
  enabled: true,
  stats: [
    { value: "18", suffix: "+", label: "Godina iskustva", short: "Godina", mobile: "18+" },              // P63
    { value: "12.000", suffix: "+", label: "Ugradnji stakala", short: "Ugradnji", mobile: "12k+" },      // P64
    { value: "4,9", suffix: "/5", label: "Ocena kupaca", short: "Ocena", mobile: "4,9", rating: 4.9 },   // P65
  ],
  reviews: [                                                                                             // P66
    { text: "Pukotina na šoferšajbni u petak, u subotu novo staklo. Sve preko osiguranja, bez komplikacija.", author: "Miloš J., Beograd" },
    { text: "Došli su na adresu i zamenili staklo na kombiju dok smo radili. Profesionalno i bez zastoja.", author: "Auto-servis Petrović" },
    { text: "Objasnili su razliku između OEM i zamenskog stakla i pustili me da sam izaberem.", author: "Jelena S., Zemun" },
  ],
};


/* ───────────────────────── KONTAKT SEKCIJA ───────────────────────── */
export const contact = {
  title: "Zatražite besplatnu procenu",
  lead: "Pozovite nas ili svratite u radionicu.",                  // + site.responseTime (P14)
  checklistTitle: "ZA BRŽU PROCENU PRIPREMITE",
  checklist: [                                                     // P40 / P47
    "Marka, model i godište vozila",
    "Fotografija oštećenja",
    "Da li idete preko osiguranja",
  ],
};


/* ───────────────────────── pomoćno (ne menjati) ───────────────────────── */
// Linkovi ka sekcijama koje su isključene (`enabled: false`) se automatski sklanjaju.
const disabledAnchors = [
  !wholesale.enabled && "#za-servise",
  !whyUs.enabled && "#zasto-mi",
].filter(Boolean);
export const isLinkActive = (href) => !disabledAnchors.includes(href);
