# Weekly Content Skill — OES Global Design System

## Purpose
This skill governs every new weekly content chat. It ensures the agent understands the full workflow, pulls from approved masters without rebuilding anything, and delivers exported JPGs at the end — zero setup time, zero wasted credits.

---

## The Flow (always in this order)

### Step 1 — Week identifier
User provides the week code: `q#-w##` (e.g. `q2-w13`). Output file goes in `weeks/q2-w13.html`.

### Step 2 — Template number
User specifies which template to use for this week (1, 2, or 3). Never guess or default — ask if not provided.

- **Template 1 — Split panel:** Solid brand-color panel (diagonal edge) holds text; image fills the rest. Panel width is content-driven (hugs longest headline line). Eyebrow sits in a brand-color box. Blog/banners use CTA button. Approved for all content types.
- **Template 2 — Full-bleed + scrim:** Photo fills the entire frame. Text floats over a left→right (blogs) or bottom→top (posts) gradient scrim. No solid panel. CTA pill on articles. No CTA on posts.
- **Template 3 — Diagonal wedge:** Brand-color diagonal wedge across the bottom, eyebrow + headline inside it. Accent/emphasis word in brand gold. Thumbnail format only.

### Step 3 — Copy intake
User pastes copy per brand. Expected fields per content type:

| Type | Fields |
|---|---|
| **Blog** (1200×240) | Eyebrow (opt), Headline L1, Headline L2 |
| **LinkedIn Article** (1200×675) | Eyebrow (opt), Title L1, Title L2, Subtitle (1–2 lines), CTA always = "Read the Article →" |
| **LinkedIn Post** (1000×1000) | Eyebrow (opt), Headline L1, Headline L2. **No CTA button on posts.** |

If copy is missing for a brand/piece, ask before building.

### Step 4 — Images
User drops images one at a time (or in batches). Each image gets named and saved to:
`assets/imagery/<brand>/<descriptive-filename>.<ext>`

Accepted brands: `oes` · `tcfl` · `hd` · `sd2k` · `afl`

If an image is reused across pieces (e.g. article image also used for blog), confirm with user before assuming.

### Step 5 — Build the weekly HTML
Create `weeks/q#-w##.html` using the correct template. Always start with `<base href="../">` so root-relative asset paths resolve from the subfolder.

Pull layout/styles from the approved template files — **do not reinvent**:
- `Blog Header Templates.html`
- `LinkedIn Article Templates.html`
- `LinkedIn Post Templates.html`
- `Banner Templates.html`
- `Internal Ad Templates.html`
- `Thumbnail Templates.html`

Organize by brand section (OES, TCFL, HD, SD2K, AFL). Label each piece clearly. Show all pieces on one scrollable page.

### Step 6 — Create the specs JSON
Alongside the HTML, create `export/q#-w##-specs.json` — a JSON array of every piece.

**Per-brand defaults (use these unless user overrides):**

#### OES
```json
"barBg": "#EEEEEE",
"barLogoPath": "assets/logos/oes/oes-horizontal.svg",
"ctaColor": "#305B7D",
"eyebrowBg": "#305B7D",
"logoPath": "assets/logos/oes/oes-horizontal-white.svg"
```

#### TCFL
```json
"barBg": "#2E6CB4",
"barLogoPath": "assets/logos/tcfl/tcfl-horizontal-onblue.png",
"ctaColor": "#FF5100",
"eyebrowBg": "#FF5100",
"logoPath": "assets/logos/tcfl/tcfl-horizontal-white.png"
```

#### Hydration Depot (HD)
```json
"barBg": "#A2C7E1",
"barLogoPath": "assets/logos/hd/hd-horizontal.png",
"ctaColor": "#5BA6DD",
"eyebrowBg": "#5BA6DD",
"logoPath": "assets/logos/hd/hd-horizontal-white.png"
```

#### SD2K
```json
"barBg": "#000000",
"barLogoPath": "assets/logos/sd2k/sd2k-horizontal.png",
"ctaColor": "#FF5100",
"eyebrowBg": "#FF5100",
"logoPath": "assets/logos/sd2k/sd2k-horizontal-white.svg"
```

#### AFL
```json
"barBg": "#EEEEEE",
"barLogoPath": "assets/logos/afl/afl-horizontal.png",
"ctaColor": "#E42845",
"eyebrowBg": "#E42845",
"logoPath": "assets/logos/afl/afl-horizontal-white.png"
```

**Spec fields per type:**

```json
// Blog
{ "type": "blog", "file": "q2-w13-blog-tcfl", "W": 1200, "H": 240,
  "img": "assets/imagery/tcfl/...", "px": 0.5, "py": 0.5,
  "eyebrow": "...", "eyebrowBg": "#FF5100", "hl1": "...", "hl2": "...", "hSize": 42 }

// Article
{ "type": "article", "file": "q2-w13-article-tcfl", "W": 1200, "H": 675,
  "barBg": "#2E6CB4", "barLogoPath": "assets/logos/tcfl/tcfl-horizontal-onblue.png",
  "img": "assets/imagery/tcfl/...", "px": 0.5, "py": 0.4,
  "eyebrow": "...", "ctaColor": "#FF5100",
  "ttL1": "...", "ttL2": "...", "sub": "...", "subMaxPct": 0.68, "ttSize": 52 }

// Post
{ "type": "post", "file": "q2-w13-post-tcfl", "W": 1000, "H": 1000,
  "img": "assets/imagery/tcfl/...", "px": 0.5, "py": 0.4,
  "eyebrow": "...", "condSize": 62, "hl1": "...", "hl2": "...",
  "logoPath": "assets/logos/tcfl/tcfl-horizontal-white.png" }
```

See `export/q2-w12-specs.json` for a complete 14-piece reference.

### Step 7 — Export JPGs
Once the user approves the HTML preview, run this in `run_script`:

```js
const eng = await readFile('export/render-engine.js');
eval(eng);
const specs = JSON.parse(await readFile('export/q#-w##-specs.json'));
await exportWeek(specs, 'export/q#-w##-hires');
```

Then deliver with:
```js
present_fs_item_for_download({ path: 'export/q#-w##-hires', label: 'Q# W## — Full-Res JPGs' })
```

### Step 8 — Link on index
Add the new week to `index.html` under Weekly Content.

---

## Naming convention (always lowercase)
`q#-w##-type-brand`
- Types: `blog` · `article` · `post` · `hero` · `ad1` · `ad2` · `thumbnail-h` · `thumbnail-v`
- Brands: `oes` · `tcfl` · `hd` · `sd2k` · `afl`

Examples: `q2-w13-blog-tcfl` · `q2-w13-article-hd` · `q2-w13-post-sd2k`

---

## Content rules
- **Headlines:** max 2 lines. Widen the panel rather than wrapping to 3.
- **Eyebrow:** 1 line, ~10–25 chars, always uppercase in rendered output.
- **Subtitle (articles only):** 1–2 lines, ~55–90 chars.
- **Posts:** no CTA button — ever.
- **Article CTA:** always `"Read the Article →"` (arrow is literal →, not `&rarr;`).
- No emoji. Fonts: Roboto / Roboto Condensed / Poppins only.

## Design rules
Always follow `DESIGN-RULES.md` — no treatment/logo over text, safe margins, legibility, overlap self-check. Read it before building.

## What NOT to do
- Never rebuild fonts, scrim logic, or compositing code — `export/render-engine.js` handles all of it.
- Never invent brand colors — use `--brand-*` tokens or the per-brand hex defaults above.
- Never mix one brand's palette with another's.
- Never screenshot for exports — always use the canvas compositor.
- Never create files at the project root — weekly content lives in `weeks/`, exports in `export/`.
