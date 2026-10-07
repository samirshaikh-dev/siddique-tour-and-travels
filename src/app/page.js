import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { packages } from "@/data/packages";
import { siteConfig } from "@/data/site-config";
import { getWhatsAppUrl } from "@/lib/utils";
import PackageCard from "@/components/packages/PackageCard";
import HeroParallax from "@/components/home/HeroParallax";
import TrustBar from "@/components/home/TrustBar";
import { buildJsonLd, getPageSchemas, getFAQPageSchema, getTouristTripSchema } from "@/lib/seo";

export const metadata = {
  title: `${siteConfig.name} | Hajj, Umrah & Ziyarat Packages from India`,
  description:
    "Siddique Tours and Travels — Ministry-approved Hajj, Umrah & Ziyarat packages from Gujarat & India. Courtyard Haram hotels, 24/7 muallim support, VIP transfers, and complete visa logistics with transparent pricing.",
  keywords: [
    "Siddique Tours and Travels Vapi",
    "Hajj Packages 2026 from India",
    "Umrah Packages from Gujarat",
    "Ministry Approved Hajj Operator",
    "Courtyard Hotels Near Haram Makkah",
    "VIP Umrah Package Makkah Madinah",
    "Ziyarat Tours from Vapi",
    "Hajj Quota Registration Gujarat",
    "5 Star Umrah Package India",
    "Vapi Travel Agency Hajj Umrah",
  ],
  alternates: {
    canonical: "/",
    languages: Object.fromEntries(
      siteConfig.languageAlternates.map((l) => [
        l.hrefLang,
        `${l.href}/`,
      ])
    ),
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} | Sacred Hajj, Umrah & Ziyarat Journeys from India`,
    description:
      "Ministry-approved pilgrimage operator. Verified Haram-courtyard hotels, 24/7 muallims, private VIP transfers, and full visa coordination for Hajj, Umrah & Ziyarat.",
    siteName: siteConfig.name,
    locale: "en_IN",
    alternateLocale: ["en_US", "ar_SA"],
    images: [
      {
        url: siteConfig.defaultOGImage,
        width: 1200,
        height: 630,
        alt: "Siddique Tours and Travels — Premium Hajj Umrah Ziyarat Packages",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Hajj, Umrah & Ziyarat from Vapi, Gujarat`,
    description:
      "Trusted pilgrimage operator. Haram-courtyard hotels, muallim support, full visa logistics. Call +91 90165 31369.",
    creator: "@siddiquetours",
    site: "@siddiquetours",
    images: [siteConfig.defaultTwitterImage],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": 170,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const homeBreadcrumb = [
  { name: "Home", url: "/" },
];

const homeFAQs = (siteConfig.faq || []).slice(0, 6);

function HomeJsonLd() {
  const featuredTrips = packages
    .filter((p) => p.featured)
    .slice(0, 3)
    .map((pkg) => getTouristTripSchema(pkg));
  const pageSchemas = getPageSchemas({
    path: "/",
    title: siteConfig.name,
    description: metadata.description,
    keywords: metadata.keywords,
    breadcrumbItems: homeBreadcrumb,
    image: siteConfig.defaultOGImage,
  });
  const faq = getFAQPageSchema(homeFAQs);
  const jsonLd = buildJsonLd(...pageSchemas, faq, ...featuredTrips);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

export default function HomePage() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsapp,
    siteConfig.contact.whatsappDefaultMessage
  );

  const signaturePackages = packages.slice(0, 3);

  return (
    <div className="bg-[var(--color-background)] overflow-hidden">
      <HomeJsonLd />

      {/* =========================================================================
          1. CINEMATIC LUXURY HERO SECTION (GSAP ScrollTrigger Parallax & Motion)
          ========================================================================= */}
      <HeroParallax whatsappUrl={whatsappUrl} />

      {/* =========================================================================
          2. MINIMALIST REASSURANCE BAR (Staggered Motion Entrance)
          ========================================================================= */}
      <TrustBar />

      {/* =========================================================================
          3. THE THREE SACRED JOURNEYS (EDITORIAL VISUAL PORTALS)
          ========================================================================= */}
      <section id="journeys" aria-label="Curated pilgrimage collections" className="py-24 sm:py-32">
        <Container>
          {/* Spacious Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
              Sacred Callings
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[var(--color-primary)] tracking-tight">
              Curated Pilgrimage Collections
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)] mt-6 font-light leading-relaxed">
              Three distinct, carefully architected journeys — each built around your spiritual goals, budget, and family requirements.
            </p>
            <div className="w-16 h-0.5 bg-[var(--color-accent)] mx-auto mt-5 rounded-full" />
          </div>

          {/* 3 Large Editorial Photographic Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Umrah */}
            <Link
              href="/umrah"
              aria-label="Explore Umrah packages with Haram-facing hotels in Makkah and Madinah"
              className="group relative h-[480px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-8"
            >
              <Image
                src="/images/madinah-sanctuary.jpg"
                alt="Masjid an-Nabawi Madinah sanctuary at sunset — Umrah packages by Siddique Tours"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-colors" />

              <div className="relative z-10 text-white">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-soft)] mb-2 block">
                  Year-Round Blessing
                </span>
                <h3 className="font-display text-3xl font-bold mb-2">
                  The Umrah Calling
                </h3>
                <p className="text-xs text-stone-200 line-clamp-2 mb-6 font-light">
                  Spiritual fulfillment with handpicked courtyard hotels facing the Holy Kaaba and Masjid An-Nabawi.
                </p>
                <div className="flex items-center justify-between border-t border-white/20 pt-4">
                  <span className="text-sm font-semibold text-[var(--color-accent-soft)]">
                    Starting from ₹85,000
                  </span>
                  <span className="text-xs font-semibold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                    View Packages →
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 2: Hajj */}
            <Link
              href="/hajj"
              aria-label="Shariat-guided Hajj packages with ministry quota coordination"
              className="group relative h-[480px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-8"
            >
              <Image
                src="/images/hero-makkah.jpg"
                alt="Holy Kaaba courtyard Makkah during Hajj season — Siddique Tours Hajj packages"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-colors" />

              <div className="relative z-10 text-white">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-soft)] mb-2 block">
                  The Fifth Pillar
                </span>
                <h3 className="font-display text-3xl font-bold mb-2">
                  Shariat-Guided Hajj
                </h3>
                <p className="text-xs text-stone-200 line-clamp-2 mb-6 font-light">
                  Uncompromised spiritual guidance, Ministry quota processing, and VIP air-conditioned Mina tent accommodations.
                </p>
                <div className="flex items-center justify-between border-t border-white/20 pt-4">
                  <span className="text-sm font-semibold text-[var(--color-accent-soft)]">
                    2026 Quota Registrations
                  </span>
                  <span className="text-xs font-semibold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                    Inquire Quota →
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 3: Ziyarat */}
            <Link
              href="/ziyarat"
              aria-label="Historical Ziyarat tours of sacred sites in Makkah and Madinah"
              className="group relative h-[480px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-8"
            >
              <Image
                src="/images/ziyarat-mountains.jpg"
                alt="Hejaz mountains — Cave Hira, Mount Uhud and other Ziyarat heritage sites tour"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-colors" />

              <div className="relative z-10 text-white">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-soft)] mb-2 block">
                  Historical Heritage
                </span>
                <h3 className="font-display text-3xl font-bold mb-2">
                  Sanctuaries of Hejaz
                </h3>
                <p className="text-xs text-stone-200 line-clamp-2 mb-6 font-light">
                  Stand where Islamic history was forged. Scholarly narrations across Cave Hira, Mount Uhud, and sacred sites.
                </p>
                <div className="flex items-center justify-between border-t border-white/20 pt-4">
                  <span className="text-sm font-semibold text-[var(--color-accent-soft)]">
                    Starting from ₹65,000
                  </span>
                  <span className="text-xs font-semibold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                    Explore Tours →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. THE COURTYARD SANCTUARY EXPERIENCE (ASYMMETRICAL LUXURY SPOTLIGHT)
          ========================================================================= */}
      <section aria-label="Why choose Siddique Tours pilgrimage experience" className="py-24 bg-[var(--color-surface)] border-y border-[var(--color-sage)]/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual: Floor-to-ceiling Kaaba suite view */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/luxury-suite.jpg"
                  alt="Luxury 5-star hotel suite overlooking the Holy Kaaba courtyard — premium Umrah package feature"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                />
              </div>

              {/* Floating luxury badge */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[var(--color-primary)] text-white p-5 rounded-xl shadow-xl max-w-xs border border-[var(--color-accent)]/30 backdrop-blur-md">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-soft)] block">
                  Guaranteed Proximity
                </span>
                <p className="font-display text-lg font-bold mt-1 leading-snug">
                  Courtyard Steps to the Holy Sanctuaries
                </p>
              </div>
            </div>

            {/* Copy: The Siddique Distinction */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] block">
                The Siddique Distinction
              </span>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] leading-tight">
                Where Every Step is Dedicated to Devotion
              </h2>

              <p className="text-sm sm:text-base text-[var(--color-text-muted)] font-light leading-relaxed">
                We remove the physical strain of crowded transportation so you and your loved ones can focus entirely on your prayers and ibadah.
              </p>

              {/* 3 Minimalist Value Highlights */}
              <div className="space-y-4 pt-2">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-sage)]/60 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--color-primary)]">
                      Zero-Transfer Walking Access
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                      Premium properties directly opposite the Haram ladies and gents gates.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-sage)]/60 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--color-primary)]">
                      Private Chauffeur & VIP Transit
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                      Comfortable late-model GMC and luxury air-conditioned coaches for all journeys.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-sage)]/60 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--color-primary)]">
                      Compassionate Senior Care
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                      Wheelchair escorts and personal support to ensure elderly pilgrims travel in dignity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button href="/contact" variant="primary" size="lg">
                  Speak to an Advisor
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. FEATURED SIGNATURE PACKAGES (Spacious, Clean Catalog)
          ========================================================================= */}
      <section aria-label="Featured pilgrimage packages" className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
                Signature Offerings
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[var(--color-primary)] tracking-tight">
                Featured Packages
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] mt-4 max-w-lg font-light">
                Handpicked favourites from our catalog — selected for balanced comfort, spiritual priority, and transparent value.
              </p>
            </div>
            <Link
              href="/umrah"
              aria-label={`View full pilgrimage catalog of ${packages.length} packages`}
              className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5"
            >
              View Full Catalog ({packages.length} Packages) →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signaturePackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. EDITORIAL TESTIMONIAL / TRANQUILITY QUOTE
          ========================================================================= */}
      <section aria-label="Pilgrim testimonial" className="py-20 bg-[var(--color-primary)] text-white text-center relative overflow-hidden">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d8bc78_1px,transparent_1px)] [background-size:24px_24px]" />

        <Container className="relative z-10 max-w-3xl">
          <span className="font-display text-5xl text-[var(--color-accent-soft)] opacity-40 block mb-2">
            “
          </span>
          <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl italic font-light text-white leading-relaxed mb-6">
            When my elderly parents traveled with Siddique Tours, their courtyard hotel and dedicated muallim support made every ritual effortless. It was the most peaceful journey of our lives.
          </blockquote>
          <div className="w-12 h-0.5 bg-[var(--color-accent-soft)] mx-auto mb-4" />
          <cite className="not-italic text-sm font-medium tracking-wide text-emerald-100 uppercase block">
            Dr. Tariq Khan & Family • Vapi, Gujarat
          </cite>
        </Container>
      </section>

      {/* =========================================================================
          7. MINIMALIST BESPOKE CONCIERGE BANNER (Final High-Conversion CTA)
          ========================================================================= */}
      <section aria-label="Begin your pilgrimage journey contact" className="py-24 bg-[var(--color-background)]">
        <Container>
          <div className="relative rounded-3xl bg-gradient-to-br from-[var(--color-secondary-dark)] to-[var(--color-primary)] text-white p-10 sm:p-16 lg:p-20 shadow-2xl overflow-hidden flex flex-col items-center text-center">
            {/* Ambient golden glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-soft)] mb-3 block">
                Bespoke Pilgrimage Advisory
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
                Begin Your Sacred Journey
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/90 font-light leading-relaxed mb-10">
                Connect directly with our senior coordinators on WhatsApp for personalized date options, hotel upgrades, and customized family quotes.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href={whatsappUrl}
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-4 text-base shadow-xl font-semibold"
                >
                  Direct WhatsApp Chat ({siteConfig.contact.phoneDisplay})
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-4 text-base bg-white/10 text-white border-white/20 hover:bg-white/20 font-medium"
                >
                  Request a Written Itinerary
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
