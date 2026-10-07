import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site-config";
import Button from "@/components/ui/Button";
import PageHero from "@/components/common/PageHero";
import { getWhatsAppUrl } from "@/lib/utils";
import { buildJsonLd, getPageSchemas, getFAQPageSchema } from "@/lib/seo";

export const metadata = {
  title: "About Us | Ministry-Approved Pilgrimage Operator",
  description:
    "Discover Siddique Tours and Travels — our founding philosophy, ministry credentials, and decades of trust serving Hajj, Umrah & Ziyarat pilgrims from Gujarat, Mumbai, and across India.",
  keywords: [
    "About Siddique Tours and Travels",
    "Ministry approved Hajj operator Vapi",
    "Trusted Umrah agency Gujarat",
    "Siddique Tours founding story",
    "Pilgrimage operator with muallim support",
    "Hajj Umrah company history Vapi Gujarat",
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
    title: `About ${siteConfig.name} | Our Sacred Pilgrimage Ministry Credentials & Story`,
    description:
      "Built on Sidq (honesty) and devotion. Learn about our pilgrimage credentials, 24/7 on-ground care, and our sacred service philosophy for Hajj, Umrah & Ziyarat.",
    siteName: siteConfig.name,
    locale: "en_IN",
    images: [
      {
        url: siteConfig.defaultOGImage,
        width: 1200,
        height: 630,
        alt: `About ${siteConfig.name} — pilgrimage philosophy and credentials`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${siteConfig.name} | Our Story & Credentials`,
    description:
      "Ministry-approved pilgrimage operator built on honesty and care for Hajj, Umrah & Ziyarat from India.",
    creator: "@siddiquetours",
    site: "@siddiquetours",
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
        imageAlt="Siddique Tours pilgrimage devotion at Makkah"
        breadcrumbs={[{ name: "About Us", url: "/about" }]}
      />

      {/* Credibility Stats Strip */}
      <section aria-label="Key Agency Milestones" className="py-14 border-b border-[var(--color-sage)]/50 bg-[var(--color-surface)]">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[var(--color-background)] border border-[var(--color-sage)]/50">
                <span className="font-display text-2xl sm:text-4xl font-bold text-[var(--color-primary)] block">
                  {stat.value}
                </span>
                <span className="text-xs text-[var(--color-text-muted)] mt-1 block font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Brand Story & Philosophy */}
      <section aria-label="Our Story and Mission" className="py-20 sm:py-28">
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
                className="p-7 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-sage)]/70 hover:border-[var(--color-accent)]/50 transition-colors shadow-xs"
              >
                <span className="text-2xl p-2.5 rounded-xl bg-[var(--color-background)] border border-[var(--color-sage)]/40 inline-block mb-4" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="font-display text-lg font-bold text-[var(--color-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Head Office Invitation Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-accent)]/40 shadow-md text-center max-w-2xl mx-auto space-y-5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-accent)] block">
              Personal Relationship
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Meet Us at Our Vapi Head Office
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-light leading-relaxed">
              We welcome families to sit down with our senior directors at {siteConfig.contact.address.street}, {siteConfig.contact.address.city} for detailed itinerary consultations and visa verification.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={whatsappUrl} variant="whatsapp">
                Instant WhatsApp Concierge
              </Button>
              <Button href="/contact" variant="primary">
                View Office Directions
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
