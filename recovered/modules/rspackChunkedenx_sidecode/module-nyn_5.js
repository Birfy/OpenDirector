import n from "./module-WG_2_5.js";
import i from "./module-O9_5.js";
import o from "./module-Q_6.js";
import s from "./module-aq_5.js";
import a from "./module-Vm_2_5.js";
import u from "./module-F4_6.js";
import c from "./module-Za_5.js";
import f from "./module-i1_5.js";
const l = i([].push);
export default function (t, r, e, i) {
  let v;
  let p;
  let d;
  const g = s(t);
  const y = o(g);
  const b = n(r, e);
  const m = c(null);
  for (let A = u(y), x = 0; A > x; x++) {
    if ((p = a(b((d = y[x]), x, g))) in m) {
      l(m[p], d);
    } else {
      m[p] = [d];
    }
  }
  if (i && (v = i(g)) !== Array) {
    for (p in m) {
      m[p] = f(v, m[p]);
    }
  }
  return m;
}
