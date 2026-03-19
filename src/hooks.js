import { useState, useEffect, useRef } from "react";
import { translations } from "./data/translations";

/* ─── useInView ─── */
export const useInView = (th = 0.15) => {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.unobserve(el); } }, { threshold: th });
    obs.observe(el); return () => obs.disconnect();
  }, [th]);
  return [ref, v];
};

/* ─── Theme ─── */
const light = {
  bg:"#fafafa",surface:"#ffffff",surfHover:"#eef1f6",border:"rgba(0,0,0,0.06)",borderH:"rgba(0,0,0,0.12)",
  text:"#1a1a2e",text2:"#555770",text3:"#8888a0",navBg:"rgba(250,250,250,0.88)",track:"rgba(0,0,0,0.05)",
  cardBg:"rgba(255,255,255,0.8)",cardBord:"rgba(0,0,0,0.06)",input:"#f4f5f8",thumb:"#ccc",
  mobMenu:"rgba(250,250,250,0.95)",tl:"rgba(0,0,0,0.08)",
  accent:"#2c3e6b",accent2:"#4a6fa5",gold:"#c9a84c",green:"#6b8f71",rose:"#94607a",brown:"#8b6f47",
  heroGrad:"linear-gradient(135deg, #1a1a2e 0%, #2c3e6b 40%, #c9a84c 100%)",
  logoGrad:"linear-gradient(135deg, #2c3e6b, #4a6fa5)",
  btnGrad:"linear-gradient(135deg, #2c3e6b, #4a6fa5)",
  particleColors:["rgba(44,62,107,0.2)","rgba(74,111,165,0.18)","rgba(201,168,76,0.16)","rgba(107,143,113,0.14)","rgba(148,96,122,0.14)"],
  particleLine:(o)=>`rgba(44,62,107,${o})`,
  cursorGlow:"radial-gradient(circle, rgba(44,62,107,0.14) 0%, rgba(201,168,76,0.07) 35%, transparent 65%)",
  shadow:"rgba(44,62,107,",
};
const dark = {
  bg:"#0d1117",surface:"#161b22",surfHover:"#1c2333",border:"rgba(255,255,255,0.08)",borderH:"rgba(255,255,255,0.15)",
  text:"#e6edf3",text2:"#9aa5b4",text3:"#6b7688",navBg:"rgba(13,17,23,0.88)",track:"rgba(255,255,255,0.07)",
  cardBg:"rgba(22,27,34,0.8)",cardBord:"rgba(255,255,255,0.08)",input:"#1c2333",thumb:"#333d4a",
  mobMenu:"rgba(13,17,23,0.95)",tl:"rgba(255,255,255,0.08)",
  accent:"#7aa3d4",accent2:"#5a8bbf",gold:"#c9a84c",green:"#8cb896",rose:"#c4899e",brown:"#c4a97a",
  heroGrad:"linear-gradient(135deg, #e6edf3 0%, #c9a84c 50%, #7aa3d4 100%)",
  logoGrad:"linear-gradient(135deg, #c9a84c, #7aa3d4)",
  btnGrad:"linear-gradient(135deg, #2c3e6b, #4a6fa5)",
  particleColors:["rgba(201,168,76,0.22)","rgba(74,111,165,0.2)","rgba(107,143,113,0.16)","rgba(148,96,122,0.16)","rgba(90,125,168,0.18)"],
  particleLine:(o)=>`rgba(201,168,76,${o})`,
  cursorGlow:"radial-gradient(circle, rgba(201,168,76,0.15) 0%, rgba(74,111,165,0.08) 35%, transparent 65%)",
  shadow:"rgba(201,168,76,",
};

export const useTheme = () => {
  const [m,setM] = useState(()=> typeof window!=="undefined" && window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark":"light");
  useEffect(()=>{ const mq=window.matchMedia("(prefers-color-scheme:dark)"); const h=(e)=>setM(e.matches?"dark":"light"); mq.addEventListener("change",h); return()=>mq.removeEventListener("change",h); },[]);
  return [m==="dark"?dark:light, m, setM];
};

/* ─── useLang ─── */
export const useLang = () => {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  return [t, lang, setLang];
};
