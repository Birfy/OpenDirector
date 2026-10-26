import n from "./module-WG_2_10.js";
import o from "./module-O9_10.js";
import i from "./module-Q_11.js";
import a from "./module-aq_10.js";
import s from "./module-Vm_2_10.js";
import u from "./module-F4_11.js";
import c from "./module-Za_10.js";
import f from "./module-i1_10.js";
const h = o([].push);
export default function (t, r, e, o) {
  let v;
  let p;
  let d;
  const g = a(t);
  const y = i(g);
  const b = n(r, e);
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
