import { site, seo } from "@/lib/content";

// Next.js od ovoga pravi /robots.txt — pravila za pretraživače.
export default function robots() {
  return {
    rules: seo.launched
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" }, // preview: ne indeksirati ništa
    sitemap: `${site.url}/sitemap.xml`,
  };
}
