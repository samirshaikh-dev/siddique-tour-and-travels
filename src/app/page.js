import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { packages } from "@/data/packages";
import { siteConfig } from "@/data/site-config";
import { getWhatsAppUrl } from "@/lib/utils";
import PackageCard from "@/components/packages/PackageCard";

export default function HomePage() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsapp,
    siteConfig.contact.whatsappDefaultMessage
  );

  const signaturePackages = packages.slice(0, 3);

  return (
    <div className="bg-[var(--color-background)] overflow-hidden">
      {/* =========================================================================
          1. CINEMATIC LUXURY HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center text-white overflow-hidden">
        {/* Full-bleed high-res background photography */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-makkah.jpg"
            alt="The Holy Kaaba at dawn - Siddique Tours and Travels"
            fill
            priority
            className="object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000"
            sizes="100vw"
          />
          {/* Multi-stage luxury gradient overlay: preserves image while guaranteeing AAA contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/70" />
        </div>

        <Container className="relative z-10 py-20 sm:py-28 text-center max-w-4xl mx-auto flex flex-col items-center">
          {/* Subtle gold badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[var(--color-accent-soft)] text-xs font-semibold tracking-widest uppercase mb-8 shadow-lg">
            <span>✦</span>
            <span>Bespoke Hajj • Umrah • Ziyarat</span>
            <span>✦</span>
          </div>

          {/* Grand Editorial Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
            Your Journey to Faith,{" "}
            <span className="italic font-normal text-[var(--color-accent-soft)] block sm:inline">
              Elevated in Serenity.
            </span>
          </h1>

          {/* Minimalist, evocative subtitle */}
          <p className="text-base sm:text-xl text-emerald-50/90 max-w-2xl font-light leading-relaxed mb-10 drop-shadow">
            Handcrafted pilgrimages featuring verified 5-star courtyard sanctuaries, private chauffeur transfers, and devoted on-ground scholar care.
          </p>

          {/* Visually Prominent Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <Button
              href="#journeys"
              variant="gold"
              size="lg"
              className="w-full sm:w-auto text-base px-8 py-4 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all font-semibold"
            >
              Explore Sacred Packages
            </Button>
            <Button
              href={whatsappUrl}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-base px-8 py-4 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:scale-[1.02] transition-all font-medium"
            >
              Instant WhatsApp Concierge
            </Button>
          </div>

          {/* Floating Luxury Trip Planner Bar */}
          <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/25 rounded-2xl p-4 sm:p-5 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <Link
                href="/umrah"
                className="group p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all text-white flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-semibold text-[var(--color-accent-soft)] block">
                    Year-Round
                  </span>
                  <span className="font-display text-base font-bold group-hover:text-[var(--color-accent-soft)] transition-colors">
                    Umrah Packages
                  </span>
                </div>
                <span className="text-lg opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </Link>

              <Link
                href="/hajj"
                className="group p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all text-white flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-semibold text-[var(--color-accent-soft)] block">
                    The 5th Pillar
                  </span>
                  <span className="font-display text-base font-bold group-hover:text-[var(--color-accent-soft)] transition-colors">
                    Hajj Registration
                  </span>
                </div>
                <span className="text-lg opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </Link>

              <Link
                href="/ziyarat"
                className="group p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all text-white flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-semibold text-[var(--color-accent-soft)] block">
                    Historic Hejaz
                  </span>
                  <span className="font-display text-base font-bold group-hover:text-[var(--color-accent-soft)] transition-colors">
                    Sacred Ziyarat
                  </span>
                </div>
                <span className="text-lg opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. MINIMALIST REASSURANCE BAR (Subtle Credibility Strip)
          ========================================================================= */}
      <div className="bg-[var(--color-surface)] border-b border-[var(--color-sage)]/50 py-6">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="font-display text-2xl font-bold text-[var(--color-primary)]">
                0 Metres
              </span>
              <p className="text-xs text-[var(--color-text-muted)]">Courtyard Haram Hotel Access</p>
            </div>
            <div className="space-y-1">
              <span className="font-display text-2xl font-bold text-[var(--color-primary)]">
                100% Verified
              </span>
              <p className="text-xs text-[var(--color-text-muted)]">Transparent Itineraries & Visas</p>
            </div>
            <div className="space-y-1">
              <span className="font-display text-2xl font-bold text-[var(--color-primary)]">
                24/7 Muallim
              </span>
              <p className="text-xs text-[var(--color-text-muted)]">Dedicated On-Ground Scholar Care</p>
            </div>
            <div className="space-y-1">
              <span className="font-display text-2xl font-bold text-[var(--color-primary)]">
                Direct Flights
              </span>
              <p className="text-xs text-[var(--color-text-muted)]">Full-Service Airline Connections</p>
            </div>
          </div>
        </Container>
      </div>

      {/* =========================================================================
          3. THE THREE SACRED JOURNEYS (EDITORIAL VISUAL PORTALS)
          ========================================================================= */}
      <section id="journeys" className="py-24 sm:py-32">
        <Container>
          {/* Spacious Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
              Sacred Callings
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[var(--color-primary)] tracking-tight">
              Curated Pilgrimage Collections
            </h2>
            <div className="w-16 h-0.5 bg-[var(--color-accent)] mx-auto mt-5 rounded-full" />
          </div>

          {/* 3 Large Editorial Photographic Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Umrah */}
            <Link
              href="/umrah"
              className="group relative h-[480px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-8"
            >
              <Image
                src="/images/madinah-sanctuary.jpg"
                alt="Madinah sanctuary at sunset"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 33vw"
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
              className="group relative h-[480px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-8"
            >
              <Image
                src="/images/hero-makkah.jpg"
                alt="Holy Kaaba courtyard Makkah"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 33vw"
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
              className="group relative h-[480px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-8"
            >
              <Image
                src="/images/ziyarat-mountains.jpg"
                alt="Hejaz mountains of Mecca and Medina"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 33vw"
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
      <section className="py-24 bg-[var(--color-surface)] border-y border-[var(--color-sage)]/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual: Floor-to-ceiling Kaaba suite view */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/luxury-suite.jpg"
                  alt="Luxury hotel room overlooking the Holy Kaaba"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
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
      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
                Signature Offerings
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[var(--color-primary)] tracking-tight">
                Featured Packages
              </h2>
            </div>
            <Link
              href="/umrah"
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
      <section className="py-20 bg-[var(--color-primary)] text-white text-center relative overflow-hidden">
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
            Dr. Tariq Khan & Family • Mumbai
          </cite>
        </Container>
      </section>

      {/* =========================================================================
          7. MINIMALIST BESPOKE CONCIERGE BANNER (Final High-Conversion CTA)
          ========================================================================= */}
      <section className="py-24 bg-[var(--color-background)]">
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
