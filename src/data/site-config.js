/**
 * Global site configuration and contact information for Siddique Tours and Travels.
 * Central source of truth for business contact details, social handles, branding, and SEO.
 */
export const siteConfig = {
  name: "Siddique Tours and Travels",
  legalName: "Siddique Tours And Travels",
  alternateName: "Siddique Tours",
  tagline: "Your Sacred Journey, Guided with Faith and Care",
  description:
    "Trusted Hajj, Umrah, and Ziyarat packages with personalized guidance, premium hotels near Haramain, comfortable transport, and dedicated on-ground pilgrim assistance.",
  longDescription:
    "Siddique Tours and Travels is a ministry-approved pilgrimage operator specializing in bespoke Hajj, Umrah, and Ziyarat journeys from India. With courtyard-facing Haram hotels, private VIP transfers, 24/7 muallim support, and full visa & logistics coordination, we ensure every pilgrim experiences a peaceful, spiritually enriching journey guided by deep faith and meticulous care.",
  url: "https://siddiquetours.com",
  canonicalBase: "https://siddiquetours.com",
  locale: "en_IN",
  languageAlternates: [
    { hrefLang: "en", href: "https://siddiquetours.com" },
    { hrefLang: "en-IN", href: "https://siddiquetours.com" },
    { hrefLang: "x-default", href: "https://siddiquetours.com" },
  ],
  foundingDate: "2010",
  founder: "Siddique Tours Management",
  logo: "/logo.png",
  logoWide: "/og-default.png",
  defaultOGImage: "/og-default.png",
  defaultTwitterImage: "/og-default.png",
  keywords: [
    "Hajj Packages 2026",
    "Umrah Packages from India",
    "Ziyarat Tours Makkah Madinah",
    "Umrah Visa from Gujarat",
    "Hajj Ministry Approved Operator",
    "5 Star Hotels Near Haram",
    "VIP Umrah Makkah",
    "Siddique Tours Vapi",
    "Hajj Quota Registration",
    "Ramadan Umrah Special",
    "Family Umrah Packages",
    "Luxury Hajj Packages",
  ],
  category: "Travel Agency",
  naics: "561510",
  isic: "7911",
  contact: {
    phone: "+91 90165 31369",
    phoneDisplay: "+91 90165 31369",
    phoneClean: "+919016531369",
    whatsapp: "+919016531369",
    whatsappDefaultMessage:
      "Assalam Alaikum, I am inquiring about your pilgrimage packages with Siddique Tours and Travels.",
    email: "info@siddiquetours.com",
    supportEmail: "support@siddiquetours.com",
    fax: "",
    address: {
      street: "Shop No 8, Seven Jewellers Complex, Amred, Near Sonorous, Vapi East, Gita Nagar",
      city: "Vapi",
      state: "Gujarat",
      pincode: "396191",
      country: "India",
      countryCode: "IN",
      geo: {
        lat: 20.3906,
        lng: 72.9167,
      },
    },
    openingHours: "Mon – Sat: 9:30 AM – 8:00 PM (IST)",
    openingHoursSpecification: [
      { day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:30", closes: "20:00" },
    ],
    areaServed: ["India", "Gujarat", "Maharashtra", "Mumbai", "Delhi", "Vapi"],
    contactPoint: [
      {
        type: "customer support",
        telephone: "+919016531369",
        email: "info@siddiquetours.com",
        availableLanguage: ["English", "Hindi", "Urdu", "Gujarati"],
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
    facebook: "https://facebook.com/siddiquetours",
    instagram: "https://instagram.com/siddiquetours",
    youtube: "https://youtube.com/@siddiquetours",
    whatsapp: "https://wa.me/919016531369",
  },
  sameAs: [
    "https://facebook.com/siddiquetours",
    "https://instagram.com/siddiquetours",
    "https://youtube.com/@siddiquetours",
  ],
  search: {
    searchUrl: "https://siddiquetours.com/search?q={search_term_string}",
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
        "Yes. Siddique Tours provides complete end-to-end Umrah e-visa facilitation, including document verification, medical insurance, Ministry submission, and approval tracking — all included in every package.",
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
        "Call us at +91 90165 31369, WhatsApp us directly, or fill the quick inquiry form on any package page. Our senior advisors will respond within a few hours with a personalised itinerary and transparent pricing.",
    },
  ],
};
