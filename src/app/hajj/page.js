import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PackageCard from "@/components/packages/PackageCard";
import QuickQuoteForm from "@/components/forms/QuickQuoteForm";
import { getPackagesByCategory } from "@/data/packages";

export const metadata = {
  title: "Hajj Pilgrimage Guidance & Packages",
  description:
    "Shariat-guided Hajj packages with ministry quota coordination, experienced muallims, comfortable Mina & Arafat tents, and round-the-clock medical care.",
};

export default function HajjPage() {
  const hajjPackages = getPackagesByCategory("Hajj");

  return (
    <div className="py-16 sm:py-20 bg-[var(--color-background)]">
      <Container>
        <SectionHeading
          badge="Fulfill The Fifth Pillar"
          title="Shariat-Guided Hajj Journey"
          subtitle="Complete guidance under experienced scholars with VIP category Mina tents, hygienic catering, and end-to-end pilgrim welfare."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[var(--color-surface)] p-8 rounded-xl border border-[var(--color-sage)]/70">
              <h3 className="font-display text-2xl font-bold text-[var(--color-primary)] mb-4">
                What Makes Our Hajj Unique
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                Hajj is a once-in-a-lifetime spiritual duty. At Siddique Tours and Travels, our primary mission is to remove physical anxieties so you can devote every thought and prayer to Allah (SWT).
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Experienced Muallims & Religious Guidance",
                    desc: "Daily pre-Mashair lectures, step-by-step guidance during Tawaf, Sa'i, Rami Jamarat, and proper sacrificial offerings.",
                  },
                  {
                    title: "Comfortable Mashair Facilities",
                    desc: "Air-conditioned tents in Mina and Arafat with comfortable sofa-beds, clean sanitary facilities, and fresh meals.",
                  },
                  {
                    title: "Medical & Elderly Accompaniment",
                    desc: "Dedicated volunteers and medical assistance on standby throughout the journey.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-[var(--color-accent)] font-bold text-lg">✓</span>
                    <div>
                      <h4 className="font-semibold text-sm text-[var(--color-primary)]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {hajjPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="lg:col-span-5">
            <QuickQuoteForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
