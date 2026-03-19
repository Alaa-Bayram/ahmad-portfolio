import { useEffect, useRef } from "react";

export default function Particles({ T }) {
  const ref = useRef(null), ps = useRef([]), af = useRef(null);
  useEffect(() => {
    const c = ref.current, ctx = c.getContext("2d");
    let w = c.width = window.innerWidth, h = c.height = window.innerHeight;
    const init = () => { ps.current = Array.from({ length: 55 }, () => ({ x: Math.random()*w, y: Math.random()*h, r: Math.random()*2.5+0.5, dx: (Math.random()-0.5)*0.35, dy: (Math.random()-0.5)*0.35, color: T.particleColors[Math.floor(Math.random()*T.particleColors.length)] })); };
    const draw = () => {
      ctx.clearRect(0,0,w,h);
      for (const p of ps.current) { p.x+=p.dx; p.y+=p.dy; if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=p.color; ctx.fill(); }
      for (let i=0; i<ps.current.length; i++) for (let j=i+1; j<ps.current.length; j++) { const a=ps.current[i], b=ps.current[j], d=Math.hypot(a.x-b.x, a.y-b.y); if(d<120){ ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.strokeStyle=T.particleLine(0.07*(1-d/120)); ctx.lineWidth=0.5; ctx.stroke(); } }
      af.current = requestAnimationFrame(draw);
    };
    const resize = () => { w=c.width=window.innerWidth; h=c.height=window.innerHeight; init(); };
    window.addEventListener("resize", resize); init(); draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(af.current); };
  }, [T]);
  return <canvas ref={ref} style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none" }} />;
}
