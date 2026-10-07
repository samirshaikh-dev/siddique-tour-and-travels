import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { formatCurrency, getWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";

export default function PackageCard({ pkg }) {
  const whatsappMessage = `Assalam Alaikum, I would like to inquire about the "${pkg.title}" (${pkg.duration}) with Siddique Tours.`;
  const whatsappUrl = getWhatsAppUrl(siteConfig.contact.whatsapp, whatsappMessage);

  return (
    <div className="flex flex-col bg-[var(--color-surface)] rounded-xl border border-[var(--color-sage)] hover:border-[var(--color-accent)] transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden">
      {/* Card Header */}
      <div className="p-6 border-b border-[var(--color-sage)]/40 bg-gradient-to-b from-[var(--color-sage)]/10 to-transparent">
        <div className="flex justify-between items-center mb-3">
          <Badge
            variant={
              pkg.category === "Hajj"
                ? "gold"
                : pkg.category === "Umrah"
                ? "emerald"
                : "sage"
            }
          >
            {pkg.category}
          </Badge>
          <span className="text-xs font-semibold text-[var(--color-text-muted)] bg-[var(--color-background)] px-2.5 py-1 rounded-md border border-[var(--color-sand)]">
            {pkg.duration}
          </span>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-primary)] leading-snug">
          {pkg.title}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-[var(--color-text-muted)] line-clamp-2">
          {pkg.tagline}
        </p>
      </div>

      {/* Card Body: Hotels & Stays */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3.5 text-xs sm:text-sm">
          {/* Makkah Hotel */}
          {pkg.makkahHotel && (
            <div className="flex items-start gap-2.5">
              <span className="text-[var(--color-accent)] font-semibold min-w-[60px]">Makkah:</span>
              <div className="text-[var(--color-text)]">
                <span className="font-medium">{pkg.makkahHotel.name}</span>
                <span className="block text-[11px] text-[var(--color-text-muted)]">
                  {pkg.makkahHotel.distance}
                </span>
              </div>
            </div>
          )}

          {/* Madinah Hotel */}
          {pkg.madinahHotel && (
            <div className="flex items-start gap-2.5">
              <span className="text-[var(--color-accent)] font-semibold min-w-[60px]">Madinah:</span>
              <div className="text-[var(--color-text)]">
                <span className="font-medium">{pkg.madinahHotel.name}</span>
                <span className="block text-[11px] text-[var(--color-text-muted)]">
                  {pkg.madinahHotel.distance}
                </span>
              </div>
            </div>
          )}

          {/* Stay Distribution */}
          {pkg.stayDistribution && (
            <div className="pt-1 text-[11px] text-[var(--color-primary)] font-medium bg-[var(--color-sage)]/20 px-2.5 py-1.5 rounded">
              {pkg.stayDistribution}
            </div>
          )}

          {/* Top Inclusions */}
          <div className="pt-2 border-t border-[var(--color-sage)]/40">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] block mb-2">
              Key Inclusions:
            </span>
            <ul className="space-y-1.5 text-xs text-[var(--color-text)]">
              {pkg.inclusions.slice(0, 4).map((inc, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] font-bold">✓</span>
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing & CTAs */}
        <div className="pt-5 border-t border-[var(--color-sage)]">
          <div className="mb-4">
            <span className="text-xs text-[var(--color-text-muted)] block">Starting from</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[var(--color-primary)]">
                {pkg.priceStarting ? formatCurrency(pkg.priceStarting) : "Request Quote"}
              </span>
            </div>
            {pkg.priceNote && (
              <span className="text-[11px] text-[var(--color-text-muted)] block mt-0.5">
                {pkg.priceNote}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="sm"
              className="text-xs py-2 min-h-[40px]"
            >
              WhatsApp
            </Button>
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="text-xs py-2 min-h-[40px]"
            >
              Inquire Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
