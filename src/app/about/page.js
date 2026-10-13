import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site-config";
import Button from "@/components/ui/Button";
import PageHero from "@/components/common/PageHero";
import { getWhatsAppUrl } from "@/lib/utils";
import { buildJsonLd, getPageSchemas, getFAQPageSchema } from "@/lib/seo";

export const metadata = {
  title: `About Us | Ministry-Approved Pilgrimage Operator in Vapi (396191), Gujarat`,
  description:
    `Discover ${siteConfig.name} — ministry-approved pilgrimage operator headquartered in Vapi (396191), Gujarat. Decades of trust serving Hajj, Umrah & Ziyarat pilgrims across Valsad, Daman, Silvassa, and all India.`,
  keywords: [
    `About ${siteConfig.name} Vapi`,
    "Ministry approved Hajj operator Vapi Gujarat",
    "Trusted Umrah agency Valsad 396191",
    `${siteConfig.name} founding story`,
    "Pilgrimage operator with Gujarati muallim support",
    "Hajj Umrah company credentials Vapi",
  ],
  alternates: {
    canonical: "/about",
    languages: Object.fromEntries(
      siteConfig.languageAlternates.map((l) => [
        l.hrefLang,
        `${l.href}/about`,
      ])
    ),
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/about`,
    title: `About ${siteConfig.name} | Ministry Credentials in Vapi (396191) Gujarat`,
    description:
      "Built on Sidq (honesty) and devotion. Learn about our pilgrimage credentials, Vapi head office, 24/7 on-ground care, and sacred service philosophy for Hajj & Umrah.",
    siteName: siteConfig.name,
    locale: "en_IN",
    images: [
      {
        url: siteConfig.defaultOGImage,
        width: 1200,
        height: 630,
        alt: `About ${siteConfig.name} — Pilgrimage Philosophy in Vapi, Gujarat`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${siteConfig.name} | Vapi (396191) Gujarat`,
    description:
      "Ministry-approved pilgrimage operator built on honesty and care for Hajj, Umrah & Ziyarat in Vapi, Gujarat.",
    creator: siteConfig.socials.twitter || "@alsafwatravels",
    site: siteConfig.socials.twitter || "@alsafwatravels",
    images: [siteConfig.defaultTwitterImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function AboutJsonLd() {
  const aboutFAQs = (siteConfig.faq || []).slice(0, 4);
  const pageSchemas = getPageSchemas({
    path: "/about",
    title: `About ${siteConfig.name}`,
    description: metadata.description,
    keywords: metadata.keywords,
    breadcrumbItems: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
    ],
    image: siteConfig.defaultOGImage,
    faqs: aboutFAQs,
  });
  const faq = getFAQPageSchema(aboutFAQs);
  const jsonLd = buildJsonLd(...pageSchemas, faq);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

const stats = [
  { value: "15+ Years", label: "Dedicated Pilgrimage Service" },
  { value: "100%", label: "Ministry & Quota Compliant" },
  { value: "5,000+", label: "Blessed Pilgrims Guided" },
  { value: "Zero", label: "Hidden Surcharges or Surprises" },
];

const principles = [
  {
    icon: "⚖️",
    title: "Honest & Transparent Pricing",
    desc: "Every rupee accounted for with fully itemised quotations. No arbitrary call-centre surcharges or last-minute fee shocks.",
  },
  {
    icon: "🔍",
    title: "Personally Verified Hotels",
    desc: "Our directors inspect every property before contract signing. Verified courtyard distances to Haram gates with zero stock photo deception.",
  },
  {
    icon: "🧓",
    title: "Senior-First Dignity & Care",
    desc: "Elderly parents receive VIP priority: pre-arranged Tawaf wheelchairs, elevator-adjacent rooms, and devoted Mashair attendants.",
  },
  {
    icon: "📖",
    title: "Religiously Sensitive Leadership",
    desc: "God-fearing scholars (muallims) accompany our groups, ensuring correct fiqh ritual compliance at every holy station.",
  },
];

export default function AboutPage() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsapp,
    siteConfig.contact.whatsappDefaultMessage
  );

  return (
    <div className="bg-[var(--color-background)]">
      <AboutJsonLd />

      {/* Cinematic Hero */}
      <PageHero
        badge="Our Sacred Calling"
        title="Built on Sidq (Honesty),"
        titleHighlight="Elevated in Devotion."
        subtitle="Serving pilgrims from Gujarat, Maharashtra, and across India with sincere devotion, verified courtyard hotels, and transparent care."
        imageSrc="/images/hero-makkah.jpg"
        imageAlt={`${siteConfig.name} pilgrimage devotion at Makkah`}
        breadcrumbs={[{ name: "About Us", url: "/about" }]}
      />

      {/* Credibility Stats Strip */}
      <section aria-label="Key Agency Milestones" className="py-14 border-b border-[var(--color-sage)]/60 bg-[var(--color-surface)]">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/70 shadow-xs">
                <span className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-primary)] block">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1.5 block font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Brand Story & Philosophy */}
      <section aria-label="Our Story and Mission" className="py-20 sm:py-32">
        <Container className="max-w-4xl">
          <SectionHeading
            badge="Foundational Ethics"
            title="Dignified Service to the Guests of Allah (SWT)"
            subtitle="Pilgrimage is not an ordinary commercial holiday—it is a spiritual milestone prepared for over a lifetime. Every detail is calibrated to protect your tranquility."
          />

          {/* 4 Core Sacred Commitments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-16">
            {principles.map((item, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-sage)]/70 hover:border-[var(--color-accent)]/60 transition-all duration-300 shadow-[0_4px_20px_rgba(23,33,31,0.04)] hover:shadow-[0_12px_32px_rgba(6,74,67,0.1)] flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl p-3 rounded-xl bg-[var(--color-background)] border border-[var(--color-sage)]/50 inline-block mb-4 shadow-xs" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[var(--color-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Head Office Invitation Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-background)] border border-[var(--color-accent)]/50 shadow-[0_16px_40px_rgba(184,135,45,0.12)] text-center max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-[11px] font-semibold uppercase tracking-widest">
              <span>✦</span>
              <span>Personal Relationship</span>
              <span>✦</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-[var(--color-primary)]">
              Meet Us at Our Head Office
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-light leading-relaxed max-w-lg mx-auto">
              We welcome families to sit down with our senior directors at {siteConfig.contact.address.street}, {siteConfig.contact.address.city} for detailed itinerary consultations and visa verification.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={whatsappUrl} variant="whatsapp" size="md">
                Instant WhatsApp Concierge
              </Button>
              <Button href="/contact" variant="primary" size="md">
                View Office Directions
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
