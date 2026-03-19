import { useState } from "react";
import { useInView } from "../hooks";

/* ─── Animated Section ─── */
export const Section = ({ id, children, style }) => {
  const [ref, v] = useInView(0.1);
  return (
    <section ref={ref} id={id} style={{ minHeight:"100vh", padding:"120px 24px", position:"relative", zIndex:2, opacity:v?1:0, transform:v?"translateY(0)":"translateY(50px)", transition:"all 1s cubic-bezier(0.16,1,0.3,1)", ...style }}>
      {children}
    </section>
  );
};

/* ─── Skill Chip with icon ─── */
export const SkillChip = ({ item, i, visible, T }) => {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{
      padding:"12px 18px", borderRadius:12, fontSize:13, fontWeight:500, cursor:"default",
      background:h?T.surfHover:T.surface, border:`1px solid ${h?T.borderH:T.border}`, color:T.text,
      display:"flex", alignItems:"center", gap:10,
      transition:"all 0.45s cubic-bezier(0.16,1,0.3,1)", opacity:visible?1:0,
      transform:visible?(h?"translateY(-4px) scale(1.05)":"translateY(0)"):"translateY(25px) scale(0.95)",
      transitionDelay:visible?`${i*0.04}s`:"0s", boxShadow:h?`0 10px 28px ${T.shadow}0.12)`:"none",
    }}>
      <img src={item.ic} alt={item.n} style={{ width:22, height:22, objectFit:"contain", flexShrink:0 }} />
      {item.n}
    </div>
  );
};

/* ─── Project Card (clickable link) ─── */
export const ProjectCard = ({ p, i, visible, T, isDark, t, lang }) => {
  const [h, setH] = useState(false);
  return (
    <a href={p.link} target="_blank" rel="noopener noreferrer"
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{
        background:h?(isDark?p.darkPastel+"ee":p.pastel+"cc"):T.cardBg,
        border:`1px solid ${h?p.color+"44":T.cardBord}`, borderRadius:16, padding:32, cursor:"pointer",
        opacity:visible?1:0, transform:visible?(h?"translateY(-8px) scale(1.02)":"translateY(0)"):"translateY(50px)",
        transition:"all 0.7s cubic-bezier(0.16,1,0.3,1)", transitionDelay:visible?`${i*0.12}s`:"0s",
        boxShadow:h?`0 20px 60px ${p.color}18`:`0 1px 3px ${T.shadow}0.04)`, position:"relative", overflow:"hidden",
        textDecoration:"none", display:"block",
      }}>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,transparent,${p.color},transparent)`, opacity:h?1:0, transition:"opacity 0.4s" }} />
      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
        <div style={{ width:8, height:8, borderRadius:"50%", background:p.color, boxShadow:`0 0 8px ${p.color}44` }} />
        <span style={{ fontSize:11, textTransform:"uppercase", letterSpacing:2, color:p.color, fontWeight:600 }}>{p.sub}</span>
      </div>
      <h3 style={{ fontSize:22, fontWeight:700, color:T.text, margin:"8px 0", fontFamily:"'Playfair Display',serif" }}>{p.title}</h3>
      <p style={{ fontSize:12, color:T.text3, marginBottom:12 }}>{p.org} · {p.period}</p>
      <p style={{ fontSize:14, color:T.text2, lineHeight:1.7, marginBottom:20 }}>{lang==="de"&&p.descDe?p.descDe:p.desc}</p>
      <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
        {p.tech.map(t => <span key={t} style={{ padding:"4px 12px", borderRadius:20, fontSize:11, fontWeight:600, background:isDark?p.color+"20":p.pastel, color:p.color, border:`1px solid ${p.color}25` }}>{t}</span>)}
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:6, marginTop:16, fontSize:12, color:p.color, fontWeight:500 }}>
        <span>{t?.viewProject || "View Project"}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </div>
    </a>
  );
};

/* ─── Timeline Item ─── */
export const TimelineItem = ({ item, i, visible, T, t, lang }) => {
  const isE = item.type === "education";
  return (
    <div style={{ display:"flex", gap:24, marginBottom:40, opacity:visible?1:0, transform:visible?"translateX(0)":`translateX(${isE?-40:40}px)`, transition:`all 0.7s cubic-bezier(0.16,1,0.3,1) ${i*0.15}s` }}>
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", minWidth:20 }}>
        <div style={{ width:14, height:14, borderRadius:"50%", flexShrink:0, background:isE?T.accent:T.gold, boxShadow:`0 0 12px ${isE?T.accent:T.gold}55` }} />
        <div style={{ width:1, flex:1, background:T.tl, marginTop:8 }} />
      </div>
      <div style={{ paddingBottom:8 }}>
        <span style={{ fontSize:10, textTransform:"uppercase", letterSpacing:2, fontWeight:600, color:isE?T.accent:T.gold }}>{isE ? (t?.educationTag || "Education") : (t?.experienceTag || "Experience")}</span>
        <h4 style={{ fontSize:18, fontWeight:700, color:T.text, margin:"6px 0 2px", fontFamily:"'Playfair Display',serif" }}>{item.role}</h4>
        <p style={{ fontSize:13, color:T.text3, marginBottom:6 }}>{item.place} · {item.period}</p>
        <p style={{ fontSize:14, color:T.text2, lineHeight:1.6 }}>{lang==="de"&&item.detailsDe?item.detailsDe:item.details}</p>
      </div>
    </div>
  );
};
