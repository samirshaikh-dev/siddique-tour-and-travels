import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PackageCard from "@/components/packages/PackageCard";
import PageHero from "@/components/common/PageHero";
import FaqAccordion from "@/components/common/FAQAccordion";
import { getPackagesByCategory } from "@/data/packages";
import { siteConfig } from "@/data/site-config";
import { buildJsonLd, getPageSchemas, getTouristTripSchema, getFAQPageSchema } from "@/lib/seo";

export const metadata = {
  title: "Umrah Packages 2026 from Vapi, Gujarat | Verified Haram Hotels & Flights",
  description:
    `All-inclusive 15-day and 10-day Umrah packages from Vapi (396191) & South Gujarat. Verified courtyard hotels near Haram in Makkah & Madinah, Mumbai & Surat flight connections, full visa facilitation, and 24/7 muallim guidance by ${siteConfig.name}.`,
  keywords: [
    "Umrah Packages 2026 Vapi",
    "Umrah Packages from Vapi Gujarat 396191",
    "Best Umrah Operator Vapi Valsad",
    "5 Star Umrah Package Haram View Vapi",
    "Umrah Visa Facilitation Vapi",
    "Umrah Packages from Surat Airport",
    "Umrah from Mumbai Airport for Gujarat Pilgrims",
    "Ramadan Umrah Special Vapi 396191",
    "Family Umrah Group Packages South Gujarat",
    siteConfig.name,
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
    title: "Umrah Packages 2026 from Vapi, Gujarat | Verified Haram Hotels & Flights",
    description:
      `From budget-friendly group Umrah to 5-star VIP courtyard suites for pilgrims from Vapi (396191) & South Gujarat. Verified hotels, full visa, direct flights, and 24/7 muallim guidance by ${siteConfig.name}.`,
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
        alt: `${siteConfig.name} Umrah Packages from Vapi Gujarat`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umrah Packages 2026 from Vapi, Gujarat | Verified Haram Hotels",
    description:
      `3-Star to 5-Star Umrah packages with visa, transport & muallim. Starting ₹85,000 from Vapi (396191) by ${siteConfig.name}.`,
    creator: siteConfig.socials.twitter || "@alsafwatravels",
    site: siteConfig.socials.twitter || "@alsafwatravels",
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
    question: "How do pilgrims from Vapi (396191) travel for Umrah?",
    answer:
      "Pilgrims from Vapi, Valsad, and South Gujarat are provided complete transit coordination. We arrange doorstep pickup or group coach departures from Vapi to Mumbai International Airport (BOM, 160km) or Surat Airport (STV, 115km) for direct flights to Jeddah or Madinah. All ground logistics in Saudi Arabia, including luxury AC coaches or private VIP GMC transfers between Makkah and Madinah, are handled end-to-end.",
  },
  {
    question: "What is the cost of a 15-day Umrah package from Vapi in 2026?",
    answer:
      "Our 15 Days Classic Umrah Package starts from ₹85,000 per person on quad sharing basis, including return flights, Saudi electronic visa, verified hotels in Makkah (8 nights) & Madinah (6 nights), 3 daily meals, guided historical Ziyarat, and AC transport. Premium Executive 10-Day Umrah with direct courtyard access & private VIP transfers starts from ₹135,000 per person.",
  },
  {
    question: "How many days are required for Umrah?",
    answer:
      "We offer 10-day, 12-day and 15-day Umrah packages. A standard 15-day itinerary allocates 8 nights in Makkah and 6 nights in Madinah, ensuring sufficient time for Tawaf, Sa'i, multiple ziyarat visits, and rest. 10-day Executive packages prioritise Haram-courtyard hotels and private transfers for business travellers and shorter departures.",
  },
  {
    question: "Is Umrah visa included in the package for Gujarat residents?",
    answer:
      `Yes — every ${siteConfig.name} Umrah package includes full electronic Umrah visa processing with medical insurance, document verification, and Ministry submission. Passport must be valid for minimum 6 months from departure date with at least 2 blank visa pages. Residents of Vapi, Daman, and Silvassa can submit original documents at our Vapi office.`,
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
      <section aria-label="The Courtyard Standard" className="py-14 border-b border-[var(--color-sage)]/60 bg-[var(--color-surface)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courtyardPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/70 hover:border-[var(--color-accent)]/60 transition-all shadow-xs"
              >
                <span className="text-2xl p-3 rounded-xl bg-white shadow-xs border border-[var(--color-sage)]/50 shrink-0" aria-hidden="true">
                  {pillar.icon}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-[var(--color-primary)]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1.5 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Curated Package Showcase */}
      <section aria-label="Available Umrah packages" className="py-20 sm:py-32">
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
