import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyContactBar from "@/components/layout/StickyContactBar";
import {
  buildJsonLd,
  getGlobalHomepageSchemas,
  getTravelAgencySchema,
  getWebSiteSchema,
} from "@/lib/seo";

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
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "strict-origin-when-cross-origin",
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "travel",
  classification: "Travel, Pilgrimage, Hajj, Umrah, Tourism",
  title: {
    default: `${siteConfig.name} | Hajj, Umrah & Ziyarat Packages from India`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  abstract: siteConfig.tagline,
  alternates: {
    canonical: "/",
    languages: Object.fromEntries(
      siteConfig.languageAlternates.map((l) => [l.hrefLang, l.href])
    ),
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "",
    yandex: "",
    yahoo: "",
    other: {},
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    alternateLocale: ["en_US", "ar_SA"],
    url: siteConfig.url,
    title: `${siteConfig.name} | Sacred Hajj, Umrah & Ziyarat Pilgrimages`,
    description: siteConfig.description,
    determiner: "",
    images: [
      {
        url: siteConfig.defaultOGImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Premium Hajj, Umrah & Ziyarat Packages`,
        type: "image/png",
      },
      {
        url: "/og-square.png",
        width: 1200,
        height: 1200,
        alt: `${siteConfig.name} Logo Square`,
        type: "image/png",
      },
    ],
    emails: [siteConfig.contact.email],
    phoneNumbers: [siteConfig.contact.phoneClean || siteConfig.contact.phone],
    faxNumbers: siteConfig.contact.fax ? [siteConfig.contact.fax] : [],
    ttl: 86400,
    countryName: "India",
    locality: siteConfig.contact.address.city,
    region: siteConfig.contact.address.state,
    postalCode: siteConfig.contact.address.pincode,
    streetAddress: siteConfig.contact.address.street,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Hajj, Umrah & Ziyarat Pilgrimage Packages`,
    description: siteConfig.description,
    creator: "@siddiquetours",
    creatorId: "",
    site: "@siddiquetours",
    siteId: "",
    images: [
      {
        url: siteConfig.defaultTwitterImage,
        width: 1200,
        height: 675,
        alt: `${siteConfig.name} - Sacred Pilgrimage Journeys from India`,
      },
    ],
  },
  facebook: {
    appId: "",
  },
  itunes: {
    appId: "",
    appArgument: "",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.alternateName || "Siddique Tours",
    startupImage: ["/apple-touch-icon.png"],
  },
  appLinks: {
    ios: {
      url: siteConfig.url,
      appStoreId: "",
    },
    android: {
      url: siteConfig.url,
      package: "",
      appName: siteConfig.name,
    },
    web: {
      url: siteConfig.url,
      should_fallback: true,
    },
  },
  archives: [],
  assets: [],
  bookmarks: [],
  other: {
    "geo.region": `IN-${siteConfig.contact.address.state.toUpperCase().slice(0, 2)}`,
    "geo.placename": siteConfig.contact.address.city,
    "geo.position": `${siteConfig.contact.address.geo.lat};${siteConfig.contact.address.geo.lng}`,
    "ICBM": `${siteConfig.contact.address.geo.lat}, ${siteConfig.contact.address.geo.lng}`,
    "business:contact_data:street_address": siteConfig.contact.address.street,
    "business:contact_data:locality": siteConfig.contact.address.city,
    "business:contact_data:region": siteConfig.contact.address.state,
    "business:contact_data:postal_code": siteConfig.contact.address.pincode,
    "business:contact_data:country_name": siteConfig.contact.address.country,
    "business:contact_data:website": siteConfig.url,
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#0b3d2e",
    "msapplication-TileImage": "/mstile-144x144.png",
    "msapplication-config": "/browserconfig.xml",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    notranslate: false,
    indexifembedded: true,
    "max-image-preview": "large",
    "max-snippet": 170,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": 170,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f5ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0b3d2e" },
    { color: "#0b3d2e" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }) {
  const globalSchemas = [
    getTravelAgencySchema(),
    getWebSiteSchema(),
  ];
  const jsonLd = buildJsonLd(...globalSchemas);

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
      prefix="og: https://ogp.me/ns#"
      itemScope
      itemType="https://schema.org/WebSite"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="msapplication-TileColor" content="#0b3d2e" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-text)]">
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <StickyContactBar />
      </body>
    </html>
  );
}
