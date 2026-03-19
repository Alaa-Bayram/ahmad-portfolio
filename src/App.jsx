import { useState, useEffect } from "react";
import { useTheme, useInView, useLang } from "./hooks";
import { SKILL_CATS, PROJECTS, EXPERIENCE, LANGS, NAV } from "./data";
import { SKILL_CAT_DE } from "./data/translations";
import Particles from "./components/Particles";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import { Section, SkillChip, ProjectCard, TimelineItem } from "./components/Cards";

export default function App() {
  const [T, mode, setMode] = useTheme();
  const isDark = mode === "dark";
  const [t, lang, setLang] = useLang();
  const [activeNav, setActiveNav] = useState("Home");
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ name:"", email:"", message:"" });
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  const [skillsRef, skillsVis] = useInView(0.08);
  const [projRef, projVis] = useInView(0.08);
  const [journeyRef, journeyVis] = useInView(0.1);
  const [langRef, langVis] = useInView(0.15);
  const [contactRef, contactVis] = useInView(0.1);

  // Nav items with translated labels
  const navItems = NAV.map(id => ({ id, label: t[id] || id }));

  useEffect(() => { const h = () => setScrollY(window.scrollY); window.addEventListener("scroll", h, { passive:true }); return () => window.removeEventListener("scroll", h); }, []);
  useEffect(() => { const h = () => { const ss = NAV.map(n => document.getElementById(n.toLowerCase())); for (let i = ss.length-1; i >= 0; i--) if (ss[i] && ss[i].getBoundingClientRect().top < 300) { setActiveNav(NAV[i]); break; } }; window.addEventListener("scroll", h, { passive:true }); return () => window.removeEventListener("scroll", h); }, []);

  const handleSend = async () => {
    if (!formData.name || !formData.email || !formData.message) { setSendStatus("empty"); setTimeout(() => setSendStatus(null), 3000); return; }
    setSending(true); setSendStatus(null);
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ service_id:"service_1v2tmxl", template_id:"template_1ul77fu", user_id:"flDHrfz2Mw09iPijD",
          template_params:{ from_name:formData.name, from_email:formData.email, message:formData.message, to_name:"Ahmad" } })
      });
      if (res.ok) { setSendStatus("success"); setFormData({ name:"", email:"", message:"" }); } else setSendStatus("error");
    } catch { setSendStatus("error"); }
    setSending(false); setTimeout(() => setSendStatus(null), 5000);
  };

  const go = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior:"smooth" });
  const copyPhone = () => { navigator.clipboard.writeText("+4917665628860"); };

  return (
    <div style={{ background:T.bg, color:T.text, fontFamily:"'DM Sans',sans-serif", minHeight:"100vh", overflowX:"hidden", position:"relative", transition:"background 0.5s,color 0.5s" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        ::selection{background:${T.gold}33;color:${T.text}}
        ::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:${T.bg}}::-webkit-scrollbar-thumb{background:${T.thumb};border-radius:3px}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        .grad-text{background:${T.heroGrad};background-size:200% 200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;color:transparent;animation:gradient 8s ease infinite;display:inline}
        .grad-logo{background:${T.logoGrad};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;color:transparent;display:inline}
        .about-title{white-space:nowrap}
        @media(max-width:768px){
          .desk{display:none!important}
          .mob-controls{display:flex!important}
          .hero-t{font-size:36px!important}
          .pgrid,.agrid,.cgrid{grid-template-columns:1fr!important}
          .hero-c{padding:0 16px!important}
          .about-title{font-size:24px!important;white-space:normal!important}
        }
      `}</style>

      <Particles T={T} />
      <CursorGlow T={T} />
      <Navbar T={T} isDark={isDark} scrollY={scrollY} activeNav={activeNav} go={go} setMode={setMode} lang={lang} setLang={setLang} t={t} navItems={navItems} />

      {/* HERO */}
      <Section id="home" style={{ display:"flex", alignItems:"center", justifyContent:"center", minHeight:"100vh", paddingTop:100 }}>
        <div className="hero-c" style={{ textAlign:"center", maxWidth:700 }}>
          <div style={{ animation:"fadeUp 1s ease-out", marginBottom:32, display:"flex", justifyContent:"center" }}>
            <div style={{ width:152, height:152, borderRadius:"50%", background:"linear-gradient(135deg,#2c3e6b 0%,#4a6fa5 40%,#c9a84c 100%)", padding:4, boxShadow:`0 8px 40px ${T.shadow}0.25)`, animation:"float 6s ease-in-out infinite" }}>
              <img src="/ahmad-photo.jpg" alt="Ahmad El Sayed Ahmad" style={{ width:"100%", height:"100%", borderRadius:"50%", objectFit:"cover", objectPosition:"center", display:"block" }} />
            </div>
          </div>
          <p style={{ fontSize:13, textTransform:"uppercase", letterSpacing:4, color:T.gold, fontWeight:500, animation:"fadeUp 1s ease-out 0.2s both", marginBottom:16 }}>{t.heroSub}</p>
          <h1 className="hero-t" style={{ fontSize:64, fontWeight:800, lineHeight:1.05, fontFamily:"'Playfair Display',serif", opacity:0, animation:"fadeUp 1s ease-out 0.4s forwards" }}>
            <span className="grad-text">Ahmad El Sayed<br/>Ahmad</span>
          </h1>
          <p style={{ fontSize:18, color:T.text2, lineHeight:1.6, maxWidth:500, margin:"24px auto", animation:"fadeUp 1s ease-out 0.6s both", fontWeight:300 }}>{t.heroDesc}<br/>{t.heroDesc2}</p>
          <div style={{ display:"flex", gap:16, justifyContent:"center", animation:"fadeUp 1s ease-out 0.8s both", flexWrap:"wrap" }}>
            <button onClick={()=>go("projects")} style={{ padding:"14px 36px", borderRadius:50, border:"none", cursor:"pointer", background:T.btnGrad, color:"#fff", fontSize:14, fontWeight:600, transition:"transform 0.3s" }}
              onMouseEnter={e=>e.target.style.transform="translateY(-2px)"} onMouseLeave={e=>e.target.style.transform="translateY(0)"}>{t.viewWork}</button>
            <button onClick={()=>go("contact")} style={{ padding:"14px 36px", borderRadius:50, cursor:"pointer", background:"transparent", color:T.text, border:`1px solid ${T.borderH}`, fontSize:14, fontWeight:500, transition:"all 0.3s" }}
              onMouseEnter={e=>{e.target.style.borderColor=T.gold;e.target.style.color=T.gold}} onMouseLeave={e=>{e.target.style.borderColor=T.borderH;e.target.style.color=T.text}}>{t.getInTouch}</button>
            <a href="/Ahmad_El_Sayed_Ahmad_CV.pdf" download style={{ padding:"14px 36px", borderRadius:50, cursor:"pointer", background:"transparent", color:T.text, border:`1px solid ${T.borderH}`, fontSize:14, fontWeight:500, transition:"all 0.3s", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:8 }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=T.gold;e.currentTarget.style.color=T.gold}} onMouseLeave={e=>{e.currentTarget.style.borderColor=T.borderH;e.currentTarget.style.color=T.text}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>{t.downloadCV}
            </a>
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about">
        <div style={{ maxWidth:1000, margin:"0 auto" }}>
          <p style={{ fontSize:12, textTransform:"uppercase", letterSpacing:4, color:T.accent, fontWeight:500, marginBottom:12 }}>{t.aboutLabel}</p>
          <h2 className="about-title" style={{ fontSize:40, fontWeight:700, fontFamily:"'Playfair Display',serif", marginBottom:48, color:T.text }}>{t.aboutTitle}</h2>
          <div className="agrid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48 }}>
            <div>
              <p style={{ fontSize:16, lineHeight:1.8, color:T.text2, marginBottom:20 }}>{t.aboutP1}</p>
              <p style={{ fontSize:16, lineHeight:1.8, color:T.text2 }}>{t.aboutP2}</p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
              {[{l:t.location,v:t.locationVal,ic:"📍"},{l:t.education,v:t.educationVal,ic:"🎓"},{l:t.languages,v:t.languagesVal,ic:"🌍"},{l:t.focus,v:t.focusVal,ic:"⚡"}].map((info,i) => (
                <div key={i} style={{ padding:"16px 20px", borderRadius:12, background:T.surface, border:`1px solid ${T.border}`, display:"flex", alignItems:"center", gap:16 }}>
                  <span style={{ fontSize:22 }}>{info.ic}</span>
                  <div><p style={{ fontSize:11, color:T.text3, textTransform:"uppercase", letterSpacing:1.5, marginBottom:2 }}>{info.l}</p><p style={{ fontSize:14, color:T.text, fontWeight:500 }}>{info.v}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills">
        <div ref={skillsRef} style={{ maxWidth:1000, margin:"0 auto" }}>
          <p style={{ fontSize:12, textTransform:"uppercase", letterSpacing:4, color:T.accent2, fontWeight:500, marginBottom:12 }}>{t.stackLabel}</p>
          <h2 style={{ fontSize:40, fontWeight:700, fontFamily:"'Playfair Display',serif", marginBottom:48, color:T.text }}>{t.stackTitle}</h2>
          {SKILL_CATS.map((cat, ci) => (
            <div key={cat.cat} style={{ marginBottom:36, opacity:skillsVis?1:0, transform:skillsVis?"translateY(0)":"translateY(30px)", transition:`all 0.7s cubic-bezier(0.16,1,0.3,1) ${ci*0.1}s` }}>
              <p style={{ fontSize:14, textTransform:"uppercase", letterSpacing:3, color:T.gold, fontWeight:700, marginBottom:16 }}>{lang==="de" ? (SKILL_CAT_DE[cat.cat] || cat.cat) : cat.cat}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
                {cat.items.map((s, si) => <SkillChip key={s.n} item={s} i={ci*5+si} visible={skillsVis} T={T} />)}
              </div>
            </div>
          ))}
          <div ref={langRef} style={{ marginTop:48 }}>
            <p style={{ fontSize:14, textTransform:"uppercase", letterSpacing:3, color:T.gold, fontWeight:700, marginBottom:20 }}>{t.spokenLangs}</p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))", gap:16 }}>
              {LANGS.map((l, i) => {
                const lName = lang==="de"&&l.nameDE ? l.nameDE : l.name;
                const lLevel = lang==="de"&&l.levelDe ? l.levelDe : l.level;
                return (
                <div key={l.name} style={{ padding:20, borderRadius:12, background:T.surface, border:`1px solid ${T.border}`, opacity:langVis?1:0, transform:langVis?"scale(1)":"scale(0.9)", transition:`all 0.5s cubic-bezier(0.16,1,0.3,1) ${i*0.1}s`, textAlign:"center" }}>
                  <div style={{ width:56, height:56, borderRadius:"50%", margin:"0 auto 12px", background:`conic-gradient(${T.gold} ${l.pct*3.6}deg, ${T.track} 0deg)`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <div style={{ width:44, height:44, borderRadius:"50%", background:T.surface, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:T.gold }}>{lLevel.charAt(0)}</div>
                  </div>
                  <p style={{ fontSize:14, fontWeight:600, color:T.text }}>{lName}</p>
                  <p style={{ fontSize:11, color:T.text3, marginTop:2 }}>{lLevel}</p>
                </div>
              );})}
            </div>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects">
        <div ref={projRef} style={{ maxWidth:1000, margin:"0 auto" }}>
          <p style={{ fontSize:12, textTransform:"uppercase", letterSpacing:4, color:T.gold, fontWeight:500, marginBottom:12 }}>{t.portfolioLabel}</p>
          <h2 style={{ fontSize:40, fontWeight:700, fontFamily:"'Playfair Display',serif", marginBottom:48, color:T.text }}>{t.projectsTitle}</h2>
          <div className="pgrid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24 }}>
            {PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} i={i} visible={projVis} T={T} isDark={isDark} t={t} lang={lang} />)}
          </div>
        </div>
      </Section>

      {/* JOURNEY */}
      <Section id="journey">
        <div ref={journeyRef} style={{ maxWidth:700, margin:"0 auto" }}>
          <p style={{ fontSize:12, textTransform:"uppercase", letterSpacing:4, color:T.gold, fontWeight:500, marginBottom:12 }}>{t.timelineLabel}</p>
          <h2 style={{ fontSize:40, fontWeight:700, fontFamily:"'Playfair Display',serif", marginBottom:48, color:T.text }}>{t.journeyTitle}</h2>
          {EXPERIENCE.map((item, i) => <TimelineItem key={i} item={item} i={i} visible={journeyVis} T={T} t={t} lang={lang} />)}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <div ref={contactRef} style={{ maxWidth:1000, margin:"0 auto" }}>
          <p style={{ fontSize:12, textTransform:"uppercase", letterSpacing:4, color:T.rose, fontWeight:500, marginBottom:12 }}>{t.contactLabel}</p>
          <h2 style={{ fontSize:40, fontWeight:700, fontFamily:"'Playfair Display',serif", marginBottom:48, color:T.text }}>{t.connectTitle}</h2>
          <div className="cgrid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48 }}>
            <div>
              <p style={{ fontSize:16, lineHeight:1.8, color:T.text2, marginBottom:32 }}>{t.contactDesc}</p>
              {[
                { ic:"✉️", l:t.email, v:"ahmad.aessayed@gmail.com", action:()=>window.open("mailto:ahmad.aessayed@gmail.com") },
                { ic:"📱", l:t.phone, v:"+49 176 65628860", action:copyPhone, sub:t.clickToCopy },
                { ic:"💻", l:"GitHub", v:"github.com/aessayed", action:()=>window.open("https://github.com/aessayed","_blank") },
                { ic:"🔗", l:"LinkedIn", v:"Ahmad El Sayed Ahmad", action:()=>window.open("https://www.linkedin.com/in/ahmad-el-sayed-ahmad-bb5a6922a/","_blank") },
              ].map((c, i) => (
                <div key={i} onClick={c.action} style={{ display:"flex", alignItems:"center", gap:16, padding:"14px 20px", borderRadius:12, background:T.surface, border:`1px solid ${T.border}`, marginBottom:12, cursor:"pointer", transition:"all 0.3s", opacity:contactVis?1:0, transform:contactVis?"translateX(0)":"translateX(-20px)", transitionDelay:`${i*0.1}s` }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=T.gold+"44";e.currentTarget.style.background=T.surfHover}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.background=T.surface}}>
                  <span style={{ fontSize:20 }}>{c.ic}</span>
                  <div>
                    <p style={{ fontSize:11, color:T.text3, textTransform:"uppercase", letterSpacing:1.5, marginBottom:2 }}>{c.l}{c.sub ? ` · ${c.sub}` : ""}</p>
                    <p style={{ fontSize:14, color:T.text }}>{c.v}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding:32, borderRadius:16, background:T.surface, border:`1px solid ${T.border}` }}>
              <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                {["name","email"].map(f => (
                  <div key={f}>
                    <label style={{ fontSize:11, textTransform:"uppercase", letterSpacing:1.5, color:T.text3, marginBottom:8, display:"block" }}>{f==="name"?t.yourName:t.yourEmail}</label>
                    <input type={f==="email"?"email":"text"} value={formData[f]} onChange={e=>setFormData({...formData,[f]:e.target.value})}
                      placeholder={f==="name"?t.namePlaceholder:t.emailPlaceholder}
                      style={{ width:"100%", padding:"12px 16px", borderRadius:10, background:T.input, border:`1px solid ${T.border}`, color:T.text, fontSize:14, outline:"none", transition:"border-color 0.3s", fontFamily:"'DM Sans',sans-serif" }}
                      onFocus={e=>e.target.style.borderColor=T.gold+"55"} onBlur={e=>e.target.style.borderColor=T.border} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize:11, textTransform:"uppercase", letterSpacing:1.5, color:T.text3, marginBottom:8, display:"block" }}>{t.message}</label>
                  <textarea value={formData.message} onChange={e=>setFormData({...formData,message:e.target.value})} placeholder={t.msgPlaceholder} rows={4}
                    style={{ width:"100%", padding:"12px 16px", borderRadius:10, background:T.input, border:`1px solid ${T.border}`, color:T.text, fontSize:14, outline:"none", resize:"vertical", fontFamily:"'DM Sans',sans-serif", transition:"border-color 0.3s" }}
                    onFocus={e=>e.target.style.borderColor=T.gold+"55"} onBlur={e=>e.target.style.borderColor=T.border} />
                </div>
                <button onClick={handleSend} disabled={sending} style={{ padding:"14px 0", borderRadius:50, border:"none", cursor:sending?"wait":"pointer", background:sending?T.text3:T.btnGrad, color:"#fff", fontSize:14, fontWeight:600, transition:"all 0.3s", opacity:sending?0.7:1 }}>
                  {sending ? t.sending : t.sendMessage}
                </button>
                {sendStatus==="success" && <p style={{ fontSize:13, color:T.green, textAlign:"center", fontWeight:500 }}>{t.successMsg}</p>}
                {sendStatus==="error" && <p style={{ fontSize:13, color:T.rose, textAlign:"center", fontWeight:500 }}>{t.errorMsg}</p>}
                {sendStatus==="empty" && <p style={{ fontSize:13, color:T.gold, textAlign:"center", fontWeight:500 }}>{t.emptyMsg}</p>}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer style={{ padding:"40px 24px", textAlign:"center", position:"relative", zIndex:2, borderTop:`1px solid ${T.border}` }}>
        <div style={{ fontSize:18, fontWeight:700, fontFamily:"'Playfair Display',serif", marginBottom:12 }}><span className="grad-logo">Ahmad El Sayed Ahmad</span></div>
        <p style={{ fontSize:12, color:T.text3 }}>© {new Date().getFullYear()} — {t.footerCopy}</p>
      </footer>
    </div>
  );
}
