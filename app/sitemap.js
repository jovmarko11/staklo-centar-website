import { site } from "@/lib/content";

// Next.js od ovoga pravi /sitemap.xml — spisak svih strana za Google.
// Kad dodamo podstrane (/usluge/…, /radovi…), dopisujemo ih ovde.
export default function sitemap() {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
