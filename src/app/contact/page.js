import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site-config";
import QuickQuoteForm from "@/components/forms/QuickQuoteForm";
import PageHero from "@/components/common/PageHero";
import { buildJsonLd, getPageSchemas } from "@/lib/seo";

export const metadata = {
  title: `Contact Head Office Vapi (396191) | ${siteConfig.name} Gujarat`,
  description:
    `Visit ${siteConfig.name} head office in Vapi (PIN 396191), Gujarat at ${siteConfig.contact.address.street}. Call ${siteConfig.contact.phoneDisplay}, WhatsApp, or book an in-person appointment for Hajj & Umrah.`,
  keywords: [
    `${siteConfig.name} Vapi contact`,
    "Hajj Umrah Office Vapi 396191",
    "Contact Pilgrimage Operator Vapi Gujarat",
    "Umrah Visa Agent Vapi Valsad",
    "Hajj Tour Agency Near Vapi Station East",
    "Pilgrimage Office South Gujarat",
    siteConfig.name,
  ],
  alternates: {
    canonical: "/contact",
    languages: Object.fromEntries(
      siteConfig.languageAlternates.map((l) => [
        l.hrefLang,
        `${l.href}/contact`,
      ])
    ),
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/contact`,
    title: `Contact Head Office Vapi (396191) | ${siteConfig.name} Gujarat`,
    description: `Visit our head office in Vapi East (PIN 396191) or call ${siteConfig.contact.phoneDisplay} for Hajj, Umrah and Ziyarat consultations. In-person family assistance.`,
    siteName: siteConfig.name,
    locale: "en_IN",
    images: [
      {
        url: siteConfig.defaultOGImage,
        width: 1200,
        height: 630,
        alt: `Contact ${siteConfig.name} — Office in Vapi (396191), Gujarat`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Office Vapi (396191) | ${siteConfig.name}`,
    description: `Call ${siteConfig.contact.phoneDisplay} or WhatsApp for pilgrimage package details, quotes, and office appointments in Vapi.`,
    creator: siteConfig.socials.twitter || "@alsafwatravels",
    site: siteConfig.socials.twitter || "@alsafwatravels",
    images: [siteConfig.defaultTwitterImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function ContactJsonLd() {
  const pageSchemas = getPageSchemas({
    path: "/contact",
    title: `Contact ${siteConfig.name}`,
    description: metadata.description,
    keywords: metadata.keywords,
    breadcrumbItems: [
      { name: "Home", url: "/" },
      { name: "Contact", url: "/contact" },
    ],
    image: siteConfig.defaultOGImage,
  });
  const jsonLd = buildJsonLd(...pageSchemas);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${siteConfig.name} ${siteConfig.contact.address.street} ${siteConfig.contact.address.city} ${siteConfig.contact.address.state}`
  );

  return (
    <div className="bg-[var(--color-background)]">
      <ContactJsonLd />

      {/* Cinematic Hero */}
      <PageHero
        badge="Always At Your Service"
        title="Connect with Our"
        titleHighlight="Pilgrimage Concierge."
        subtitle={`Direct telephone support, instant WhatsApp consultations, and personal hospitality at our ${siteConfig.contact.address.city} head office.`}
        imageSrc="/images/luxury-suite.jpg"
        imageAlt={`Contact ${siteConfig.name} pilgrimage concierge in ${siteConfig.contact.address.city}`}
        breadcrumbs={[{ name: "Contact", url: "/contact" }]}
      />

      {/* 3-Channel Direct Contact Triad */}
      <section aria-label="Direct Contact Channels" className="py-16 sm:py-20 border-b border-[var(--color-sage)]/60 bg-[var(--color-surface)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Channel 1: Phone */}
            <a
              href={`tel:${siteConfig.contact.phoneClean || siteConfig.contact.phone}`}
              className="group p-7 sm:p-8 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/70 hover:border-[var(--color-primary)] transition-all duration-300 shadow-[0_4px_20px_rgba(23,33,31,0.04)] hover:shadow-[0_16px_36px_rgba(6,74,67,0.12)] hover:-translate-y-1 flex flex-col justify-between"
              aria-label={`Call office at ${siteConfig.contact.phoneDisplay}`}
            >
              <div>
                <span className="w-12 h-12 rounded-xl bg-white border border-[var(--color-sage)]/70 flex items-center justify-center text-2xl mb-5 group-hover:scale-105 transition-transform shadow-xs" aria-hidden="true">
                  📞
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-text-muted)] block mb-1">
                  Official Helpline
                </span>
                <h3 className="font-display text-xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-primary-hover)] transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1.5 font-light">
                  {siteConfig.contact.openingHours}
                </p>
              </div>
              <span className="text-xs font-semibold text-[var(--color-primary)] mt-6 inline-flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                Call Direct Now →
              </span>
            </a>

            {/* Channel 2: WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-7 sm:p-8 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/70 hover:border-[#25D366] transition-all duration-300 shadow-[0_4px_20px_rgba(23,33,31,0.04)] hover:shadow-[0_16px_36px_rgba(37,211,102,0.14)] hover:-translate-y-1 flex flex-col justify-between"
              aria-label="Direct WhatsApp pilgrimage concierge"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-2xl mb-5 group-hover:scale-105 transition-transform relative shadow-xs" aria-hidden="true">
                  <span className="animate-ping absolute inset-0 rounded-xl bg-[#25D366] opacity-20" />
                  💬
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#1a8e45] block mb-1">
                  WhatsApp Concierge
                </span>
                <h3 className="font-display text-xl font-bold text-[var(--color-primary)]">
                  Instant WhatsApp Chat
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1.5 font-light">
                  Fast response & custom family quotations
                </p>
              </div>
              <span className="text-xs font-semibold text-[#1a8e45] mt-6 inline-flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                Start WhatsApp Chat →
              </span>
            </a>

            {/* Channel 3: Head Office */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group p-7 sm:p-8 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/70 hover:border-[var(--color-accent)] transition-all duration-300 shadow-[0_4px_20px_rgba(23,33,31,0.04)] hover:shadow-[0_16px_36px_rgba(184,135,45,0.12)] hover:-translate-y-1 flex flex-col justify-between"
              aria-label={`View ${siteConfig.contact.address.city} head office directions on Google Maps`}
            >
              <div>
                <span className="w-12 h-12 rounded-xl bg-white border border-[var(--color-sage)]/70 flex items-center justify-center text-2xl mb-5 group-hover:scale-105 transition-transform shadow-xs" aria-hidden="true">
                  📍
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-accent)] block mb-1">
                  Head Office • {siteConfig.contact.address.city}
                </span>
                <h3 className="font-display text-xl font-bold text-[var(--color-primary)]">
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1.5 font-light leading-relaxed">
                  {siteConfig.contact.address.street}
                </p>
              </div>
              <span className="text-xs font-semibold text-[var(--color-accent)] mt-6 inline-flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                Google Maps Navigation →
              </span>
            </a>
          </div>
        </Container>
      </section>

      {/* Main Consultation Form Section */}
      <section aria-label="Send Written Inquiry" className="py-20 sm:py-32">
        <Container className="max-w-4xl">
          <SectionHeading
            badge="Personalized Attention"
            title="Request a Custom Consultation"
            subtitle="Share your preferred departure dates, group size, and hotel preferences. Our senior team will reach out with a transparent, itemized itinerary."
          />

          <div className="max-w-xl mx-auto">
            <QuickQuoteForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
