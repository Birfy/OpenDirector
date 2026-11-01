import n from "./module-WG_2_14.js";
import o from "./module-O9_14.js";
import i from "./module-Q_15.js";
import a from "./module-aq_14.js";
import s from "./module-Vm_2_14.js";
import c from "./module-F4_15.js";
import u from "./module-Za_14.js";
import f from "./module-i1_14.js";
const h = o([].push);
export default function (t, r, e, o) {
  let v;
  let p;
  let d;
  const g = a(t);
  const y = i(g);
  const b = n(r, e);
  const m = u(null);
  for (let A = c(y), x = 0; A > x; x++) {
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
