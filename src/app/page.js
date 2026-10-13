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
import {
  buildJsonLd,
  getPageSchemas,
  getFAQPageSchema,
  getTouristTripSchema,
  getTravelAgencySchema,
  getWebSiteSchema,
} from "@/lib/seo";

export const metadata = {
  title: `${siteConfig.name} | Hajj & Umrah Packages in Vapi (396191), Gujarat`,
  description:
    `Authorised Hajj & Umrah pilgrimage operator in Vapi (396191), Gujarat. Verified 5-star & 3-star courtyard Haram hotels, Mumbai/Surat flight connections, complete visa facilitation, and 24/7 muallim support.`,
  keywords: siteConfig.keywords,
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
    title: `${siteConfig.name} | Hajj & Umrah Packages in Vapi (396191), Gujarat`,
    description:
      "Ministry-approved pilgrimage operator in Vapi, Gujarat. Verified Haram-courtyard hotels, direct airport transfers, 24/7 muallims, and complete visa facilitation.",
    siteName: siteConfig.name,
    locale: "en_IN",
    alternateLocale: ["en_US", "ar_SA"],
    images: [
      {
        url: siteConfig.defaultOGImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Hajj & Umrah Packages Vapi 396191 Gujarat`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Hajj & Umrah Operator Vapi (396191) Gujarat`,
    description:
      `Trusted pilgrimage operator in Vapi, Gujarat. Courtyard Haram hotels, flight transfers, 24/7 muallim support. Call ${siteConfig.contact.phoneDisplay}.`,
    creator: siteConfig.socials.twitter || "@alsafwatravels",
    site: siteConfig.socials.twitter || "@alsafwatravels",
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
  const agency = getTravelAgencySchema();
  const website = getWebSiteSchema();
  const featuredTrips = packages
    .filter((p) => p.featured)
    .slice(0, 3)
    .map((pkg) => getTouristTripSchema(pkg));
  const pageSchemas = getPageSchemas({
    path: "/",
    title: `${siteConfig.name} — Vapi 396191 Gujarat`,
    description: metadata.description,
    keywords: metadata.keywords,
    breadcrumbItems: homeBreadcrumb,
    image: siteConfig.defaultOGImage,
    faqs: homeFAQs,
  });
  const jsonLd = buildJsonLd(agency, website, ...pageSchemas, ...featuredTrips);
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
      <section id="journeys" aria-label="Curated pilgrimage collections" className="py-24 sm:py-32 relative">
        {/* Soft background ambient halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(216,188,120,0.08)_0%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10">
          {/* Spacious Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-[11px] font-semibold uppercase tracking-widest mb-4 shadow-xs">
              <span className="text-[9px]">✦</span>
              <span>Sacred Callings</span>
              <span className="text-[9px]">✦</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[var(--color-primary)] tracking-tight leading-[1.18]">
              Curated Pilgrimage Collections
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)] mt-5 font-light leading-relaxed">
              Three distinct, carefully architected journeys — each built around your spiritual goals, comfort preferences, and family requirements.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-10 h-px bg-gradient-to-r from-transparent to-[var(--color-accent)]/60" />
              <span className="text-[var(--color-accent)] text-xs font-serif opacity-70">✦</span>
              <div className="w-10 h-px bg-gradient-to-l from-transparent to-[var(--color-accent)]/60" />
            </div>
          </div>

          {/* 3 Large Editorial Photographic Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Umrah */}
            <Link
              href="/umrah"
              aria-label="Explore Umrah packages with Haram-facing hotels in Makkah and Madinah"
              className="group relative h-[490px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(6,74,67,0.22)] transition-all duration-500 flex flex-col justify-end p-8 border border-white/40 hover:border-[var(--color-accent-soft)]"
            >
              <Image
                src="/images/madinah-sanctuary.jpg"
                alt={`Masjid an-Nabawi Madinah sanctuary at sunset — Umrah packages by ${siteConfig.name}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062420]/95 via-black/45 to-transparent group-hover:from-[#062420]/98 transition-colors" />

              <div className="relative z-10 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent-soft)] mb-2 block">
                  ✦ Year-Round Blessing
                </span>
                <h3 className="font-display text-3xl font-bold mb-2">
                  The Umrah Calling
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 line-clamp-2 mb-6 font-light leading-relaxed">
                  Spiritual fulfillment with handpicked courtyard hotels facing the Holy Kaaba and Masjid An-Nabawi.
                </p>
                <div className="flex items-center justify-between border-t border-white/20 pt-4">
                  <span className="text-sm font-semibold text-[var(--color-accent-soft)]">
                    Starting from ₹85,000
                  </span>
                  <span className="text-xs font-semibold tracking-wider uppercase group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                    View Packages →
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 2: Hajj */}
            <Link
              href="/hajj"
              aria-label="Shariat-guided Hajj packages with ministry quota coordination"
              className="group relative h-[490px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(6,74,67,0.22)] transition-all duration-500 flex flex-col justify-end p-8 border border-white/40 hover:border-[var(--color-accent-soft)]"
            >
              <Image
                src="/images/hero-makkah.jpg"
                alt={`Holy Kaaba courtyard Makkah during Hajj season — ${siteConfig.name} Hajj packages`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062420]/95 via-black/45 to-transparent group-hover:from-[#062420]/98 transition-colors" />

              <div className="relative z-10 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent-soft)] mb-2 block">
                  ✦ The Fifth Pillar
                </span>
                <h3 className="font-display text-3xl font-bold mb-2">
                  Shariat-Guided Hajj
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 line-clamp-2 mb-6 font-light leading-relaxed">
                  Uncompromised spiritual guidance, Ministry quota processing, and VIP air-conditioned Mina tent accommodations.
                </p>
                <div className="flex items-center justify-between border-t border-white/20 pt-4">
                  <span className="text-sm font-semibold text-[var(--color-accent-soft)]">
                    2026 Quota Registrations
                  </span>
                  <span className="text-xs font-semibold tracking-wider uppercase group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                    Inquire Quota →
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 3: Ziyarat */}
            <Link
              href="/ziyarat"
              aria-label="Historical Ziyarat tours of sacred sites in Makkah and Madinah"
              className="group relative h-[490px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(6,74,67,0.22)] transition-all duration-500 flex flex-col justify-end p-8 border border-white/40 hover:border-[var(--color-accent-soft)]"
            >
              <Image
                src="/images/ziyarat-mountains.jpg"
                alt="Hejaz mountains — Cave Hira, Mount Uhud and other Ziyarat heritage sites tour"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062420]/95 via-black/45 to-transparent group-hover:from-[#062420]/98 transition-colors" />

              <div className="relative z-10 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent-soft)] mb-2 block">
                  ✦ Historical Heritage
                </span>
                <h3 className="font-display text-3xl font-bold mb-2">
                  Sanctuaries of Hejaz
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 line-clamp-2 mb-6 font-light leading-relaxed">
                  Stand where Islamic history was forged. Scholarly narrations across Cave Hira, Mount Uhud, and sacred sites.
                </p>
                <div className="flex items-center justify-between border-t border-white/20 pt-4">
                  <span className="text-sm font-semibold text-[var(--color-accent-soft)]">
                    Starting from ₹65,000
                  </span>
                  <span className="text-xs font-semibold tracking-wider uppercase group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
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
      <section aria-label={`Why choose ${siteConfig.name} pilgrimage experience`} className="py-24 sm:py-32 bg-[var(--color-surface)] border-y border-[var(--color-sage)]/60 relative overflow-hidden">
        {/* Luminous ambient background accent */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[var(--color-sage)]/30 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual: Floor-to-ceiling Kaaba suite view */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[400px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-[var(--color-sage)]/60">
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
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-gradient-to-br from-[var(--color-primary)] to-[#0c1e30] text-white p-5 sm:p-6 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.3)] max-w-xs border border-[var(--color-accent-soft)]/30 backdrop-blur-md">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent-soft)] block">
                  ✦ Guaranteed Proximity
                </span>
                <p className="font-display text-lg sm:text-xl font-bold mt-1.5 leading-snug">
                  Courtyard Steps to the Holy Sanctuaries
                </p>
              </div>
            </div>

            {/* Copy: The Pilgrimage Distinction */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-[11px] font-semibold uppercase tracking-widest">
                <span>✦</span>
                <span>The Pilgrimage Distinction</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] leading-tight">
                Where Every Step is Dedicated to Devotion
              </h2>

              <p className="text-sm sm:text-base text-[var(--color-text-muted)] font-light leading-relaxed">
                We eliminate the physical strain of crowded transportation so you and your loved ones can focus entirely on your prayers, peace of mind, and ibadah.
              </p>

              {/* 3 Minimalist Value Highlights */}
              <div className="space-y-4 pt-2">
                <div className="flex gap-4 items-start p-3.5 rounded-xl bg-[var(--color-background)] border border-[var(--color-sage)]/50">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--color-primary)]">
                      Zero-Transfer Walking Access
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5 font-light leading-relaxed">
                      Premium verified courtyard properties directly facing the Haram ladies and gents gates.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-3.5 rounded-xl bg-[var(--color-background)] border border-[var(--color-sage)]/50">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--color-primary)]">
                      Private Chauffeur & VIP Transit
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5 font-light leading-relaxed">
                      Comfortable late-model GMC and luxury air-conditioned coaches for all airport and inter-city routes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-3.5 rounded-xl bg-[var(--color-background)] border border-[var(--color-sage)]/50">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--color-primary)]">
                      Compassionate Senior Care
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5 font-light leading-relaxed">
                      Wheelchair escorts and personal attention to ensure elderly pilgrims travel in comfort and dignity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button href="/contact" variant="primary" size="lg" className="shadow-lg">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-[11px] font-semibold uppercase tracking-widest mb-3">
                <span>✦</span>
                <span>Signature Offerings</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[var(--color-primary)] tracking-tight">
                Featured Packages
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] mt-3 max-w-lg font-light leading-relaxed">
                Handpicked favourites from our catalog — selected for balanced comfort, spiritual priority, and transparent value.
              </p>
            </div>
            <Link
              href="/umrah"
              aria-label={`View full pilgrimage catalog of ${packages.length} packages`}
              className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 py-2 px-4 rounded-xl border border-[var(--color-primary)]/20 hover:border-[var(--color-accent)] bg-white shadow-xs"
            >
              <span>View Full Catalog ({packages.length} Packages)</span>
              <span>→</span>
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
          5B. AEO & GEO LOCAL AUTHORITY SECTION (Vapi 396191 Gujarat Direct Answers)
          ========================================================================= */}
      <section
        aria-label="Authorised Hajj and Umrah Operator in Vapi 396191 Gujarat"
        className="py-20 sm:py-24 bg-[var(--color-surface)] border-t border-[var(--color-sage)]/60"
      >
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-[11px] font-semibold uppercase tracking-widest">
              <span>📍</span>
              <span>Local Pilgrimage Authority • Vapi 396191, Gujarat</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
              Your Trusted Hajj & Umrah Operator in South Gujarat
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)] font-light leading-relaxed max-w-3xl mx-auto">
              <strong>{siteConfig.name}</strong> is an authorised pilgrimage agency based in <strong>Vapi (PIN: 396191)</strong>, Valsad district, Gujarat. We serve pilgrims across Vapi, Daman, Silvassa, and South Gujarat with all-inclusive Hajj registration, year-round Umrah tours, direct road-to-flight transit via Mumbai (BOM) & Surat (STV) international airports, and scholar muallims fluent in Gujarati, Hindi, and Urdu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/70 shadow-[0_4px_16px_rgba(23,33,31,0.03)] hover:border-[var(--color-accent)]/50 transition-all flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-xl bg-white border border-[var(--color-sage)]/60 flex items-center justify-center text-xl mb-4 shadow-xs" aria-hidden="true">
                  📍
                </span>
                <h3 className="font-semibold text-sm text-[var(--color-primary)] mb-1.5">
                  Head Office Vapi (396191)
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] font-light leading-relaxed">
                  Visit our office near Vapi Station East for personal family consultations, itinerary reviews, and passport submission.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/70 shadow-[0_4px_16px_rgba(23,33,31,0.03)] hover:border-[var(--color-accent)]/50 transition-all flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-xl bg-white border border-[var(--color-sage)]/60 flex items-center justify-center text-xl mb-4 shadow-xs" aria-hidden="true">
                  ✈️
                </span>
                <h3 className="font-semibold text-sm text-[var(--color-primary)] mb-1.5">
                  Direct Airport Transit
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] font-light leading-relaxed">
                  Seamless AC coach transfers from Vapi to Mumbai International Airport (BOM, 160km) and Surat Airport (STV, 115km).
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/70 shadow-[0_4px_16px_rgba(23,33,31,0.03)] hover:border-[var(--color-accent)]/50 transition-all flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-xl bg-white border border-[var(--color-sage)]/60 flex items-center justify-center text-xl mb-4 shadow-xs" aria-hidden="true">
                  📑
                </span>
                <h3 className="font-semibold text-sm text-[var(--color-primary)] mb-1.5">
                  Fast-Track E-Visa & Bio
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] font-light leading-relaxed">
                  Complete Saudi e-visa handling, medical insurance, and biometric verification guidance for Gujarat passport holders.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/70 shadow-[0_4px_16px_rgba(23,33,31,0.03)] hover:border-[var(--color-accent)]/50 transition-all flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-xl bg-white border border-[var(--color-sage)]/60 flex items-center justify-center text-xl mb-4 shadow-xs" aria-hidden="true">
                  🧕
                </span>
                <h3 className="font-semibold text-sm text-[var(--color-primary)] mb-1.5">
                  Gujarati & Urdu Muallims
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] font-light leading-relaxed">
                  Experienced scholars deliver daily fiqh lectures and personal step-by-step guidance in Gujarati, Urdu, and Hindi.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. EDITORIAL TESTIMONIAL / TRANQUILITY QUOTE (Clean, Serene Surface)
          ========================================================================= */}
      <section aria-label="Pilgrim testimonial" className="py-24 bg-gradient-to-br from-[#064A43] to-[#04332e] text-white text-center relative overflow-hidden">
        {/* Serene soft radial ambient lighting (No noisy dot patterns) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(216,188,120,0.14)_0%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10 max-w-3xl">
          <span className="font-display text-5xl text-[var(--color-accent-soft)] opacity-60 block mb-2 leading-none">
            “
          </span>
          <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl italic font-light text-white leading-relaxed mb-8 drop-shadow-sm">
            When my elderly parents traveled with {siteConfig.name}, their courtyard hotel and dedicated muallim support made every ritual effortless. It was the most peaceful journey of our lives.
          </blockquote>
          <div className="w-12 h-0.5 bg-[var(--color-accent-soft)] mx-auto mb-5 rounded-full" />
          <cite className="not-italic text-xs sm:text-sm font-medium tracking-widest text-emerald-100 uppercase block">
            Haji Iqbal Patel & Family • Vapi East (396191), Gujarat
          </cite>
        </Container>
      </section>

      {/* =========================================================================
          7. MINIMALIST BESPOKE CONCIERGE BANNER (Final High-Conversion CTA)
          ========================================================================= */}
      <section aria-label="Begin your pilgrimage journey contact" className="py-24 bg-[var(--color-background)]">
        <Container>
          <div className="relative rounded-3xl bg-gradient-to-br from-[#102A43] via-[#083b35] to-[var(--color-primary)] text-white p-10 sm:p-16 lg:p-20 shadow-[0_24px_60px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col items-center text-center border border-white/15">
            {/* Ambient golden glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-accent)]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[var(--color-accent-soft)] text-xs font-semibold tracking-widest uppercase mb-5 shadow-xs">
                <span>✦</span>
                <span>Bespoke Pilgrimage Advisory</span>
                <span>✦</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6 tracking-tight drop-shadow-sm">
                Begin Your Sacred Journey
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/90 font-light leading-relaxed mb-10 max-w-xl mx-auto">
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
                  variant="glass"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-4 text-base font-medium"
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
