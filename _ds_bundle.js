/* @ds-bundle: {"format":3,"namespace":"OESGlobalDesignSystemMAIN_019df8","components":[{"name":"App","sourcePath":"ui_kits/oes-global/App.jsx"},{"name":"BrandFamily","sourcePath":"ui_kits/oes-global/BrandFamily.jsx"},{"name":"Footer","sourcePath":"ui_kits/oes-global/Footer.jsx"},{"name":"Header","sourcePath":"ui_kits/oes-global/Header.jsx"},{"name":"Hero","sourcePath":"ui_kits/oes-global/Hero.jsx"},{"name":"ASSETS","sourcePath":"ui_kits/oes-global/Primitives.jsx"},{"name":"BRANDS","sourcePath":"ui_kits/oes-global/Primitives.jsx"},{"name":"Icon","sourcePath":"ui_kits/oes-global/Primitives.jsx"},{"name":"Eyebrow","sourcePath":"ui_kits/oes-global/Primitives.jsx"},{"name":"Button","sourcePath":"ui_kits/oes-global/Primitives.jsx"},{"name":"Primitives","sourcePath":"ui_kits/oes-global/Primitives.jsx"},{"name":"ValueSection","sourcePath":"ui_kits/oes-global/ValueSection.jsx"}],"sourceHashes":{"export/render-engine.js":"c32642096f3f","image-slot.js":"9309434cb09c","ui_kits/oes-global/App.jsx":"f5c36fe3608e","ui_kits/oes-global/BrandFamily.jsx":"19c1c9c8c23b","ui_kits/oes-global/Footer.jsx":"ce16b71c9bb6","ui_kits/oes-global/Header.jsx":"efdc02dfa91e","ui_kits/oes-global/Hero.jsx":"f3be97aa026a","ui_kits/oes-global/Primitives.jsx":"e0b7f907d45f","ui_kits/oes-global/ValueSection.jsx":"4169b4f7a076"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OESGlobalDesignSystemMAIN_019df8 = window.OESGlobalDesignSystemMAIN_019df8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// export/render-engine.js
try { (() => {
/**
 * OES Global — Weekly Export Render Engine
 * eval() this file inside a run_script call, then call:
 *   await exportWeek(specs, 'export/q2-wNN-hires');
 *
 * Requires run_script helpers in scope:
 *   readFileBinary, readImage, createCanvas, saveFile, log
 */

async function _loadFonts() {
  async function _lf(name, path) {
    const blob = await readFileBinary(path);
    const buf = await blob.arrayBuffer();
    const ff = new FontFace(name, buf);
    await ff.load();
    document.fonts.add(ff);
  }
  await Promise.all([_lf('RCBlack', 'assets/fonts/RobotoCondensed-Black.ttf'), _lf('RCBold', 'assets/fonts/RobotoCondensed-Bold.ttf'), _lf('RBlack', 'assets/fonts/Roboto-Black.ttf')]);
  log('Fonts loaded');
}
function _cover(ctx, im, x0, y0, W, H, px, py, zoom) {
  const s = Math.max(W / im.width, H / im.height) * (zoom || 1);
  const sw = im.width * s,
    sh = im.height * s;
  ctx.drawImage(im, x0 + (W - sw) * px, y0 + (H - sh) * py, sw, sh);
}
function _rr(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}
function _wrap(ctx, text, maxW) {
  const words = text.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    const t = cur ? cur + ' ' + w : w;
    if (ctx.measureText(t).width > maxW && cur) {
      lines.push(cur);
      cur = w;
    } else cur = t;
  }
  if (cur) lines.push(cur);
  return lines;
}
async function _save(cv, name, folder) {
  const blob = await cv.convertToBlob({
    type: 'image/jpeg',
    quality: 0.93
  });
  await saveFile(folder + '/' + name + '.jpg', blob);
  log(name + ' ' + cv.width + 'x' + cv.height + ' ✓');
}
function _ls(ctx, v) {
  try {
    ctx.letterSpacing = v;
  } catch (e) {}
}
async function _drawBlog(s, folder) {
  const photo = await readImage(s.img);
  const cv = createCanvas(s.W, s.H);
  const ctx = cv.getContext('2d');
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, 0, s.W, s.H);
  ctx.clip();
  _cover(ctx, photo, 0, 0, s.W, s.H, s.px, s.py);
  ctx.restore();
  const g = ctx.createLinearGradient(0, 0, s.W, 0);
  g.addColorStop(0, 'rgba(8,16,26,.9)');
  g.addColorStop(.34, 'rgba(8,16,26,.66)');
  g.addColorStop(.6, 'rgba(8,16,26,.18)');
  g.addColorStop(.8, 'rgba(8,16,26,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s.W, s.H);
  const X = 54,
    KS = 15,
    KPX = 12,
    KPT = 7,
    KPB = 6;
  _ls(ctx, `${0.14 * KS}px`);
  ctx.font = `700 ${KS}px RCBold`;
  const kt = s.eyebrow.toUpperCase();
  const kw = ctx.measureText(kt).width + KPX * 2;
  const kh = KS + KPT + KPB;
  const lh = s.hSize * 1.06;
  const tot = kh + 13 + lh * 2;
  const y0 = (s.H - tot) / 2;
  ctx.fillStyle = s.eyebrowBg;
  ctx.fillRect(X, y0, kw, kh);
  ctx.fillStyle = '#fff';
  ctx.textBaseline = 'top';
  ctx.fillText(kt, X + KPX, y0 + KPT);
  _ls(ctx, `${-0.015 * s.hSize}px`);
  ctx.font = `700 ${s.hSize}px RBlack`;
  ctx.fillStyle = '#fff';
  ctx.textBaseline = 'top';
  ctx.fillText(s.hl1, X, y0 + kh + 13);
  ctx.fillText(s.hl2, X, y0 + kh + 13 + lh);
  await _save(cv, s.file, folder);
}
async function _drawArticle(s, folder) {
  const BAR = 75,
    CH = s.H - BAR;
  const [photo, barLogo] = await Promise.all([readImage(s.img), readImage(s.barLogoPath)]);
  const cv = createCanvas(s.W, s.H);
  const ctx = cv.getContext('2d');
  ctx.fillStyle = s.barBg;
  ctx.fillRect(0, 0, s.W, BAR);
  const blar = barLogo.width && barLogo.height ? barLogo.width / barLogo.height : 5;
  let lH = Math.min(42, BAR - 16),
    lW = Math.round(lH * blar);
  if (lW > 280) {
    lW = 280;
    lH = Math.round(lW / blar);
  }
  ctx.drawImage(barLogo, (s.W - lW) / 2, (BAR - lH) / 2, lW, lH);
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, BAR, s.W, CH);
  ctx.clip();
  _cover(ctx, photo, 0, BAR, s.W, CH, s.px, s.py);
  ctx.restore();
  ctx.fillStyle = 'rgba(10,28,46,.52)';
  ctx.fillRect(0, BAR, s.W, CH);
  const KS = 16,
    TS = s.ttSize,
    SS = 23,
    CS = 18,
    GAP = 22;
  _ls(ctx, '0px');
  ctx.font = `300 ${SS}px system-ui,sans-serif`;
  const subLines = _wrap(ctx, s.sub, s.W * s.subMaxPct);
  const subH = subLines.length * SS * 1.5;
  const ctaH = CS + 30;
  const ttLH = TS * 1.06;
  const tot = KS * 1.4 + GAP + ttLH * 2 + GAP + subH + GAP + ctaH;
  let cy = BAR + (CH - tot) / 2;
  _ls(ctx, `${0.07 * KS}px`);
  ctx.font = `700 ${KS}px RCBold`;
  const kt = s.eyebrow.toUpperCase();
  const kw = ctx.measureText(kt).width;
  const rW = 34,
    rG = 16;
  const ry = cy + KS * 0.7;
  ctx.strokeStyle = 'rgba(255,255,255,.6)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(s.W / 2 - kw / 2 - rG - rW, ry);
  ctx.lineTo(s.W / 2 - kw / 2 - rG, ry);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(s.W / 2 + kw / 2 + rG, ry);
  ctx.lineTo(s.W / 2 + kw / 2 + rG + rW, ry);
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(kt, s.W / 2, ry);
  cy += KS * 1.4 + GAP;
  _ls(ctx, `${-0.015 * TS}px`);
  ctx.font = `700 ${TS}px RBlack`;
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(s.ttL1, s.W / 2, cy);
  cy += ttLH;
  ctx.fillText(s.ttL2, s.W / 2, cy);
  cy += ttLH + GAP;
  _ls(ctx, '0px');
  ctx.font = `300 ${SS}px system-ui,sans-serif`;
  ctx.fillStyle = 'rgba(255,255,255,.92)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  for (const ln of subLines) {
    ctx.fillText(ln, s.W / 2, cy);
    cy += SS * 1.5;
  }
  cy += GAP;
  const pt = 'READ ARTICLE \u2192';
  _ls(ctx, `${0.07 * CS}px`);
  ctx.font = `700 ${CS}px RCBold`;
  const pw = ctx.measureText(pt).width + 60;
  const ph = CS + 28;
  ctx.fillStyle = s.ctaColor;
  _rr(ctx, (s.W - pw) / 2, cy, pw, ph, 8);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(pt, s.W / 2, cy + ph / 2);
  await _save(cv, s.file, folder);
}
async function _drawPost(s, folder) {
  const [photo, logoImg] = await Promise.all([readImage(s.img), readImage(s.logoPath)]);
  const cv = createCanvas(s.W, s.H);
  const ctx = cv.getContext('2d');
  _cover(ctx, photo, 0, 0, s.W, s.H, s.px, s.py, s.zoom);
  const g = ctx.createLinearGradient(0, s.H, 0, 0);
  g.addColorStop(0, 'rgba(8,16,26,.9)');
  g.addColorStop(.42, 'rgba(8,16,26,.3)');
  g.addColorStop(.7, 'rgba(8,16,26,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s.W, s.H);
  const KS = 15,
    CS = s.condSize,
    LH = CS * 1.06,
    GAP = 16;
  const hasEb = !!s.eyebrow;
  const blockH = (hasEb ? KS + GAP : 0) + LH * 2;
  const blockBottom = s.H - 150;
  const blockTop = blockBottom - blockH;
  let hy = blockTop;
  if (hasEb) {
    _ls(ctx, `${0.07 * KS}px`);
    ctx.font = `700 ${KS}px RCBold`;
    const kt = s.eyebrow.toUpperCase();
    const kw = ctx.measureText(kt).width;
    const rW = 40,
      rG = 13;
    const ry = blockTop + KS * 0.7;
    ctx.strokeStyle = 'rgba(255,255,255,.7)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(s.W / 2 - kw / 2 - rG - rW, ry);
    ctx.lineTo(s.W / 2 - kw / 2 - rG, ry);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(s.W / 2 + kw / 2 + rG, ry);
    ctx.lineTo(s.W / 2 + kw / 2 + rG + rW, ry);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,.85)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(kt, s.W / 2, ry);
    hy = blockTop + KS + GAP;
  }
  _ls(ctx, `${-0.015 * CS}px`);
  ctx.font = `900 ${CS}px RCBlack`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillStyle = s.hl1Color || '#fff';
  ctx.fillText(s.hl1, s.W / 2, hy);
  ctx.fillStyle = s.hl2Color || '#fff';
  ctx.fillText(s.hl2, s.W / 2, hy + LH);
  const lar = logoImg.width && logoImg.height ? logoImg.width / logoImg.height : 5.5;
  let lH = 54,
    lW = Math.round(lH * lar);
  if (lW > 320) {
    lW = 320;
    lH = Math.round(lW / lar);
  }
  ctx.drawImage(logoImg, (s.W - lW) / 2, s.H - 56 - lH, lW, lH);
  await _save(cv, s.file, folder);
}
function _starPath(ctx, x, y, sz) {
  const pts = [[50, 0], [61, 35], [98, 35], [68, 57], [79, 91], [50, 70], [21, 91], [32, 57], [2, 35], [39, 35]];
  ctx.beginPath();
  pts.forEach((p, i) => {
    const px = x + p[0] / 100 * sz,
      py = y + p[1] / 100 * sz;
    i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
  });
  ctx.closePath();
}

/* Template 2 — text-only thumbnail (no photo). Brand field + ghost icon + stars + huge headline. */
async function _drawThumb(s, folder) {
  const [logo, icon] = await Promise.all([readImage(s.logoWhite), readImage(s.iconWhite)]);
  const cv = createCanvas(s.W, s.H);
  const ctx = cv.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, s.W, s.H);
  s.grad.forEach(st => g.addColorStop(st[0], st[1]));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s.W, s.H);
  // ghost icon
  const iar = icon.width / icon.height;
  let iW, iH;
  if (iar >= 1) {
    iW = s.iconBox;
    iH = s.iconBox / iar;
  } else {
    iH = s.iconBox;
    iW = s.iconBox * iar;
  }
  let ix, iy;
  if (s.iconAnchor === 'center') {
    ix = (s.W - iW) / 2;
    iy = (s.H - iH) / 2;
  } else {
    ix = s.W - iW + (s.iconBleed || 0);
    iy = s.H - iH + (s.iconBleed || 0);
  }
  ctx.globalAlpha = s.iconOpacity;
  ctx.drawImage(icon, ix, iy, iW, iH);
  ctx.globalAlpha = 1;
  // logo top-left
  const lar = logo.width / logo.height;
  let lH = s.logoH,
    lW = lH * lar;
  if (lW > s.logoMaxW) {
    lW = s.logoMaxW;
    lH = lW / lar;
  }
  ctx.drawImage(logo, s.pad, s.logoY, lW, lH);
  // eyebrow
  const eb = s.eyebrow.toUpperCase();
  _ls(ctx, `${0.22 * s.ebSize}px`);
  ctx.font = `700 ${s.ebSize}px RCBold`;
  ctx.fillStyle = s.starColor;
  ctx.textBaseline = 'top';
  if (s.ebAlign === 'right') {
    ctx.textAlign = 'right';
    ctx.fillText(eb, s.W - s.pad, s.ebY);
  } else {
    ctx.textAlign = 'left';
    ctx.fillText(eb, s.pad, s.ebY);
  }
  // headline auto-fit to width
  let hs = s.hSize;
  _ls(ctx, `${-0.005 * hs}px`);
  ctx.font = `900 ${hs}px RCBlack`;
  const maxW = s.W - s.headMaxPad;
  let longest = 0;
  s.lines.forEach(l => {
    const w = ctx.measureText(l.t.toUpperCase()).width;
    if (w > longest) longest = w;
  });
  if (longest > maxW) hs = Math.floor(hs * maxW / longest);
  const lh = hs * 0.9;
  const blockH = s.starSize + s.mb + (s.lines.length - 1) * lh + hs;
  const top = (s.H - blockH) / 2;
  // stars
  ctx.fillStyle = s.starColor;
  for (let i = 0; i < 5; i++) {
    _starPath(ctx, s.pad + i * (s.starSize + s.starGap), top, s.starSize);
    ctx.fill();
  }
  // headline
  let ty = top + s.starSize + s.mb;
  _ls(ctx, `${-0.005 * hs}px`);
  ctx.font = `900 ${hs}px RCBlack`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  s.lines.forEach(l => {
    ctx.fillStyle = l.accent ? s.gold : '#fff';
    ctx.fillText(l.t.toUpperCase(), s.pad, ty);
    ty += lh;
  });
  await _save(cv, s.file, folder);
}
async function exportWeek(specs, outFolder) {
  await _loadFonts();
  for (const s of specs) {
    if (s.type === 'blog') await _drawBlog(s, outFolder);else if (s.type === 'article') await _drawArticle(s, outFolder);else if (s.type === 'post') await _drawPost(s, outFolder);else if (s.type === 'thumb') await _drawThumb(s, outFolder);
  }
  log('--- Export complete: ' + specs.length + ' pieces → ' + outFolder + ' ---');
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/render-engine.js", error: String((e && e.message) || e) }); }

// image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/oes-global/Primitives.jsx
try { (() => {
// Shared primitives + brand data for the OES Global corporate site kit
const {
  useState,
  useEffect
} = React;
const ASSETS = '../../assets';
const BRANDS = [{
  id: 'oes',
  name: 'OES Global',
  role: 'Parent Company',
  tagline: 'We Find a Way',
  domain: 'oesglobalinc.com',
  desc: 'The parent company. A family of specialized brands, one disciplined standard.',
  parent: true
}, {
  id: 'cones',
  name: 'Traffic Cones For Less',
  role: 'Safety Supply',
  tagline: 'Keep work zones safe',
  domain: 'trafficconesforless.com',
  desc: 'Cones, barriers, and safety equipment for work zones and events.'
}, {
  id: 'hydration',
  name: 'Hydration Depot',
  role: 'Hydration Solutions',
  tagline: 'Hydrate the workforce',
  domain: 'hydrationdepot.com',
  desc: 'Industrial hydration and electrolyte supply for demanding environments.'
}, {
  id: 'absorbents',
  name: 'Absorbents For Less',
  role: 'Industrial Absorbents',
  tagline: 'Contain every spill',
  domain: 'absorbentsforless.com',
  desc: 'Spill control, absorbents, and containment for industrial sites.'
}, {
  id: 'valet',
  name: 'SD2K Valet',
  role: 'Valet Services',
  tagline: 'First impressions, parked',
  domain: 'sd2kvalet.com',
  desc: 'Professional valet and parking management services.'
}];

// Lucide icon via mask (brand-colored via currentColor)
function Icon({
  name,
  size = 22,
  style
}) {
  const url = `https://unpkg.com/lucide-static@0.460.0/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", {
    className: "icon",
    style: {
      width: size,
      height: size,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      ...style
    }
  });
}
function Eyebrow({
  children,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: color || 'var(--oes-primary)',
      ...style
    }
  }, children);
}
function Button({
  children,
  variant = 'primary',
  onClick,
  style
}) {
  const base = {
    fontFamily: 'var(--font-primary)',
    fontWeight: 700,
    fontSize: 15,
    padding: '13px 26px',
    borderRadius: 'var(--radius-md)',
    border: 0,
    cursor: 'pointer',
    transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 9
  };
  const variants = {
    primary: {
      background: 'var(--oes-primary)',
      color: '#fff'
    },
    onDark: {
      background: '#fff',
      color: 'var(--oes-navy)'
    },
    outlineDark: {
      background: 'transparent',
      color: '#fff',
      boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,.55)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--oes-primary)',
      padding: '13px 8px'
    }
  };
  const [hover, setHover] = useState(false);
  const hoverStyle = hover ? {
    primary: {
      background: '#264a66'
    },
    onDark: {
      background: '#e8eef3'
    },
    outlineDark: {
      background: 'rgba(255,255,255,.10)'
    },
    ghost: {
      color: '#264a66'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, children);
}

// Showcase of the shared atoms — used as the design-system card preview
function Primitives() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      padding: 44,
      fontFamily: 'var(--font-primary)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Eyebrow Label"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Primary ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Ghost"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--oes-navy)',
      padding: '16px 18px',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark"
  }, "On Dark"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlineDark"
  }, "Outline"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      color: 'var(--oes-primary)'
    }
  }, ['compass', 'layers', 'shield-check', 'arrow-up-right', 'send', 'check-circle-2'].map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: n,
    size: 26
  }))));
}
Object.assign(__ds_scope, { ASSETS, BRANDS, Icon, Eyebrow, Button, Primitives });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oes-global/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oes-global/BrandFamily.jsx
try { (() => {
const {
  useState
} = React;

// Brand family grid — the four sub-brands + parent
function BrandCard({
  brand,
  onOpen
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpen(brand),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      border: '1px solid var(--divider)',
      overflow: 'hidden',
      cursor: 'pointer',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'all var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: 'var(--oes-accent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 26px 24px 30px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, brand.role), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--fg-strong)',
      margin: '10px 0 0'
    }
  }, brand.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 400,
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--fg-muted)',
      margin: '10px 0 0'
    }
  }, brand.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 20,
      color: hover ? 'var(--oes-primary)' : 'var(--fg-muted)',
      transition: 'color var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      fontSize: 12.5,
      letterSpacing: '0.08em'
    }
  }, brand.domain), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 16
  }))));
}
function BrandFamily({
  onOpen
}) {
  const subs = __ds_scope.BRANDS.filter(b => !b.parent);
  return /*#__PURE__*/React.createElement("section", {
    id: "family",
    style: {
      background: 'var(--oes-light-gray)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "The OES Family"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 900,
      fontSize: 'clamp(30px,4vw,46px)',
      lineHeight: 1.08,
      color: 'var(--fg-strong)',
      margin: '14px 0 0'
    }
  }, "Four diverse brands.", /*#__PURE__*/React.createElement("br", null), "One design system."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--fg)',
      margin: '18px 0 0'
    }
  }, "Each brand keeps its own identity, palette, and market \u2014 backed by the operational discipline of the OES Global parent.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 22
    }
  }, subs.map(b => /*#__PURE__*/React.createElement(BrandCard, {
    key: b.id,
    brand: b,
    onOpen: onOpen
  })))));
}
Object.assign(__ds_scope, { BrandFamily });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oes-global/BrandFamily.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oes-global/Footer.jsx
try { (() => {
const {
  useState
} = React;

// Contact band + footer
function Footer({
  onSubmit
}) {
  const [sent, setSent] = useState(false);
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: 'var(--grad-oes-deeper)',
      color: '#fff',
      padding: '84px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    color: "var(--oes-accent)"
  }, "Partner With Us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 900,
      fontSize: 'clamp(28px,3.4vw,44px)',
      lineHeight: 1.1,
      margin: '14px 0 0'
    }
  }, "Let\u2019s find a way", /*#__PURE__*/React.createElement("br", null), "together."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--fg-on-dark-muted)',
      margin: '16px 0 0',
      maxWidth: 380
    }
  }, "Supplier, partner, or acquisition target \u2014 tell us what you\u2019re working on.")), /*#__PURE__*/React.createElement("form", {
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'rgba(255,255,255,.10)',
      borderRadius: 'var(--radius-md)',
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check-circle-2",
    size: 26,
    style: {
      color: 'var(--oes-accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 500,
      fontSize: 16
    }
  }, "Thanks \u2014 we\u2019ll be in touch shortly.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    placeholder: "Full name",
    style: fieldStyle
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Work email",
    style: fieldStyle
  }), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "How can we help?",
    rows: 3,
    style: {
      ...fieldStyle,
      resize: 'none'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "onDark",
    onClick: () => {
      setSent(true);
      onSubmit && onSubmit();
    }
  }, "Send message ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "send",
    size: 17
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--oes-navy)',
      color: '#fff',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${__ds_scope.ASSETS}/oes-logo-steel.svg`,
    alt: "OES Global",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 26,
      flexWrap: 'wrap'
    }
  }, __ds_scope.BRANDS.filter(b => !b.parent).map(b => /*#__PURE__*/React.createElement("span", {
    key: b.id,
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 500,
      fontSize: 12.5,
      letterSpacing: '0.06em',
      color: 'var(--fg-on-dark-muted)'
    }
  }, b.domain)))), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      marginTop: 24,
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,.10)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 13,
      color: 'var(--fg-on-dark-muted)'
    }
  }, "\xA9 2026 OES Global Inc. \xB7 oesglobalinc.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      fontSize: 12.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--oes-accent)'
    }
  }, "We\u2019re the Find a Way Company"))));
}
const fieldStyle = {
  fontFamily: 'var(--font-primary)',
  fontSize: 15,
  padding: '13px 16px',
  borderRadius: 'var(--radius-md)',
  border: '1px solid rgba(255,255,255,.22)',
  background: 'rgba(255,255,255,.08)',
  color: '#fff',
  outline: 'none'
};
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oes-global/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oes-global/Header.jsx
try { (() => {
const {
  useState,
  useEffect
} = React;

// Sticky top navigation
function Header({
  onNav,
  active
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const el = document.querySelector('#kit-scroll');
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 12);
    const target = el || window;
    target.addEventListener('scroll', onScroll);
    return () => target.removeEventListener('scroll', onScroll);
  }, []);
  const links = [{
    id: 'family',
    label: 'Our Brands'
  }, {
    id: 'value',
    label: 'Why OES'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(140%) blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--divider)' : '1px solid transparent',
      transition: 'all var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 78,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${__ds_scope.ASSETS}/${scrolled ? 'oes-logo-color' : 'oes-logo-white'}.svg`,
    alt: "OES Global",
    style: {
      height: 34
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 34,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    onClick: e => {
      e.preventDefault();
      onNav(l.id);
    },
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 500,
      fontSize: 15,
      color: scrolled ? 'var(--fg-strong)' : 'rgba(255,255,255,.92)',
      transition: 'color var(--dur-base)'
    }
  }, l.label)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: scrolled ? 'primary' : 'onDark',
    onClick: () => onNav('contact'),
    style: {
      padding: '10px 20px',
      fontSize: 14
    }
  }, "Partner With Us"))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oes-global/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oes-global/Hero.jsx
try { (() => {
// Hero — deep navy gradient, icon watermark, master headline
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--grad-oes-deep)',
      color: '#fff',
      marginTop: -78,
      paddingTop: 78
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${__ds_scope.ASSETS}/oes-icon-white.svg`,
    alt: "",
    style: {
      position: 'absolute',
      right: '-60px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 520,
      opacity: 0.06,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      padding: '110px 32px 120px',
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    color: "var(--oes-accent)"
  }, "Parent Company \xB7 A Family of Brands"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(40px, 6.4vw, 84px)',
      lineHeight: 1.02,
      letterSpacing: '-0.015em',
      margin: '18px 0 0',
      maxWidth: 880
    }
  }, "We\u2019re the", /*#__PURE__*/React.createElement("br", null), "Find a Way Company."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 300,
      fontSize: 'clamp(17px,1.9vw,21px)',
      lineHeight: 1.6,
      color: 'var(--fg-on-dark-muted)',
      maxWidth: 560,
      margin: '26px 0 0'
    }
  }, "One disciplined standard behind four specialized brands. OES Global builds dependable supply and service businesses across safety, hydration, absorbents, and valet."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 38,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "onDark",
    onClick: () => onNav('family')
  }, "Explore Our Brands ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 18
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outlineDark",
    onClick: () => onNav('value')
  }, "Why OES Global")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      marginTop: 64,
      flexWrap: 'wrap',
      borderTop: '1px solid rgba(255,255,255,.14)',
      paddingTop: 30
    }
  }, [['4', 'Specialized brands'], ['1', 'Unified standard'], ['100%', 'Find-a-way mindset']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 900,
      fontSize: 40,
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--oes-accent)',
      marginTop: 8
    }
  }, l))))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oes-global/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oes-global/ValueSection.jsx
try { (() => {
// Value section — layered panels motif + principles
function ValueSection() {
  const principles = [{
    icon: 'compass',
    title: 'Find a Way',
    body: 'When others see a dead end, we engineer a path. Resourcefulness is the operating standard.'
  }, {
    icon: 'layers',
    title: 'One Standard',
    body: 'A single disciplined design and operating system runs beneath every brand we build.'
  }, {
    icon: 'shield-check',
    title: 'Dependable',
    body: 'Industrial-grade reliability. We show up, we deliver, and the work holds up.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "value",
    style: {
      background: '#fff',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 40px 60px 0',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--grad-oes-deep)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '60px 0 0 40px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--grad-oes-steel)',
      boxShadow: 'var(--shadow-lg)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${__ds_scope.ASSETS}/oes-icon-white.svg`,
    alt: "",
    style: {
      position: 'absolute',
      right: 64,
      bottom: 90,
      width: 120,
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 72,
      bottom: 40,
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.15,
      maxWidth: 200
    }
  }, "We Find a Way")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "Why OES Global"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 900,
      fontSize: 'clamp(28px,3.4vw,42px)',
      lineHeight: 1.1,
      color: 'var(--fg-strong)',
      margin: '14px 0 30px'
    }
  }, "Built on resourcefulness."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, principles.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(48,91,125,.10)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--oes-primary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: p.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--fg-strong)',
      margin: 0
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 400,
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--fg-muted)',
      margin: '6px 0 0'
    }
  }, p.body))))))));
}
Object.assign(__ds_scope, { ValueSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oes-global/ValueSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oes-global/App.jsx
try { (() => {
const {
  useState
} = React;

// App — assembles the corporate site, scroll nav, brand-detail overlay
function BrandDetail({
  brand,
  onClose
}) {
  if (!brand) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(10,39,55,.55)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: 'min(560px,100%)',
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grad-oes-steel)',
      padding: '34px 34px 28px',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${__ds_scope.ASSETS}/oes-icon-white.svg`,
    alt: "",
    style: {
      position: 'absolute',
      right: -20,
      top: -14,
      width: 130,
      opacity: .16
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    color: "rgba(255,255,255,.85)"
  }, brand.role), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      margin: '10px 0 0'
    }
  }, brand.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 300,
      fontSize: 16,
      margin: '8px 0 0'
    }
  }, brand.tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 34px 32px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--fg)',
      margin: 0
    }
  }, brand.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary"
  }, "Visit ", brand.domain, " ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 16
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    onClick: onClose
  }, "Close"))), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: 18,
      right: 18,
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: 0,
      background: 'rgba(255,255,255,.18)',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))));
}
function App() {
  const [openBrand, setOpenBrand] = useState(null);
  const scrollTo = id => {
    if (id === 'home') {
      document.querySelector('#kit-scroll').scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const c = document.querySelector('#kit-scroll');
      c.scrollTo({
        top: el.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "kit-scroll",
    style: {
      height: '100vh',
      overflowY: 'auto',
      scrollBehavior: 'smooth'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Header, {
    onNav: scrollTo
  }), /*#__PURE__*/React.createElement(__ds_scope.Hero, {
    onNav: scrollTo
  }), /*#__PURE__*/React.createElement(__ds_scope.BrandFamily, {
    onOpen: setOpenBrand
  }), /*#__PURE__*/React.createElement(__ds_scope.ValueSection, null), /*#__PURE__*/React.createElement(__ds_scope.Footer, null), /*#__PURE__*/React.createElement(BrandDetail, {
    brand: openBrand,
    onClose: () => setOpenBrand(null)
  }));
}
Object.assign(__ds_scope, { App });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oes-global/App.jsx", error: String((e && e.message) || e) }); }

__ds_ns.App = __ds_scope.App;

__ds_ns.BrandFamily = __ds_scope.BrandFamily;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.ASSETS = __ds_scope.ASSETS;

__ds_ns.BRANDS = __ds_scope.BRANDS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Primitives = __ds_scope.Primitives;

__ds_ns.ValueSection = __ds_scope.ValueSection;

})();
