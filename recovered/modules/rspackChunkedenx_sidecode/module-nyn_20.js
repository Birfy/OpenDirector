import n from "./module-WG_2_20.js";
import o from "./module-O9_20.js";
import i from "./module-Q_21.js";
import a from "./module-aq_20.js";
import s from "./module-Vm_2_20.js";
import c from "./module-F4_21.js";
import u from "./module-Za_20.js";
import f from "./module-i1_20.js";
const h = o([].push);
export default function (t, r, e, o) {
  let v;
  let p;
  let d;
  const g = a(t);
  const y = i(g);
  const m = n(r, e);
  const b = u(null);
  for (let w = c(y), A = 0; w > A; A++) {
    if ((p = s(m((d = y[A]), A, g))) in b) {
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
