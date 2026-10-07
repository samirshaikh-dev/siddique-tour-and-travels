import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { formatCurrency, getWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";

export default function PackageCard({ pkg }) {
  const whatsappMessage = `Assalam Alaikum, I would like to inquire about the "${pkg.title}" (${pkg.duration}) with Siddique Tours.`;
  const whatsappUrl = getWhatsAppUrl(siteConfig.contact.whatsapp, whatsappMessage);

  return (
    <div className="group flex flex-col bg-[var(--color-surface)] rounded-2xl border border-[var(--color-sage)]/70 hover:border-[var(--color-accent)] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden">
      {/* Visual Photography Header */}
      {pkg.image && (
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-stone-900">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Floating Badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
            <Badge
              variant={
                pkg.category === "Hajj"
                  ? "gold"
                  : pkg.category === "Umrah"
                  ? "emerald"
                  : "sage"
              }
              className="backdrop-blur-md shadow-md text-xs px-3 py-1 font-semibold"
            >
              {pkg.category}
            </Badge>

            <span className="text-xs font-semibold text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              {pkg.duration}
            </span>
          </div>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-accent-soft)] block mb-0.5">
              {pkg.season}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight drop-shadow-sm">
              {pkg.title}
            </h3>
          </div>
        </div>
      )}

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
            {pkg.tagline}
          </p>

          {/* Hotel Proximity & Stay */}
          <div className="mt-5 space-y-3 text-xs sm:text-sm border-t border-[var(--color-sage)]/50 pt-4">
            {pkg.makkahHotel && (
              <div className="flex items-start gap-2.5">
                <span className="text-[var(--color-accent)] font-semibold min-w-[58px]">Makkah:</span>
                <div className="text-[var(--color-text)]">
                  <span className="font-medium">{pkg.makkahHotel.name}</span>
                  <span className="block text-[11px] text-[var(--color-text-muted)]">
                    {pkg.makkahHotel.distance}
                  </span>
                </div>
              </div>
            )}

            {pkg.madinahHotel && (
              <div className="flex items-start gap-2.5">
                <span className="text-[var(--color-accent)] font-semibold min-w-[58px]">Madinah:</span>
                <div className="text-[var(--color-text)]">
                  <span className="font-medium">{pkg.madinahHotel.name}</span>
                  <span className="block text-[11px] text-[var(--color-text-muted)]">
                    {pkg.madinahHotel.distance}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-4 border-t border-[var(--color-sage)]/60">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[11px] text-[var(--color-text-muted)] uppercase tracking-wider block">
                Starting from
              </span>
              <span className="text-2xl font-bold text-[var(--color-primary)] font-display">
                {pkg.priceStarting ? formatCurrency(pkg.priceStarting) : "Request Pricing"}
              </span>
            </div>
            {pkg.priceNote && (
              <span className="text-[11px] text-[var(--color-text-muted)] text-right max-w-[130px]">
                {pkg.priceNote}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="sm"
              className="text-xs py-2 min-h-[42px]"
            >
              WhatsApp
            </Button>
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="text-xs py-2 min-h-[42px]"
            >
              View Itinerary
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
