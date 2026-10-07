# Siddique Tours and Travels — Design System

## Purpose

This document defines the visual and UX direction for the Siddique Tours and Travels website. It is written for AI agents, CLI tools, designers, and developers who generate or modify pages, components, copy, and styles.

The website represents a Hajj, Umrah, and Ziyarat travel agency. The experience must feel calm, trustworthy, spiritually respectful, premium, and customer-friendly.

## Design decision

Use the **Emerald Sanctuary** theme:

- Style: soft editorial luxury.
- Mood: calm, reassuring, warm, organized, premium.
- Primary color: deep emerald.
- Surface color: warm ivory and white.
- Accent color: muted gold.
- Supporting color: soft sage.
- Dark neutral: midnight navy.

Do not use a dark, flashy, crowded, or poster-like visual style.

## Brand principles

1. **Peace of mind** — make every step feel clear and supported.
2. **Trust before decoration** — show service details, policies, contact information, and proof.
3. **Respectful spirituality** — use religious imagery and language with restraint and dignity.
4. **Premium simplicity** — use whitespace, strong hierarchy, and excellent photography.
5. **Action clarity** — visitors must quickly find packages, prices, dates, and enquiry options.
6. **Inclusive usability** — support elderly visitors, families, mobile users, and users with visual limitations.

## Color tokens

```css
:root {
  --color-primary: #064A43;       /* Deep Emerald */
  --color-primary-hover: #0B6258;
  --color-secondary-dark: #102A43; /* Midnight Navy */
  --color-background: #FAF7F0;    /* Warm Ivory */
  --color-surface: #FFFFFF;
  --color-sage: #DCE8E1;           /* Sage Mist */
  --color-sand: #E9DFC8;
  --color-accent: #B8872D;         /* Muted Gold */
  --color-accent-soft: #D8BC78;
  --color-text: #17211F;           /* Charcoal */
  --color-text-muted: #596662;
  --color-success: #287A58;
  --color-warning: #9A681C;
  --color-error: #B84A45;
  --color-focus: #D8BC78;
}
```

### Color proportions

Use these approximate proportions across the interface:

- 55% warm ivory and white.
- 25% deep emerald and navy.
- 15% sage and neutral surfaces.
- 5% muted gold.

Gold is an accent only. Never use gold as the primary page background or for long body text.

### Approved combinations

- White or warm ivory text on deep emerald.
- Charcoal text on warm ivory or white.
- White text on midnight navy.
- Muted gold for icons, dividers, borders, and large decorative text.
- Emerald buttons with white text.

### Accessibility rules

- Maintain at least 4.5:1 contrast for normal text.
- Maintain at least 3:1 contrast for large text and important UI components.
- Never use muted gold as normal text on white or ivory.
- Never communicate meaning by color alone; pair color with text, icons, or labels.
- Provide visible keyboard focus states using `--color-focus`.

## Typography

Use a refined serif for major headings and a clean sans-serif for interface text.

Preferred pairing:

- Headings: Cormorant Garamond, Playfair Display, or DM Serif Display.
- Body/UI: Inter, Manrope, or Plus Jakarta Sans.

Fallback stacks:

```css
--font-display: "Cormorant Garamond", Georgia, serif;
--font-body: Inter, Manrope, "Helvetica Neue", Arial, sans-serif;
```

### Typography rules

- Use display typography for emotional section headings, not for forms or prices.
- Keep body copy short and scannable.
- Use sentence case for buttons and navigation.
- Do not use all-caps for paragraphs.
- Avoid decorative Arabic text when it reduces readability or appears ornamental without context.
- Keep line length around 60–75 characters for long-form text.

## Layout

### Page structure

Use this general order for the homepage:

1. Trust-focused header.
2. Hero with clear travel proposition.
3. Package categories: Hajj, Umrah, Ziyarat.
4. Service benefits.
5. How the process works.
6. Trust and credibility section.
7. Testimonials or customer stories.
8. Enquiry form and contact CTA.
9. Footer with office and support details.

### Spacing

Use a generous spacing scale:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
--space-10: 128px;
```

- Use 16–24px internal card padding on mobile.
- Use 24–32px internal card padding on desktop.
- Use 64–96px vertical spacing between major sections.
- Do not compress sections to fit more content above the fold.

### Containers

```css
--container-max: 1200px;
--content-max: 720px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-pill: 999px;
```

Use a centered max-width container. Maintain comfortable side padding on small screens.

## Components

### Header

- Background: deep emerald or ivory depending on hero treatment.
- Logo: preserve the official brand mark; do not distort it.
- Navigation: Hajj, Umrah, Ziyarat, Services, About, Contact.
- Primary action: `Get a Quote`.
- Mobile actions: Call and WhatsApp must be easy to access.
- Keep navigation calm and uncluttered.

### Hero

Use a respectful, high-quality photograph of the Kaaba, Madinah, pilgrims, or an appropriate travel scene.

Recommended treatment:

- Image with deep emerald overlay at approximately 55–70% opacity.
- White or warm ivory heading.
- Gold divider or small geometric detail.
- One primary CTA and one secondary CTA.
- Optional floating enquiry card with an opaque ivory or white surface.

Suggested messaging:

> Your Journey to the Holy Lands

> Trusted Hajj, Umrah, and Ziyarat packages with complete travel guidance and support.

Avoid exaggerated promises or claims that cannot be verified.

### Package cards

Every package card should show, where available:

- Package name.
- Journey type.
- Duration.
- Departure location.
- Hotel category and distance information.
- Transport and meal inclusions.
- Starting price or `Request pricing`.
- Travel date or availability.
- `View details` action.
- `Ask on WhatsApp` action.

Use white cards on warm ivory backgrounds. Use emerald for primary actions and gold only for small icons or highlights.

### Service cards

Recommended services:

- Visa and passport assistance.
- Comfortable accommodation.
- Meals.
- Local transportation.
- Guided Ziyarat tours.
- Pre-travel and on-trip support.

Keep each service description to one or two sentences.

### Forms

Required form behavior:

- Use clear field labels; never rely on placeholders as labels.
- Group related fields.
- Explain why sensitive information is requested.
- Show validation messages next to the relevant field.
- Preserve entered values after validation errors.
- Provide success confirmation after submission.
- Include phone and WhatsApp as contact options.

Suggested enquiry fields:

- Full name.
- Phone or WhatsApp number.
- Journey type.
- Preferred travel month.
- Number of travelers.
- Departure city.
- Message.

### Buttons

Primary button:

```css
background: var(--color-primary);
color: #FFFFFF;
border: 1px solid var(--color-primary);
border-radius: var(--radius-sm);
```

Hover state:

```css
background: var(--color-primary-hover);
```

Secondary button:

```css
background: var(--color-background);
color: var(--color-primary);
border: 1px solid var(--color-accent);
border-radius: var(--radius-sm);
```

Button labels should describe the action:

- `View package`
- `Get a quote`
- `Speak to an advisor`
- `Ask on WhatsApp`
- `Download brochure`

Avoid vague labels such as `Click here` or excessive use of `Learn more`.

### Glassmorphism

Use glassmorphism only for a small number of floating elements:

- Hero enquiry panel.
- Sticky booking widget.
- Temporary navigation overlay.

Rules:

- Use an opaque or highly translucent ivory/white base.
- Add a visible border.
- Keep text contrast high.
- Use blur sparingly.
- Do not make package cards transparent.

Example:

```css
background: rgba(255, 255, 255, 0.88);
backdrop-filter: blur(16px);
border: 1px solid rgba(200, 155, 60, 0.35);
```

### Islamic patterns

- Use subtle geometric patterns at low opacity.
- Use patterns in hero overlays, section dividers, or footer backgrounds.
- Do not place patterns behind dense text.
- Do not repeat mosque silhouettes in every section.
- Do not use sacred text as casual decoration.

## Imagery

Prefer:

- Authentic, high-resolution photography.
- Calm compositions with clear subject focus.
- Respectful images of holy sites and pilgrims.
- Warm natural light.
- Images that leave negative space for text.

Avoid:

- Low-resolution poster collages.
- Excessive stock-photo posing.
- Images with unreadable text embedded in them.
- Overcrowded backgrounds behind forms.
- Unverified images presented as current travel conditions.

## Responsive behavior

### Mobile-first requirements

- Use a single-column layout by default.
- Keep primary actions visible without excessive scrolling.
- Provide sticky Call, WhatsApp, and Quote actions where appropriate.
- Use touch targets of at least approximately 44px.
- Never place two long buttons side by side on narrow screens.
- Keep package comparison content scannable.
- Compress decorative elements before reducing readable text size.

### Breakpoint guidance

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

Do not design desktop-first and merely shrink it. Reflow content intentionally for mobile users.

## UX and conversion rules

- Show the business phone, WhatsApp, office address, email, and website consistently.
- Make package inclusions and exclusions obvious.
- Never hide important pricing conditions in small print.
- Provide clear cancellation, refund, visa, and documentation information.
- Place trust signals near enquiry CTAs.
- Let visitors contact a human without completing a long form.
- Support first-time pilgrims with a simple step-by-step process.
- Use testimonials only when authentic and permission has been obtained.

## Content voice

Voice characteristics:

- Warm.
- Respectful.
- Clear.
- Reassuring.
- Professional.
- Helpful without being exaggerated.

Use:

- `Travel with faith and peace.`
- `Guidance before, during, and after your journey.`
- `Plan your pilgrimage with confidence.`

Avoid:

- Guaranteed spiritual outcomes.
- Unverifiable claims such as `the best agency`.
- Pressure-heavy language.
- Fear-based sales copy.
- Ambiguous package promises.

## SEO and semantic structure

- Use one clear H1 per page.
- Use descriptive H2 headings.
- Use semantic buttons and links.
- Add descriptive alt text to meaningful images.
- Mark decorative images with empty alt text.
- Use structured package information where applicable.
- Include location and service terms naturally, not through keyword stuffing.

Suggested page titles:

- `Siddique Tours and Travels | Hajj, Umrah and Ziyarat Packages`
- `Umrah Packages | Siddique Tours and Travels`
- `Hajj Travel Assistance | Siddique Tours and Travels`
- `Ziyarat Tours and Religious Travel Services`

## AI agent instructions

When generating or modifying UI:

1. Preserve the Emerald Sanctuary palette unless the user explicitly requests a rebrand.
2. Prefer warm ivory and white surfaces over pure black or bright saturated backgrounds.
3. Use deep emerald for trust, navigation, and primary actions.
4. Use gold sparingly for emphasis, not body text.
5. Keep the layout spacious and easy to scan.
6. Add a clear enquiry action to commercial sections.
7. Do not invent prices, package inclusions, hotel names, licenses, reviews, or guarantees.
8. If information is missing, use `Contact us for details` or `Request pricing`.
9. Preserve accessibility contrast and keyboard focus states.
10. Do not introduce gradients, glass effects, patterns, or animations unless they improve clarity.
11. Prefer calm transitions under 250ms.
12. Respect reduced-motion preferences.
13. Keep religious imagery and language dignified.
14. Check mobile layout before finalizing.

## CLI and implementation checklist

Before accepting a generated page, verify:

- [ ] The page uses the approved color tokens.
- [ ] Normal text meets at least 4.5:1 contrast.
- [ ] Buttons have visible hover, focus, disabled, and loading states.
- [ ] The page has one clear H1.
- [ ] All meaningful images have useful alt text.
- [ ] Forms have labels and validation messages.
- [ ] Mobile navigation and contact actions work.
- [ ] No invented business claims appear.
- [ ] Package details are clearly separated from marketing copy.
- [ ] WhatsApp, phone, or enquiry CTAs are visible.
- [ ] Decorative patterns do not interfere with readability.
- [ ] Reduced-motion preferences are respected.
- [ ] Keyboard navigation is usable.
- [ ] No horizontal scrolling occurs on mobile.

## Definition of done

A page is ready when it feels calm within the first few seconds, explains the service without confusion, presents the next action clearly, works well on mobile, and makes the visitor feel that Siddique Tours and Travels can responsibly guide their journey.
