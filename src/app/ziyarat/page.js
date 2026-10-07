import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PackageCard from "@/components/packages/PackageCard";
import PageHero from "@/components/common/PageHero";
import FaqAccordion from "@/components/common/FAQAccordion";
import { getPackagesByCategory } from "@/data/packages";
import { siteConfig } from "@/data/site-config";
import { buildJsonLd, getPageSchemas, getTouristTripSchema, getFAQPageSchema } from "@/lib/seo";

export const metadata = {
  title: "Ziyarat Tours | Sacred Historical Sites in Makkah & Madinah",
  description:
    "Guided educational and spiritual Ziyarat tours covering Cave Hira, Cave Thawr, Jabal al-Rahmah, Masjid Quba, Mount Uhud, Seven Mosques and sacred Islamic heritage sites in Makkah, Madinah and the surrounding Hejaz.",
  keywords: [
    "Ziyarat Tours Makkah Madinah",
    "Islamic heritage sites tour Hejaz",
    "Cave Hira Cave Thawr Ziyarat",
    "Mount Uhud Seven Mosques Ziyarat",
    "Masjid Quba Masjid Qiblatayn tour",
    "Makkah Madinah sacred historical tour",
    "Ziyarat tour package from India 2026",
    "Guided historical Ziyarat scholar",
    "Jabal al-Noor Jabal al-Rahmah visit",
    "Siddique Tours Ziyarat package",
  ],
  alternates: {
    canonical: "/ziyarat",
    languages: Object.fromEntries(
      siteConfig.languageAlternates.map((l) => [
        l.hrefLang,
        `${l.href}/ziyarat`,
      ])
    ),
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/ziyarat`,
    title: "Ziyarat Tours | Cave Hira, Mount Uhud & Sacred Islamic Heritage Sites",
    description:
      "8-day guided Ziyarat tour covering sacred historical sites in Makkah, Madinah and Hejaz with scholarly narrations in Urdu, Hindi & English by Siddique Tours.",
    siteName: siteConfig.name,
    locale: "en_IN",
    images: [
      {
        url: "/images/ziyarat-mountains.jpg",
        width: 1200,
        height: 630,
        alt: "Sacred Ziyarat tour — Hejaz mountains, Cave Hira and Islamic heritage sites",
        type: "image/jpeg",
      },
      {
        url: siteConfig.defaultOGImage,
        width: 1200,
        height: 630,
        alt: "Siddique Tours Ziyarat historical packages from India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziyarat Tours | Sacred Historical Sites in Makkah & Madinah",
    description:
      "Guided historical tours covering Cave Hira, Uhud, and Quba with expert scholars. Starting ₹65,000 from India.",
    creator: "@siddiquetours",
    site: "@siddiquetours",
    images: ["/images/ziyarat-mountains.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

const ziyaratFAQs = [
  {
    question: "Which sacred sites are included in the Ziyarat tour?",
    answer:
      "Our comprehensive Ziyarat tour includes Makkah sites: Jabal al-Noor (Cave Hira), Cave Thawr, Jabal al-Rahmah (Arafat), Mina, Muzdalifah and Jamaraat. Madinah Ziyarat covers Masjid Quba (first mosque of Islam), Masjid al-Qiblatayn, Mount Uhud and Martyrs Cemetery (Jannat al-Baqi and Jannat al-Mualla), plus the Seven Mosques including Masjid al-Fath and Masjid al-Ghamama.",
  },
  {
    question: "Do you provide a knowledgeable scholar guide during Ziyarat?",
    answer:
      "Absolutely. All our Ziyarat tours are escorted by experienced, respectful multilingual historical guides and scholars fluent in Urdu, Hindi and English. They provide authentic historical context and spiritual significance for every sacred site — not just a superficial bus tour, but a truly enriching educational and spiritual journey.",
  },
  {
    question: "How long is a typical Ziyarat tour and what is the cost?",
    answer:
      "Our standard sacred Ziyarat & Holy Sites Tour is 8 Days / 7 Nights (4 Nights Makkah, 3 Nights Madinah) starting from ₹65,000 per person on triple sharing. Includes tourist or Umrah visa with insurance, comprehensive Ziyarat itinerary with AC coach transport, daily breakfast & dinner, and expert historical guide throughout.",
  },
  {
    question: "Can I combine Ziyarat with my Umrah or Hajj?",
    answer:
      "Yes — every Siddique Tours Umrah package includes complimentary guided Ziyarat in both Makkah and Madinah. Hajj packages likewise include post-Hajj Ziyarat before returning to India. We also offer stand-alone extended Ziyarat packages for pilgrims wishing to spend more time on the educational and historical aspects of Hejaz beyond the obligatory rituals.",
  },
];

function ZiyaratJsonLd() {
  const ziyaratPackages = getPackagesByCategory("Ziyarat");
  const tripSchemas = ziyaratPackages.map((pkg) => getTouristTripSchema(pkg));
  const pageSchemas = getPageSchemas({
    path: "/ziyarat",
    title: "Ziyarat Tours",
    description: metadata.description,
    keywords: metadata.keywords,
    breadcrumbItems: [
      { name: "Home", url: "/" },
      { name: "Ziyarat Tours", url: "/ziyarat" },
    ],
    image: "/images/ziyarat-mountains.jpg",
    faqs: ziyaratFAQs,
  });
  const faq = getFAQPageSchema(ziyaratFAQs);
  const jsonLd = buildJsonLd(...pageSchemas, faq, ...tripSchemas);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

const sacredSites = [
  {
    city: "Makkah",
    name: "Ghar-e-Hira (Cave Hira)",
    subtitle: "The Mount of Light (Jabal al-Noor)",
    desc: "The sacred sanctuary where Prophet Muhammad (PBUH) received the very first revelation of the Holy Qur'an.",
  },
  {
    city: "Madinah",
    name: "Masjid Quba",
    subtitle: "The First Mosque of Islam",
    desc: "Built by the Prophet (PBUH) upon arrival in Madinah. A prayer here carries the reward of a complete Umrah.",
  },
  {
    city: "Madinah",
    name: "Mount Uhud & Shuhada",
    subtitle: "Sacred Battlefield of Faith",
    desc: "The monumental mountain 'that loves us and we love it', and the resting place of Sayyidna Hamza (RA) and the martyrs.",
  },
  {
    city: "Makkah",
    name: "Ghar-e-Thawr (Cave Thawr)",
    subtitle: "Sanctuary of the Hijrah",
    desc: "Where the Prophet (PBUH) and Abu Bakr (RA) sought refuge during the sacred migration to Madinah.",
  },
  {
    city: "Makkah",
    name: "Jabal al-Rahmah",
    subtitle: "The Mount of Mercy (Arafat)",
    desc: "The solemn granite hill at the heart of the Plain of Arafat where the Prophet (PBUH) delivered the Farewell Sermon.",
  },
  {
    city: "Madinah",
    name: "Masjid al-Qiblatayn",
    subtitle: "The Mosque of the Two Qiblas",
    desc: "Where the revelation was sent down directing the Qibla change towards the Kaaba in Holy Makkah.",
  },
];

export default function ZiyaratPage() {
  const ziyaratPackages = getPackagesByCategory("Ziyarat");

  return (
    <div className="bg-[var(--color-background)]">
      <ZiyaratJsonLd />

      {/* Cinematic Hero */}
      <PageHero
        badge="Islamic Heritage & History"
        title="Footsteps of the"
        titleHighlight="Prophet (PBUH)."
        subtitle="Walk where the Beloved (PBUH) and the Sahaba walked. Deeply enriching scholarly historical narrations across sacred sanctuaries of the Hejaz."
        imageSrc="/images/ziyarat-mountains.jpg"
        imageAlt="Hejaz mountain sanctuaries and historic Ziyarat sites"
        breadcrumbs={[{ name: "Ziyarat Tours", url: "/ziyarat" }]}
      />

      {/* Visual Heritage Roadmap (6 Sacred Sites) */}
      <section aria-label="Sacred Ziyarat Sites Roadmap" className="py-20 border-b border-[var(--color-sage)]/50 bg-[var(--color-surface)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
              Sacred Sanctuaries
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
              Sacred Sites Visited
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-3 font-light leading-relaxed">
              Every site visited is accompanied by authentic scholarly narrations in Urdu, Hindi, and English with dedicated time for contemplation and du&apos;a.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sacredSites.map((site, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/60 hover:border-[var(--color-accent)]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white text-[var(--color-primary)] border border-[var(--color-sage)]">
                      {site.city}
                    </span>
                    <span className="text-xs font-serif font-bold text-[var(--color-accent)]">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[var(--color-primary)] mb-1">
                    {site.name}
                  </h3>
                  <span className="text-[11px] text-[var(--color-accent)] font-medium block mb-2">
                    {site.subtitle}
                  </span>
                  <p className="text-xs text-[var(--color-text-muted)] font-light leading-relaxed">
                    {site.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Curated Ziyarat Packages */}
      <section aria-label="Curated Ziyarat Packages" className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            badge="Heritage Itineraries"
            title="Curated Ziyarat Packages"
            subtitle="Comfortable AC coaches, verified hotels near the Harams, daily breakfast & dinner, and dedicated multilingual guides."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ziyaratPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          {/* Interactive FAQ Accordion */}
          <div className="mt-28">
            <FaqAccordion items={ziyaratFAQs} title="Frequently Asked Ziyarat Questions" />
          </div>
        </Container>
      </section>
    </div>
  );
}
