import { siteConfig } from "@/data/site-config";

/**
 * Generates Schema.org JSON-LD for TravelAgency
 */
export function getTravelAgencySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.pincode,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.address.geo.lat,
      longitude: siteConfig.contact.address.geo.lng,
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "20:00",
      },
    ],
  };
}

/**
 * Generates Schema.org JSON-LD for a pilgrimage trip package
 */
export function getTouristTripSchema(pkg) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.description,
    touristType: ["Pilgrim", "Family", "Group"],
    itinerary: pkg.itinerary ? {
      "@type": "ItemList",
      itemListElement: pkg.itinerary.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        description: item.description,
      })),
    } : undefined,
    offers: {
      "@type": "Offer",
      price: pkg.priceStarting,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: pkg.validFrom || "2026-01-01",
    },
    provider: {
      "@type": "TravelAgency",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
