import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import QuickQuoteForm from "@/components/forms/QuickQuoteForm";
import PageHero from "@/components/common/PageHero";
import FaqAccordion from "@/components/common/FAQAccordion";
import { siteConfig } from "@/data/site-config";
import { buildJsonLd, getPageSchemas, getServiceSchema, getFAQPageSchema } from "@/lib/seo";

export const metadata = {
  title: "Pilgrimage Support Services | Visa, Hotels, Transport & Catering",
  description:
    "Complete end-to-end pilgrimage support services by Siddique Tours — fast-track Umrah visa & documentation, handpicked Haram-facing hotels, private VIP & group AC transport, Ziyarat guides, elderly wheelchair support and hygienic halal catering.",
  keywords: [
    "Umrah visa service from Vapi Gujarat",
    "Haram facing hotel booking Makkah Madinah",
    "AC transport Makkah Madinah Jeddah",
    "Elderly wheelchair support Hajj Umrah",
    "Halal catering for pilgrimage groups",
    "Guided Ziyarat scholar service",
    "Visa passport facilitation pilgrimage",
    "Private VIP chauffeur GMC transfer Makkah",
    "Pilgrimage support service Siddique Tours",
    "Ground handling service Makkah Madinah",
  ],
  alternates: {
    canonical: "/services",
    languages: Object.fromEntries(
      siteConfig.languageAlternates.map((l) => [
        l.hrefLang,
        `${l.href}/services`,
      ])
    ),
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/services`,
    title: "Pilgrimage Services | Visa, Haram Hotels, Transport, Ziyarat & Elderly Care",
    description:
      "Full logistics for your pilgrimage — fast-track visas, verified Haram hotels, AC coaches, private VIP vehicles, guided Ziyarat, wheelchair escorts and hygienic halal catering by Siddique Tours.",
    siteName: siteConfig.name,
    locale: "en_IN",
    images: [
      {
        url: siteConfig.defaultOGImage,
        width: 1200,
        height: 630,
        alt: "Siddique Tours comprehensive pilgrimage support services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilgrimage Services | Visa, Hotels, Transport, Ziyarat & Elderly Care",
    description:
      "Full pilgrimage logistics — visa, Haram hotels, AC transport, Ziyarat, wheelchair & senior care and halal catering.",
    creator: "@siddiquetours",
    site: "@siddiquetours",
    images: [siteConfig.defaultTwitterImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const servicesFAQs = [
  {
    question: "Can I book individual services instead of a full package?",
    answer:
      "Yes. Siddique Tours offers each service independently — whether you need only an Umrah visa, only hotel reservations, standalone Ziyarat tours, airport transport, or a private chauffeur for a portion of your stay. Contact our Vapi office for à la carte service pricing and availability.",
  },
  {
    question: "How fast can you process an Umrah e-visa from India?",
    answer:
      "Our fast-track electronic Umrah visa processing typically completes within 5–10 working days from the date of complete document submission (valid passport, photographs, insurance, and sponsorship). Peak and Ramadan seasons may require 10–15 working days — we always recommend submitting well in advance.",
  },
  {
    question: "Do you offer wheelchair and personal assistant services for seniors?",
    answer:
      "Absolutely. Senior and disabled pilgrim care is a Siddique Tours speciality. We provide pre-booked Tawaf wheelchairs (manual and electric on request), ground-floor or elevator-adjacent hotel rooms, Mashair volunteer escorts, and — on premium packages — a dedicated personal assistant throughout the journey for families travelling with elderly parents.",
  },
];

function ServicesJsonLd() {
  const serviceSchemas = services.map((svc) => getServiceSchema(svc));
  const pageSchemas = getPageSchemas({
    path: "/services",
    title: "Pilgrimage Services",
    description: metadata.description,
    keywords: metadata.keywords,
    breadcrumbItems: [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
    ],
    image: siteConfig.defaultOGImage,
    faqs: servicesFAQs,
  });
  const faq = getFAQPageSchema(servicesFAQs);
  const jsonLd = buildJsonLd(...pageSchemas, faq, ...serviceSchemas);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

const serviceIcons = {
  Passport: "🛂",
  Building: "🏨",
  Bus: "🚍",
  Compass: "🧭",
  Heart: "🤲",
  Utensils: "🍲",
};

export default function ServicesPage() {
  return (
    <div className="bg-[var(--color-background)]">
      <ServicesJsonLd />

      {/* Cinematic Hero */}
      <PageHero
        badge="End-to-End Care"
        title="Pilgrimage Services,"
        titleHighlight="Crafted for Serenity."
        subtitle="From fast-track e-visas and courtyard hotel reservations to VIP GMC private transfers and elderly wheelchair escorts."
        imageSrc="/images/luxury-suite.jpg"
        imageAlt="Luxury courtyard suite and pilgrimage VIP logistics"
        breadcrumbs={[{ name: "Services", url: "/services" }]}
      />

      {/* Services Bento Grid */}
      <section aria-label="Available Pilgrimage Logistics Services" className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            badge="Comprehensive Capabilities"
            title="Every Detail Handled with Excellence"
            subtitle="Available as standalone à la carte bookings or fully coordinated into your bespoke family package."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {services.map((svc) => {
              const icon = serviceIcons[svc.icon] || "✦";

              return (
                <article
                  key={svc.id}
                  className="p-7 sm:p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-sage)]/70 hover:border-[var(--color-accent)]/50 transition-all shadow-sm hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-background)] border border-[var(--color-sage)]/60 flex items-center justify-center text-2xl mb-5 shadow-xs" aria-hidden="true">
                      {icon}
                    </div>

                    <h3 className="font-display text-xl font-bold text-[var(--color-primary)] mb-2">
                      {svc.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-light leading-relaxed mb-6">
                      {svc.description}
                    </p>
                  </div>

                  <div className="border-t border-[var(--color-sage)]/40 pt-4 space-y-2">
                    {svc.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[var(--color-text)]">
                        <span className="text-[var(--color-accent)] font-bold text-xs">✓</span>
                        <span className="font-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Quick Inquiry Dock */}
          <div className="max-w-xl mx-auto mb-28">
            <QuickQuoteForm />
          </div>

          {/* Interactive FAQ Accordion */}
          <FaqAccordion items={servicesFAQs} title="Frequently Asked Service Questions" />
        </Container>
      </section>
    </div>
  );
}
