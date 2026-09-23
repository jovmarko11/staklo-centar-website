import { Archivo, IBM_Plex_Sans } from "next/font/google";
import { site, seo } from "@/lib/content";
import { businessJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

// next/font skida fontove u build-u i servira ih sa tvog domena (bez poziva Google-u u runtime-u).
// `variable` pravi CSS varijablu koju koristimo u globals.css (--font-archivo, --font-plex).
const archivo = Archivo({
  subsets: ["latin-ext"],           // latin-ext = naša slova (š, đ, č, ć, ž)
  weight: ["500", "600", "700", "800"],
  variable: "--font-archivo",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
});

// ---------------------------------------------------------------------------
//  SEO — svi tekstovi dolaze iz lib/content.js (site + seo).
//  Favicon (app/icon.svg), ikonica za iPhone (app/apple-icon.png) i slika za
//  deljenje linka (app/opengraph-image.png) Next.js pronalazi sam po imenu fajla.
// ---------------------------------------------------------------------------
export const metadata = {
  metadataBase: new URL(site.url),   // od ovoga se prave pune adrese (canonical, og:image…)
  title: {
    default: seo.title,
    template: `%s | ${site.fullName}`, // podstrane: "Zamena šoferšajbne | Staklo Centar Beograd"
  },
  description: seo.description,
  applicationName: site.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "/",
    siteName: site.fullName,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  // Dok sajt nije objavljen (seo.launched = false), Google ga ne indeksira.
  robots: seo.launched
    ? { index: true, follow: true }
    : { index: false, follow: false },
  // iOS inače sam pretvara brojeve u linkove — mi to radimo kontrolisano (Phone komponenta)
  formatDetection: { telephone: false },
};

// Boja trake browsera na telefonu
export const viewport = {
  themeColor: "#FF6A2C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr-Latn" className={`${archivo.variable} ${plex.variable}`}>
      <body>
        <JsonLd data={businessJsonLd()} />
        {children}
      </body>
    </html>
  );
}
