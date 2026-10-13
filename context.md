# Al-Safwa Tours and Travels — Project Context & Knowledge Base

## 1. Project Overview & Business Profile
- **Entity Name:** Al-Safwa Tours and Travels (`Al-Safwa Tours & Travels Pvt. Ltd.`)
- **Workspace / Repository Name:** `siddique-tour-and-travels` (`tour-and-travels-demo`)
- **Domain:** Pilgrimage and religious travel agency specializing in **Hajj**, **Umrah**, and **Ziyarat** journeys.
- **Core Mission:** Deliver a calm, trustworthy, spiritually respectful, and premium online showcase that empowers pilgrims and their families across India to explore packages, understand verified inclusions, and easily contact the agency for quotes and bookings.
- **Brand Tagline:** *"Your Sacred Journey, Guided with Faith and Care"*
- **Brand Philosophy:** Grounded in truthfulness (*Sidq*), dignity, and peace of mind. Prioritizes transparent itineraries, honest pricing, verified hotel distances to Haramain, and attentive care for elderly pilgrims and multi-generational families.
- **Head Office Address:** Office No. 102, Royal Palms Commercial Complex, Near Vapi Railway Station, Vapi East, Vapi, Gujarat – 396191, India.
  - **PIN Code:** 396191
  - **District / State:** Valsad District, Gujarat, India
  - **Geo Coordinates:** `20.3906° N, 72.9167° E`
- **Helpline / Phone:** `+91 98765 43210`
- **WhatsApp Support:** `+919876543210` ([wa.me/919876543210](https://wa.me/919876543210))
- **Official Email:** `contact@alsafwa-travels.com` / `support@alsafwa-travels.com`
- **Official Website:** [https://alsafwa-travels.com](https://alsafwa-travels.com)
- **Operating Hours:** Monday – Saturday: 09:30 AM – 08:00 PM (IST)
- **Primary Languages:** English, Gujarati, Hindi, Urdu, Arabic
- **Geographic Catchment & Departures:**
  - Primary service area: Vapi (396191), Valsad, Daman, Silvassa (Dadra & Nagar Haveli), Pardi, Umbergaon, Bhilad, Sarigam, Navsari, Surat, and South Gujarat.
  - Airport departure logistics: Direct road transfers from Vapi to Mumbai International Airport (BOM, ~160 km) and Surat Airport (STV, ~115 km) with dedicated pilgrim coordination.
- **Accreditations & Trust Signals:**
  - Ministry-approved pilgrimage tour operator.
  - Verified courtyard hotels in Makkah & Madinah.
  - 24/7 multilingual muallims and on-ground coordinators in Makkah and Madinah.
  - Full electronic Saudi visa handling and documentation assistance.
- **Design System:** **Emerald Sanctuary** (documented in [`DESIGN.md`](file:///s:/client-projects/siddique-tour-and-travels/DESIGN.md)).
- **Directives & Rules:** [`AI_RULE.md`](file:///s:/client-projects/siddique-tour-and-travels/AI_RULE.md) & [`AGENTS.md`](file:///s:/client-projects/siddique-tour-and-travels/AGENTS.md).

---

## 2. Technical Stack & Build Architecture
- **Framework:** Next.js 16.4.0 (App Router, Server Components by default)
- **Runtime & UI Library:** React 19.3.0
- **React Compiler:** Enabled (`reactCompiler: true` via `babel-plugin-react-compiler: 1.0.0` in `next.config.mjs`)
- **Styling & CSS:** Tailwind CSS v4 (`tailwindcss: ^4`, `@tailwindcss/turbopack`) with theme tokens declared in `@theme inline` within `src/app/globals.css`
- **Build / Bundler:** Turbopack
- **Animations & Smooth Scrolling:**
  - GSAP 3.12.7 & `@gsap/react: 2.1.2` (subtle parallax, trust bar ticker, interactive transitions)
  - Lenis 1.1.20 (`lenis/react` for buttery-smooth scrolling, with reduced-motion fallback)
  - Motion 12.4.7 (`motion` for micro-interactions and animated UI elements)
- **Typography:** Google Fonts loaded via `next/font/google`:
  - Headings: `Cormorant_Garamond` (Display editorial serif, weights 500/600/700, `--font-display`)
  - Body & UI: `Plus_Jakarta_Sans` (Modern high-legibility sans-serif, weights 400/500/600/700, `--font-body`)
- **Structured Data / SEO:** Schema.org JSON-LD generator (`src/lib/seo.js`) producing `TravelAgency`, `TouristTrip`, `Offer`, `FAQPage`, `BreadcrumbList`, and `WebSite` schemas
- **Code Linter:** ESLint 9 + `eslint-config-next` 16.4.0
- **Package Manager:** `npm` (`package-lock.json`)

---

## 3. Design System — "Emerald Sanctuary"
The design language is defined in [`DESIGN.md`](file:///s:/client-projects/siddique-tour-and-travels/DESIGN.md) and represents soft editorial luxury:
- **Aesthetic Mood:** Calm, reassuring, warm, organized, premium.
- **Key Palette Tokens:**
  - `var(--color-primary)`: `#064A43` (Deep Emerald — trust, headers, primary action buttons)
  - `var(--color-primary-hover)`: `#0B6258` (Vibrant Emerald Hover)
  - `var(--color-secondary-dark)`: `#102A43` (Midnight Navy — footer, dark accents)
  - `var(--color-background)`: `#FAF7F0` (Warm Ivory — soft serene background)
  - `var(--color-surface)`: `#FFFFFF` (Clean White — cards, forms, content panels)
  - `var(--color-sage)`: `#DCE8E1` (Sage Mist — neutral dividers, soft badges)
  - `var(--color-sand)`: `#E9DFC8` (Sand — warm secondary highlights)
  - `var(--color-accent)`: `#B8872D` (Muted Gold — elegant dividers, accent badges, star ratings)
  - `var(--color-accent-soft)`: `#D8BC78` (Soft Gold — subtle borders, icons)
  - `var(--color-text)`: `#17211F` (Charcoal — high contrast, readable typography)
  - `var(--color-text-muted)`: `#596662` (Muted Charcoal — secondary copy, labels)
  - `var(--color-focus)`: `#D8BC78` (Accessible focus outline ring)
- **Accessibility (WCAG AA):**
  - Minimum 4.5:1 text contrast ratio across all backgrounds.
  - Visible keyboard focus indicators (`:focus-visible` with `--color-focus`).
  - Touch targets minimum 44×44px for mobile and senior pilgrims.
  - Full respect for `prefers-reduced-motion` settings.

---

## 4. Key Journeys & Packages (2026 Season)
Data managed centrally in [`src/data/packages.js`](file:///s:/client-projects/siddique-tour-and-travels/src/data/packages.js):

1. **15 Days Classic Umrah Package:**
   - **Pricing:** Starting from ₹85,000 per person (quad sharing).
   - **Duration:** 15 Days / 14 Nights (8 Nights Makkah • 6 Nights Madinah).
   - **Hotels:** Dar Al Eiman or similar (approx. 450m from Haram) & Al Ritz Al Madinah or similar (approx. 250m from Prophet's Mosque).
   - **Inclusions:** Umrah visa, medical insurance, return airfare, AC bus transfers, 3 daily Indian/Continental halal meals, guided Ziyarat, Zamzam water, complimentary pilgrim kit.
2. **10 Days Premium Executive Umrah Package:**
   - **Pricing:** Starting from ₹135,000 per person (twin/double sharing).
   - **Duration:** 10 Days / 9 Nights (5 Nights Makkah • 4 Nights Madinah).
   - **Hotels:** Swissôtel Al Maqam / Clock Tower (0m direct Haram courtyard access) & Dar Al Taqwa / Oberoi Madinah (0m facing mosque gates).
   - **Inclusions:** Express e-visa, direct flights, 5-star Haram-facing rooms, buffet dining, private GMC/SUV VIP transfers, private Ziyarat chaperone, Zamzam water.
3. **Comprehensive Shariat-Guided Hajj Package 2026:**
   - **Pricing:** Inquire for current seasonal quotas and pricing (never invent prices per truth-in-advertising guidelines).
   - **Duration:** 30–40 Days.
   - **Features:** Ministry quota allocation, religious scholars & multilingual muallim support, air-conditioned VIP tents in Mina & Arafat with sofa-beds, daily hot catering in Mashair, Qurbani coordination, senior wheelchair support.
4. **Historical Ziyarat & Holy Sites Tour:**
   - **Pricing:** Starting from ₹65,000 per person (triple sharing).
   - **Duration:** 8 Days / 7 Nights (4 Nights Makkah • 3 Nights Madinah).
   - **Sites Covered:** Cave Hira (Jabal al-Noor), Cave Thawr, Mina, Arafat, Muzdalifah, Masjid Quba, Mount Uhud, Seven Mosques, Jannat al-Baqi.
   - **Guides:** Scholarly narrations in Urdu, Gujarati, Hindi, and English.
5. **Core Travel Logistics & Services:**
   - Visa & Documentation Facilitation (Umrah e-visas, tourist visas, biometrics guidance).
   - Curated Accommodations near Haramain (verified distances, family suites).
   - Air-Conditioned Ground Transport (luxury buses, private VIP GMCs).
   - Catering & Halal Dining (hygienic Indian/Continental meals).
   - Elderly & Wheelchair Assistance (Tawaf escorts, elevator-proximate rooms).

---

## 5. Repository & Architecture Map

```
siddique-tour-and-travels/
├── AGENTS.md                         # Next.js 16 breaking conventions notice
├── AI_RULE.md                        # Master AI engineering rules & skills protocol
├── DESIGN.md                         # Emerald Sanctuary design system & UI tokens
├── context.md                        # Project context & knowledge base (this file)
├── gemini.md                         # Gemini prompt context & architecture manual
├── opencode.jsonc                    # OpenCode CLI runner configuration
├── package.json                      # Dependencies and scripts (Next.js 16, React 19, GSAP, Lenis)
├── public/
│   ├── llms.txt                      # AI & LLM machine-readable facts and knowledge base
│   └── images/                       # Pilgrimage photography & destination assets
├── src/
│   ├── app/                          # Next.js 16 App Router
│   │   ├── layout.js                 # Root layout with fonts, Lenis SmoothScroll, and Schema.org
│   │   ├── page.js                   # High-converting Homepage (Parallax hero, packages, quotes)
│   │   ├── globals.css               # CSS variables and Tailwind v4 @theme inline tokens
│   │   ├── hajj/page.js              # Dedicated Hajj guidance, itinerary & quota inquiry
│   │   ├── umrah/page.js             # Dedicated Umrah packages directory & hotel proximity filter
│   │   ├── ziyarat/page.js           # Historical Ziyarat heritage tours page
│   │   ├── services/page.js          # Travel logistics, visa, hotel, and elderly care breakdown
│   │   ├── about/page.js             # Agency credentials, founding values (Sidq), and team
│   │   ├── contact/page.js           # Vapi head office details, interactive map info, and forms
│   │   ├── sitemap.js                # Dynamic XML sitemap generator
│   │   ├── robots.js                 # Dynamic robots.txt
│   │   ├── manifest.js               # Web app manifest for PWA capabilities
│   │   └── api/
│   │       └── inquiries/route.js    # Secure POST lead capture endpoint with validation
│   │
│   ├── components/
│   │   ├── ui/                       # Design primitives (Button, Card, Badge, Container, SectionHeading)
│   │   ├── layout/                   # Global chrome (Navbar, Footer with trust banner, StickyContactBar)
│   │   ├── home/                     # Home sections (HeroParallax, TrustBar ticker)
│   │   ├── packages/                 # Package cards & category filter grid (PackageCard, PackageGrid)
│   │   ├── forms/                    # Form components (QuickQuoteForm with WhatsApp deep-link)
│   │   ├── common/                   # Shared UI (PageHero, TrustBadges, FAQAccordion)
│   │   └── providers/                # Providers (SmoothScroll wrapper with Lenis)
│   │
│   ├── data/                         # Single Sources of Truth
│   │   ├── site-config.js            # Business contacts, Vapi address, geo coordinates, SEO metadata, FAQs
│   │   ├── packages.js               # Structured catalog of Hajj, Umrah, and Ziyarat packages
│   │   ├── services.js               # Comprehensive pilgrimage service offerings
│   │   └── faqs.js                   # Frequently asked pilgrim questions
│   │
│   └── lib/                          # Shared utilities
│       ├── seo.js                    # Schema.org JSON-LD builders (TravelAgency, TouristTrip, FAQPage, etc.)
│       ├── utils.js                  # Helper functions (cn class merger, currency format, WhatsApp URL generator)
│       ├── gsap.js                   # GSAP core and plugin registration
│       └── animations.js             # Reusable GSAP animation triggers
└── agents/skills/                    # Discipline-specific agent skills (UI/UX, Frontend, SEO, etc.)
```

---

## 6. Key User Pathways & Conversion Features
- **Explore & Filter Packages:** Filter by journey type (All, Umrah, Hajj, Ziyarat), view pricing transparently, check hotel walking distances to Haramain.
- **Direct WhatsApp Conversion:** Quick WhatsApp links with pre-filled package inquiries (`getWhatsAppUrl` utility) linking directly to `+919876543210`.
- **Quick Quote Form:** Accessible, interactive multi-field inquiry capturing traveler count, preferred departure month, contact details, and special requirements.
- **Sticky Contact Bar:** Mobile bottom floating bar providing instant one-tap access to call `+91 98765 43210` or open WhatsApp chat.
- **Accessible FAQs:** Comprehensive accordion addressing hotel proximity, flight departures from Mumbai/Surat, elderly assistance, visa paperwork, and meals.

---

## 7. SEO, Discovery & LLM Integration
- **Local SEO Focus:** Targeted at pilgrims in Vapi (396191), Valsad district, and South Gujarat with Mumbai (BOM) and Surat (STV) airport transfers.
- **Machine-Readable AI Knowledge (`/llms.txt`):** Standardized file in `public/llms.txt` enabling LLM agents and web scrapers to access verified organization facts, contact points, and 2026 packages.
- **Rich Structured Data:** JSON-LD schemas (`TravelAgency`, `TouristTrip`, `Offer`, `FAQPage`, `BreadcrumbList`, `WebSite`) implemented across pages via `src/lib/seo.js`.
- **Metadata Coverage:** OpenGraph images, Twitter summary cards, canonical URLs, and hreflang alternatives on every route.

---

## 8. Operating Principles & Safety Guidelines
- **Truth in Advertising:** Never invent prices, dates, flight carriers, or hotel distances. If unconfirmed, explicitly guide users to inquire directly.
- **Spiritual Reverence:** Maintain dignified, respectful language without sensationalism or marketing hype.
- **WCAG AA Conformance:** Maintain accessible color contrast, screen reader friendliness, keyboard navigability, and generous touch targets.
- **Mandatory Skills Protocol:** Follow [`AI_RULE.md`](file:///s:/client-projects/siddique-tour-and-travels/AI_RULE.md) by loading relevant skills from `agents/skills/` before major modifications.
