import n from "./module-WG_2_16.js";
import o from "./module-O9_16.js";
import i from "./module-Q_17.js";
import a from "./module-aq_16.js";
import s from "./module-Vm_2_16.js";
import u from "./module-F4_17.js";
import c from "./module-Za_16.js";
import f from "./module-i1_16.js";
const h = o([].push);
export default function (t, r, e, o) {
  let v;
  let p;
  let d;
  const g = a(t);
  const y = i(g);
  const m = n(r, e);
  const b = c(null);
  for (let A = u(y), x = 0; A > x; x++) {
    if ((p = s(m((d = y[x]), x, g))) in b) {
      h(b[p], d);
    } else {
      b[p] = [d];
    }
  }
  if (o && (v = o(g)) !== Array) {
    for (p in b) {
      b[p] = f(v, b[p]);
    }
  }
  return b;
}
