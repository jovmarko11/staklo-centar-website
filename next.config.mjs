/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ceo sajt se pri `npm run build` izvozi kao čist statički sajt u folder `out/`
  // (HTML + CSS + JS + slike) — tako ga hostuje Cloudflare Pages, bez servera.
  output: "export",

  // Statički sajt nema server koji bi u letu smanjivao slike, zato next/image
  // servira fajlove kakvi jesu. Slike u public/ su zato već ručno optimizovane.
  images: { unoptimized: true },
};

export default nextConfig;
