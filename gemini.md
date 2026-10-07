# Siddique Tours and Travels — Gemini Context & System Directives

> **Scope:** This document serves as the master prompt context, system instructions, and architecture manual for Gemini, autonomous coding agents, and AI pair-programmers operating within `siddique-tour-and-travels`. Adherence is mandatory on every step.  
> **Companion Documents:** [`AI_RULE.md`](file:///s:/client-projects/siddique-tour-and-travels/AI_RULE.md) (Engineering Rules & Constraints) | [`DESIGN.md`](file:///s:/client-projects/siddique-tour-and-travels/DESIGN.md) (Emerald Sanctuary Design System) | [`context.md`](file:///s:/client-projects/siddique-tour-and-travels/context.md) (Domain Knowledge Base) | [`AGENTS.md`](file:///s:/client-projects/siddique-tour-and-travels/AGENTS.md) (Next.js 16 Breaking Conventions) | [`opencode.jsonc`](file:///s:/client-projects/siddique-tour-and-travels/opencode.jsonc) (OpenCode CLI Setup).

---

## 1. Project Overview & Core Mission

**Siddique Tours and Travels** is a specialized pilgrimage agency dedicated to guiding pilgrims and their families through sacred **Hajj**, **Umrah**, and historical **Ziyarat** journeys.

- **Primary Mission:** Provide a serene, trustworthy, transparent, and spiritually respectful online experience. Eliminate travel anxieties by clearly presenting verified accommodations near the Haramain, transparent inclusions, and direct one-click communication channels.
- **Brand Essence:** **"Peace of Mind in the Sacred Lands"** — rooted in truthfulness (*Sidq*), dignity, patience, and attentive care for travelers across all generations.
- **Target Audience:** First-time pilgrims, experienced travelers, family groups, and elderly pilgrims who require dedicated logistics and compassionate on-ground assistance.

---

## 2. Technical Stack & Architecture

- **Framework:** Next.js 16.4.0 (App Router, Server Components by default)
- **Runtime & UI Library:** React 19.3.0
- **React Compiler:** Enabled (`reactCompiler: true` via `babel-plugin-react-compiler: 1.0.0`)
- **Styling & CSS:** Tailwind CSS v4 (`tailwindcss: ^4`, `@tailwindcss/turbopack`) with theme tokens declared in `@theme inline` within [`src/app/globals.css`](file:///s:/client-projects/siddique-tour-and-travels/src/app/globals.css)
- **Typography:** Google Fonts loaded via `next/font/google`:
  - Headings: `Cormorant_Garamond` (Display editorial serif, weights 500/600/700, `--font-display`)
  - Body & UI: `Plus_Jakarta_Sans` (Legible sans-serif, weights 400/500/600/700, `--font-body`)
- **Package Manager:** `npm` exclusively (enforced via [`package-lock.json`](file:///s:/client-projects/siddique-tour-and-travels/package-lock.json))
- **Structured Data / SEO:** Schema.org JSON-LD (`TravelAgency`, `TouristTrip`, `Offer`, `FAQPage`, `BreadcrumbList`)
- **Code Linter:** ESLint 9 (`eslint-config-next: 16.4.0`)

---

## 3. Mandatory Pre-Implementation Protocol: Load Agent Skills

> [!CAUTION]
> ### STRICT DIRECTIVE: NEVER WRITE CODE WITHOUT VIEWING APPLICABLE SKILLS
> Before formulating a technical plan, writing code, creating components, or editing existing files, the AI **MUST ALWAYS load and read the applicable skill file(s) in `agents/skills/` using `view_file`**.

### Skills Routing Directory:

| Engineering Discipline | Skill Path | Activates For |
| :--- | :--- | :--- |
| **UI & Visual Design** | [`agents/skills/ui-ux-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/ui-ux-engineer/SKILL.md) | Emerald Sanctuary palette, visual hierarchy, spacing, card ergonomics, typography, hero banners. |
| **Accessibility & WCAG AA** | [`agents/skills/accessibility-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/accessibility-engineer/SKILL.md) | 4.5:1 text contrast, visible `:focus-visible` rings (`--color-focus`), touch targets ≥ 44px, screen reader compatibility, `prefers-reduced-motion`. |
| **Frontend & Next.js 16** | [`agents/skills/frontend-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/frontend-engineer/SKILL.md) | Next.js 16 App Router, React 19 Server vs. Client boundaries, React Compiler compatibility, component composition, state management. |
| **Backend & Route Handlers** | [`agents/skills/backend-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/backend-engineer/SKILL.md) | `app/api/**` route handlers, lead capture, input validation, WhatsApp link generation, error handling. |
| **Database & Modeling** | [`agents/skills/database-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/database-engineer/SKILL.md) | Package data schemas, pricing models, hotel distances, inquiry persistence, CMS integration. |
| **Performance & Latency** | [`agents/skills/performance-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/performance-engineer/SKILL.md) | Core Web Vitals (LCP, CLS, INP), image optimization (`next/image`), font preloading, zero hydration delay. |
| **Security & Abuse Prevention** | [`agents/skills/security-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/security-engineer/SKILL.md) | Form sanitization, honeypots, rate limiting, pilgrim PII protection, environment variable safety. |
| **Technical SEO & Schema** | [`agents/skills/seo-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/seo-engineer/SKILL.md) | JSON-LD schema generation, dynamic OpenGraph cards, meta titles/descriptions, canonical tags. |
| **SEO Keyword Research** | [`agents/skills/seo-keyword-research-implementation/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/seo-keyword-research-implementation/SKILL.md) | Pilgrim search intent, Hajj & Umrah package keywords, local city targeting, FAQ optimization. |
| **AI & Assistants** | [`agents/skills/ai-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/ai-engineer/SKILL.md) | AI pilgrimage Q&A agents, itinerary generators, lead qualification prompts. |
| **Brand Authority & Profiles** | [`agents/skills/personal-seo-profile-optimizer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/personal-seo-profile-optimizer/SKILL.md) | Ministry accreditation, Google Business Profile alignment, agency trust badges. |

---

## 4. Key Pages & Route Discovery Directory

| Route | Purpose | Architecture / Notes |
| :--- | :--- | :--- |
| [`/`](file:///s:/client-projects/siddique-tour-and-travels/src/app/page.js) | Homepage | Server Component. Hero with proposition, Quick Quote form, Trust badges, Package grid, Process steps, FAQs. |
| [`/umrah`](file:///s:/client-projects/siddique-tour-and-travels/src/app/umrah/page.js) | Umrah Packages Directory | Server Component. Dedicated catalog of year-round Umrah offerings, Quad/Triple/Twin pricing, hotel distances. |
| [`/hajj`](file:///s:/client-projects/siddique-tour-and-travels/src/app/hajj/page.js) | Hajj Guidance & Registration | Server Component. Shariat-guided packages, Mashair facilities (Mina/Arafat), scholar leadership, registration inquiry. |
| [`/ziyarat`](file:///s:/client-projects/siddique-tour-and-travels/src/app/ziyarat/page.js) | Sacred Ziyarat Tours | Server Component. Historical heritage tours in Makkah and Madinah with AC buses and guided narrations. |
| [`/services`](file:///s:/client-projects/siddique-tour-and-travels/src/app/services/page.js) | Travel Logistics & Services | Server Component. Breakdown of visa processing, hotel booking, catering, transport, and senior care. |
| [`/about`](file:///s:/client-projects/siddique-tour-and-travels/src/app/about/page.js) | About Siddique Tours | Server Component. Founding values, ministry compliance credentials, 24/7 ground support standards. |
| [`/contact`](file:///s:/client-projects/siddique-tour-and-travels/src/app/contact/page.js) | Contact & Head Office | Server Component. Office address, business phone, WhatsApp link, opening hours, detailed inquiry form. |
| [`/api/inquiries`](file:///s:/client-projects/siddique-tour-and-travels/src/app/api/inquiries/route.js) | Lead Capture Endpoint | Route Handler (`POST`). Validates incoming lead data, sanitizes inputs, responds with JSON confirmation. |

---

## 5. Scalable Repository Structure

```
src/
├── app/                              # Next.js 16 App Router
│   ├── globals.css                   # Emerald Sanctuary CSS variables & Tailwind v4 theme
│   ├── layout.js                     # Root shell, Cormorant Garamond + Inter fonts, Schema.org
│   ├── page.js                       # Homepage
│   ├── hajj/page.js                  # Hajj pilgrimage page
│   ├── umrah/page.js                 # Umrah packages page
│   ├── ziyarat/page.js               # Historical Ziyarat page
│   ├── services/page.js              # Travel logistics & services page
│   ├── about/page.js                 # Agency philosophy & credentials
│   ├── contact/page.js               # Office address, contact cards & lead form
│   └── api/
│       └── inquiries/route.js        # Lead capture API with input validation
│
├── components/                       # Modular Component System
│   ├── ui/                           # Base design primitives
│   │   ├── Button.jsx                # Emerald, secondary, outline, gold, whatsapp variants
│   │   ├── Card.jsx                  # Surface, ivory, emerald, and featured cards
│   │   ├── Badge.jsx                 # Status & category indicators
│   │   ├── Container.jsx             # 1200px responsive max-width wrapper
│   │   └── SectionHeading.jsx        # Editorial serif headings with gold accent line
│   ├── layout/                       # Layout chrome & navigation
│   │   ├── Navbar.jsx                # Responsive header with drawer & WhatsApp CTA
│   │   ├── Footer.jsx                # Midnight Navy footer with office & support links
│   │   └── StickyContactBar.jsx      # Mobile sticky bottom bar (Call + WhatsApp)
│   ├── packages/                     # Domain package widgets
│   │   ├── PackageCard.jsx           # Cards with hotel proximity, inclusions, and CTAs
│   │   └── PackageGrid.jsx           # Filterable category tabs (All, Umrah, Hajj, Ziyarat)
│   ├── forms/                        # Forms
│   │   └── QuickQuoteForm.jsx        # Validated quote request form with feedback state
│   └── common/                       # Shared widgets
│       ├── TrustBadges.jsx           # Ministry approval & ground support highlights
│       └── FAQAccordion.jsx          # Accessible accordion with keyboard navigation
│
├── data/                             # Single Source of Truth (Central Datasets)
│   ├── site-config.js                # Business phone, WhatsApp, office address, hours
│   ├── packages.js                   # Catalog of Hajj, Umrah, and Ziyarat packages
│   ├── services.js                   # Detailed service offerings
│   └── faqs.js                       # Frequently asked questions for pilgrims
│
└── lib/                              # Shared Utilities & Helpers
    ├── utils.js                      # Class merger (cn), currency formatter, WhatsApp URL builder
    └── seo.js                        # Schema.org JSON-LD (TravelAgency, TouristTrip)
```

---

## 6. Design System Tokens ("Emerald Sanctuary")

All generated or modified UI must conform strictly to [`DESIGN.md`](file:///s:/client-projects/siddique-tour-and-travels/DESIGN.md):

### Color Tokens
```css
:root {
  --color-primary: #064A43;        /* Deep Emerald - Trust, primary actions, header */
  --color-primary-hover: #0B6258;  /* Vibrant Emerald Hover */
  --color-secondary-dark: #102A43;  /* Midnight Navy - Headers & footers */
  --color-background: #FAF7F0;     /* Warm Ivory - Soft canvas */
  --color-surface: #FFFFFF;        /* Clean White - Cards & forms */
  --color-sage: #DCE8E1;           /* Sage Mist - Neutral dividers & badges */
  --color-sand: #E9DFC8;           /* Sand - Warm accents */
  --color-accent: #B8872D;         /* Muted Gold - Decorative borders & small icons ONLY */
  --color-accent-soft: #D8BC78;    /* Soft Gold */
  --color-text: #17211F;           /* Deep Charcoal - High-legibility text */
  --color-text-muted: #596662;     /* Muted Charcoal - Secondary captions */
  --color-focus: #D8BC78;          /* Accessible focus ring outline */
}
```

### Color Proportions
- **55% Warm Ivory & White:** Clean, open surfaces.
- **25% Deep Emerald & Navy:** Primary actions, branding, key headers.
- **15% Sage & Sand:** Borders, dividers, subtle badges.
- **5% Muted Gold:** Small icons, dividers, badges **only** (never long text or buttons backgrounds).

---

## 7. Non-Negotiable Directives for Gemini

1. **Strict Skills Routing:** Always inspect the applicable skill in `agents/skills/` before providing implementation advice or editing code.
2. **Zero Hallucination Policy:** Never fabricate prices, airline names, or hotel distances. Use "Request pricing" or "Inquire on WhatsApp" when unconfirmed.
3. **Spiritual Reverence:** Maintain dignified, respectful language. Do not use sacred Quranic terms as clickbait or marketing decoration.
4. **Accessible by Default:** Ensure WCAG AA compliance (contrast ≥ 4.5:1, touch targets ≥ 44px, visible focus outlines, and mobile-first single column layouts).
5. **Clean Architecture:** Keep components composable, data isolated in `src/data/`, and pages lean Server Components.
