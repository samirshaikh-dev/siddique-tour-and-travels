/**
 * Global site configuration and contact information for Siddique Tours and Travels.
 * Central source of truth for business contact details, social handles, and branding.
 */
export const siteConfig = {
  name: "Siddique Tours and Travels",
  tagline: "Your Sacred Journey, Guided with Faith and Care",
  description:
    "Trusted Hajj, Umrah, and Ziyarat packages with personalized guidance, premium hotels near Haramain, comfortable transport, and dedicated on-ground pilgrim assistance.",
  url: "https://siddiquetours.com",
  contact: {
    phone: "+91 90165 31369",
    phoneDisplay: "+91 90165 31369",
    whatsapp: "+919016531369",
    whatsappDefaultMessage:
      "Assalam Alaikum, I am inquiring about your pilgrimage packages with Siddique Tours and Travels.",
    email: "info@siddiquetours.com",
    supportEmail: "support@siddiquetours.com",
    address: {
      street: "Shop No 8, Seven Jewellers Complex, Amred, Near Sonorous, Vapi East, Gita Nagar",
      city: "Vapi",
      state: "Gujarat",
      pincode: "396191",
      country: "India",
      geo: {
        lat: 20.3906,
        lng: 72.9167,
      },
    },
    openingHours: "Mon – Sat: 9:30 AM – 8:00 PM (IST)",
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
  },
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
};
