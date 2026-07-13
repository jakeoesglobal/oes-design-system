import { Eyebrow, Icon, ASSETS } from './Primitives.jsx';

// Value section — layered panels motif + principles
export function ValueSection(){
  const principles = [
    { icon:'compass', title:'Find a Way', body:'When others see a dead end, we engineer a path. Resourcefulness is the operating standard.' },
    { icon:'layers', title:'One Standard', body:'A single disciplined design and operating system runs beneath every brand we build.' },
    { icon:'shield-check', title:'Dependable', body:'Industrial-grade reliability. We show up, we deliver, and the work holds up.' },
  ];
  return (
    <section id="value" style={{background:'#fff', padding:'96px 0'}}>
      <div className="container" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center'}}>
        {/* left: layered panels visual */}
        <div style={{position:'relative', minHeight:360}}>
          <div style={{position:'absolute', inset:'0 40px 60px 0', borderRadius:'var(--radius-lg)', background:'var(--grad-oes-deep)'}}/>
          <div style={{position:'absolute', inset:'60px 0 0 40px', borderRadius:'var(--radius-lg)', background:'var(--grad-oes-steel)', boxShadow:'var(--shadow-lg)'}}/>
          <img src={`${ASSETS}/oes-icon-white.svg`} alt="" style={{position:'absolute', right:64, bottom:90, width:120, opacity:0.9}}/>
          <div style={{position:'absolute', left:72, bottom:40, color:'#fff', fontFamily:'var(--font-display)', fontWeight:700, fontSize:24, lineHeight:1.15, maxWidth:200}}>
            We Find a Way
          </div>
        </div>
        {/* right: principles */}
        <div>
          <Eyebrow>Why OES Global</Eyebrow>
          <h2 style={{fontFamily:'var(--font-primary)', fontWeight:900, fontSize:'clamp(28px,3.4vw,42px)', lineHeight:1.1, color:'var(--fg-strong)', margin:'14px 0 30px'}}>
            Built on resourcefulness.
          </h2>
          <div style={{display:'flex', flexDirection:'column', gap:24}}>
            {principles.map(p=>(
              <div key={p.title} style={{display:'flex', gap:18}}>
                <div style={{flex:'none', width:46, height:46, borderRadius:'var(--radius-md)', background:'rgba(48,91,125,.10)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--oes-primary)'}}>
                  <Icon name={p.icon} size={22}/>
                </div>
                <div>
                  <h3 style={{fontFamily:'var(--font-primary)', fontWeight:700, fontSize:18, color:'var(--fg-strong)', margin:0}}>{p.title}</h3>
                  <p style={{fontFamily:'var(--font-primary)', fontWeight:400, fontSize:14.5, lineHeight:1.6, color:'var(--fg-muted)', margin:'6px 0 0'}}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
