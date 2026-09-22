import { Archivo, IBM_Plex_Sans } from "next/font/google";
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

// TODO (Marko): ovde ide SEO — title, description, openGraph. Radimo u lekciji 6.
export const metadata = {
  title: "Staklo Centar Čačak",
  description: "Prodaja i ugradnja auto-stakala.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr" className={`${archivo.variable} ${plex.variable}`}>
      <body>{children}</body>
    </html>
  );
}
