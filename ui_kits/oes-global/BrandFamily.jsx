import { Eyebrow, Icon, BRANDS } from './Primitives.jsx';
const { useState } = React;

// Brand family grid — the four sub-brands + parent
function BrandCard({ brand, onOpen }){
  const [hover, setHover] = useState(false);
  return (
    <div onClick={()=>onOpen(brand)}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{
        position:'relative', background:'#fff', borderRadius:'var(--radius-lg)',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        border:'1px solid var(--divider)', overflow:'hidden', cursor:'pointer',
        transform: hover ? 'translateY(-4px)' : 'none',
        transition:'all var(--dur-base) var(--ease-standard)'
      }}>
      {/* edge block motif */}
      <span style={{position:'absolute', left:0, top:0, bottom:0, width:4, background:'var(--oes-accent)'}}/>
      <div style={{padding:'26px 26px 24px 30px'}}>
        <Eyebrow>{brand.role}</Eyebrow>
        <h3 style={{fontFamily:'var(--font-primary)', fontWeight:700, fontSize:22, color:'var(--fg-strong)', margin:'10px 0 0'}}>{brand.name}</h3>
        <p style={{fontFamily:'var(--font-primary)', fontWeight:400, fontSize:14.5, lineHeight:1.6, color:'var(--fg-muted)', margin:'10px 0 0'}}>{brand.desc}</p>
        <div style={{display:'flex', alignItems:'center', gap:8, marginTop:20,
          color: hover ? 'var(--oes-primary)' : 'var(--fg-muted)', transition:'color var(--dur-base)'}}>
          <span style={{fontFamily:'var(--font-condensed)', fontWeight:700, fontSize:12.5, letterSpacing:'0.08em'}}>{brand.domain}</span>
          <Icon name="arrow-up-right" size={16}/>
        </div>
      </div>
    </div>
  );
}

export function BrandFamily({ onOpen }){
  const subs = BRANDS.filter(b=>!b.parent);
  return (
    <section id="family" style={{background:'var(--oes-light-gray)', padding:'96px 0'}}>
      <div className="container">
        <div style={{maxWidth:640, marginBottom:48}}>
          <Eyebrow>The OES Family</Eyebrow>
          <h2 style={{fontFamily:'var(--font-primary)', fontWeight:900, fontSize:'clamp(30px,4vw,46px)', lineHeight:1.08, color:'var(--fg-strong)', margin:'14px 0 0'}}>
            Four diverse brands.<br/>One design system.
          </h2>
          <p style={{fontFamily:'var(--font-primary)', fontWeight:300, fontSize:18, lineHeight:1.6, color:'var(--fg)', margin:'18px 0 0'}}>
            Each brand keeps its own identity, palette, and market &mdash; backed by the operational
            discipline of the OES Global parent.
          </p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:22}}>
          {subs.map(b=> <BrandCard key={b.id} brand={b} onOpen={onOpen}/>)}
        </div>
      </div>
    </section>
  );
}
