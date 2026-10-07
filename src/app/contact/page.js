import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/data/site-config";
import QuickQuoteForm from "@/components/forms/QuickQuoteForm";
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
  return (
    <div className="bg-[var(--color-background)]">
      <ContactJsonLd />
      <Breadcrumbs items={[{ name: "Contact", url: "/contact" }]} />
      <div className="py-16 sm:py-20">
        <Container>
        <SectionHeading
          badge="Direct Communication"
          title="Contact Our Team"
          subtitle="We are here to assist with your package inquiries, visa formalities, and customized travel requests from Vapi and across India."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[var(--color-surface)] p-8 rounded-xl border border-[var(--color-sage)]/70 shadow-sm space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-primary)]">
                Head Office
              </h3>
              <address className="not-italic text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed">
                {siteConfig.contact.address.street}<br />
                {siteConfig.contact.address.city}, {siteConfig.contact.address.state} - {siteConfig.contact.address.pincode}<br />
                {siteConfig.contact.address.country}
              </address>
              <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${siteConfig.name} ${siteConfig.contact.address.street} ${siteConfig.contact.address.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-xs font-semibold text-[var(--color-accent)] hover:underline mt-2 inline-flex items-center gap-1"
                >
                  View on Google Maps →
                </a>
              </div>

              <div className="border-t border-[var(--color-sage)]/50 pt-4">
                <span className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider block">
                  Office Phone
                </span>
                <a
                  href={`tel:${siteConfig.contact.phoneClean || siteConfig.contact.phone}`}
                  className="text-base font-bold text-[var(--color-primary)] hover:underline block mt-0.5"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>

              <div className="border-t border-[var(--color-sage)]/50 pt-4">
                <span className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider block">
                  WhatsApp Support
                </span>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-[#25D366] hover:underline block mt-0.5"
                >
                  Direct WhatsApp Chat
                </a>
              </div>

              <div className="border-t border-[var(--color-sage)]/50 pt-4">
                <span className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider block">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm font-medium text-[var(--color-primary)] hover:underline block mt-0.5"
                >
                  {siteConfig.contact.email}
                </a>
                <a
                  href={`mailto:${siteConfig.contact.supportEmail}`}
                  className="text-xs font-medium text-[var(--color-text-muted)] hover:underline block mt-1"
                >
                  {siteConfig.contact.supportEmail} (Support)
                </a>
              </div>

              <div className="border-t border-[var(--color-sage)]/50 pt-4">
                <span className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider block">
                  Working Hours
                </span>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                  {siteConfig.contact.openingHours}
                </p>
                <p className="text-[10px] text-[var(--color-text-muted)] mt-1">
                  Sunday: Closed for weekly rest. Emergency WhatsApp available for urgent pilgrimage queries.
                </p>
              </div>

              <div className="border-t border-[var(--color-sage)]/50 pt-4">
                <span className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider block">
                  Languages Spoken
                </span>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                  English • Hindi • Urdu • Gujarati • Marathi
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <QuickQuoteForm />
          </div>
        </div>
        </Container>
      </div>
    </div>
  );
}
