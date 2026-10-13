import { siteConfig } from "@/data/site-config";
import Container from "@/components/ui/Container";

export default function TrustBadges() {
  return (
    <section aria-label="Trust and accreditation signals" className="bg-[var(--color-surface)] py-14 border-y border-[var(--color-sage)]/60 shadow-[0_2px_12px_rgba(23,33,31,0.02)]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteConfig.trustSignals.map((signal, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--color-background)] border border-[var(--color-sage)]/60 hover:border-[var(--color-accent)]/50 transition-all shadow-xs group"
            >
              <div className="w-11 h-11 rounded-xl bg-white text-[var(--color-primary)] flex items-center justify-center shrink-0 border border-[var(--color-sage)]/70 shadow-xs group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-primary)] text-sm sm:text-base">
                  {signal.title}
                </h4>
                <p className="text-xs text-[var(--color-text-muted)] mt-1 font-light leading-relaxed">
                  {signal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
