import { site, seo } from "@/lib/content";

// Statički izvoz (output: "export"): fajl se generiše jednom, pri build-u.
export const dynamic = "force-static";

// Next.js od ovoga pravi /robots.txt — pravila za pretraživače.
export default function robots() {
  return {
    rules: seo.launched
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" }, // preview: ne indeksirati ništa
    sitemap: `${site.url}/sitemap.xml`,
  };
}
