import { Eyebrow, Button, Icon, ASSETS, BRANDS } from './Primitives.jsx';
const { useState } = React;

// Contact band + footer
export function Footer({ onSubmit }){
  const [sent, setSent] = useState(false);
  return (
    <footer>
      {/* contact band */}
      <section id="contact" style={{background:'var(--grad-oes-deeper)', color:'#fff', padding:'84px 0'}}>
        <div className="container" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center'}}>
          <div>
            <Eyebrow color="var(--oes-accent)">Partner With Us</Eyebrow>
            <h2 style={{fontFamily:'var(--font-primary)', fontWeight:900, fontSize:'clamp(28px,3.4vw,44px)', lineHeight:1.1, margin:'14px 0 0'}}>
              Let&rsquo;s find a way<br/>together.
            </h2>
            <p style={{fontFamily:'var(--font-primary)', fontWeight:300, fontSize:17, lineHeight:1.6, color:'var(--fg-on-dark-muted)', margin:'16px 0 0', maxWidth:380}}>
              Supplier, partner, or acquisition target &mdash; tell us what you&rsquo;re working on.
            </p>
          </div>
          <form onClick={(e)=>e.preventDefault()} style={{display:'flex', flexDirection:'column', gap:14}}>
            {sent ? (
              <div style={{display:'flex', alignItems:'center', gap:12, background:'rgba(255,255,255,.10)', borderRadius:'var(--radius-md)', padding:'22px 24px'}}>
                <Icon name="check-circle-2" size={26} style={{color:'var(--oes-accent)'}}/>
                <span style={{fontFamily:'var(--font-primary)', fontWeight:500, fontSize:16}}>Thanks &mdash; we&rsquo;ll be in touch shortly.</span>
              </div>
            ) : (
              <React.Fragment>
                <input placeholder="Full name" style={fieldStyle}/>
                <input placeholder="Work email" style={fieldStyle}/>
                <textarea placeholder="How can we help?" rows={3} style={{...fieldStyle, resize:'none'}}/>
                <Button variant="onDark" onClick={()=>{setSent(true); onSubmit && onSubmit();}}>
                  Send message <Icon name="send" size={17}/>
                </Button>
              </React.Fragment>
            )}
          </form>
        </div>
      </section>

      {/* footer bar */}
      <div style={{background:'var(--oes-navy)', color:'#fff', padding:'40px 0'}}>
        <div className="container" style={{display:'flex', alignItems:'center', gap:24, flexWrap:'wrap'}}>
          <img src={`${ASSETS}/oes-logo-steel.svg`} alt="OES Global" style={{height:30}}/>
          <div style={{marginLeft:'auto', display:'flex', gap:26, flexWrap:'wrap'}}>
            {BRANDS.filter(b=>!b.parent).map(b=>(
              <span key={b.id} style={{fontFamily:'var(--font-condensed)', fontWeight:500, fontSize:12.5, letterSpacing:'0.06em', color:'var(--fg-on-dark-muted)'}}>{b.domain}</span>
            ))}
          </div>
        </div>
        <div className="container" style={{marginTop:24, paddingTop:20, borderTop:'1px solid rgba(255,255,255,.10)', display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:10}}>
          <span style={{fontFamily:'var(--font-primary)', fontSize:13, color:'var(--fg-on-dark-muted)'}}>&copy; 2026 OES Global Inc. &middot; oesglobalinc.com</span>
          <span style={{fontFamily:'var(--font-condensed)', fontWeight:700, fontSize:12.5, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--oes-accent)'}}>We&rsquo;re the Find a Way Company</span>
        </div>
      </div>
    </footer>
  );
}

const fieldStyle = {
  fontFamily:'var(--font-primary)', fontSize:15, padding:'13px 16px',
  borderRadius:'var(--radius-md)', border:'1px solid rgba(255,255,255,.22)',
  background:'rgba(255,255,255,.08)', color:'#fff', outline:'none'
};

