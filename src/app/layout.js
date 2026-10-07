import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyContactBar from "@/components/layout/StickyContactBar";
import { getTravelAgencySchema } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${siteConfig.name} | Hajj, Umrah & Ziyarat Packages`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Hajj Packages",
    "Umrah Packages",
    "Ziyarat Tours",
    "Umrah Visa India",
    "Luxury Umrah Makkah",
    "Siddique Tours and Travels",
  ],
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} | Sacred Pilgrimage Journeys`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = getTravelAgencySchema();

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-text)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyContactBar />
      </body>
    </html>
  );
}
