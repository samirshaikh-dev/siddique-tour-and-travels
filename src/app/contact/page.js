import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site-config";
import QuickQuoteForm from "@/components/forms/QuickQuoteForm";
import PageHero from "@/components/common/PageHero";
import { buildJsonLd, getPageSchemas } from "@/lib/seo";

export const metadata = {
  title: "Contact Head Office | Vapi, Gujarat",
  description:
    `Contact ${siteConfig.name} head office in Vapi, Gujarat. Visit Shop No. 8, Seven Jewellers Complex, Amred. Call ${siteConfig.contact.phoneDisplay}, WhatsApp, or send a written inquiry for Hajj, Umrah & Ziyarat packages.`,
  keywords: [
    "Siddique Tours contact number",
    "Hajj Umrah office Vapi Gujarat",
    "Contact pilgrimage operator Vapi address",
    "Pilgrimage inquiry phone number",
    "Siddique Tours Vapi head office",
    "Umrah visa inquiry Gujarat contact",
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
    title: `Contact ${siteConfig.name} | Head Office Vapi, Gujarat`,
    description: `Visit our Vapi head office or call ${siteConfig.contact.phoneDisplay} for Hajj, Umrah and Ziyarat inquiries. WhatsApp, email, and quick inquiry form.`,
    siteName: siteConfig.name,
    locale: "en_IN",
    images: [
      {
        url: siteConfig.defaultOGImage,
        width: 1200,
        height: 630,
        alt: `Contact ${siteConfig.name} — office in Vapi, Gujarat`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${siteConfig.name} | Office Vapi Gujarat`,
    description: `Call ${siteConfig.contact.phoneDisplay} or WhatsApp for pilgrimage package details, quotes, and office hours.`,
    creator: "@siddiquetours",
    site: "@siddiquetours",
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
        subtitle="Direct telephone support, instant WhatsApp consultations, and personal hospitality at our Vapi head office."
        imageSrc="/images/luxury-suite.jpg"
        imageAlt="Contact Siddique Tours pilgrimage concierge in Vapi"
        breadcrumbs={[{ name: "Contact", url: "/contact" }]}
      />

      {/* 3-Channel Direct Contact Triad */}
      <section aria-label="Direct Contact Channels" className="py-14 border-b border-[var(--color-sage)]/50 bg-[var(--color-surface)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Channel 1: Phone */}
            <a
              href={`tel:${siteConfig.contact.phoneClean || siteConfig.contact.phone}`}
              className="group p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/60 hover:border-[var(--color-primary)] transition-all flex flex-col justify-between"
              aria-label={`Call office at ${siteConfig.contact.phoneDisplay}`}
            >
              <div>
                <span className="w-10 h-10 rounded-xl bg-white border border-[var(--color-sage)] flex items-center justify-center text-xl mb-4 group-hover:scale-105 transition-transform" aria-hidden="true">
                  📞
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-text-muted)] block mb-1">
                  Official Helpline
                </span>
                <h3 className="font-display text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-primary-hover)] transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] mt-1 font-light">
                  {siteConfig.contact.openingHours}
                </p>
              </div>
              <span className="text-xs font-semibold text-[var(--color-primary)] mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Call Direct Now →
              </span>
            </a>

            {/* Channel 2: WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/60 hover:border-[#25D366] transition-all flex flex-col justify-between"
              aria-label="Direct WhatsApp pilgrimage concierge"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-xl mb-4 group-hover:scale-105 transition-transform relative" aria-hidden="true">
                  <span className="animate-ping absolute inset-0 rounded-xl bg-[#25D366] opacity-20" />
                  💬
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#25D366] block mb-1">
                  WhatsApp Concierge
                </span>
                <h3 className="font-display text-lg font-bold text-[var(--color-primary)]">
                  Instant WhatsApp Chat
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] mt-1 font-light">
                  Fast response & custom family quotations
                </p>
              </div>
              <span className="text-xs font-semibold text-[#1ebe5d] mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Start WhatsApp Chat →
              </span>
            </a>

            {/* Channel 3: Head Office */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/60 hover:border-[var(--color-accent)] transition-all flex flex-col justify-between"
              aria-label="View Vapi head office directions on Google Maps"
            >
              <div>
                <span className="w-10 h-10 rounded-xl bg-white border border-[var(--color-sage)] flex items-center justify-center text-xl mb-4 group-hover:scale-105 transition-transform" aria-hidden="true">
                  📍
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-accent)] block mb-1">
                  Head Office • Vapi
                </span>
                <h3 className="font-display text-base font-bold text-[var(--color-primary)]">
                  {siteConfig.contact.address.city}, Gujarat
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] mt-1 font-light leading-relaxed">
                  {siteConfig.contact.address.street}
                </p>
              </div>
              <span className="text-xs font-semibold text-[var(--color-accent)] mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Google Maps Navigation →
              </span>
            </a>
          </div>
        </Container>
      </section>

      {/* Main Consultation Form Section */}
      <section aria-label="Send Written Inquiry" className="py-20 sm:py-28">
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
