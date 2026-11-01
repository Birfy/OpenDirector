import n from "./module-WG_2_7.js";
import o from "./module-O9_7.js";
import i from "./module-Q_8.js";
import a from "./module-aq_7.js";
import s from "./module-Vm_2_7.js";
import u from "./module-F4_8.js";
import c from "./module-Za_7.js";
import f from "./module-i1_7.js";
const h = o([].push);
export default function (r, t, e, o) {
  let v;
  let p;
  let d;
  const g = a(r);
  const y = i(g);
  const m = n(t, e);
  const b = c(null);
  for (let A = u(y), w = 0; A > w; w++) {
    if ((p = s(m((d = y[w]), w, g))) in b) {
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
