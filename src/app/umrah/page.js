import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PackageCard from "@/components/packages/PackageCard";
import PageHero from "@/components/common/PageHero";
import FaqAccordion from "@/components/common/FAQAccordion";
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
    type: "website",
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

function UmrahJsonLd() {
  const umrahPackages = getPackagesByCategory("Umrah");
  const tripSchemas = umrahPackages.map((pkg) => getTouristTripSchema(pkg));
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

const courtyardPillars = [
  {
    icon: "🕋",
    title: "0 Metres Courtyard Walk",
    desc: "Direct access to the marble courtyards of the Haram in Makkah and Madinah.",
  },
  {
    icon: "🚘",
    title: "Private VIP GMC Transfers",
    desc: "Chauffeur-driven private airport transfers and seamless inter-city express transits.",
  },
  {
    icon: "📖",
    title: "Devoted Scholar Muallims",
    desc: "Step-by-step guidance through Tawaf, Sa'i, and sacred spiritual etiquettes.",
  },
];

export default function UmrahPage() {
  const umrahPackages = getPackagesByCategory("Umrah");

  return (
    <div className="bg-[var(--color-background)]">
      <UmrahJsonLd />

      {/* Cinematic Hero */}
      <PageHero
        badge="Year-Round Pilgrimages"
        title="Sanctuary in the"
        titleHighlight="City of Light."
        subtitle="Handcrafted Umrah packages featuring verified courtyard sanctuaries, full visa logistics, and devoted on-ground scholar care."
        imageSrc="/images/madinah-sanctuary.jpg"
        imageAlt="Prophet's Mosque courtyard sanctuary in Madinah"
        breadcrumbs={[{ name: "Umrah Packages", url: "/umrah" }]}
      />

      {/* The Courtyard Standard (Visual Value Pillars) */}
      <section aria-label="The Courtyard Standard" className="py-12 border-b border-[var(--color-sage)]/50 bg-[var(--color-surface)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courtyardPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/60 hover:border-[var(--color-accent)]/50 transition-colors"
              >
                <span className="text-2xl p-2 rounded-xl bg-white shadow-xs border border-[var(--color-sage)]/40" aria-hidden="true">
                  {pillar.icon}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-[var(--color-primary)]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Curated Package Showcase */}
      <section aria-label="Available Umrah packages" className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            badge="Curated Collections"
            title="Choose Your Sacred Itinerary"
            subtitle="Transparent pricing, verified courtyard hotels, and dedicated care for individuals and multi-generational families."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {umrahPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          {/* Interactive FAQ Accordion */}
          <div className="mt-28">
            <FaqAccordion items={umrahFAQs} title="Frequently Asked Questions" />
          </div>
        </Container>
      </section>
    </div>
  );
}
