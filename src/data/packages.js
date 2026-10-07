/**
 * Pilgrimage Packages Catalog
 * Structured, typed-like dataset for Hajj, Umrah, and Ziyarat offerings.
 */

export const packages = [
  {
    id: "umrah-classic-15-days",
    slug: "classic-umrah-package",
    category: "Umrah",
    title: "15 Days Classic Umrah Package",
    tagline: "Comfortable and spiritually enriching group package",
    duration: "15 Days / 14 Nights",
    stayDistribution: "8 Nights Makkah • 6 Nights Madinah",
    priceStarting: 85000,
    priceNote: "Per person on quad sharing basis",
    departureCities: ["Mumbai", "Delhi", "Hyderabad"],
    season: "Year-Round",
    featured: true,
    rating: 4.9,
    makkahHotel: {
      name: "Dar Al Eiman or Similar",
      distance: "Approx. 450m from Haram",
    },
    madinahHotel: {
      name: "Al Ritz Al Madinah or Similar",
      distance: "Approx. 250m from Masjid An-Nabawi",
    },
    inclusions: [
      "Umrah Visa & Medical Insurance",
      "Return Airfare (Direct/Connecting Flights)",
      "Hotel Accommodation in Makkah & Madinah",
      "Daily Buffet Breakfast, Lunch & Dinner (Indian/Continental)",
      "AC Bus Transportation (Jeddah - Makkah - Madinah - Airport)",
      "Guided Ziyarat in Makkah & Madinah",
      "5L Zamzam Water (subject to airline rules)",
      "Complimentary Pilgrim Kit (Bag, Tawaf Tasbeeh, Guidebook)",
    ],
    exclusions: [
      "Room service & personal laundry",
      "Excess baggage charges",
      "Individual excursions outside scheduled itinerary",
    ],
  },
  {
    id: "umrah-premium-luxury-10-days",
    slug: "premium-luxury-umrah",
    category: "Umrah",
    title: "10 Days Premium Executive Umrah",
    tagline: "5-Star hotels directly in Haram courtyard with VIP transfers",
    duration: "10 Days / 9 Nights",
    stayDistribution: "5 Nights Makkah • 4 Nights Madinah",
    priceStarting: 135000,
    priceNote: "Per person on twin/double sharing",
    departureCities: ["Mumbai", "Delhi", "Bangalore"],
    season: "Year-Round",
    featured: true,
    rating: 5.0,
    makkahHotel: {
      name: "Swissôtel Al Maqam / Clock Tower",
      distance: "0m (Direct Haram Courtyard Access)",
    },
    madinahHotel: {
      name: "Dar Al Taqwa / Oberoi",
      distance: "0m (Facing Ladies & Gents Gates)",
    },
    inclusions: [
      "Express Umrah Visa & Priority Processing",
      "Direct Flights (Full-Service Airlines)",
      "5-Star Luxury Accommodations with Haram View Options",
      "International Buffet Breakfast & Dinner",
      "Private GMC/SUV VIP Transport for All Transfers",
      "Private Chaperone for Ziyarat Tours",
      "5L Zamzam Can Included",
    ],
    exclusions: [
      "Personal expenses and porterage tips",
      "Lunch (available upon request)",
    ],
  },
  {
    id: "hajj-guided-comfort-2026",
    slug: "hajj-guided-comfort",
    category: "Hajj",
    title: "Comprehensive Shariat-Guided Hajj Package",
    tagline: "End-to-end guidance under experienced religious scholars",
    duration: "30–40 Days",
    stayDistribution: "Azizia / Makkah Hotel • Mina VIP Tents • Madinah 4-Star",
    priceStarting: null, // As per AI_RULE.md: never invent unconfirmed prices
    priceNote: "Inquire for current seasonal quotas and pricing",
    departureCities: ["Mumbai", "Delhi", "Ahmedabad", "Kolkata"],
    season: "Hajj Season (Dhul Hijjah)",
    featured: true,
    rating: 5.0,
    makkahHotel: {
      name: "Full Service Hotel & Azizia Facility",
      distance: "Dedicated shuttles to Haram until 5th Dhul Hijjah",
    },
    madinahHotel: {
      name: "Central Markazia Hotels",
      distance: "Within 200m from Masjid An-Nabawi",
    },
    inclusions: [
      "Official Hajj Visa & Ministry Coordination",
      "Air Tickets with Special Hajj Quota Allocation",
      "Category Tents in Mina & Arafat with Sofa-Beds & AC",
      "Three Fresh Hot Meals Daily During Mashair Days",
      "Religious Scholars & Multilingual Muallim Guidance",
      "Qurbani (Sacrifice) Arranged Through Authorized Channels",
      "Specialised medical assistance & elderly care support",
    ],
    exclusions: [
      "Individual personal expenses",
      "Wheelchair assistance fees (available as add-on service)",
    ],
  },
  {
    id: "ziyarat-sacred-sanctuaries-8-days",
    slug: "sacred-sanctuaries-ziyarat",
    category: "Ziyarat",
    title: "Historical Ziyarat & Holy Sites Tour",
    tagline: "Deepen your connection with rich Islamic heritage and history",
    duration: "8 Days / 7 Nights",
    stayDistribution: "4 Nights Makkah • 3 Nights Madinah",
    priceStarting: 65000,
    priceNote: "Per person on triple sharing",
    departureCities: ["Mumbai", "Delhi", "Lucknow"],
    season: "Available Monthly",
    featured: false,
    rating: 4.8,
    makkahHotel: {
      name: "Standard 3-Star Quality Hotel",
      distance: "Shuttle Service to Haram (5 mins)",
    },
    madinahHotel: {
      name: "Central Area Quality Hotel",
      distance: "Approx. 350m from Masjid An-Nabawi",
    },
    inclusions: [
      "Tourist / Umrah Visa with Insurance",
      "Comprehensive Ziyarat: Jabal al-Noor (Cave Hira), Cave Thawr, Mina, Arafat, Muzdalifah",
      "Madinah Ziyarat: Masjid Quba, Masjid al-Qiblatayn, Mount Uhud, Seven Mosques",
      "Daily Breakfast & Dinner",
      "Experienced Historical Guide fluent in Urdu and English",
      "Comfortable Air-Conditioned Coach Transportation",
    ],
    exclusions: [
      "Mountain climbing guides for Cave Hira (optional local fee)",
      "Personal shopping and souvenirs",
    ],
  },
];

export function getPackagesByCategory(category) {
  if (!category || category === "All") return packages;
  return packages.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getPackageBySlug(slug) {
  return packages.find((p) => p.slug === slug);
}
