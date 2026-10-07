import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PackageCard from "@/components/packages/PackageCard";
import { getPackagesByCategory } from "@/data/packages";
import { siteConfig } from "@/data/site-config";
import { buildJsonLd, getPageSchemas, getTouristTripSchema, getFAQPageSchema } from "@/lib/seo";

export const metadata = {
  title: "Umrah Packages 2026 | Verified Haram Hotels, Visa & Transport",
  description:
    "Year-round Umrah packages from India. Verified 3-star to 5-star courtyard hotels near Haram in Makkah & Madinah, direct flights, complete visa facilitation, and 24/7 muallim support by Siddique Tours.",
  keywords: [
    "Umrah Packages 2026 from India",
    "Umrah Packages from Gujarat Vapi",
    "Cheap Umrah Package Makkah Madinah",
    "5 Star Umrah Package Haram View",
    "Courtyard Hotel Umrah Package India",
    "Umrah Visa Processing from Vapi",
    "VIP Executive Umrah Private Transfer",
    "Ramadan Umrah Special Package",
    "Family Umrah Group Packages India",
    "Luxury Umrah Package Siddique Tours",
  ],
  alternates: {
    canonical: "/umrah",
    languages: Object.fromEntries(
      siteConfig.languageAlternates.map((l) => [
        l.hrefLang,
        `${l.href}/umrah`,
      ])
    ),
  },
  openGraph: {
    type: "product.group",
    url: `${siteConfig.url}/umrah`,
    title: "Umrah Packages 2026 | Haram Courtyard Hotels, Visa & Transport from India",
    description:
      "From budget-friendly group Umrah to 5-star VIP courtyard suites. Verified hotels, full visa, direct flights, and 24/7 muallim guidance by Siddique Tours Vapi.",
    siteName: siteConfig.name,
    locale: "en_IN",
    alternateLocale: ["en_US", "ar_SA"],
    images: [
      {
        url: "/images/madinah-sanctuary.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Umrah packages — Masjid an-Nabawi courtyard hotels in Madinah",
        type: "image/jpeg",
      },
      {
        url: siteConfig.defaultOGImage,
        width: 1200,
        height: 630,
        alt: "Siddique Tours Umrah Packages from India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umrah Packages 2026 | Verified Hotels Near Haram",
    description:
      "3-Star to 5-Star Umrah packages with visa, transport & muallim. Starting ₹85,000 from India by Siddique Tours Vapi.",
    creator: "@siddiquetours",
    site: "@siddiquetours",
    images: ["/images/madinah-sanctuary.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

function UmrahJsonLd() {
  const umrahPackages = getPackagesByCategory("Umrah");
  const tripSchemas = umrahPackages.map((pkg) => getTouristTripSchema(pkg));
  const umrahFAQs = [
    {
      question: "What is the cost of a 15-day Umrah package from India in 2026?",
      answer:
        "Our 15 Days Classic Umrah Package starts from ₹85,000 per person on quad sharing basis, including return flights, visa, hotels in Makkah (8 nights) & Madinah (6 nights), daily meals, Ziyarat, and AC transport. Premium Executive 10-Day Umrah with direct courtyard hotels & private VIP transfers starts from ₹135,000 per person twin sharing.",
    },
    {
      question: "How many days are required for Umrah?",
      answer:
        "We offer 10-day, 12-day and 15-day Umrah packages. A standard 15-day itinerary allocates 8 nights in Makkah and 6 nights in Madinah, ensuring sufficient time for Tawaf, Sa'i, multiple ziyarat visits, and rest. 10-day Executive packages prioritise Haram-courtyard hotels and private transfers for business travellers and shorter departures.",
    },
    {
      question: "Is Umrah visa included in the package?",
      answer:
        "Yes — every Siddique Tours Umrah package includes full electronic Umrah visa processing with medical insurance, document verification, and Ministry submission. Passport must be valid for minimum 6 months from departure date with at least 2 blank visa pages.",
    },
    {
      question: "Which hotels do you provide near Haram?",
      answer:
        "Classic Umrah packages feature verified 3/4-star hotels such as Dar Al Eiman Makkah (450m from Haram) and Al Ritz Al Madinah (250m from Masjid an-Nabawi). Premium Executive Umrah includes Swissôtel Al Maqam / Clock Tower and Dar Al Taqwa — with direct Haram courtyard access, literally 0 metres walk to the Holy Kaaba and ladies/gents gates.",
    },
  ];
  const pageSchemas = getPageSchemas({
    path: "/umrah",
    title: "Umrah Packages",
    description: metadata.description,
    keywords: metadata.keywords,
    breadcrumbItems: [
      { name: "Home", url: "/" },
      { name: "Umrah Packages", url: "/umrah" },
    ],
    image: "/images/madinah-sanctuary.jpg",
    faqs: umrahFAQs,
  });
  const faq = getFAQPageSchema(umrahFAQs);
  const jsonLd = buildJsonLd(...pageSchemas, faq, ...tripSchemas);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

export default function UmrahPage() {
  const umrahPackages = getPackagesByCategory("Umrah");

  return (
    <div className="bg-[var(--color-background)]">
      <UmrahJsonLd />
      <Breadcrumbs items={[{ name: "Umrah Packages", url: "/umrah" }]} />
      <div className="py-16 sm:py-20">
        <Container>
        <SectionHeading
          badge="Sacred Umrah Journeys"
          title="Curated Umrah Packages"
          subtitle="From budget-friendly group departures to VIP 5-star executive experiences facing the Kaaba courtyard. All packages include Umrah visa, flights, verified hotels, transport, Ziyarat & muallim guidance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {umrahPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        </Container>
      </div>
    </div>
  );
}
