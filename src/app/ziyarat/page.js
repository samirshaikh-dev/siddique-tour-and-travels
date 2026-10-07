import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PackageCard from "@/components/packages/PackageCard";
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
    type: "product.group",
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
    title: "Ziyarat Tours | Makkah Madinah Sacred Islamic Heritage Sites",
    description:
      "Scholarly guided Ziyarat tours — Cave Hira, Mount Uhud, Masjid Quba, Seven Mosques & more. From ₹65,000 per person with visa and AC transport.",
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

function ZiyaratJsonLd() {
  const ziyaratPackages = getPackagesByCategory("Ziyarat");
  const tripSchemas = ziyaratPackages.map((pkg) => getTouristTripSchema(pkg));
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

export default function ZiyaratPage() {
  const ziyaratPackages = getPackagesByCategory("Ziyarat");

  return (
    <div className="bg-[var(--color-background)]">
      <ZiyaratJsonLd />
      <Breadcrumbs items={[{ name: "Ziyarat Tours", url: "/ziyarat" }]} />
      <div className="py-16 sm:py-20">
        <Container>
        <SectionHeading
          badge="Islamic Heritage & History"
          title="Sacred Sanctuaries & Ziyarat"
          subtitle="Walk where the Prophet (PBUH) and the Sahaba walked. Deeply enriching scholarly historical narrations at every site, with comfortable AC transport, hotels and knowledgeable multilingual guides."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ziyaratPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        </Container>
      </div>
    </div>
  );
}
