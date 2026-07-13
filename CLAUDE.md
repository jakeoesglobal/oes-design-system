# OES Global Design System — project conventions

## ⚡ WEEKLY CONTENT — FAST START
If the user says anything like "start q#-w##", "weekly content", or "new week":
1. **Do NOT ask clarifying questions.** You already know the system.
2. Immediately ask only these two things in one message:
   - "Which template number? (1, 2, or 3)"
   - "Paste the copy for each brand when ready, and drop images one at a time."
3. Build from the approved templates in this project. Never rebuild from scratch.
4. At the end, auto-generate `export/q#-w##-specs.json` and run the export to deliver a zipped JPG folder.

---

This project has **two layers**. Keep them separate.

## 1. Brand System (the factory — stable)
The permanent source of truth. Rarely changes.
- `styles.css` (entry) → `colors_and_type.css` + `brands/*.css` (tokens, 5 themes: oes, tcfl, hd, afl, sd2k)
- **Libraries** (mix-and-match parts): `Backgrounds & Layouts.html`, `Headlines & Text.html`, `Badges & Callouts.html`, `Panels & Graphics.html`
- **Approved Templates** (ready formats, named `… Templates.html`): `Blog Header Templates.html` (1200×240), `Banner Templates.html` (1400×275), `LinkedIn Article Templates.html`, `LinkedIn Post Templates.html`, `Internal Ad Templates.html`, `Thumbnail Templates.html`, plus `Campaign Set Example.html` (reference only)
- Keep one-off / scratch builds OUT of the project root. Real weekly work lives in `weeks/`; exported finals in `export/`.
- `assets/` (logos, imagery, fonts), `README.md`, `index.html` (home)

## 2. Weekly Content (the output — grows weekly)
- **One dated page per week**, all brands together: `weeks/q#-w#.html` (e.g. `weeks/q2-w11.html`).
- Each weekly page starts with `<base href="../">` so root-relative asset/CSS paths resolve correctly from the subfolder.
- Organized by brand section (TCFL, HD, AFL, SD2K), each holding that week's pieces.
- Old weeks are cleared monthly.

## Chat hygiene rule
After a week is fully complete (approved + exported), always ask permission before snipping that week's conversation history. Say: "Week q#-w## is done — OK to clear that chat history to keep things lean?" Never snip without confirmation.

## Workflow for a new week
1. New chat in this project. User says e.g. "start q2-w12" + pastes briefs + drops images.
2. Create `weeks/q2-w12.html`, assemble each brand's pieces by pulling from the **templates/libraries** (do not reinvent — reuse the approved look).
3. Export finals as JPGs into `export/` when asked (see Export system below).
4. Link the new week on `index.html` under Weekly Content.

## Export system (full-res JPG)
All pieces export at native pixel dimensions via canvas compositing — never screenshots.

**Files:**
- `export/render-engine.js` — reusable compositing engine (drawBlog, drawArticle, drawPost). Never edit unless improving the engine.
- `export/q#-w#-specs.json` — one JSON file per week listing every piece's spec (image path, copy, colors, logo paths).

**To export a week**, run this in run_script:
```js
const eng = await readFile('export/render-engine.js');
eval(eng);
const specs = JSON.parse(await readFile('export/q2-wNN-specs.json'));
await exportWeek(specs, 'export/q2-wNN-hires');
```
Then call `present_fs_item_for_download` on `export/q2-wNN-hires` to zip and deliver.

**To set up a new week's specs**, create `export/q#-w#-specs.json` as a JSON array. Each piece needs:
- `type`: `"blog"` | `"article"` | `"post"`
- `file`: output filename (no extension), e.g. `"q2-w13-blog-tcfl"`
- `W`, `H`: native pixel dimensions
- `img`: path to photo, `px`/`py`: background-position as 0–1 decimals (0.5/0.5 = center)
- **Blog**: `eyebrow`, `eyebrowBg` (hex), `hl1`, `hl2`, `hSize` (px)
- **Article**: `barBg`, `barLogoPath`, `eyebrow`, `ctaColor`, `ttL1`, `ttL2`, `sub`, `subMaxPct` (0–1), `ttSize` (px)
- **Post**: `eyebrow`, `condSize` (px), `hl1`, `hl2`, `logoPath`

See `export/q2-w12-specs.json` as a reference for all 14 piece types across 5 brands.

## Naming (always lowercase)
`q#-w#-type-brand` → e.g. `q2-w11-blog-tcfl`, `q2-w11-article-tcfl`, `q2-w11-post-tcfl`, `q2-w12-ad1-hd`, `q2-w12-thumbnail-oes`.
Types: blog (1200×240), article (1200×675, 75px top bar), post (1000×1000), hero (1400×275), ad1 (300×470), ad2 (350×350; AFL 500×500), thumbnail-h (1280×720), thumbnail-v (1080×1920).

**Internal ads — both sizes = one template.** The vertical (300×470) and square (350×350; AFL 500×500) are NOT separate templates — they are two size variations of the SAME template. A template (1 or 2) for internal ads is only "complete" when BOTH the vertical and square variations exist. Always build/export both together. (Same idea as thumbnails: thumbnail-h + thumbnail-v are two crops of one template.)

## Approved templates
When the user says "approve X as a core template", move/lock the polished, brand-switchable, neutral-copy master and mark it ✅ Approved on the index. Weekly pages should only pull from approved masters once they exist.

## Template numbering (structural concepts — consistent across ALL content types)
Each content type's `… Templates.html` holds numbered templates. The NUMBER means the same *structure* everywhere, so "use Template 2 for the blog" is unambiguous:
- **Template 1 — Split panel.** Solid brand color panel (diagonal edge) holds the text; image fills the rest beside it. The panel is **responsive**: its width is driven by the headline length (see below). Eyebrow sits in a brand-color box on blogs; banners use a CTA button instead of the box. Approved for all 6 types.
- **Template 2 — Full-bleed + scrim.** Photo fills the whole frame; text floats over a left-to-right (or bottom) legibility scrim. No solid panel. (Drafted across types; finalize with real content.)
- **Template 3 — Diagonal wedge.** Full-bleed photo with a brand-color diagonal wedge across the bottom holding eyebrow + headline; an accent line sits just above the eyebrow; headline uses a brand-accent emphasis word. First built as the "Who We Are" YouTube thumbnails (TCFL, HD) in `who-we-are/`; lives in `Thumbnail Templates.html` as Template 3.

## Responsive panel rule (Template 1)
The color panel/overlay width is **content-driven, not fixed**: it hugs the longest line of the headline plus padding, so the image fills all remaining space with **no white/empty gaps** and the overlay always sits fully OVER the text. Headlines are capped at **2 lines** (widen the panel to fit a longer line rather than wrapping to 3). More padding on either side of the text reads better than a tight panel.

## Image placement vocabulary
When the user names a position, set the crop accordingly: CENTER · LEFT · RIGHT · TOP · BOTTOM (and combos like TOP-RIGHT, BOTTOM-LEFT), plus ZOOM IN / ZOOM OUT to tighten or loosen. Bottom-align by default when the subject (product, crew) sits low in the frame.

## Internal-ad entrance animation (part of the approved Internal Ad template)
Internal ads include a subtle HTML entrance: eyebrow tag + headline fade/pop in together first, then the CTA button slides/fades in shortly after. Keep it restrained and professional; gate on `prefers-reduced-motion`. This animation is part of what "approved" means for internal ads.

## Brand rules (recap)
- **Follow `DESIGN-RULES.md` on every build** — hard guardrails (no treatment/logo over text, anchor text blocks, safe margins, legibility, overlap self-check). Read it before building or editing any design.
- Design against semantic `--brand-*` tokens, never raw hex. `data-brand="…"` on a wrapper re-themes colors + logos.
- Never mix one brand's palette with another's. Fonts: Roboto / Roboto Condensed / Poppins only. No emoji.
- On dark/photo backgrounds, logos render white or a single light tint (use `--brand-logo-dark`).
- Headlines short & punchy (alluding to the campaign); long-form copy lives in the post body.
- Exact pixel exports: composite on canvas in run_script (embed `assets/fonts/RobotoCondensed-Black.ttf` via FontFace) for true dimensions — preview screenshots are DPR-limited.
