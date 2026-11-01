import n from "./module-WG_2_19.js";
import o from "./module-O9_19.js";
import i from "./module-Q_20.js";
import a from "./module-aq_19.js";
import s from "./module-Vm_2_19.js";
import u from "./module-F4_20.js";
import c from "./module-Za_19.js";
import f from "./module-i1_19.js";
const h = o([].push);
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
      h(m[p], d);
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
