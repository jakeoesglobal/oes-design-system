---
name: oes-global-design
description: Use this skill to generate well-branded interfaces, ads, and assets for OES Global and its four sub-brands (Traffic Cones For Less, Hydration Depot, Absorbents For Less, SD2K Valet) — for production or throwaway prototypes/mocks. A multi-brand system: one shared foundation themed across five brands. Contains colors, type, fonts, logos, motifs, and the --brand-* theming contract.
user-invocable: true
---

# OES Global — Multi-Brand Design System

Read `README.md` first — it covers the multi-brand architecture, the `--brand-*` token contract, per-brand palettes, content voice, visual foundations, and iconography.

## The one thing to know
This is **one shared system themed across five brands**. Always design against the **semantic `--brand-*` tokens** (never raw hexes). To target a brand, load `colors_and_type.css` then the brand's `brands/<brand>.css`, and set `data-brand` on a container:

- `oes` — OES Global (parent · corporate, authoritative, cool)
- `tcfl` — Traffic Cones For Less (safety · direct, bold)
- `hd` — Hydration Depot (hydration · clean, fresh, energetic)
- `afl` — Absorbents For Less (industrial · dependable, authoritative)
- `sd2k` — SD2K Valet (valet · bold, premium, confident)

The same template re-skins to any brand by swapping the theme file + `data-brand`.

## When invoked
If creating visual artifacts (ads, social graphics, slides, mocks, prototypes), copy the needed assets out of `assets/logos/<brand>/` and build static HTML that references `--brand-*` tokens. If working on production code, read the rules here and reuse the tokens/themes directly.

If invoked without specifics, ask: **which brand(s)?**, what format/dimensions, static or animated, and photo-led or gradient/motif-led — then act as an expert designer producing HTML artifacts or production code.

## Hard rules
- Never mix one brand's palette with another's (the theming makes this automatic — don't fight it).
- Fonts: Roboto / Poppins / Roboto Condensed only.
- No emoji. No drop shadows on text. Generous white space. Max one overlay treatment per asset; never full-opacity overlays on photos.
- Sub-brand logos are light-background lockups; reversed/white versions for dark backgrounds don't exist yet — flag if needed.
