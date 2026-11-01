import n from "./module-WG_2_6.js";
import o from "./module-O9_6.js";
import a from "./module-Q_7.js";
import i from "./module-aq_6.js";
import s from "./module-Vm_2_6.js";
import c from "./module-F4_7.js";
import u from "./module-Za_6.js";
import f from "./module-i1_6.js";
const h = o([].push);
export default function (t, r, e, o) {
  let p;
  let v;
  let d;
  const g = i(t);
  const y = a(g);
  const m = n(r, e);
  const b = u(null);
  for (let A = c(y), w = 0; A > w; w++) {
    if ((v = s(m((d = y[w]), w, g))) in b) {
      h(b[v], d);
    } else {
      b[v] = [d];
    }
  }
  if (o && (p = o(g)) !== Array) {
    for (v in b) {
      b[v] = f(p, b[v]);
    }
  }
  return b;
}
