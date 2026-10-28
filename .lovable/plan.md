# Certifications Section — Implementation Plan

## Certificate images (exact titles, verified from your uploads)

| # | Title (shown on card) | Issuer | Year | Upload file | Orientation check |
|---|---|---|---|---|---|
| 1 | Agentic AI Level 1 Developer | PIAIC | 2026 | `certificate.PNG` | Landscape, readable — no fix needed |
| 2 | Prompt Engineer | PIAIC | 2026 | `Prompt.png` | Portrait, readable — no fix needed |
| 3 | Python Development and Programming | Aptech | 2025 | `python.PNG` | Portrait, readable — no fix needed |
| 4 | Working with Content Management System | Aptech | 2025 | `Wordpress.PNG` | Portrait, readable — no fix needed |

All four are correctly oriented and fully readable as-is — no rotation, cropping, or retouching needed.

## How the four PNG files will be added

1. Each PNG is uploaded from the chat upload mount to Lovable's CDN asset storage via `lovable-assets create`, producing a `.asset.json` pointer file in `src/assets/` (e.g. `src/assets/certificate-agentic-ai.png.asset.json`). The original binary is never copied into the repo.
2. `CertificationsSection.tsx` imports each pointer and renders the image from its `.url`, so the files are served from CDN with stable URLs — exactly your original images, unmodified.
3. Suggested CDN filenames: `certificate-agentic-ai.png`, `certificate-prompt-engineer.png`, `certificate-python.png`, `certificate-wordpress-cms.png`.

## What gets built

1. **New `src/components/sections/certifications-section.tsx`**
   - Section heading "Certifications" with the same blue gradient underline as other sections.
   - 4 responsive cards in a grid: 1 column on mobile, 2 on tablet, 4 on desktop.
   - Each card: certificate thumbnail (object-cover, uniform card height), exact title, issuer badge (PIAIC / Aptech), year, and a "View Certificate" affordance.
   - Styling matches your existing system: semantic tokens (`bg-card`, `border-border`, `text-foreground`) so light mode stays off-white/professional, neon cyan hover glow on borders exactly like the Skills/Services/Projects cards, framer-motion fade/slide-in with staggered delays.
   - Icons: `Award`/`ShieldCheck` style Lucide icons with the cyan glow treatment, consistent with other sections.

2. **Enlarged view (lightbox)**
   - Clicking a card opens a full-screen overlay: dark blurred backdrop, certificate shown at large size (auto-fit to viewport, landscape and portrait both handled), title + issuer caption, close via ✕ button, Escape key, or backdrop click.
   - Body scroll is locked while the lightbox is open.

3. **Page integration (`src/pages/Portfolio.tsx`)**
   - `<CertificationsSection />` inserted between About and Skills.
   - `"certifications"` added to the scroll-spy section list so the nav highlights correctly while scrolling.

4. **Navbar** — **recommended: yes, add it.** "Certifications" sits between About and Skills in the desktop nav and mobile menu. It adds real credibility for recruiters and the section is distinct enough to deserve a link. Nav grows to 7 items but the current pill design has room; on mobile the existing dropdown menu absorbs it cleanly.

5. **Footer** (optional, low effort): add "Certifications" to the quick links column. I'll include it unless you say otherwise.

## Verification

- Build passes (no errors in build output).
- Playwright check: scroll to Certifications in dark mode (neon glow, pure-black background) and light mode (off-white, no glow), open the lightbox for a landscape and a portrait certificate, close it, and confirm the nav pill highlights the section on scroll.

No files will be edited until you approve this plan.
