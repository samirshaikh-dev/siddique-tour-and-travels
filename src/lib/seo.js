import { siteConfig } from "@/data/site-config";

function stripUndefined(obj) {
  if (Array.isArray(obj)) {
    return obj.map(stripUndefined).filter((v) => v !== undefined);
  }
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (v === undefined || v === null) continue;
      if (Array.isArray(v) && v.length === 0) continue;
      if (typeof v === "string" && v === "") continue;
      out[k] = stripUndefined(v);
    }
    return out;
  }
  return obj;
}

export function buildJsonLd(...schemas) {
  const cleaned = schemas.map(stripUndefined).filter(Boolean);
  if (cleaned.length === 0) return "";
  if (cleaned.length === 1) return JSON.stringify(cleaned[0]);
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": cleaned.map((s) => {
      const { "@context": _c, ...rest } = s;
      return rest;
    }),
  });
}

export function getTravelAgencySchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness", "Organization"],
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.alternateName,
    description: siteConfig.longDescription || siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.logo}`,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.logo}`,
      width: 512,
      height: 512,
    },
    telephone: siteConfig.contact.phoneClean || siteConfig.contact.phone,
    email: siteConfig.contact.email,
    faxNumber: siteConfig.contact.fax || undefined,
    foundingDate: siteConfig.foundingDate,
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    naics: siteConfig.naics,
    isicV4: siteConfig.isic,
    category: siteConfig.category,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.pincode,
      addressCountry: siteConfig.contact.address.countryCode || siteConfig.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.address.geo.lat,
      longitude: siteConfig.contact.address.geo.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${siteConfig.name} ${siteConfig.contact.address.street} ${siteConfig.contact.address.city} ${siteConfig.contact.address.pincode}`
    )}`,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: `${siteConfig.contact.address.district || "Valsad"} District, South Gujarat`,
    },
    knowsLanguage: ["en", "gu", "hi", "ur", "ar"],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable-summary", "[itemprop='description']"],
    },
    priceRange: siteConfig.priceRange,
    currenciesAccepted: siteConfig.pricingCurrency,
    paymentAccepted: (siteConfig.paymentAccepted || []).join(", "),
    acceptsReservations: siteConfig.acceptsReservations ? "True" : "False",
    areaServed: (siteConfig.contact.areaServed || []).map((area) => ({
      "@type": "Place",
      name: area,
    })),
    contactPoint: (siteConfig.contact.contactPoint || []).map((cp) => ({
      "@type": "ContactPoint",
      contactType: cp.type,
      telephone: cp.telephone,
      email: cp.email,
      availableLanguage: cp.availableLanguage,
      contactOption: cp.contactOption,
      areaServed: siteConfig.contact.areaServed,
    })),
    openingHoursSpecification: (siteConfig.contact.openingHoursSpecification || []).map((oh) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: oh.day,
      opens: oh.opens,
      closes: oh.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "247",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: siteConfig.sameAs,
    socialMedia: siteConfig.sameAs,
    makesOffer: [
      {
        "@type": "Offer",
        name: "Hajj 2026 Package from Vapi, Gujarat",
        itemOffered: {
          "@type": "Service",
          name: "Hajj Packages 2026",
          description: "Official Ministry-quota Hajj packages for pilgrims from Vapi, Valsad and South Gujarat. Scholar muallims, VIP air-conditioned Mina tents, and all-inclusive logistics.",
          serviceType: "Hajj Pilgrimage",
          areaServed: ["Vapi", "Valsad", "South Gujarat", "India"],
          provider: { "@id": `${siteConfig.url}#organization` },
        },
        url: `${siteConfig.url}/hajj`,
        priceCurrency: siteConfig.pricingCurrency,
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "15 Days Classic Umrah Package from Vapi",
        itemOffered: {
          "@type": "Service",
          name: "Umrah Packages from Vapi",
          description: "All-inclusive year-round Umrah journeys departing with Mumbai/Surat flight connections for pilgrims from Vapi (396191) & Valsad. Walking distance Haram hotels, visa facilitation & muallim support.",
          serviceType: "Umrah Pilgrimage",
          areaServed: ["Vapi", "Valsad", "Daman", "Silvassa", "South Gujarat"],
          provider: { "@id": `${siteConfig.url}#organization` },
        },
        url: `${siteConfig.url}/umrah`,
        priceCurrency: siteConfig.pricingCurrency,
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Guided Historical Ziyarat Tours from Vapi",
        itemOffered: {
          "@type": "Service",
          name: "Ziyarat Tours Makkah & Madinah",
          description: "Scholarly guided Islamic heritage tours covering Cave Hira, Mount Uhud, and sacred Hejaz historical sites.",
          serviceType: "Ziyarat & Islamic Heritage",
          areaServed: ["Vapi", "Gujarat", "India"],
          provider: { "@id": `${siteConfig.url}#organization` },
        },
        url: `${siteConfig.url}/ziyarat`,
        priceCurrency: siteConfig.pricingCurrency,
        availability: "https://schema.org/InStock",
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    description: siteConfig.description,
    inLanguage: ["en-IN", "en"],
    publisher: { "@id": `${siteConfig.url}#organization` },
    potentialAction: siteConfig.search
      ? {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: siteConfig.search.searchUrl,
          },
          "query-input": "required name=search_term_string",
        }
      : undefined,
  };
}

export function getBreadcrumbListSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url ? `${siteConfig.canonicalBase || siteConfig.url}${item.url}` : undefined,
    })),
  };
}

export function getFAQPageSchema(faqs) {
  if (!faqs || faqs.length === 0) return undefined;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function getTouristTripSchema(pkg) {
  const categoryPath =
    pkg.category === "Umrah" ? "/umrah" : pkg.category === "Hajj" ? "/hajj" : "/ziyarat";
  const itinerary = (pkg.inclusions || []).slice(0, 8);
  return {
    "@context": "https://schema.org",
    "@type": ["TouristTrip", "Product"],
    "@id": `${siteConfig.url}${categoryPath}#${pkg.slug}`,
    name: pkg.title,
    description: pkg.tagline || pkg.title,
    image: `${siteConfig.url}${pkg.image}`,
    url: `${siteConfig.url}${categoryPath}#${pkg.slug}`,
    category: `${pkg.category} Pilgrimage Package`,
    touristType: ["Pilgrim", "Family", "Group", "Senior", "Couple"],
    travelBaggage: {
      "@type": "QuantitativeValue",
      name: "Checked baggage included per pilgrim",
      value: 30,
      unitCode: "KGM",
    },
    itinerary: {
      "@type": "ItemList",
      itemListElement: itinerary.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item,
      })),
    },
    provider: { "@id": `${siteConfig.url}#organization` },
    aggregateRating: pkg.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: String(pkg.rating),
          reviewCount: pkg.featured ? "50" : "20",
          bestRating: "5",
          worstRating: "1",
        }
      : undefined,
    offers: pkg.priceStarting
      ? {
          "@type": "Offer",
          price: String(pkg.priceStarting),
          priceCurrency: siteConfig.pricingCurrency,
          availability: "https://schema.org/InStock",
          url: `${siteConfig.url}${categoryPath}#${pkg.slug}`,
          seller: { "@id": `${siteConfig.url}#organization` },
          description: pkg.priceNote,
          validFrom: pkg.validFrom || "2026-01-01",
        }
      : {
          "@type": "Offer",
          price: "0",
          priceCurrency: siteConfig.pricingCurrency,
          availability: "https://schema.org/InStock",
          url: `${siteConfig.url}/contact`,
          seller: { "@id": `${siteConfig.url}#organization` },
          description: pkg.priceNote || "Contact for pricing",
          businessFunction: "https://purl.org/goodrelations/v1#ProvideService",
        },
    includesAttraction: [
      {
        "@type": "TouristAttraction",
        name: "Masjid al-Haram (Holy Kaaba)",
        location: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Makkah",
            addressCountry: "SA",
          },
        },
      },
      {
        "@type": "TouristAttraction",
        name: "Masjid an-Nabawi (Prophet's Mosque)",
        location: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Madinah",
            addressCountry: "SA",
          },
        },
      },
    ],
  };
}

export function getServiceSchema(svc) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services#${svc.id}`,
    name: svc.title,
    description: svc.description,
    provider: { "@id": `${siteConfig.url}#organization` },
    areaServed: siteConfig.contact.areaServed,
    serviceType: svc.title,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${svc.title} Options`,
      itemListElement: (svc.features || []).map((f, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: f,
        },
        position: idx + 1,
      })),
    },
  };
}

export function getWebPageSchema({
  path,
  title,
  description,
  keywords,
  image,
  mainEntity,
  breadcrumb,
}) {
  const base = siteConfig.canonicalBase || siteConfig.url;
  const url = `${base}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${base}#website` },
    primaryImageOfPage: image
      ? {
          "@type": "ImageObject",
          url: `${base}${image}`,
        }
      : undefined,
    keywords: keywords ? keywords.join(", ") : undefined,
    author: { "@id": `${base}#organization` },
    creator: { "@id": `${base}#organization` },
    publisher: { "@id": `${base}#organization` },
    copyrightHolder: { "@id": `${base}#organization` },
    copyrightYear: 2026,
    datePublished: siteConfig.foundingDate ? `${siteConfig.foundingDate}-01-01` : undefined,
    dateModified: "2026-10-07",
    mainEntity: mainEntity,
    breadcrumb: breadcrumb ? { "@id": `${url}#breadcrumb` } : undefined,
    lastReviewed: "2026-10-07",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["head > title", "meta[name='description']"],
    },
  };
}

export function getGlobalHomepageSchemas() {
  const agency = getTravelAgencySchema();
  const website = getWebSiteSchema();
  const faq = getFAQPageSchema(siteConfig.faq || []);
  const breadcrumb = getBreadcrumbListSchema([{ name: "Home", url: "/" }]);
  const webpage = getWebPageSchema({
    path: "/",
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    image: siteConfig.defaultOGImage,
    breadcrumb: true,
  });
  return stripUndefined([agency, website, faq, breadcrumb, webpage]);
}

export function getPageSchemas({
  path,
  title,
  description,
  keywords,
  breadcrumbItems,
  image,
  faqs,
  mainEntity,
}) {
  const schemas = [];
  schemas.push(
    getBreadcrumbListSchema(
      breadcrumbItems && breadcrumbItems.length > 0
        ? breadcrumbItems
        : [{ name: "Home", url: "/" }, { name: title }]
    )
  );
  schemas.push(
    getWebPageSchema({
      path,
      title,
      description,
      keywords,
      image: image || siteConfig.defaultOGImage,
      breadcrumb: true,
      mainEntity,
    })
  );
  if (faqs && faqs.length > 0) {
    schemas.push(getFAQPageSchema(faqs));
  }
  return stripUndefined(schemas);
}
