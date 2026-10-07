# Siddique Tours and Travels — Project Context & Knowledge Base

## 1. Project Overview
- **Name:** Siddique Tours and Travels (`siddique-tour-and-travels`)
- **Domain:** Pilgrimage and religious travel agency specializing in **Hajj**, **Umrah**, and **Ziyarat** journeys.
- **Goal:** Deliver a calm, trustworthy, spiritually respectful, and premium online presence that empowers pilgrims and their families to explore packages, understand inclusions, and easily contact the agency for quotes and bookings.
- **Design System:** **Emerald Sanctuary** (documented in [`DESIGN.md`](file:///s:/client-projects/siddique-tour-and-travels/DESIGN.md)).
- **Directives:** [`AI_RULE.md`](file:///s:/client-projects/siddique-tour-and-travels/AI_RULE.md) & [`AGENTS.md`](file:///s:/client-projects/siddique-tour-and-travels/AGENTS.md).

---

## 2. Technical Stack
- **Framework:** Next.js 16.4.0 (App Router), React 19.3.0
- **Compiler:** Babel React Compiler (`babel-plugin-react-compiler: 1.0.0`, `reactCompiler: true` in `next.config.mjs`)
- **Styling:** Tailwind CSS v4 (`tailwindcss: ^4`, `@tailwindcss/turbopack`) with inline `@theme` tokens in `src/app/globals.css`
- **Build / Bundler:** Turbopack
- **Linting:** ESLint 9 + `eslint-config-next` 16.4.0
- **Package Manager:** `npm` (`package-lock.json`)

---

## 3. Key Journeys & Services
1. **Hajj Packages:** Complete seasonal Hajj guidance, shariat compliance, Mina & Arafat logistics, dedicated muallim support.
2. **Umrah Packages:** Year-round individual, family, and group Umrah packages with varying hotel distances and flight arrangements.
3. **Ziyarat Tours:** Historical and sacred site tours in Mecca, Medina, and surrounding historical locations.
4. **Core Services:**
   - Visa & documentation processing.
   - Hotel accommodation near Haramain.
   - Private and luxury bus transfers.
   - Catering & halal meals.
   - Experienced tour guides and on-ground team.

---

## 4. Key User Pathways
- **Explore Packages:** Filter by journey type (Hajj/Umrah/Ziyarat), duration, departure city, and accommodation class.
- **Direct Contact:** Quick WhatsApp chat link with pre-filled package interest.
- **Request a Quote / Custom Itinerary:** Accessible inquiry form capturing dates, traveler count, and special requirements.
