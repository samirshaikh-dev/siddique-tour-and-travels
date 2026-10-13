import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PackageCard from "@/components/packages/PackageCard";
import QuickQuoteForm from "@/components/forms/QuickQuoteForm";
import PageHero from "@/components/common/PageHero";
import FaqAccordion from "@/components/common/FAQAccordion";
import { getPackagesByCategory } from "@/data/packages";
import { siteConfig } from "@/data/site-config";
import { buildJsonLd, getPageSchemas, getTouristTripSchema, getFAQPageSchema } from "@/lib/seo";

export const metadata = {
  title: "Hajj Packages 2026 from Vapi, Gujarat | Ministry Quota & Scholar Guidance",
  description:
    `Official 2026 Hajj packages for pilgrims from Vapi (396191), Valsad, and South Gujarat. Ministry quota coordination, scholar muallims, VIP air-conditioned Mina tents, and comprehensive elderly care by ${siteConfig.name}.`,
  keywords: [
    "Hajj Packages 2026 Vapi",
    "Hajj 2026 Registration Gujarat 396191",
    "Ministry Approved Hajj Operator Vapi Valsad",
    "VIP Tent Hajj Package Mina Arafat",
    "Shariat Muallim Guided Hajj Gujarat",
    "Hajj with Elderly Care Medical Support Vapi",
    "Hajj Package from Mumbai & Surat for Gujarat Pilgrims",
    "Hajj Quota South Gujarat",
    siteConfig.name,
  ],
  alternates: {
    canonical: "/hajj",
    languages: Object.fromEntries(
      siteConfig.languageAlternates.map((l) => [
        l.hrefLang,
        `${l.href}/hajj`,
      ])
    ),
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/hajj`,
    title: "Hajj 2026 Packages from Vapi, Gujarat | Ministry Quota & VIP Mina Tents",
    description:
      `Complete once-in-a-lifetime Hajj journey with official quota, scholar-guided Mashair rituals, air-conditioned Mina VIP tents, and medical support from ${siteConfig.name} in Vapi (396191).`,
    siteName: siteConfig.name,
    locale: "en_IN",
    alternateLocale: ["en_US", "ar_SA"],
    images: [
      {
        url: "/images/hero-makkah.jpg",
        width: 1200,
        height: 630,
        alt: `Hajj 2026 packages — Holy Kaaba Makkah with Ministry quota & shariat guidance by ${siteConfig.name}`,
        type: "image/jpeg",
      },
      {
        url: siteConfig.defaultOGImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Hajj 2026 packages from Vapi Gujarat`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hajj 2026 Packages from Vapi, Gujarat | Ministry Quota",
    description:
      `Official Hajj registration in Vapi (396191), experienced muallims, VIP Mina tents, and medical support. Call ${siteConfig.contact.phoneDisplay}.`,
    creator: siteConfig.socials.twitter || "@alsafwatravels",
    site: siteConfig.socials.twitter || "@alsafwatravels",
    images: ["/images/hero-makkah.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

const hajjFAQs = [
  {
    question: "When should I register for Hajj 2026?",
    answer:
      `Hajj quota registration typically opens 6–9 months before the Dhul Hijjah season. Due to limited official Ministry quotas, we strongly advise submitting your Hajj interest form at least 10–12 months in advance, along with passport and supporting documents, to secure a confirmed slot. Call our office at ${siteConfig.contact.phoneDisplay} for current season availability.`,
  },
  {
    question: "What facilities are provided during Mashair (Mina / Arafat / Muzdalifah)?",
    answer:
      "Our Comprehensive Hajj Package provides Category VIP tents in Mina with air-conditioning, comfortable sofa-beds, clean sanitary facilities with continuous running water, and three fresh hot meals daily during all Mashair days. Specialised medical volunteers, elderly support attendants, wheelchairs for Tawaf, and Qurbani through authorised channels are all coordinated end-to-end.",
  },
  {
    question: "Do you provide religious scholars (muallims) throughout Hajj?",
    answer:
      `Yes — every ${siteConfig.name} Hajj group is accompanied by experienced, multilingual God-fearing muallims who deliver daily pre-Mashair fiqh lectures, step-by-step guidance during Tawaf al-Ifadah and Sa'i, Rami Jamarat procedures, correct halq/taqsir, proper sacrificial offerings, and are on-call 24/7 for any shariat question during the entire pilgrimage.`,
  },
  {
    question: "What is the Hajj package cost for 2026?",
    answer:
      "Hajj pricing is season-specific and changes annually based on official Ministry tariff, flight fuel charges, and tent category. Please submit the inquiry form on this page or WhatsApp our office directly for a transparent, itemised quotation including visa fee, accommodation category, meals, and all Mashair services — with no hidden surcharges.",
  },
];

function HajjJsonLd() {
  const hajjPackages = getPackagesByCategory("Hajj");
  const tripSchemas = hajjPackages.map((pkg) => getTouristTripSchema(pkg));
  const pageSchemas = getPageSchemas({
    path: "/hajj",
    title: "Hajj Packages",
    description: metadata.description,
    keywords: metadata.keywords,
    breadcrumbItems: [
      { name: "Home", url: "/" },
      { name: "Hajj Packages", url: "/hajj" },
    ],
    image: "/images/hero-makkah.jpg",
    faqs: hajjFAQs,
  });
  const faq = getFAQPageSchema(hajjFAQs);
  const jsonLd = buildJsonLd(...pageSchemas, faq, ...tripSchemas);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

const hajjPillars = [
  {
    icon: "📜",
    title: "Direct Ministry Quota",
    desc: "Official quota registration, licensed visa logistics, and zero third-party intermediaries.",
  },
  {
    icon: "⛺",
    title: "Air-Conditioned VIP Tents",
    desc: "Comfortable sofa-beds in Mina & Arafat, pristine sanitised washrooms, and fresh hot meals.",
  },
  {
    icon: "🤲",
    title: "Dedicated Scholar Mentorship",
    desc: "Daily pre-Mashair fiqh lectures and step-by-step live guidance through every sacred rite.",
  },
  {
    icon: "🩺",
    title: "Medical & Senior Escort",
    desc: "24/7 standby medical support, wheelchair assistance for Tawaf, and caring volunteer teams.",
  },
];

export default function HajjPage() {
  const hajjPackages = getPackagesByCategory("Hajj");

  return (
    <div className="bg-[var(--color-background)]">
      <HajjJsonLd />

      {/* Cinematic Hero */}
      <PageHero
        badge="The Fifth Pillar"
        title="The Journey of a Lifetime,"
        titleHighlight="Guided by Devotion."
        subtitle="Official Ministry quota coordination, experienced muallims, air-conditioned VIP Mashair tents, and devoted medical care."
        imageSrc="/images/hero-makkah.jpg"
        imageAlt="The Holy Kaaba at dawn for Hajj pilgrimage"
        breadcrumbs={[{ name: "Hajj 2026", url: "/hajj" }]}
      />

      {/* Pillars of Sacred Care (Modern Grid) */}
      <section aria-label="Hajj Care Guarantees" className="py-14 border-b border-[var(--color-sage)]/60 bg-[var(--color-surface)]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hajjPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/70 hover:border-[var(--color-accent)]/60 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl p-3 rounded-xl bg-white shadow-xs border border-[var(--color-sage)]/50 inline-block mb-4" aria-hidden="true">
                    {pillar.icon}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[var(--color-primary)] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Packages & Lead Form Section */}
      <section aria-label="Hajj packages and quota registration" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            badge="Official Registration"
            title="Hajj 2026 Journeys"
            subtitle="Register early to secure official Ministry quota allotments for your once-in-a-lifetime pilgrimage."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
            <div className="lg:col-span-7 space-y-8">
              {hajjPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>

            <div className="lg:col-span-5 sticky top-28">
              <QuickQuoteForm />
            </div>
          </div>

          {/* Interactive FAQ Accordion */}
          <FaqAccordion items={hajjFAQs} title="Frequently Asked Hajj Questions" />
        </Container>
      </section>
    </div>
  );
}
