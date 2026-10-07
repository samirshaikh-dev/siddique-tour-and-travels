import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { services } from "@/data/services";
import QuickQuoteForm from "@/components/forms/QuickQuoteForm";
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

function ServicesJsonLd() {
  const serviceSchemas = services.map((svc) => getServiceSchema(svc));
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

export default function ServicesPage() {
  return (
    <div className="bg-[var(--color-background)]">
      <ServicesJsonLd />
      <Breadcrumbs items={[{ name: "Services", url: "/services" }]} />
      <div className="py-16 sm:py-20">
        <Container>
        <SectionHeading
          badge="Complete Support"
          title="Our Pilgrimage Services"
          subtitle="Every logistical necessity handled with excellence, transparency and care — whether as standalone add-ons or fully integrated into your chosen pilgrimage package."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((svc) => (
            <article
              key={svc.id}
              className="bg-[var(--color-surface)] p-8 rounded-xl border border-[var(--color-sage)]/70 shadow-sm"
            >
              <h3 className="font-display text-2xl font-bold text-[var(--color-primary)] mb-3">
                {svc.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                {svc.description}
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[var(--color-text)] border-t border-[var(--color-sage)]/50 pt-4">
                {svc.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Lead Form Banner */}
        <div className="max-w-xl mx-auto">
          <QuickQuoteForm />
        </div>
        </Container>
      </div>
    </div>
  );
}
