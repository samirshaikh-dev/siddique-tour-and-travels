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
    phone: "+91 98200 00000",
    phoneDisplay: "+91 98200 00000",
    whatsapp: "+919820000000",
    whatsappDefaultMessage:
      "Assalam Alaikum, I am inquiring about your pilgrimage packages with Siddique Tours and Travels.",
    email: "info@siddiquetours.com",
    supportEmail: "support@siddiquetours.com",
    address: {
      street: "Office No. 12, Main Bazar Road",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
      country: "India",
      geo: {
        lat: 18.922,
        lng: 72.8347,
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
