import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import QuickQuoteForm from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Travel Logistics & Services",
  description:
    "Comprehensive pilgrimage support services including Umrah visas, curated hotel bookings near Haram, transport, and catering.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-20 bg-[var(--color-background)]">
      <Container>
        <SectionHeading
          badge="Complete Support"
          title="Our Pilgrimage Services"
          subtitle="Every logistical necessity handled with excellence, transparency, and care."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((svc) => (
            <div
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
            </div>
          ))}
        </div>

        {/* Lead Form Banner */}
        <div className="max-w-xl mx-auto">
          <QuickQuoteForm />
        </div>
      </Container>
    </div>
  );
}
