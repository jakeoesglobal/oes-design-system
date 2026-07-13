import { ASSETS, Button } from './Primitives.jsx';
const { useState, useEffect } = React;

// Sticky top navigation
export function Header({ onNav, active }){
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const el = document.querySelector('#kit-scroll');
    const onScroll = ()=> setScrolled((el ? el.scrollTop : window.scrollY) > 12);
    const target = el || window;
    target.addEventListener('scroll', onScroll);
    return ()=> target.removeEventListener('scroll', onScroll);
  },[]);

  const links = [
    { id:'family', label:'Our Brands' },
    { id:'value', label:'Why OES' },
    { id:'contact', label:'Contact' },
  ];

  return (
    <header style={{
      position:'sticky', top:0, zIndex:50,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(140%) blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--divider)' : '1px solid transparent',
      transition:'all var(--dur-base) var(--ease-standard)'
    }}>
      <div className="container" style={{display:'flex', alignItems:'center', height:78, gap:24}}>
        <a href="#" onClick={(e)=>{e.preventDefault();onNav('home')}} style={{display:'flex', alignItems:'center'}}>
          <img src={`${ASSETS}/${scrolled ? 'oes-logo-color' : 'oes-logo-white'}.svg`} alt="OES Global" style={{height:34}}/>
        </a>
        <nav style={{marginLeft:'auto', display:'flex', gap:34, alignItems:'center'}}>
          {links.map(l=>(
            <a key={l.id} href={`#${l.id}`} onClick={(e)=>{e.preventDefault();onNav(l.id)}}
              style={{
                fontFamily:'var(--font-primary)', fontWeight:500, fontSize:15,
                color: scrolled ? 'var(--fg-strong)' : 'rgba(255,255,255,.92)',
                transition:'color var(--dur-base)'
              }}>{l.label}</a>
          ))}
          <Button variant={scrolled ? 'primary' : 'onDark'} onClick={()=>onNav('contact')}
            style={{padding:'10px 20px', fontSize:14}}>Partner With Us</Button>
        </nav>
      </div>
    </header>
  );
}
