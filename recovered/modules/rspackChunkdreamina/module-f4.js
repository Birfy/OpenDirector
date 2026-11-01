import a from "bT";
if (require.j == "wl4") var o = require("I0V");
if (require.j == "wl4") var i = require("./module-Btq.js");
let n = "animation-open";
let c = "animation-close";
export function Mm({ symbol, active, interval, enable = true }) {
  let s = o.A((t) => {
    let r = `${symbol}-${n}`;
    let a = `${symbol}-${c}`;
    if (t === n) {
      document.body.classList.add(r);
      document.body.classList.remove(a);
    } else if (t === c) {
      document.body.classList.remove(r);
      document.body.classList.add(a);
    } else {
      document.body.classList.remove(r);
      document.body.classList.remove(a);
    }
  });
  let [d, u] = i.P("", interval, s);
  let pRef = a.useRef(false);
  let CRef = a.useRef(enable);
  a.useEffect(() => {
    if (!pRef.current) {
      pRef.current = true;
      return;
    }
    if (CRef.current !== enable) {
      CRef.current = enable;
      return;
    }
    if (enable) {
      if (active) {
        u(n);
      } else {
        u(c);
      }
    }
  }, [active, enable]);
  return d;
}
