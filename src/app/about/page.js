import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/data/site-config";
import Button from "@/components/ui/Button";
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
    type: "profile",
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

export default function AboutPage() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsapp,
    siteConfig.contact.whatsappDefaultMessage
  );

  return (
    <div className="bg-[var(--color-background)]">
      <AboutJsonLd />
      <Breadcrumbs items={[{ name: "About", url: "/about" }]} />
      <div className="py-16 sm:py-20">
        <Container className="max-w-4xl">
        <SectionHeading
          badge="Our Sacred Calling"
          title={`About ${siteConfig.name}`}
          subtitle="Built on the foundational virtues of honesty (Sidq), reliability, and deep devotion to the guests of the Holy Sanctuaries."
        />

        <article className="bg-[var(--color-surface)] p-8 sm:p-12 rounded-xl border border-[var(--color-sage)]/70 shadow-sm space-y-6 text-[var(--color-text)] leading-relaxed">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
            Dedicated Service to the Guests of Allah (SWT)
          </h3>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)]">
            Founded with a commitment to elevate the pilgrimage experience, Siddique Tours and Travels has grown to become a respected and trustworthy operator for Hajj, Umrah, and historical Ziyarat journeys serving pilgrims from Gujarat, Maharashtra, and across India.
          </p>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)]">
            We understand that a pilgrimage is not merely an overseas tour—it is an intensely spiritual milestone that many prepare for over an entire lifetime. Every hotel partner, transport provider, and on-ground guide is chosen to protect your peace of mind and maximize your devotion.
          </p>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)]">
            From our head office in Vapi, Gujarat, our senior team personally coordinates every booking — from visa documentation and flight routing to hotel inspections and muallim assignments. No call-centre intermediaries, no hidden surcharges, and no last-minute surprises — only honest, straightforward, and dignified pilgrimage care.
          </p>

          <div className="pt-6 border-t border-[var(--color-sage)] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-[var(--color-background)] rounded-lg border border-[var(--color-sand)]">
              <span className="font-display text-3xl font-bold text-[var(--color-primary)] block">
                100%
              </span>
              <span className="text-xs text-[var(--color-text-muted)] mt-1 block">
                Ministry Compliant
              </span>
            </div>
            <div className="p-4 bg-[var(--color-background)] rounded-lg border border-[var(--color-sand)]">
              <span className="font-display text-3xl font-bold text-[var(--color-primary)] block">
                24/7
              </span>
              <span className="text-xs text-[var(--color-text-muted)] mt-1 block">
                On-Ground Support
              </span>
            </div>
            <div className="p-4 bg-[var(--color-background)] rounded-lg border border-[var(--color-sand)]">
              <span className="font-display text-3xl font-bold text-[var(--color-primary)] block">
                Zero
              </span>
              <span className="text-xs text-[var(--color-text-muted)] mt-1 block">
                Hidden Surcharges
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-[var(--color-sage)] space-y-5">
            <h4 className="font-display text-xl font-bold text-[var(--color-primary)]">
              Our Core Sacred Commitments
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-[var(--color-text-muted)]">
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">✓</span>
                <span><strong className="text-[var(--color-primary)]">Honest & Transparent Pricing:</strong> Every rupee accounted for with fully itemised quotations — zero hidden charges or last-minute add-ons.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">✓</span>
                <span><strong className="text-[var(--color-primary)]">Personally Verified Hotels:</strong> Our team inspects every property before inclusion in our catalogue — no stock photos, no surprises, no downgrades.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">✓</span>
                <span><strong className="text-[var(--color-primary)]">Senior-First Service:</strong> Elderly pilgrims and first — wheelchair escorts, ground-floor rooms, Mashair volunteers, and medical standby throughout.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">✓</span>
                <span><strong className="text-[var(--color-primary)]">Religiously Sensitive Care:</strong> Experienced, God-fearing muallims who place your ibadah and ritual correctness above all commercial priorities.</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-[var(--color-sage)] flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={whatsappUrl} variant="whatsapp">
              Connect on WhatsApp
            </Button>
            <Button href="/contact" variant="primary">
              Contact Our Office
            </Button>
          </div>
        </article>
        </Container>
      </div>
    </div>
  );
}
