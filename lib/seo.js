// Pomoćne funkcije za SEO. Sve čita iz lib/content.js — ovde ništa ne menjati.
import { site, seo, services } from "./content";

// Placeholder vrednosti ("[ADRESA]", "032 XX XX XX", null…) NE šaljemo Google-u.
export function isReal(value) {
  if (value == null || value === "") return false;
  if (typeof value !== "string") return true;
  return !/\[|\]|XX|06X/.test(value);
}
const real = (v) => (isReal(v) ? v : undefined);

// "tel:+381651234567" → "+381651234567"
const telFromHref = (href) => (isReal(href) ? href.replace(/^tel:/, "") : undefined);

// Dani u formatu schema.org
const DAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const hhmm = (h) => `${String(Math.floor(h)).padStart(2, "0")}:${String(Math.round((h % 1) * 60)).padStart(2, "0")}`;

/**
 * JSON-LD opis firme (schema.org). Google iz ovoga čita naziv, telefon,
 * adresu, radno vreme, oblast rada i usluge — bez pogađanja iz teksta.
 * Polja sa placeholderima se automatski izostavljaju.
 */
export function businessJsonLd() {
  const phone = telFromHref(site.phones.primary.href) ?? telFromHref(site.phones.secondary.href);

  const hasStreet = isReal(site.address.street);
  const address = {
    "@type": "PostalAddress",
    streetAddress: hasStreet ? site.address.street : undefined,
    postalCode: real(site.address.zip),
    addressLocality: site.address.city,
    addressCountry: "RS",
  };

  const openingHoursSpecification = site.hours
    .filter((h) => !h.closed && h.open != null && h.close != null)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => DAY[d]),
      opens: hhmm(h.open),
      closes: hhmm(h.close),
    }));

  const sameAs = Object.values(site.social).filter(isReal);

  const data = {
    "@context": "https://schema.org",
    "@type": seo.businessType,
    "@id": `${site.url}/#firma`,
    name: site.fullName,
    legalName: real(site.legalName),
    description: seo.description,
    url: site.url,
    image: `${site.url}/opengraph-image.png`,
    logo: `${site.url}/apple-icon.png`,
    telephone: phone,
    email: real(site.email),
    priceRange: real(seo.priceRange),
    address,
    // koordinate šaljemo tek kad je poznata prava adresa (sada su centar grada)
    geo: hasStreet
      ? { "@type": "GeoCoordinates", latitude: site.coords.lat, longitude: site.coords.lng }
      : undefined,
    hasMap: real(site.mapsUrl),
    openingHoursSpecification: openingHoursSpecification.length ? openingHoursSpecification : undefined,
    areaServed: site.serviceArea.map((name) => ({ "@type": "Place", name })),
    sameAs: sameAs.length ? sameAs : undefined,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usluge",
      itemListElement: services.items.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.desc },
      })),
    },
  };

  // JSON.stringify izbacuje `undefined` polja → u izlazu ostaje samo ono što je pravo
  return data;
}
