import { Header } from './Header.jsx';
import { Hero } from './Hero.jsx';
import { BrandFamily } from './BrandFamily.jsx';
import { ValueSection } from './ValueSection.jsx';
import { Footer } from './Footer.jsx';
import { Eyebrow, Button, Icon, ASSETS } from './Primitives.jsx';
const { useState } = React;

// App — assembles the corporate site, scroll nav, brand-detail overlay
function BrandDetail({ brand, onClose }){
  if(!brand) return null;
  return (
    <div onClick={onClose} style={{
      position:'fixed', inset:0, zIndex:100, background:'rgba(10,39,55,.55)',
      backdropFilter:'blur(4px)', display:'flex', alignItems:'center', justifyContent:'center', padding:24
    }}>
      <div onClick={(e)=>e.stopPropagation()} style={{
        position:'relative', width:'min(560px,100%)', background:'#fff',
        borderRadius:'var(--radius-lg)', overflow:'hidden', boxShadow:'var(--shadow-lg)'
      }}>
        <div style={{background:'var(--grad-oes-steel)', padding:'34px 34px 28px', color:'#fff', position:'relative', overflow:'hidden'}}>
          <img src={`${ASSETS}/oes-icon-white.svg`} alt="" style={{position:'absolute', right:-20, top:-14, width:130, opacity:.16}}/>
          <Eyebrow color="rgba(255,255,255,.85)">{brand.role}</Eyebrow>
          <h3 style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:30, margin:'10px 0 0'}}>{brand.name}</h3>
          <p style={{fontFamily:'var(--font-primary)', fontWeight:300, fontSize:16, margin:'8px 0 0'}}>{brand.tagline}</p>
        </div>
        <div style={{padding:'26px 34px 32px'}}>
          <p style={{fontFamily:'var(--font-primary)', fontSize:15.5, lineHeight:1.65, color:'var(--fg)', margin:0}}>{brand.desc}</p>
          <div style={{display:'flex', alignItems:'center', gap:10, marginTop:24}}>
            <Button variant="primary">Visit {brand.domain} <Icon name="arrow-up-right" size={16}/></Button>
            <Button variant="ghost" onClick={onClose}>Close</Button>
          </div>
        </div>
        <button onClick={onClose} aria-label="Close" style={{
          position:'absolute', top:18, right:18, width:34, height:34, borderRadius:'50%',
          border:0, background:'rgba(255,255,255,.18)', color:'#fff', cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center'
        }}><Icon name="x" size={18}/></button>
      </div>
    </div>
  );
}

export function App(){
  const [openBrand, setOpenBrand] = useState(null);

  const scrollTo = (id)=>{
    if(id==='home'){ document.querySelector('#kit-scroll').scrollTo({top:0, behavior:'smooth'}); return; }
    const el = document.getElementById(id);
    if(el){ const c = document.querySelector('#kit-scroll'); c.scrollTo({top: el.offsetTop - 60, behavior:'smooth'}); }
  };

  return (
    <div id="kit-scroll" style={{height:'100vh', overflowY:'auto', scrollBehavior:'smooth'}}>
      <Header onNav={scrollTo}/>
      <Hero onNav={scrollTo}/>
      <BrandFamily onOpen={setOpenBrand}/>
      <ValueSection/>
      <Footer/>
      <BrandDetail brand={openBrand} onClose={()=>setOpenBrand(null)}/>
    </div>
  );
}

