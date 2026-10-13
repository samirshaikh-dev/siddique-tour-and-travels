"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
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
  return `${pkg.title} — ${pkg.duration} ${category} package${hotelStr}${priceStr} by ${siteConfig.name}`;
}

export default function PackageCard({ pkg }) {
  const whatsappMessage = `Assalam Alaikum, I would like to inquire about the "${pkg.title}" (${pkg.duration}) with ${siteConfig.name}. Please share full itinerary, ${pkg.makkahHotel ? "Makkah hotel " + pkg.makkahHotel.name : ""} ${pkg.category === "Umrah" || pkg.category === "Hajj" ? "and current availability." : "."}`;
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
    <motion.article
      whileHover={{ y: -6, transition: { duration: 0.28, ease: "easeOut" } }}
      itemScope
      itemType="https://schema.org/TouristTrip"
      className="group flex flex-col bg-[var(--color-surface)] rounded-2xl border border-[var(--color-sage)]/70 hover:border-[var(--color-accent)]/80 transition-all duration-300 shadow-[0_4px_20px_rgba(23,33,31,0.04)] hover:shadow-[0_16px_40px_rgba(6,74,67,0.12)] overflow-hidden"
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

      {pkg.makkahHotel && (
        <div itemProp="includesAttraction" itemScope itemType="https://schema.org/TouristAttraction" className="hidden">
          <meta itemProp="name" content={pkg.makkahHotel.name} />
          <meta itemProp="description" content={pkg.makkahHotel.distance} />
        </div>
      )}

      {pkg.madinahHotel && (
        <div itemProp="includesAttraction" itemScope itemType="https://schema.org/TouristAttraction" className="hidden">
          <meta itemProp="name" content={pkg.madinahHotel.name} />
          <meta itemProp="description" content={pkg.madinahHotel.distance} />
        </div>
      )}

      {pkg.image && (
        <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-stone-900">
          <Image
            src={pkg.image}
            alt={altText}
            fill
            loading="lazy"
            decoding="async"
            itemProp="image"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Subtle multi-tone gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#062420]/95 via-black/35 to-black/15" />

          {/* Top badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center z-10">
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

            <span className="text-[11px] font-semibold text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-xs">
              {pkg.duration}
            </span>
          </div>

          {/* Bottom title block */}
          <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white z-10">
            {pkg.season && (
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent-soft)] block mb-1">
                ✦ {pkg.season}
              </span>
            )}
            <h3
              id={`pkg-${pkg.id}-title`}
              itemProp="name"
              className="font-display text-xl sm:text-2xl font-bold leading-snug drop-shadow-md line-clamp-2"
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

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
        {pkg.tagline && (
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-light line-clamp-2 leading-relaxed">
            {pkg.tagline}
          </p>
        )}

        {/* Hotel proximity callouts if available */}
        {(pkg.makkahHotel || pkg.madinahHotel) && (
          <div className="p-3 rounded-xl bg-[var(--color-background)] border border-[var(--color-sage)]/60 text-xs space-y-1.5">
            {pkg.makkahHotel && (
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[var(--color-text-muted)]">Makkah:</span>
                <span className="font-medium text-[var(--color-primary)] text-right truncate max-w-[170px]">
                  {pkg.makkahHotel.name} ({pkg.makkahHotel.distance})
                </span>
              </div>
            )}
            {pkg.madinahHotel && (
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[var(--color-text-muted)]">Madinah:</span>
                <span className="font-medium text-[var(--color-primary)] text-right truncate max-w-[170px]">
                  {pkg.madinahHotel.name} ({pkg.madinahHotel.distance})
                </span>
              </div>
            )}
          </div>
        )}

        <div className="pt-3 border-t border-[var(--color-sage)]/60 space-y-3.5">
          <div className="flex items-baseline justify-between gap-2">
            <div>
              <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider block font-medium">
                Starting from
              </span>
              <span className="text-2xl font-bold text-[var(--color-primary)] font-display tracking-tight">
                {pkg.priceStarting ? formatCurrency(pkg.priceStarting) : "Request Pricing"}
              </span>
            </div>
            {pkg.priceNote && (
              <span className="text-[11px] text-[var(--color-text-muted)] text-right max-w-[130px] line-clamp-1 font-light">
                {pkg.priceNote}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="sm"
              className="text-xs py-2.5 min-h-[42px] flex items-center justify-center font-semibold"
              aria-label={`Inquire about ${pkg.title} on WhatsApp`}
            >
              WhatsApp
            </Button>
            <Button
              href={`${categoryPath}${slugAnchor || ""}`}
              variant="primary"
              size="sm"
              className="text-xs py-2.5 min-h-[42px] flex items-center justify-center font-medium"
              aria-label={`View full itinerary for ${pkg.title}`}
            >
              View Itinerary
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
