import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PackageCard from "@/components/packages/PackageCard";
import QuickQuoteForm from "@/components/forms/QuickQuoteForm";
import { getPackagesByCategory } from "@/data/packages";
import { siteConfig } from "@/data/site-config";
import { buildJsonLd, getPageSchemas, getTouristTripSchema, getFAQPageSchema } from "@/lib/seo";

export const metadata = {
  title: "Hajj Packages 2026 | Shariat Guidance, Ministry Quota & VIP Tents",
  description:
    "Official 2026 Hajj packages with Ministry quota coordination, experienced muallims & shariat guidance, comfortable AC Mina & Arafat VIP tents, hygienic catering, medical standby, and elderly pilgrim care by Siddique Tours.",
  keywords: [
    "Hajj Packages 2026 from India",
    "Hajj 2026 Registration Quota Gujarat",
    "Ministry Approved Hajj Operator Vapi",
    "VIP Tent Hajj Package Mina Arafat",
    "Shariat Muallim Guided Hajj 2026",
    "Hajj with Elderly Care Medical Support",
    "Hajj Package from Mumbai Delhi Ahmedabad",
    "Qurbani Arranged Hajj Package",
    "Azizia Hotel Hajj 2026 Madinah",
    "Siddique Tours Hajj Registration",
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
    title: "Hajj 2026 Packages | Shariat Muallim Guidance, Ministry Quota & VIP Mina Tents",
    description:
      "Complete once-in-a-lifetime Hajj journey with official quota, scholar-guided Mashair rituals, air-conditioned Mina VIP tents, hygienic catering, medical & elderly support from Siddique Tours.",
    siteName: siteConfig.name,
    locale: "en_IN",
    alternateLocale: ["en_US", "ar_SA"],
    images: [
      {
        url: "/images/hero-makkah.jpg",
        width: 1200,
        height: 630,
        alt: "Hajj 2026 packages — Holy Kaaba Makkah with Ministry quota & shariat guidance by Siddique Tours",
        type: "image/jpeg",
      },
      {
        url: siteConfig.defaultOGImage,
        width: 1200,
        height: 630,
        alt: "Siddique Tours Hajj 2026 packages from India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hajj 2026 Packages | Ministry Quota & Muallim Guidance",
    description:
      "Official Hajj 2026 registration with shariat muallims, AC Mina tents, medical standby & elderly care. Inquire for current season quotas by Siddique Tours Vapi.",
    creator: "@siddiquetours",
    site: "@siddiquetours",
    images: ["/images/hero-makkah.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

function HajjJsonLd() {
  const hajjPackages = getPackagesByCategory("Hajj");
  const tripSchemas = hajjPackages.map((pkg) => getTouristTripSchema(pkg));
  const hajjFAQs = [
    {
      question: "When should I register for Hajj 2026?",
      answer:
        "Hajj quota registration typically opens 6–9 months before the Dhul Hijjah season. Due to limited official Ministry quotas, we strongly advise submitting your Hajj interest form at least 10–12 months in advance, along with passport and supporting documents, to secure a confirmed slot. Call our Vapi office at +91 90165 31369 for current season availability.",
    },
    {
      question: "What facilities are provided during Mashair (Mina / Arafat / Muzdalifah)?",
      answer:
        "Our Comprehensive Hajj Package provides Category VIP tents in Mina with air-conditioning, comfortable sofa-beds, clean sanitary facilities with continuous running water, and three fresh hot meals daily during all Mashair days. Specialised medical volunteers, elderly support attendants, wheelchairs for Tawaf, and Qurbani through authorised channels are all coordinated end-to-end.",
    },
    {
      question: "Do you provide religious scholars (muallims) throughout Hajj?",
      answer:
        "Yes — every Siddique Tours Hajj group is accompanied by experienced, multilingual God-fearing muallims who deliver daily pre-Mashair fiqh lectures, step-by-step guidance during Tawaf al-Ifadah and Sa'i, Rami Jamarat procedures, correct halq/taqsir, proper sacrificial offerings, and are on-call 24/7 for any shariat question during the entire pilgrimage.",
    },
    {
      question: "What is the Hajj package cost for 2026?",
      answer:
        "Hajj pricing is season-specific and changes annually based on official Ministry tariff, flight fuel charges, and tent category. Please submit the inquiry form on this page or WhatsApp our Vapi office directly for a transparent, itemised quotation including visa fee, accommodation category, meals, and all Mashair services — with no hidden surcharges.",
    },
  ];
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

export default function HajjPage() {
  const hajjPackages = getPackagesByCategory("Hajj");

  return (
    <div className="bg-[var(--color-background)]">
      <HajjJsonLd />
      <Breadcrumbs items={[{ name: "Hajj Packages", url: "/hajj" }]} />
      <div className="py-16 sm:py-20">
        <Container>
        <SectionHeading
          badge="Fulfill The Fifth Pillar"
          title="Shariat-Guided Hajj Journey"
          subtitle="Complete once-in-a-lifetime spiritual guidance under experienced scholars with VIP-category Mina tents, hygienic catering, medical standby and dedicated end-to-end pilgrim welfare from departure to return."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6">
            <article className="bg-[var(--color-surface)] p-8 rounded-xl border border-[var(--color-sage)]/70">
              <h3 className="font-display text-2xl font-bold text-[var(--color-primary)] mb-4">
                What Makes Our Hajj Unique
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                Hajj is a once-in-a-lifetime spiritual duty. At Siddique Tours and Travels, our primary mission is to remove every physical anxiety so you can devote every thought and prayer exclusively to Allah (SWT).
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Experienced Muallims & Religious Guidance",
                    desc: "Daily pre-Mashair fiqh lectures, step-by-step live guidance during Tawaf, Sa'i, Rami Jamarat, and authorised sacrificial arrangements.",
                  },
                  {
                    title: "Comfortable VIP Mashair Facilities",
                    desc: "Air-conditioned tents in Mina and Arafat with comfortable sofa-beds, clean sanitary facilities, mineral water and three fresh hot meals daily.",
                  },
                  {
                    title: "Medical & Elderly Accompaniment",
                    desc: "Dedicated volunteer attendants, wheelchair escorts for Tawaf, and medical assistance on standby throughout the entire journey including Mashair days.",
                  },
                  {
                    title: "Official Ministry Quota & Visa Coordination",
                    desc: "Direct and transparent processing of official Hajj quota, visa, air ticket allotment, and documentation with no middle-men or unauthorised sub-agents.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-[var(--color-accent)] font-bold text-lg">✓</span>
                    <div>
                      <h4 className="font-semibold text-sm text-[var(--color-primary)]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {hajjPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="lg:col-span-5">
            <QuickQuoteForm />
          </div>
        </div>
        </Container>
      </div>
    </div>
  );
}
