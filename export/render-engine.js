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
    await ff.load(); document.fonts.add(ff);
  }
  await Promise.all([
    _lf('RCBlack','assets/fonts/RobotoCondensed-Black.ttf'),
    _lf('RCBold','assets/fonts/RobotoCondensed-Bold.ttf'),
    _lf('RBlack','assets/fonts/Roboto-Black.ttf'),
  ]);
  log('Fonts loaded');
}

function _cover(ctx,im,x0,y0,W,H,px,py,zoom){
  const s=Math.max(W/im.width,H/im.height)*(zoom||1);
  const sw=im.width*s,sh=im.height*s;
  ctx.drawImage(im,x0+(W-sw)*px,y0+(H-sh)*py,sw,sh);
}
function _rr(ctx,x,y,w,h,r){
  ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.arcTo(x+w,y,x+w,y+r,r);
  ctx.lineTo(x+w,y+h-r);ctx.arcTo(x+w,y+h,x+w-r,y+h,r);ctx.lineTo(x+r,y+h);
  ctx.arcTo(x,y+h,x,y+h-r,r);ctx.lineTo(x,y+r);ctx.arcTo(x,y,x+r,y,r);ctx.closePath();
}
function _wrap(ctx,text,maxW){
  const words=text.split(' ');const lines=[];let cur='';
  for(const w of words){const t=cur?cur+' '+w:w;if(ctx.measureText(t).width>maxW&&cur){lines.push(cur);cur=w;}else cur=t;}
  if(cur)lines.push(cur);return lines;
}
async function _save(cv,name,folder){
  const blob=await cv.convertToBlob({type:'image/jpeg',quality:0.93});
  await saveFile(folder+'/'+name+'.jpg',blob);
  log(name+' '+cv.width+'x'+cv.height+' ✓');
}
function _ls(ctx,v){try{ctx.letterSpacing=v;}catch(e){}}

async function _drawBlog(s,folder){
  const photo=await readImage(s.img);
  const cv=createCanvas(s.W,s.H);const ctx=cv.getContext('2d');
  ctx.save();ctx.beginPath();ctx.rect(0,0,s.W,s.H);ctx.clip();
  _cover(ctx,photo,0,0,s.W,s.H,s.px,s.py);ctx.restore();
  const g=ctx.createLinearGradient(0,0,s.W,0);
  g.addColorStop(0,'rgba(8,16,26,.9)');g.addColorStop(.34,'rgba(8,16,26,.66)');
  g.addColorStop(.6,'rgba(8,16,26,.18)');g.addColorStop(.8,'rgba(8,16,26,0)');
  ctx.fillStyle=g;ctx.fillRect(0,0,s.W,s.H);
  const X=54,KS=15,KPX=12,KPT=7,KPB=6;
  _ls(ctx,`${0.14*KS}px`);ctx.font=`700 ${KS}px RCBold`;
  const kt=s.eyebrow.toUpperCase();const kw=ctx.measureText(kt).width+KPX*2;const kh=KS+KPT+KPB;
  const lh=s.hSize*1.06;const tot=kh+13+lh*2;const y0=(s.H-tot)/2;
  ctx.fillStyle=s.eyebrowBg;ctx.fillRect(X,y0,kw,kh);
  ctx.fillStyle='#fff';ctx.textBaseline='top';ctx.fillText(kt,X+KPX,y0+KPT);
  _ls(ctx,`${-0.015*s.hSize}px`);ctx.font=`700 ${s.hSize}px RBlack`;
  ctx.fillStyle='#fff';ctx.textBaseline='top';
  ctx.fillText(s.hl1,X,y0+kh+13);ctx.fillText(s.hl2,X,y0+kh+13+lh);
  await _save(cv,s.file,folder);
}

async function _drawArticle(s,folder){
  const BAR=75,CH=s.H-BAR;
  const [photo,barLogo]=await Promise.all([readImage(s.img),readImage(s.barLogoPath)]);
  const cv=createCanvas(s.W,s.H);const ctx=cv.getContext('2d');
  ctx.fillStyle=s.barBg;ctx.fillRect(0,0,s.W,BAR);
  const blar=barLogo.width&&barLogo.height?barLogo.width/barLogo.height:5;
  let lH=Math.min(42,BAR-16),lW=Math.round(lH*blar);
  if(lW>280){lW=280;lH=Math.round(lW/blar);}
  ctx.drawImage(barLogo,(s.W-lW)/2,(BAR-lH)/2,lW,lH);
  ctx.save();ctx.beginPath();ctx.rect(0,BAR,s.W,CH);ctx.clip();
  _cover(ctx,photo,0,BAR,s.W,CH,s.px,s.py);ctx.restore();
  ctx.fillStyle='rgba(10,28,46,.52)';ctx.fillRect(0,BAR,s.W,CH);
  const KS=16,TS=s.ttSize,SS=23,CS=18,GAP=22;
  _ls(ctx,'0px');ctx.font=`300 ${SS}px system-ui,sans-serif`;
  const subLines=_wrap(ctx,s.sub,s.W*s.subMaxPct);
  const subH=subLines.length*SS*1.5;
  const ctaH=CS+30;const ttLH=TS*1.06;
  const tot=KS*1.4+GAP+ttLH*2+GAP+subH+GAP+ctaH;
  let cy=BAR+(CH-tot)/2;
  _ls(ctx,`${0.07*KS}px`);ctx.font=`700 ${KS}px RCBold`;
  const kt=s.eyebrow.toUpperCase();const kw=ctx.measureText(kt).width;
  const rW=34,rG=16;const ry=cy+KS*0.7;
  ctx.strokeStyle='rgba(255,255,255,.6)';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(s.W/2-kw/2-rG-rW,ry);ctx.lineTo(s.W/2-kw/2-rG,ry);ctx.stroke();
  ctx.beginPath();ctx.moveTo(s.W/2+kw/2+rG,ry);ctx.lineTo(s.W/2+kw/2+rG+rW,ry);ctx.stroke();
  ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText(kt,s.W/2,ry);cy+=KS*1.4+GAP;
  _ls(ctx,`${-0.015*TS}px`);ctx.font=`700 ${TS}px RBlack`;
  ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='top';
  ctx.fillText(s.ttL1,s.W/2,cy);cy+=ttLH;ctx.fillText(s.ttL2,s.W/2,cy);cy+=ttLH+GAP;
  _ls(ctx,'0px');ctx.font=`300 ${SS}px system-ui,sans-serif`;
  ctx.fillStyle='rgba(255,255,255,.92)';ctx.textAlign='center';ctx.textBaseline='top';
  for(const ln of subLines){ctx.fillText(ln,s.W/2,cy);cy+=SS*1.5;}cy+=GAP;
  const pt='READ ARTICLE \u2192';_ls(ctx,`${0.07*CS}px`);ctx.font=`700 ${CS}px RCBold`;
  const pw=ctx.measureText(pt).width+60;const ph=CS+28;
  ctx.fillStyle=s.ctaColor;_rr(ctx,(s.W-pw)/2,cy,pw,ph,8);ctx.fill();
  ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText(pt,s.W/2,cy+ph/2);
  await _save(cv,s.file,folder);
}

async function _drawPost(s,folder){
  const [photo,logoImg]=await Promise.all([readImage(s.img),readImage(s.logoPath)]);
  const cv=createCanvas(s.W,s.H);const ctx=cv.getContext('2d');
  _cover(ctx,photo,0,0,s.W,s.H,s.px,s.py,s.zoom);
  const g=ctx.createLinearGradient(0,s.H,0,0);
  g.addColorStop(0,'rgba(8,16,26,.9)');g.addColorStop(.42,'rgba(8,16,26,.3)');
  g.addColorStop(.7,'rgba(8,16,26,0)');
  ctx.fillStyle=g;ctx.fillRect(0,0,s.W,s.H);
  const KS=15,CS=s.condSize,LH=CS*1.06,GAP=16;
  const hasEb=!!s.eyebrow;
  const blockH=(hasEb?KS+GAP:0)+LH*2;const blockBottom=s.H-150;const blockTop=blockBottom-blockH;
  let hy=blockTop;
  if(hasEb){
    _ls(ctx,`${0.07*KS}px`);ctx.font=`700 ${KS}px RCBold`;
    const kt=s.eyebrow.toUpperCase();const kw=ctx.measureText(kt).width;
    const rW=40,rG=13;const ry=blockTop+KS*0.7;
    ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=1.5;
    ctx.beginPath();ctx.moveTo(s.W/2-kw/2-rG-rW,ry);ctx.lineTo(s.W/2-kw/2-rG,ry);ctx.stroke();
    ctx.beginPath();ctx.moveTo(s.W/2+kw/2+rG,ry);ctx.lineTo(s.W/2+kw/2+rG+rW,ry);ctx.stroke();
    ctx.fillStyle='rgba(255,255,255,.85)';ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText(kt,s.W/2,ry);
    hy=blockTop+KS+GAP;
  }
  _ls(ctx,`${-0.015*CS}px`);ctx.font=`900 ${CS}px RCBlack`;
  ctx.textAlign='center';ctx.textBaseline='top';
  ctx.fillStyle=s.hl1Color||'#fff';ctx.fillText(s.hl1,s.W/2,hy);
  ctx.fillStyle=s.hl2Color||'#fff';ctx.fillText(s.hl2,s.W/2,hy+LH);
  const lar=logoImg.width&&logoImg.height?logoImg.width/logoImg.height:5.5;
  let lH=54,lW=Math.round(lH*lar);if(lW>320){lW=320;lH=Math.round(lW/lar);}
  ctx.drawImage(logoImg,(s.W-lW)/2,s.H-56-lH,lW,lH);
  await _save(cv,s.file,folder);
}

function _starPath(ctx,x,y,sz){
  const pts=[[50,0],[61,35],[98,35],[68,57],[79,91],[50,70],[21,91],[32,57],[2,35],[39,35]];
  ctx.beginPath();
  pts.forEach((p,i)=>{const px=x+p[0]/100*sz,py=y+p[1]/100*sz;i?ctx.lineTo(px,py):ctx.moveTo(px,py);});
  ctx.closePath();
}

/* Template 2 — text-only thumbnail (no photo). Brand field + ghost icon + stars + huge headline. */
async function _drawThumb(s,folder){
  const [logo,icon]=await Promise.all([readImage(s.logoWhite),readImage(s.iconWhite)]);
  const cv=createCanvas(s.W,s.H);const ctx=cv.getContext('2d');
  const g=ctx.createLinearGradient(0,0,s.W,s.H);
  s.grad.forEach(st=>g.addColorStop(st[0],st[1]));
  ctx.fillStyle=g;ctx.fillRect(0,0,s.W,s.H);
  // ghost icon
  const iar=icon.width/icon.height;let iW,iH;
  if(iar>=1){iW=s.iconBox;iH=s.iconBox/iar;}else{iH=s.iconBox;iW=s.iconBox*iar;}
  let ix,iy;
  if(s.iconAnchor==='center'){ix=(s.W-iW)/2;iy=(s.H-iH)/2;}
  else{ix=s.W-iW+(s.iconBleed||0);iy=s.H-iH+(s.iconBleed||0);}
  ctx.globalAlpha=s.iconOpacity;ctx.drawImage(icon,ix,iy,iW,iH);ctx.globalAlpha=1;
  // logo top-left
  const lar=logo.width/logo.height;let lH=s.logoH,lW=lH*lar;if(lW>s.logoMaxW){lW=s.logoMaxW;lH=lW/lar;}
  ctx.drawImage(logo,s.pad,s.logoY,lW,lH);
  // eyebrow
  const eb=s.eyebrow.toUpperCase();
  _ls(ctx,`${0.22*s.ebSize}px`);ctx.font=`700 ${s.ebSize}px RCBold`;
  ctx.fillStyle=s.starColor;ctx.textBaseline='top';
  if(s.ebAlign==='right'){ctx.textAlign='right';ctx.fillText(eb,s.W-s.pad,s.ebY);}
  else{ctx.textAlign='left';ctx.fillText(eb,s.pad,s.ebY);}
  // headline auto-fit to width
  let hs=s.hSize;
  _ls(ctx,`${-0.005*hs}px`);ctx.font=`900 ${hs}px RCBlack`;
  const maxW=s.W-s.headMaxPad;let longest=0;
  s.lines.forEach(l=>{const w=ctx.measureText(l.t.toUpperCase()).width;if(w>longest)longest=w;});
  if(longest>maxW)hs=Math.floor(hs*maxW/longest);
  const lh=hs*0.9;
  const blockH=s.starSize+s.mb+(s.lines.length-1)*lh+hs;
  const top=(s.H-blockH)/2;
  // stars
  ctx.fillStyle=s.starColor;
  for(let i=0;i<5;i++){_starPath(ctx,s.pad+i*(s.starSize+s.starGap),top,s.starSize);ctx.fill();}
  // headline
  let ty=top+s.starSize+s.mb;
  _ls(ctx,`${-0.005*hs}px`);ctx.font=`900 ${hs}px RCBlack`;ctx.textAlign='left';ctx.textBaseline='top';
  s.lines.forEach(l=>{ctx.fillStyle=l.accent?s.gold:'#fff';ctx.fillText(l.t.toUpperCase(),s.pad,ty);ty+=lh;});
  await _save(cv,s.file,folder);
}

async function exportWeek(specs, outFolder) {
  await _loadFonts();
  for (const s of specs) {
    if (s.type==='blog') await _drawBlog(s, outFolder);
    else if (s.type==='article') await _drawArticle(s, outFolder);
    else if (s.type==='post') await _drawPost(s, outFolder);
    else if (s.type==='thumb') await _drawThumb(s, outFolder);
  }
  log('--- Export complete: '+specs.length+' pieces → '+outFolder+' ---');
}
