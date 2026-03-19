import { useEffect, useRef } from "react";

export default function CursorGlow({ T }) {
  const pos = useRef({x:0,y:0}), sm = useRef({x:0,y:0}), el = useRef(null), af = useRef(null);
  useEffect(() => {
    const h = (e) => { pos.current = { x:e.clientX, y:e.clientY }; };
    window.addEventListener("mousemove", h);
    const anim = () => {
      sm.current.x += (pos.current.x - sm.current.x) * 0.06;
      sm.current.y += (pos.current.y - sm.current.y) * 0.06;
      if (el.current) { el.current.style.left = `${sm.current.x-250}px`; el.current.style.top = `${sm.current.y-250}px`; }
      af.current = requestAnimationFrame(anim);
    };
    anim();
    return () => { window.removeEventListener("mousemove", h); cancelAnimationFrame(af.current); };
  }, []);
  return <div ref={el} style={{ position:"fixed", width:500, height:500, borderRadius:"50%", background:T.cursorGlow, pointerEvents:"none", zIndex:1, willChange:"left,top", filter:"blur(4px)" }} />;
}
