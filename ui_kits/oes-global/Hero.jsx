import { ASSETS, Eyebrow, Button, Icon } from './Primitives.jsx';

// Hero — deep navy gradient, icon watermark, master headline
export function Hero({ onNav }){
  return (
    <section style={{
      position:'relative', overflow:'hidden',
      background:'var(--grad-oes-deep)', color:'#fff',
      marginTop:-78, paddingTop:78
    }}>
      {/* icon watermark */}
      <img src={`${ASSETS}/oes-icon-white.svg`} alt="" style={{
        position:'absolute', right:'-60px', top:'50%', transform:'translateY(-50%)',
        width:520, opacity:0.06, pointerEvents:'none'
      }}/>
      <div className="container" style={{position:'relative', padding:'110px 32px 120px', maxWidth:1100}}>
        <Eyebrow color="var(--oes-accent)">Parent Company &middot; A Family of Brands</Eyebrow>
        <h1 style={{
          fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(40px, 6.4vw, 84px)',
          lineHeight:1.02, letterSpacing:'-0.015em', margin:'18px 0 0', maxWidth:880
        }}>
          We&rsquo;re the<br/>Find a Way Company.
        </h1>
        <p style={{
          fontFamily:'var(--font-primary)', fontWeight:300, fontSize:'clamp(17px,1.9vw,21px)',
          lineHeight:1.6, color:'var(--fg-on-dark-muted)', maxWidth:560, margin:'26px 0 0'
        }}>
          One disciplined standard behind four specialized brands. OES Global builds dependable supply
          and service businesses across safety, hydration, absorbents, and valet.
        </p>
        <div style={{display:'flex', gap:14, marginTop:38, flexWrap:'wrap'}}>
          <Button variant="onDark" onClick={()=>onNav('family')}>
            Explore Our Brands <Icon name="arrow-right" size={18}/>
          </Button>
          <Button variant="outlineDark" onClick={()=>onNav('value')}>Why OES Global</Button>
        </div>

        {/* stat strip */}
        <div style={{
          display:'flex', gap:48, marginTop:64, flexWrap:'wrap',
          borderTop:'1px solid rgba(255,255,255,.14)', paddingTop:30
        }}>
          {[['4','Specialized brands'],['1','Unified standard'],['100%','Find-a-way mindset']].map(([n,l])=>(
            <div key={l}>
              <div style={{fontFamily:'var(--font-primary)', fontWeight:900, fontSize:40, lineHeight:1}}>{n}</div>
              <div style={{fontFamily:'var(--font-condensed)', fontWeight:700, fontSize:12, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--oes-accent)', marginTop:8}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
