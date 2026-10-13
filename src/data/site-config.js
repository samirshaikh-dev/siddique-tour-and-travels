/**
 * Global site configuration and contact information for Al-Safwa Tours & Travels.
 * Central source of truth for business contact details, social handles, branding, and SEO.
 */
export const siteConfig = {
  name: "Al-Safwa Tours & Travels",
  legalName: "Al-Safwa Tours & Travels Pvt. Ltd.",
  alternateName: "Al-Safwa Tours",
  shortName: "Al-Safwa",
  tagline: "Your Sacred Journey, Guided with Faith and Care",
  description:
    "Trusted Hajj, Umrah, and Ziyarat packages with personalized guidance, premium hotels near Haramain, comfortable transport, and dedicated on-ground pilgrim assistance.",
  longDescription:
    "Al-Safwa Tours and Travels is a ministry-approved pilgrimage operator specializing in bespoke Hajj, Umrah, and Ziyarat journeys from India. With courtyard-facing Haram hotels, private VIP transfers, 24/7 muallim support, and full visa & logistics coordination, we ensure every pilgrim experiences a peaceful, spiritually enriching journey guided by deep faith and meticulous care.",
  url: "https://alsafwa-travels.com",
  canonicalBase: "https://alsafwa-travels.com",
  locale: "en_IN",
  languageAlternates: [
    { hrefLang: "en", href: "https://alsafwa-travels.com" },
    { hrefLang: "en-IN", href: "https://alsafwa-travels.com" },
    { hrefLang: "x-default", href: "https://alsafwa-travels.com" },
  ],
  foundingDate: "2012",
  founder: "Al-Safwa Tours Management",
  logo: "/logo.png",
  logoWide: "/og-default.png",
  defaultOGImage: "/og-default.png",
  defaultTwitterImage: "/og-default.png",
  keywords: [
    "Hajj Packages 2026",
    "Umrah Packages from India",
    "Ziyarat Tours Makkah Madinah",
    "Umrah Visa Facilitation",
    "Hajj Ministry Approved Operator",
    "5 Star Hotels Near Haram",
    "VIP Umrah Makkah",
    "Al-Safwa Tours",
    "Hajj Quota Registration",
    "Ramadan Umrah Special",
    "Family Umrah Packages",
    "Luxury Hajj Packages",
  ],
  category: "Travel Agency",
  naics: "561510",
  isic: "7911",
  contact: {
    phone: "+91 98765 43210",
    phoneDisplay: "+91 98765 43210",
    phoneClean: "+919876543210",
    whatsapp: "+919876543210",
    whatsappDefaultMessage:
      "Assalam Alaikum, I am inquiring about your pilgrimage packages with Al-Safwa Tours & Travels.",
    email: "contact@alsafwa-travels.com",
    supportEmail: "support@alsafwa-travels.com",
    fax: "",
    address: {
      street: "Suite 402, Elite Business Hub, Linking Road, Bandra West",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400050",
      country: "India",
      countryCode: "IN",
      geo: {
        lat: 19.0596,
        lng: 72.8295,
      },
    },
    openingHours: "Mon – Sat: 9:30 AM – 8:00 PM (IST)",
    openingHoursSpecification: [
      { day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:30", closes: "20:00" },
    ],
    areaServed: ["India", "Maharashtra", "Gujarat", "Delhi", "Mumbai", "Hyderabad", "Bangalore"],
    contactPoint: [
      {
        type: "customer support",
        telephone: "+919876543210",
        email: "contact@alsafwa-travels.com",
        availableLanguage: ["English", "Hindi", "Urdu", "Arabic"],
        contactOption: ["TollFree", "WhatsApp"],
      },
    ],
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Umrah", href: "/umrah" },
    { label: "Hajj", href: "/hajj" },
    { label: "Ziyarat", href: "/ziyarat" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socials: {
    facebook: "https://facebook.com/alsafwatravels",
    instagram: "https://instagram.com/alsafwatravels",
    youtube: "https://youtube.com/@alsafwatravels",
    whatsapp: "https://wa.me/919876543210",
    twitter: "@alsafwatravels",
  },
  sameAs: [
    "https://facebook.com/alsafwatravels",
    "https://instagram.com/alsafwatravels",
    "https://youtube.com/@alsafwatravels",
  ],
  search: {
    searchUrl: "https://alsafwa-travels.com/search?q={search_term_string}",
  },
  pricingCurrency: "INR",
  priceRange: "$$",
  acceptsReservations: true,
  paymentAccepted: ["Cash", "Credit Card", "Debit Card", "UPI", "Bank Transfer", "Demand Draft"],
  trustSignals: [
    {
      title: "Ministry Approved",
      description: "Certified and compliant pilgrimage operator.",
    },
    {
      title: "Hotels Near Haram",
      description: "Carefully selected properties within easy walking distance.",
    },
    {
      title: "24/7 Ground Team",
      description: "Experienced multilingual muallims in Makkah & Madinah.",
    },
    {
      title: "Complete Care",
      description: "Full visa processing, catering, and transport handled.",
    },
  ],
  faq: [
    {
      question: "How far in advance should I book my Umrah package?",
      answer:
        "We recommend booking Umrah packages at least 4–8 weeks in advance to secure preferred hotels, flight dates, and visa processing slots. For Ramadan, school holidays, and year-end departures, book 2–3 months ahead.",
    },
    {
      question: "Do you handle Umrah visas and documentation?",
      answer:
        "Yes. Al-Safwa Tours provides complete end-to-end Umrah e-visa facilitation, including document verification, medical insurance, Ministry submission, and approval tracking — all included in every package.",
    },
    {
      question: "Are the hotels really walking distance from Haram?",
      answer:
        "Every hotel in our catalog is personally verified. Our Classic tier guarantees shuttles within 5 minutes; Premium and Executive tiers offer direct courtyard access — literally zero metres to the Haram gates.",
    },
    {
      question: "Do you provide guidance for elderly pilgrims or wheelchair users?",
      answer:
        "Absolutely. We offer pre-booked Tawaf wheelchairs, ground-floor or elevator-adjacent rooms, dedicated volunteer escorts during Mashair, and personalised assistance for seniors throughout the journey.",
    },
    {
      question: "What meals are included in the packages?",
      answer:
        "Standard packages include daily buffet breakfast, lunch, and dinner (Indian/Continental halal). Premium tiers upgrade to international buffet breakfast & dinner with a la carte options and special dietary adjustments available on request.",
    },
    {
      question: "How do I book or get a custom quote for my family?",
      answer:
        "Call us at +91 98765 43210, WhatsApp us directly, or fill the quick inquiry form on any package page. Our senior advisors will respond within a few hours with a personalised itinerary and transparent pricing.",
    },
  ],
};
