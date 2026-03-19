import { useState, useEffect } from "react";

export default function Navbar({ T, isDark, scrollY, activeNav, go, setMode, lang, setLang, t, navItems }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navGo = (id) => { go(id); setMenuOpen(false); };

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const LangToggle = () => (
    <button onClick={() => setLang(lang === "en" ? "de" : "en")} style={{
      background: "none", border: `1px solid ${T.border}`, borderRadius: 50,
      padding: "4px 12px", cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
      transition: "all 0.3s", color: T.text, fontSize: 12, fontWeight: 600, flexShrink: 0
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = T.gold}
      onMouseLeave={e => e.currentTarget.style.borderColor = T.border}>
      {lang === "en" ? "🇩🇪 DE" : "🇬🇧 EN"}
    </button>
  );

  const ThemeToggle = () => (
    <button onClick={() => setMode(isDark ? "light" : "dark")} style={{
      background: "none", border: `1px solid ${T.border}`, borderRadius: "50%",
      width: 34, height: 34, cursor: "pointer", display: "flex", alignItems: "center",
      justifyContent: "center", transition: "all 0.3s", color: T.text, flexShrink: 0
    }}>
      {isDark
        ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      }
    </button>
  );

  return (
    <>
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, padding:"12px 24px", background:scrollY>50?T.navBg:"transparent", backdropFilter:scrollY>50?"blur(20px)":"none", borderBottom:scrollY>50?`1px solid ${T.border}`:"none", transition:"all 0.4s", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div onClick={()=>navGo("home")} style={{ fontSize:22, fontWeight:700, cursor:"pointer", fontFamily:"'Playfair Display',serif", flexShrink:0 }}>
          <span className="grad-logo">AEA</span>
        </div>

        {/* Desktop */}
        <div className="desk" style={{ display:"flex", gap:20, alignItems:"center" }}>
          {navItems.map((n,i) => (
            <button key={i} onClick={()=>navGo(n.id)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:13, fontWeight:500, letterSpacing:0.8, color:activeNav===n.id?T.gold:T.text3, transition:"color 0.3s", fontFamily:"'DM Sans',sans-serif", position:"relative", padding:"4px 0", whiteSpace:"nowrap" }}>
              {n.label}
              {activeNav===n.id && <div style={{ position:"absolute", bottom:-2, left:0, right:0, height:2, background:T.gold, borderRadius:1 }}/>}
            </button>
          ))}
          <a href="/Ahmad_El_Sayed_Ahmad_CV.pdf" download style={{ padding:"6px 16px", borderRadius:50, fontSize:12, fontWeight:600, background:T.btnGrad, color:"#fff", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6, whiteSpace:"nowrap", flexShrink:0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>CV
          </a>
          <LangToggle />
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="mob-controls" style={{ display:"none", alignItems:"center", gap:8 }}>
          <LangToggle />
          <ThemeToggle />
          <button onClick={()=>setMenuOpen(!menuOpen)} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", flexDirection:"column", gap:5, padding:8 }}>
            <span style={{ width:24, height:2, background:T.text, borderRadius:1, transition:"0.3s", transform:menuOpen?"rotate(45deg) translate(5px,5px)":"none" }}/>
            <span style={{ width:24, height:2, background:T.text, borderRadius:1, transition:"0.3s", opacity:menuOpen?0:1 }}/>
            <span style={{ width:24, height:2, background:T.text, borderRadius:1, transition:"0.3s", transform:menuOpen?"rotate(-45deg) translate(5px,-5px)":"none" }}/>
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay — OUTSIDE the nav */}
      {menuOpen && (
        <div style={{ position:"fixed", top:0, left:0, right:0, bottom:0, background:isDark?"rgba(13,17,23,0.98)":"rgba(250,250,250,0.98)", backdropFilter:"blur(24px)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:36, zIndex:10000 }}>
          <button onClick={()=>setMenuOpen(false)} style={{ position:"absolute", top:18, right:24, background:"none", border:"none", cursor:"pointer", color:T.text, fontSize:28, lineHeight:1 }}>✕</button>
          {navItems.map((n,i) => (
            <button key={i} onClick={()=>navGo(n.id)} style={{ background:"none", border:"none", fontSize:28, fontWeight:600, color:activeNav===n.id?T.gold:T.text3, cursor:"pointer", fontFamily:"'Playfair Display',serif", transition:"color 0.3s" }}>{n.label}</button>
          ))}
          <div style={{ display:"flex", gap:12, marginTop:16 }}>
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  );
}
