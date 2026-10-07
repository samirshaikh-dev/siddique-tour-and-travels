import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { formatCurrency, getWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";

function buildPackageAltText(pkg) {
  const category = pkg.category?.toLowerCase() || "pilgrimage";
  const hotels = [];
  if (pkg.makkahHotel?.name) hotels.push(pkg.makkahHotel.name);
  if (pkg.madinahHotel?.name) hotels.push(pkg.madinahHotel.name);
  const hotelStr = hotels.length ? ` with ${hotels.join(" and ")}` : "";
  const priceStr = pkg.priceStarting
    ? ` starting ${formatCurrency(pkg.priceStarting)}`
    : "";
  return `${pkg.title} — ${pkg.duration} ${category} package${hotelStr}${priceStr} by ${siteConfig.name} Vapi Gujarat`;
}

export default function PackageCard({ pkg }) {
  const whatsappMessage = `Assalam Alaikum, I would like to inquire about the "${pkg.title}" (${pkg.duration}) with Siddique Tours. Please share full itinerary, ${pkg.makkahHotel ? "Makkah hotel " + pkg.makkahHotel.name : ""} ${pkg.category === "Umrah" || pkg.category === "Hajj" ? "and current availability." : "."}`;
  const whatsappUrl = getWhatsAppUrl(siteConfig.contact.whatsapp, whatsappMessage);
  const altText = buildPackageAltText(pkg);
  const slugAnchor = pkg.slug ? `#${pkg.slug}` : "";
  const categoryPath =
    pkg.category === "Umrah"
      ? "/umrah"
      : pkg.category === "Hajj"
      ? "/hajj"
      : "/ziyarat";

  return (
    <article
      itemScope
      itemType="https://schema.org/TouristTrip"
      className="group flex flex-col bg-[var(--color-surface)] rounded-2xl border border-[var(--color-sage)]/70 hover:border-[var(--color-accent)] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
      aria-labelledby={`pkg-${pkg.id}-title`}
    >
      <meta itemProp="name" content={pkg.title} />
      <meta itemProp="description" content={pkg.tagline || pkg.title} />
      {pkg.duration && <meta itemProp="duration" content={pkg.duration} />}
      {pkg.category && <meta itemProp="touristType" content={`${pkg.category} Pilgrim`} />}

      {pkg.priceStarting ? (
        <div itemScope itemProp="offers" itemType="https://schema.org/Offer" className="hidden">
          <meta itemProp="price" content={String(pkg.priceStarting)} />
          <meta itemProp="priceCurrency" content="INR" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="url" content={`${siteConfig.url}${categoryPath}${slugAnchor}`} />
        </div>
      ) : null}

      {pkg.image && (
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-stone-900">
          <Image
            src={pkg.image}
            alt={altText}
            fill
            loading="lazy"
            decoding="async"
            itemProp="image"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

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

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-accent-soft)] block mb-0.5">
              {pkg.season}
            </span>
            <h3
              id={`pkg-${pkg.id}-title`}
              itemProp="name"
              className="font-display text-xl sm:text-2xl font-bold leading-tight drop-shadow-sm"
            >
              <Link
                href={`${categoryPath}${slugAnchor}`}
                className="hover:text-[var(--color-accent-soft)] transition-colors"
                aria-label={`View details of ${pkg.title}`}
              >
                {pkg.title}
              </Link>
            </h3>
          </div>
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
            {pkg.tagline}
          </p>

          <div className="mt-5 space-y-3 text-xs sm:text-sm border-t border-[var(--color-sage)]/50 pt-4">
            {pkg.makkahHotel && (
              <div itemProp="includesAttraction" itemScope itemType="https://schema.org/TouristAttraction" className="flex items-start gap-2.5">
                <span className="text-[var(--color-accent)] font-semibold min-w-[58px]">Makkah:</span>
                <div className="text-[var(--color-text)]">
                  <span className="font-medium" itemProp="name">{pkg.makkahHotel.name}</span>
                  <span className="block text-[11px] text-[var(--color-text-muted)]">
                    {pkg.makkahHotel.distance}
                  </span>
                </div>
              </div>
            )}

            {pkg.madinahHotel && (
              <div itemProp="includesAttraction" itemScope itemType="https://schema.org/TouristAttraction" className="flex items-start gap-2.5">
                <span className="text-[var(--color-accent)] font-semibold min-w-[58px]">Madinah:</span>
                <div className="text-[var(--color-text)]">
                  <span className="font-medium" itemProp="name">{pkg.madinahHotel.name}</span>
                  <span className="block text-[11px] text-[var(--color-text-muted)]">
                    {pkg.madinahHotel.distance}
                  </span>
                </div>
              </div>
            )}

            {pkg.departureCities && pkg.departureCities.length > 0 && (
              <div className="flex items-start gap-2.5">
                <span className="text-[var(--color-accent)] font-semibold min-w-[58px]">From:</span>
                <span className="text-[11px] text-[var(--color-text-muted)]">
                  {pkg.departureCities.join(" • ")}
                </span>
              </div>
            )}

            {pkg.inclusions && pkg.inclusions.length > 0 && (
              <div itemScope itemProp="itinerary" itemType="https://schema.org/ItemList" className="pt-2 space-y-1.5">
                <span className="text-[10px] uppercase font-semibold text-[var(--color-primary)] tracking-wider block">
                  Key Inclusions:
                </span>
                <ul className="space-y-1 text-[11px] text-[var(--color-text-muted)] list-disc pl-4">
                  {pkg.inclusions.slice(0, 4).map((inc, i) => (
                    <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem" key={i}>
                      <span itemProp="name">{inc}</span>
                      <meta itemProp="position" content={String(i + 1)} />
                    </li>
                  ))}
                  {pkg.inclusions.length > 4 && (
                    <li className="text-[var(--color-accent)] font-medium list-none -ml-4">
                      +{pkg.inclusions.length - 4} more inclusions →
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {pkg.rating ? (
            <div itemScope itemProp="aggregateRating" itemType="https://schema.org/AggregateRating" className="mt-4 flex items-center gap-1.5">
              <meta itemProp="ratingValue" content={String(pkg.rating)} />
              <meta itemProp="bestRating" content="5" />
              <meta itemProp="worstRating" content="1" />
              <meta itemProp="reviewCount" content={pkg.featured ? "50" : "20"} />
              <div className="flex text-amber-500 text-xs" aria-label={`Rated ${pkg.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < Math.round(pkg.rating) ? "★" : "☆"}</span>
                ))}
              </div>
              <span className="text-[11px] font-semibold text-[var(--color-primary)]">{pkg.rating}/5</span>
              <span className="text-[10px] text-[var(--color-text-muted)]">({pkg.featured ? "50+" : "20+"} pilgrim reviews)</span>
            </div>
          ) : null}
        </div>

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
              aria-label={`Inquire about ${pkg.title} on WhatsApp`}
            >
              WhatsApp
            </Button>
            <Button
              href={`${categoryPath}${slugAnchor || ""}`}
              variant="primary"
              size="sm"
              className="text-xs py-2 min-h-[42px]"
              aria-label={`View full itinerary for ${pkg.title}`}
            >
              View Itinerary
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
