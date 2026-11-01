import n from "./module-WG_2_11.js";
import o from "./module-O9_11.js";
import i from "./module-Q_12.js";
import a from "./module-aq_11.js";
import s from "./module-Vm_2_11.js";
import u from "./module-F4_12.js";
import c from "./module-Za_11.js";
import f from "./module-i1_11.js";
const l = o([].push);
export default function (r, t, e, o) {
  let v;
  let p;
  let d;
  const g = a(r);
  const y = i(g);
  const b = n(t, e);
  const m = c(null);
  for (let A = u(y), x = 0; A > x; x++) {
    if ((p = s(b((d = y[x]), x, g))) in m) {
      l(m[p], d);
    } else {
      m[p] = [d];
    }
  }
  if (o && (v = o(g)) !== Array) {
    for (p in m) {
      m[p] = f(v, m[p]);
    }
  }
  return m;
}
