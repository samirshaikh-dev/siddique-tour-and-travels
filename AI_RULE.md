# AI Rules & Engineering Directives — Siddique Tours and Travels

> **Scope:** These rules apply to all AI models, CLI coding tools (OpenCode, Gemini, Copilot), and autonomous agents operating on `siddique-tour-and-travels`. Adherence is mandatory on every step.  
> **Companion Directives:** [`DESIGN.md`](file:///s:/client-projects/siddique-tour-and-travels/DESIGN.md) (Emerald Sanctuary Design System & UI Tokens) | [`AGENTS.md`](file:///s:/client-projects/siddique-tour-and-travels/AGENTS.md) (Next.js 16 Breaking Conventions) | [`opencode.jsonc`](file:///s:/client-projects/siddique-tour-and-travels/opencode.jsonc) (OpenCode Configuration).

---

## 1. The Golden Directive: Mandatory Skills Protocol

> [!CAUTION]
> ### STRICT REQUIREMENT: NEVER PROCEED WITHOUT RELEVANT AGENT SKILL
> Before proposing a technical plan, writing code, creating files, or editing existing files, you **MUST ALWAYS view and load the relevant skill file(s) in `agents/skills/` using `view_file`**.
>
> Changes that bypass loading relevant skills risk violating architectural patterns, accessibility mandates, and design tokens.

### Discipline Routing Checklist

Load **every** skill whose domain intersects with your task:

- [ ] **UI & Visual Design:** [`agents/skills/ui-ux-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/ui-ux-engineer/SKILL.md)  
  *Activates for:* Emerald Sanctuary theme implementation, layout hierarchy, spacing rhythm, color tokens, typography pairing, package cards, hero sections, modal/drawer ergonomics.
- [ ] **Accessibility & WCAG AA Conformance:** [`agents/skills/accessibility-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/accessibility-engineer/SKILL.md)  
  *Activates for:* 4.5:1 color contrast, visible keyboard focus (`--color-focus`), touch targets (minimum 44×44px for mobile/elderly pilgrims), semantic HTML, form error announcements, ARIA disclosures, `prefers-reduced-motion`.
- [ ] **Frontend & Next.js Architecture:** [`agents/skills/frontend-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/frontend-engineer/SKILL.md)  
  *Activates for:* Next.js 16 App Router, React 19 Server vs. Client component boundaries, React Compiler compatibility, state management, form submissions, mobile navigation, sticky WhatsApp/Call CTAs.
- [ ] **Backend, APIs & Server Logic:** [`agents/skills/backend-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/backend-engineer/SKILL.md)  
  *Activates for:* Route handlers (`app/api/**`), lead capture, contact & quote requests, WhatsApp API deep-links, email dispatch, rate limiting, request validation.
- [ ] **Database & Data Modeling:** [`agents/skills/database-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/database-engineer/SKILL.md)  
  *Activates for:* Package schemas (Hajj, Umrah, Ziyarat), itineraries, hotel & transport data, booking inquiries, customer records, database migrations.
- [ ] **Performance & Optimization:** [`agents/skills/performance-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/performance-engineer/SKILL.md)  
  *Activates for:* Core Web Vitals (LCP, CLS, INP), Next.js 16 Partial Prerendering / Component Caching (`cacheComponents`, `partialPrefetching`), `next/image` optimization, font preloading, bundle size.
- [ ] **Security & Abuse Prevention:** [`agents/skills/security-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/security-engineer/SKILL.md)  
  *Activates for:* Form spam protection, Honeypot / CAPTCHA, sanitizing user inquiry inputs, environment variable hygiene, preventing PII leaks from travelers/pilgrims.
- [ ] **Technical SEO & Rich Snippets:** [`agents/skills/seo-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/seo-engineer/SKILL.md)  
  *Activates for:* Schema.org JSON-LD (`TravelAgency`, `TouristTrip`, `Offer`, `FAQPage`, `BreadcrumbList`), OpenGraph metadata, dynamic sitemap (`app/sitemap.js`), robots.txt, canonical URLs.
- [ ] **SEO Keyword Research & Content Depth:** [`agents/skills/seo-keyword-research-implementation/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/seo-keyword-research-implementation/SKILL.md)  
  *Activates for:* Hajj, Umrah, and Ziyarat keyword mapping, local agency search intent, package comparison guides, pilgrim FAQs, eliminating keyword cannibalization.
- [ ] **AI & Assistant Systems:** [`agents/skills/ai-engineer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/ai-engineer/SKILL.md)  
  *Activates for:* AI package recommendation assistants, pilgrimage Q&A assistants, itinerary generator prompts, lead qualification chatbots.
- [ ] **Personal & Brand Profile Optimizer:** [`agents/skills/personal-seo-profile-optimizer/SKILL.md`](file:///s:/client-projects/siddique-tour-and-travels/agents/skills/personal-seo-profile-optimizer/SKILL.md)  
  *Activates for:* Trust signals, business credentials, ministry approvals, Google Business Profile alignment, authority positioning.

---

## 2. Core Domain & Brand Directives

### Brand Identity & Mission
Siddique Tours and Travels is a premier pilgrimage service provider specializing in **Hajj, Umrah, and Ziyarat journeys**.
- **Verified Head Office:** Shop No 8, Seven Jewellers Complex, Amred, Near Sonorous, Vapi East, Gita Nagar, Vapi, Gujarat – 396191.
- **Official Helpline:** `+91 90165 31369` (WhatsApp: `+919016531369`).
- **Official Email:** `info@siddiquetours.com`.
- **Peace of Mind:** Transparent itineraries, verified hotel distances, honest pricing, and clear documentation.
- **Dignity & Spiritual Respect:** High-reverence imagery and language. Sacred phrases must never be used casually as marketing fluff.
- **Trust Before Decoration:** Agency license details, office contacts, cancellation terms, and verified inclusions come before decorative flourishes.
- **Accessibility for All Generations:** Pilgrims include elderly travelers and multi-generational families. Large touch targets, high contrast, legible typography, and straightforward contact pathways are non-negotiable.

### Truth in Advertising (Strict Prohibition against Hallucination)
- **NEVER invent prices, dates, airline names, or hotel distances to Haramain.** If details are unconfirmed, explicitly use `"Contact us for dates"`, `"Request customized pricing"`, or `"Inquire on WhatsApp"`.
- **NEVER make unverified promises** (e.g., "Guaranteed 100% visa approval" or "The cheapest Hajj in the country").
- **NEVER use fake reviews, stock pilgrim testimonials, or imaginary government badges.**

---

## 3. Design System & Visual Guardrails ("Emerald Sanctuary")

All visual code must conform strictly to [`DESIGN.md`](file:///s:/client-projects/siddique-tour-and-travels/DESIGN.md).

### Color Tokens & Palette
```css
:root {
  --color-primary: #064A43;        /* Deep Emerald - Trust, primary actions, header */
  --color-primary-hover: #0B6258;  /* Vibrant Emerald Hover */
  --color-secondary-dark: #102A43;  /* Midnight Navy - High-contrast headers/footers */
  --color-background: #FAF7F0;     /* Warm Ivory - Soft, comforting canvas */
  --color-surface: #FFFFFF;        /* Clean White - Crisp cards & form surfaces */
  --color-sage: #DCE8E1;           /* Sage Mist - Neutral dividers & subtle badges */
  --color-sand: #E9DFC8;           /* Sand - Warm accents */
  --color-accent: #B8872D;         /* Muted Gold - Decorative borders, subtle icons ONLY */
  --color-accent-soft: #D8BC78;    /* Soft Gold */
  --color-text: #17211F;           /* Deep Charcoal - High-legibility body */
  --color-text-muted: #596662;     /* Muted Charcoal - Secondary captions */
  --color-success: #287A58;        /* Verified / Confirmed */
  --color-warning: #9A681C;        /* Limited availability */
  --color-error: #B84A45;          /* Form validation errors */
  --color-focus: #D8BC78;          /* Accessible focus ring outline */
}
```

### Color Distribution Rules
- **55% Warm Ivory & White:** Backgrounds and cards. Keep pages bright, calm, and readable.
- **25% Deep Emerald & Navy:** Primary buttons, brand headers, key section highlights.
- **15% Sage & Neutral Surfaces:** Card borders, subtle badges, background contrast bands.
- **5% Muted Gold:** Icons, small badges, and borders **only**.
- ⚠️ **Strict Constraint:** Never use gold for long paragraphs or normal text on light backgrounds (fails contrast). Never use pure black `#000000` or aggressive neon colors.

### Typography
- **Headings (Display):** Refined editorial serif (`Cormorant Garamond`, `Georgia`, or `Playfair Display`).
- **Body & UI:** Clean, human-centered sans-serif (`Inter`, `Plus Jakarta Sans`, or `system-ui`).
- **Sentence Case:** Use sentence case for button labels (`"Request a quote"`, `"View itinerary"`), avoiding aggressive ALL CAPS.

### Imagery & Background Cleanliness
- **Prohibition on Dot Grids:** Never place radial polka-dot patterns or noisy repetitive textures behind text or in footers. Surfaces must remain solid, clean, and calm.
- Authentic, respectful photographs of Mecca, Medina, and holy sites under warm natural light (`hero-makkah.jpg`, `madinah-sanctuary.jpg`, `luxury-suite.jpg`, `ziyarat-mountains.jpg`).
- Always use `next/image` with explicit `alt` text, responsive `sizes`, and proper aspect ratios.

---

## 4. Technical Architecture & Next.js 16 Guardrails

### Next.js 16 & React 19 Standards
- **Breaking Changes Aware:** Follow `node_modules/next/dist/docs/` and [`AGENTS.md`](file:///s:/client-projects/siddique-tour-and-travels/AGENTS.md).
- **Prerendering & Dynamic Time Guardrail:** Never call `new Date()` or `Date.now()` directly in statically prerendered Server Components (`cacheComponents: true`). Use a static build-safe constant (e.g., `2026` or `siteConfig.year`) to eliminate Next.js `blocking-prerender-current-time` build failures.
- **Server Components by Default:** Route files (`src/app/**/page.js` or `page.tsx`) must be Server Components. Render static content on the server for maximum SEO indexability and instantaneous initial load.
- **Deliberate `"use client"` Boundaries:** Only mark leaves as client components when they require React hooks (`useState`, `useEffect`), event listeners, form interactivity, or interactive drawers.
- **Grid Layout Stability:** Do not use fragile `grid-cols-12` layouts with uncompiled arbitrary spans that risk collapsing columns. Use reliable `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full` structures. Always ensure `Container` has `w-full`.
- **Turbopack & Tailwind CSS v4:** Styles are powered by `@tailwindcss/turbopack` and Tailwind v4. Do not introduce legacy `@tailwind` directives that conflict with Tailwind v4 `@import "tailwindcss";`.
- **Zero Hydration Mismatch:** Never access `window`, `localStorage`, or browser-only APIs outside `useEffect` or client-only dynamic imports.

### Package Management & CLI Guardrails
- **Package Manager:** Exclusively use **`npm`** (`package-lock.json` present). Do not execute `pnpm` or `yarn`.
- **Common Commands:**
  - Dev server: `npm run dev`
  - Production build: `npm run build`
  - Linting: `npm run lint`
- **Shell:** Windows PowerShell. Avoid Unix-only syntax (e.g. use proper PowerShell or cross-platform flags).
- **Destructive Operations:** Never run `git reset --hard`, `git clean -fd`, or delete files without explicit user consent.

---

## 5. Conversion, Forms & Mobile Floating Dock

### Primary Actions & Floating Concierge Dock
Every package and high-intent view must offer clear, direct communication channels:
1. **Mobile Floating Concierge Dock (`StickyContactBar`):**
   - Pinned 16px above the bottom screen edge (`style={{ bottom: "16px", left: "12px", right: "12px" }}`).
   - Dark glassmorphic floating pill (`bg-[#0a1b2b]/95 backdrop-blur-xl border border-white/20`).
   - Dual actions: Call Office (`+91 90165 31369`) and WhatsApp Concierge (`+919016531369`).
   - Micro-interaction: Tap scaling (`active:scale-[0.96]`).
2. **Footer Mobile Clearance:** Maintain `pb-36` on mobile footers so floating elements never obscure links or addresses.
3. **Structured Lead Form:** Short, accessible inquiry form with name, phone, journey, and city.

### Form Behavior
- Explicit `<label>` elements for every input; never rely on placeholder text alone.
- Inline validation messages positioned immediately adjacent to the offending field.
- Loading indicator and disabled state on the submit button while processing.
- Unambiguous success screen or alert acknowledging receipt with expected follow-up time.

---

## 6. Accessibility & Mobile Optimization Checklist

- [ ] **Contrast:** Minimum 4.5:1 for normal text, 3:1 for large headings and icons.
- [ ] **Focus Rings:** Distinct, visible 2px outline using `--color-focus` on all interactive `:focus-visible` elements.
- [ ] **Touch Ergonomics:** All touch targets (buttons, links, form inputs) are at least 44×44px (dock actions at least 48px) with adequate tap clearance.
- [ ] **Mobile Reflow:** Single-column layout on mobile viewports; zero horizontal scrolling (`overflow-x: hidden`).
- [ ] **Floating Dock Anchor:** Verified bottom positioning 16px above screen edge; never jumps to header.
- [ ] **Motion Sensitivity:** Respect `@media (prefers-reduced-motion: reduce)` by disabling non-essential transitions and animations.

---

## 7. Non-Negotiable AI Execution Checklist

Before presenting your work or concluding a task, verify every item:

1. **Skill Verified:** Did you view and follow the guidelines of the corresponding skill in `agents/skills/`?
2. **Brand Aligned:** Does the page respect the **Emerald Sanctuary** palette and brand principles in `DESIGN.md`?
3. **No Fabricated Data:** Are all packages, phone numbers, and agency claims accurate (Head Office in Vapi, Gujarat; phone `+91 90165 31369`)?
4. **Accessible Contrast & Clean Backgrounds:** Are text elements legible against solid surfaces without distracting dot patterns?
5. **Mobile-First Test:** Does the floating dock sit at the bottom without header overlap?
6. **Next.js 16 Clean:** Did the code avoid non-deterministic `new Date()` calls during prerender and build cleanly (`npm run build`, `npm run lint`)?
7. **Contact Pathways Clear:** Can the visitor immediately contact the agency via WhatsApp or phone from anywhere on the page?

---

## 8. Website Redirection Directive: Visual Impact First

Redesign the website to make it visually appealing, modern, and highly attractive.

The primary goal is **NOT** to make the website more informative. Instead, focus on creating a strong visual first impression that immediately captures attention and makes visitors want to explore further.

### Design Priorities
- Premium, modern, and visually engaging aesthetic
- Strong visual hierarchy
- Minimal text and reduced information density
- High-quality visuals and imagery
- Clean, spacious layout
- Compelling hero section
- Attractive typography and composition
- Subtle, purposeful animations and interactions
- Strong use of whitespace
- Clear but visually prominent CTAs
- Mobile-first responsive design
- Consistent visual language throughout the page

### Avoid
- Large blocks of text
- Overly technical/informational sections
- Cluttered layouts
- Excessive cards or UI elements
- Generic template-style designs
- Unnecessary animations or decorative elements

### Guiding Principle
The website should feel like a **premium brand website** rather than an information-heavy website. Prioritize visual impact, emotion, aesthetics, and conversion over the amount of information displayed.

Do not remove important existing functionality or content unless it is necessary to improve the visual presentation.
