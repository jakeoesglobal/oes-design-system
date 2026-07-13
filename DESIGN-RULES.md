# OES Design Rules — guardrails for every template & weekly piece

These are **hard rules**. Apply them to every design you build or edit, and verify them before calling anything done. They exist so nothing "wacky" ships as we keep adding and approving templates over time.

## 1. Nothing overlaps text, buttons, or logos
- **Badges / callouts / seals / stars / treatments** may sit ONLY over the **image** or over a **layer treatment** (scrim, color panel). They must **never** touch a headline, eyebrow, subtitle, CTA/button, or logo.
- **Logo, headline, eyebrow, CTA, and badge are mutually exclusive zones.** None may overlap another. Give each clear space.
- If an element would collide, move it to empty image space (usually the opposite corner) or shrink/reflow — never let them stack.

## 2. Anchor text blocks explicitly
- A text block is either **top-anchored** (`top:` set) or **bottom-anchored** (`bottom:` set) or **centered** (`top:50%;transform:translateY(-50%)`). Never leave `top:auto` with no `bottom` — it floats to the top and collides with the logo bar.
- Keep the logo and the text block on **opposite ends** of the canvas when both are present.

## 3. Safe margins
- Keep all content (text, logo, CTA, badge) inside a margin of at least **~4% of the short side** from every edge. Nothing clipped, nothing bleeding off (except an intentional full-bleed photo or a treatment shape designed to bleed).

## 4. Legibility
- Text over a photo always needs a **scrim or panel** behind it (partial-opacity gradient or solid block). Never place light text directly on a busy/light photo.
- One overlay treatment per asset. Never full-opacity over a photo.

## 5. Brand integrity
- Design against `--brand-*` tokens only — never raw hex. `data-brand` swaps colors + logos.
- Never mix one brand's palette with another's.
- On dark/photo backgrounds, logos render white or one light tint (`--brand-logo-dark`).
- Fonts: Roboto / Roboto Condensed / Poppins only. No emoji.

## 6. Verify before done (overlap self-check)
Before delivering, run this in the preview and confirm it returns `[]` (no treatment-over-text collisions):

```js
const T=[...document.querySelectorAll('.badge,.seal,.burst,.stamp,.ribbon,.ptag,.statchip,.choice,.opill,.abanner')];
const X=[...document.querySelectorAll('.head,.headline,.cond,.kicker,.cta,.sub,.pill,.logo,.barlogo,.h-poppins')];
const ov=(a,b)=>!(a.right<=b.left||a.left>=b.right||a.bottom<=b.top||a.top>=b.bottom);
const hits=[];T.forEach(t=>X.forEach(x=>{if(t!==x&&ov(t.getBoundingClientRect(),x.getBoundingClientRect()))hits.push((t.className+' over '+x.className));}));
JSON.stringify(hits);
```
Also eyeball: nothing clipped at edges, logo and headline not touching, CTA fully readable. Fix anything before calling done.
