import r from "zS";
import l from "bT";
export function a(e, t) {
  const [a, setA] = l.useState(false);
  const iRef = l.useRef(0);
  const sRef = l.useRef(0);
  const o = r.A(() => {
    if (Date.now() - iRef.current >= t) {
      setA(true);
    }
    sRef.current = 0;
  });
  const u = r.A(() => {
    iRef.current = Date.now();
    setA(false);
    if (sRef.current) {
      clearTimeout(sRef.current);
    }
    sRef.current = setTimeout(o, t);
  });
  const d = r.A(() => {
    iRef.current = Date.now();
    sRef.current = setTimeout(o, t);
    document.addEventListener("mousemove", u);
  });
  const c = r.A(() => {
    setA(false);
    if (sRef.current) {
      clearTimeout(sRef.current);
      sRef.current = 0;
    }
    iRef.current = Date.now();
    document.removeEventListener("mousemove", u);
  });
  l.useEffect(() => {
    if (e) {
      d();
    } else {
      c();
    }
  }, [e, d, c]);
  l.useEffect(() => c, [c]);
  return a;
}
