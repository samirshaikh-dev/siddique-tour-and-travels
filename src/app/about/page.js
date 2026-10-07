import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site-config";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata = {
  title: "About Siddique Tours and Travels",
  description:
    "Learn about our founding philosophy, ministry credentials, and dedication to serving pilgrims with honesty and care.",
};

export default function AboutPage() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsapp,
    siteConfig.contact.whatsappDefaultMessage
  );

  return (
    <div className="py-16 sm:py-20 bg-[var(--color-background)]">
      <Container className="max-w-4xl">
        <SectionHeading
          badge="Our Sacred Calling"
          title="About Siddique Tours & Travels"
          subtitle="Built on the foundational virtues of honesty (Sidq), reliability, and deep devotion to the guests of the Holy Sanctuaries."
        />

        <div className="bg-[var(--color-surface)] p-8 sm:p-12 rounded-xl border border-[var(--color-sage)]/70 shadow-sm space-y-6 text-[var(--color-text)] leading-relaxed">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
            Dedicated Service to the Guests of Allah (SWT)
          </h3>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)]">
            Founded with a commitment to elevate the pilgrimage experience, Siddique Tours and Travels has grown to become a respected and trustworthy operator for Hajj, Umrah, and historical Ziyarat journeys.
          </p>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)]">
            We understand that a pilgrimage is not merely an overseas tour—it is an intensely spiritual milestone that many prepare for over an entire lifetime. Every hotel partner, transport provider, and on-ground guide is chosen to protect your peace of mind and maximize your devotion.
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

          <div className="pt-6 border-t border-[var(--color-sage)] flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={whatsappUrl} variant="whatsapp">
              Connect on WhatsApp
            </Button>
            <Button href="/contact" variant="primary">
              Contact Our Office
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
