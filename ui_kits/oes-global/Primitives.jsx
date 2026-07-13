// Shared primitives + brand data for the OES Global corporate site kit
const { useState, useEffect } = React;

export const ASSETS = '../../assets';

export const BRANDS = [
  { id:'oes', name:'OES Global', role:'Parent Company', tagline:'We Find a Way',
    domain:'oesglobalinc.com', desc:'The parent company. A family of specialized brands, one disciplined standard.', parent:true },
  { id:'cones', name:'Traffic Cones For Less', role:'Safety Supply', tagline:'Keep work zones safe',
    domain:'trafficconesforless.com', desc:'Cones, barriers, and safety equipment for work zones and events.' },
  { id:'hydration', name:'Hydration Depot', role:'Hydration Solutions', tagline:'Hydrate the workforce',
    domain:'hydrationdepot.com', desc:'Industrial hydration and electrolyte supply for demanding environments.' },
  { id:'absorbents', name:'Absorbents For Less', role:'Industrial Absorbents', tagline:'Contain every spill',
    domain:'absorbentsforless.com', desc:'Spill control, absorbents, and containment for industrial sites.' },
  { id:'valet', name:'SD2K Valet', role:'Valet Services', tagline:'First impressions, parked',
    domain:'sd2kvalet.com', desc:'Professional valet and parking management services.' },
];

// Lucide icon via mask (brand-colored via currentColor)
export function Icon({ name, size=22, style }){
  const url = `https://unpkg.com/lucide-static@0.460.0/icons/${name}.svg`;
  return <span className="icon" style={{
    width:size, height:size,
    WebkitMaskImage:`url(${url})`, maskImage:`url(${url})`, ...style
  }}/>;
}

export function Eyebrow({ children, color, style }){
  return <div style={{
    fontFamily:'var(--font-condensed)', fontWeight:700, fontSize:12,
    letterSpacing:'0.16em', textTransform:'uppercase',
    color: color || 'var(--oes-primary)', ...style
  }}>{children}</div>;
}

export function Button({ children, variant='primary', onClick, style }){
  const base = {
    fontFamily:'var(--font-primary)', fontWeight:700, fontSize:15,
    padding:'13px 26px', borderRadius:'var(--radius-md)', border:0, cursor:'pointer',
    transition:'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard)',
    display:'inline-flex', alignItems:'center', gap:9
  };
  const variants = {
    primary:{ background:'var(--oes-primary)', color:'#fff' },
    onDark:{ background:'#fff', color:'var(--oes-navy)' },
    outlineDark:{ background:'transparent', color:'#fff', boxShadow:'inset 0 0 0 1.5px rgba(255,255,255,.55)' },
    ghost:{ background:'transparent', color:'var(--oes-primary)', padding:'13px 8px' },
  };
  const [hover, setHover] = useState(false);
  const hoverStyle = hover ? ({
    primary:{ background:'#264a66' },
    onDark:{ background:'#e8eef3' },
    outlineDark:{ background:'rgba(255,255,255,.10)' },
    ghost:{ color:'#264a66' },
  })[variant] : {};
  return <button onClick={onClick}
    onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{ ...base, ...variants[variant], ...hoverStyle, ...style }}>{children}</button>;
}

// Showcase of the shared atoms — used as the design-system card preview
export function Primitives(){
  return (
    <div style={{display:'flex', flexDirection:'column', gap:30, padding:44, fontFamily:'var(--font-primary)'}}>
      <Eyebrow>Eyebrow Label</Eyebrow>
      <div style={{display:'flex', gap:14, flexWrap:'wrap', alignItems:'center'}}>
        <Button variant="primary">Primary <Icon name="arrow-right" size={16}/></Button>
        <Button variant="ghost">Ghost</Button>
        <div style={{background:'var(--oes-navy)', padding:'16px 18px', borderRadius:'var(--radius-md)', display:'flex', gap:14}}>
          <Button variant="onDark">On Dark</Button>
          <Button variant="outlineDark">Outline</Button>
        </div>
      </div>
      <div style={{display:'flex', gap:20, color:'var(--oes-primary)'}}>
        {['compass','layers','shield-check','arrow-up-right','send','check-circle-2'].map(n=>(
          <Icon key={n} name={n} size={26}/>
        ))}
      </div>
    </div>
  );
}
