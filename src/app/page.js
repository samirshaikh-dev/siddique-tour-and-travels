import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import TrustBadges from "@/components/common/TrustBadges";
import PackageGrid from "@/components/packages/PackageGrid";
import FAQAccordion from "@/components/common/FAQAccordion";
import QuickQuoteForm from "@/components/forms/QuickQuoteForm";
import { packages } from "@/data/packages";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site-config";
import { getWhatsAppUrl } from "@/lib/utils";

export default function HomePage() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsapp,
    siteConfig.contact.whatsappDefaultMessage
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary-dark)] text-white py-16 sm:py-24 lg:py-28 overflow-hidden">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d8bc78_1px,transparent_1px)] [background-size:24px_24px]" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[var(--color-accent-soft)] text-xs font-semibold tracking-wider uppercase border border-white/15">
                ✦ Ministry Authorized Pilgrimage Service
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                Your Journey to the Holy Lands, Guided with Peace of Mind
              </h1>

              <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Experience the spiritual blessing of Hajj, Umrah, and Ziyarat with verified close-to-Haram hotels, full visa facilitation, and compassionate 24/7 on-ground assistance.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
                <Button href="#packages" variant="gold" size="lg">
                  Explore Packages
                </Button>
                <Button
                  href={whatsappUrl}
                  variant="secondary"
                  size="lg"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  Speak to an Advisor
                </Button>
              </div>

              {/* Trust Points */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/15 text-center lg:text-left">
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-accent-soft)]">
                    100%
                  </div>
                  <div className="text-xs text-emerald-200 mt-0.5">Transparent Inclusions</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-accent-soft)]">
                    Walking
                  </div>
                  <div className="text-xs text-emerald-200 mt-0.5">Distance Haram Hotels</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-accent-soft)]">
                    24/7
                  </div>
                  <div className="text-xs text-emerald-200 mt-0.5">Ground Muallim Support</div>
                </div>
              </div>
            </div>

            {/* Floating Quick Lead Form */}
            <div className="lg:col-span-5">
              <QuickQuoteForm className="shadow-2xl" />
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Pillars */}
      <TrustBadges />

      {/* Packages Section */}
      <section id="packages" className="py-20 sm:py-24 bg-[var(--color-background)]">
        <Container>
          <SectionHeading
            badge="Curated Itineraries"
            title="Featured Pilgrimage Packages"
            subtitle="Thoughtfully structured packages for every budget, family size, and schedule. Verified accommodations with transparent inclusions."
          />

          <PackageGrid packages={packages} initialCategory="All" />
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-24 bg-[var(--color-surface)] border-y border-[var(--color-sage)]/60">
        <Container>
          <SectionHeading
            badge="Comprehensive Pilgrimage Care"
            title="Everything Handled For Your Peace of Mind"
            subtitle="From the moment you apply for your visa to the moment you step foot back home, our dedicated coordinators take care of every logistical detail."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="p-7 rounded-xl border border-[var(--color-sage)]/70 bg-[var(--color-background)]/40 hover:bg-[var(--color-background)] hover:border-[var(--color-accent)] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
                  ✓
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--color-primary)] mb-2">
                  {svc.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                  {svc.description}
                </p>
                <ul className="space-y-1.5 text-xs text-[var(--color-text)] border-t border-[var(--color-sage)]/50 pt-3">
                  {svc.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[var(--color-accent)] font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works (Step by Step) */}
      <section className="py-20 sm:py-24 bg-[var(--color-background)]">
        <Container>
          <SectionHeading
            badge="Simple Process"
            title="How Your Journey Begins"
            subtitle="A clear, respectful 4-step path to fulfilling your sacred pilgrimage."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Package",
                description: "Select an Umrah, Hajj, or Ziyarat plan that matches your schedule and comfort preferences.",
              },
              {
                step: "02",
                title: "Documentation & Visa",
                description: "Submit passport copies and photos. Our team handles your biometric schedule, e-visa, and medical insurance.",
              },
              {
                step: "03",
                title: "Pre-Departure Briefing",
                description: "Receive your comprehensive travel kit, flight tickets, hotel vouchers, and practical shariat guidance.",
              },
              {
                step: "04",
                title: "Travel with Dignity",
                description: "Be received at the airport by our coordinators. Complete your rituals in peace with round-the-clock support.",
              },
            ].map((st, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-surface)] p-6 rounded-xl border border-[var(--color-sage)]/60 text-center relative"
              >
                <span className="font-display text-4xl font-bold text-[var(--color-accent)]/40 block mb-2">
                  {st.step}
                </span>
                <h4 className="font-display text-lg font-bold text-[var(--color-primary)] mb-2">
                  {st.title}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 bg-[var(--color-surface)] border-t border-[var(--color-sage)]/60">
        <Container>
          <SectionHeading
            badge="Help & Guidance"
            title="Frequently Asked Questions"
            subtitle="Answers to common questions regarding visa requirements, hotels, elderly assistance, and booking."
          />

          <FAQAccordion items={faqs} />
        </Container>
      </section>

      {/* Final Contact CTA Section */}
      <section className="py-16 sm:py-20 bg-[var(--color-primary)] text-white">
        <Container className="text-center max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Begin Your Sacred Journey Today
          </h2>
          <p className="text-emerald-100 text-base sm:text-lg mb-8 leading-relaxed">
            Our experienced pilgrimage consultants are ready to answer your questions and customize the perfect itinerary for you and your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="lg"
            >
              Chat on WhatsApp ({siteConfig.contact.phoneDisplay})
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-[var(--color-primary)] hover:bg-emerald-50"
            >
              Send Detailed Inquiry
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
