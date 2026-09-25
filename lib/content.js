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
  name: "Čas Glass",                      // P2  brend (header, veliki natpis u footeru)
  fullName: "Čas Glass",                  // P2  pun naziv (footer, naslov taba, SEO)
  legalName: "[ZVANIČAN NAZIV IZ APR-a]", // P1  KASNIJE
  legalForm: "[PR / D.O.O.]",             // P3  KASNIJE
  mb: "[MATIČNI BROJ]",                   // P4  KASNIJE
  pib: "[PIB]",                           // P4  KASNIJE
  foundedYear: 2026,                      // P5
  city: "Beograd",
  tagline: "Prodaja i ugradnja auto-stakala.", // P7
  headerSub: "BEOGRAD / AUTO-STAKLA",     // mali red ispod naziva u headeru

  /* ──────────────── 2. KONTAKT ──────────────── */
  // `label` = kako se broj prikazuje, `href` = link za poziv, `title` = natpis iznad broja.
  phones: {
    primary: { label: "063 668 082", href: "tel:+38163668082", title: "TELEFON" },        // P8 glavni
    secondary: { label: "060 6561 470", href: "tel:+381606561470", title: "DRUGI BROJ" }, // P8
  },
  primaryIs24h: false,                    // P9  true → „DEŽURNI TELEFON“ + tačka koja „diše“
  viber: null,                            // P11
  whatsapp: null,                         // P11
  email: null,                            // P12
  responseTime: null,                     // P14 (nije potvrđeno → ne prikazuje se)

  /* ──────────────── 3. LOKACIJA I RADNO VREME ──────────────── */
  address: {
    street: "Cara Dušana 215",            // P15
    zip: "11080",                         // P16
    city: "Beograd",
    municipality: "Zemun",                // P16
  },
  mapsUrl: "https://maps.app.goo.gl/XCc1uUdNN7fq6R7G7",  // P17
  coords: { lat: 44.8616706, lng: 20.3715795 },          // P17 (iz Google mapa)
  directions: null,                       // P18 bez orijentira

  // Radno vreme. `days`: 0 = nedelja, 1 = ponedeljak … 6 = subota.
  // Sati mogu biti decimalni: 8.5 = 08:30, 16.5 = 16:30.
  hours: [
    { label: "Pon–Pet", days: [1, 2, 3, 4, 5], open: 8.5, close: 16.5 }, // P19
    { label: "Subota", days: [6], open: 8.5, close: 14 },               // P20
    { label: "Nedelja", days: [0], closed: true },                      // P21
  ],
  worksOnHolidays: false,                 // P22

  /* ──────────────── 4. DOLAZAK NA ADRESU ──────────────── */
  mobileService: true,                    // P23 (doplata postoji, ali se ne navodi na sajtu — P26)
  serviceArea: ["Beograd — sve opštine"], // P24/P25 (ne van Beograda)

  /* ──────────────── 12. INTERNET PRISUSTVO ──────────────── */
  url: "https://staklo-centar-website.vercel.app", // P70 domen se kupuje naknadno
  social: {
    googleBusiness: null,                 // P71 naknadno
    instagram: null,                      // P72 naknadno
    facebook: null,                       // P72 naknadno
    tiktok: null,                         // P72 naknadno
  },
};


/* ───────────────────────── SEO (Google, deljenje linka) ───────────────────────── */
export const seo = {
  // ⚠️ Dok je false: Google NE indeksira sajt (preview sa placeholderima).
  // Na dan objave, kad su svi podaci pravi → true.
  launched: false,

  // Naslov u Google rezultatu i na tabu (do ~60 znakova, ključne reči napred).
  title: "Zamena auto-stakla i šoferšajbni Beograd | Čas Glass",
  // Opis ispod naslova u Google rezultatu (do ~155 znakova).
  description:
    "Zamena šoferšajbni, bočnih i zadnjih stakala za sve marke vozila u Beogradu. Sva osiguranja, dolazak na adresu, garancija na rad. Radionica u Zemunu.",
  // Tip firme za Google (schema.org). AutoRepair = auto-servis.
  businessType: "AutoRepair",
  priceRange: null, // npr. "$$" — opciono
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
// `short` = kraća verzija za mobilni. Obraćanje: „ti“ (P68).
export const hero = {
  eyebrow: "PRODAJA + PROFESIONALNA UGRADNJA",
  eyebrowShort: "PRODAJA + UGRADNJA",
  title: "Za čas ti zamenimo glass —",    // P67
  titleAccent: "pozovi nas!",             // P67
  lead: "Šoferšajbne, bočna i zadnja stakla za sve marke vozila. Radimo sa svim osiguranjima i dolazimo na tvoju adresu bilo gde u Beogradu.",
  leadShort: "Sve marke vozila, sva osiguranja, dolazak na adresu.",
  callLabel: "ILI NA BROJ",               // ispod dugmeta: drugi broj
  badge: { value: "60–90", label: "MINUTA U RADIONICI", from: 60, to: 90, scaleMax: 120 }, // P42
};

// Traka sa 5 prednosti ispod hero-a. `icon`: shield | clock | glass | document | pin
export const features = [
  { text: "Garancija na rad", icon: "shield" },                                          // P43
  { text: "Zamena za 60–90 min", short: "60–90 min", icon: "clock" },                    // P42
  { text: "Originalna i zamenska stakla", short: "OEM i zamenska", icon: "glass" },      // P38
  { text: "Sva osiguranja", icon: "document" },                                          // P44/P45
  { text: "Dolazak na adresu", icon: "pin" },                                            // P23
];


/* ───────────────────────── 5. USLUGE ───────────────────────── */
// `icon`: windshieldSwap | rockChip | sideWindow | adasCamera | suctionLifter
// `slug` će biti adresa podstrane. Prazan `desc` → prikazuje se samo naziv (P31).
export const services = {
  intro: "Bez fiksnih cenovnika. Procena se radi po modelu vozila i tipu stakla.", // P39
  items: [
    {
      slug: "zamena-sofersajbne",
      title: "Zamena šoferšajbne",                                               // P28/P29
      desc: "Demontaža i ugradnja novog stakla uz originalna lepila. Vožnja je moguća već 15–30 minuta nakon ugradnje.",
      short: "Vožnja već 15–30 min nakon ugradnje.",
      icon: "windshieldSwap",
    },
    {
      slug: "bocna-i-zadnja-stakla",
      title: "Bočna i zadnja stakla",                                            // P31 (bez opisa)
      desc: "",
      short: "",
      icon: "sideWindow",
    },
    {
      slug: "ugradnja",
      title: "Ugradnja",                                                         // P33
      desc: "U radionici ili na tvojoj adresi.",
      short: "U radionici ili na tvojoj adresi.",
      icon: "suctionLifter",
    },
    {
      slug: "adas-kalibracija",
      title: "ADAS kalibracija kamera",                                          // P32/P27
      shortTitle: "ADAS kalibracija",
      desc: "Kalibracija kamera i senzora nakon zamene šoferšajbne, po specifikaciji proizvođača. Radi se isključivo u radionici.",
      short: "Samo u radionici.",
      icon: "adasCamera",
    },
    // „Popravka udara kamena“ je uklonjena — ne rade reparaciju (P30).
  ],
};


/* ───────────────────────── 6. KAKO RADIMO ───────────────────────── */
// `icon`: phoneCamera | calendar | windshieldInstall | certificate
export const steps = [
  { title: "Pošalji model vozila", desc: "Marka, model, godište i fotografija oštećenja.", meta: "Poziv ili poruka", icon: "phoneCamera" },  // P40
  { title: "Procena i termin", desc: "Procena po modelu vozila i tipu stakla, pa dogovor termina.", meta: "Po dogovoru", icon: "calendar" },     // P41 (bez „besplatno“)
  { title: "Ugradnja", desc: "60–90 minuta u radionici, 90–120 minuta na tvojoj adresi.", meta: "60–120 min", icon: "windshieldInstall" },     // P42
  { title: "Garancija", desc: "Garancija na izvedeni rad.", meta: "Na rad", icon: "certificate" },                                             // P43
];


/* ───────────────────────── 7. OSIGURANJE ───────────────────────── */
export const insurance = {
  allCompanies: true,                                                  // P45
  policies: ["kasko", "dopunsko osiguranje stakla"],                   // P46
  bring: "zapisnik ili evropski izveštaj",                             // P47
};


/* ───────────────────────── 8. GALERIJA RADOVA ───────────────────────── */
// PRIMER — pravi radovi i fotografije stižu naknadno (P48–P53).
// Kad stignu: upisati vozilo i putanje, npr. before: "/images/radovi/rad1-pre.jpg".
// Dok je before/after null, prikazuje se tehnički crtež. `kind`: windshield | rear | side | chip | adas
export const works = [
  { title: "Zamena šoferšajbne", kind: "windshield", before: null, after: null },   // P48
  { title: "Zadnje staklo", kind: "rear", before: null, after: null },             // P49
  { title: "Bočno staklo", kind: "side", before: null, after: null },              // P50
  { title: "Šoferšajbna — kombi", kind: "windshield", before: null, after: null }, // P51
  { title: "Zadnje staklo — karavan", kind: "rear", before: null, after: null },   // P52
  { title: "ADAS kalibracija", kind: "adas", before: null, after: null },          // P53
];


/* ───────────────────────── 9. VELEPRODAJA ZA SERVISE ───────────────────────── */
export const wholesale = {
  enabled: true,                                                   // P56 (samo zamenska stakla)
  eyebrow: "ZA AUTO-SERVISE",
  title: "Veleprodaja stakala za servise",
  titleShort: "Veleprodaja stakala",
  lead: "Zamenska stakla po veleprodajnim cenama, isporuka u Beogradu istog dana i kontrola svakog proizvoda pri prodaji.",
  benefits: [
    { title: "Veleprodaja zamenskih stakala", desc: "Šoferšajbne, bočna i zadnja stakla." },                            // P56/P59
    { title: "Brza isporuka", desc: "Beograd istog dana, okolina do 24 sata." },                                     // P57
    { title: "Uslovi saradnje", desc: "Rabat, rokovi plaćanja i minimalna porudžbina definišu se ugovorom." },       // P58/P62
    { title: "Kontrola kvaliteta", desc: "Svaki proizvod se proverava prilikom prodaje." },                           // P60
  ],
  facts: [
    { value: "Isti dan", label: "Isporuka u Beogradu" },           // P57
    { value: "Do 24h", label: "Okolina Beograda" },                // P57
    { value: "Ugovor", label: "Uslovi saradnje" },                 // P58
  ],
  range: ["Šoferšajbne", "Bočna stakla", "Zadnja stakla"],        // P59
  phone: null,                                                     // P61 → glavni broj
};


/* ───────────────────────── 10. ZAŠTO MI — brojke i recenzije ───────────────────────── */
// Brojke su izbačene (P63–P65). Sekcija je isključena dok ne stignu
// 3 PRAVE recenzije uz dozvolu kupaca (P66) — tada: enabled: true + upisati ih ispod.
export const whyUs = {
  enabled: false,
  stats: [],
  reviews: [
    // { text: "…", author: "Ime P., Zemun" },
  ],
};


/* ───────────────────────── KONTAKT SEKCIJA ───────────────────────── */
export const contact = {
  title: "Pozovi i dogovori zamenu",
  titleShort: "Kontakt",
  lead: "Ili svrati u radionicu u Zemunu.",
  checklistTitle: "ZA BRŽU PROCENU PRIPREMI",
  checklist: [                                                     // P40 / P47
    "Marka, model i godište vozila",
    "Fotografija oštećenja",
    "Preko osiguranja: zapisnik ili evropski izveštaj",
  ],
};


/* ───────────────────────── pomoćno (ne menjati) ───────────────────────── */
// Linkovi ka sekcijama koje su isključene (`enabled: false`) se automatski sklanjaju.
const disabledAnchors = [
  !wholesale.enabled && "#za-servise",
  !whyUs.enabled && "#zasto-mi",
].filter(Boolean);
export const isLinkActive = (href) => !disabledAnchors.includes(href);
