# OES Global — Corporate Site UI Kit

High-fidelity recreation of the **OES Global parent-company** marketing site, built on the brand tokens in `../../colors_and_type.css`.

> Note: there is no production OES Global codebase in this project. This kit is an **on-brand reference build** derived strictly from the 2026 Brand Guidelines (palette, type, motifs, voice) — not a copy of an existing site. Treat it as a starting point and adjust to match the live site if/when available.

## Run
Open `index.html`. React + Babel are loaded from CDN; components are plain JSX files.

## Components
| File | What |
|---|---|
| `Primitives.jsx` | `BRANDS` data, `Icon` (Lucide via mask), `Eyebrow`, `Button` (primary / onDark / outlineDark / ghost). |
| `Header.jsx` | Sticky nav — transparent over hero, frosts white on scroll; logo swaps white↔color. |
| `Hero.jsx` | Deep-navy gradient hero, icon watermark, master headline, stat strip. |
| `BrandFamily.jsx` | Grid of the four sub-brand cards (edge-block motif, hover lift) → opens detail. |
| `ValueSection.jsx` | Layered-panels visual + brand principles with Lucide icons. |
| `Footer.jsx` | Contact band (gradient) with form + footer bar with sub-brand domains. |
| `App.jsx` | Assembles the page, smooth-scroll nav, brand-detail overlay. |

## Interactions
- Scroll: header transitions transparent → frosted, logo recolors.
- Nav links + CTAs smooth-scroll to sections.
- Brand cards open a modal detail panel; form shows a success state on submit (fake).

## Brand rules honored
- `#305B7D` for all primary actions; approved gradients only on hero/section backgrounds.
- Roboto (body/headlines) + Poppins (display); condensed uppercase labels with wide tracking.
- Edge-block, layered-panels, and icon-watermark motifs; generous white space; cool soft shadows.
- Logo variant chosen per background for contrast.

## Icons
Lucide (`lucide-static@0.460.0`) via CSS mask so icons render in brand color. **Substitution** — the brand ships no UI icon set; swap if OES adopts one.
