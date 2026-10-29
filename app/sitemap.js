import { site } from "@/lib/content";

// Statički izvoz (output: "export"): fajl se generiše jednom, pri build-u.
export const dynamic = "force-static";

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
