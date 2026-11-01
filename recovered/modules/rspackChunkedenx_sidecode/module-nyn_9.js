import n from "./module-WG_2_9.js";
import o from "./module-O9_9.js";
import i from "./module-Q_10.js";
import a from "./module-aq_9.js";
import s from "./module-Vm_2_9.js";
import u from "./module-F4_10.js";
import c from "./module-Za_9.js";
import f from "./module-i1_9.js";
const h = o([].push);
export default function (t, e, r, o) {
  let v;
  let d;
  let p;
  const g = a(t);
  const y = i(g);
  const m = n(e, r);
  const b = c(null);
  for (let w = u(y), A = 0; w > A; A++) {
    if ((d = s(m((p = y[A]), A, g))) in b) {
      h(b[d], p);
    } else {
      b[d] = [p];
    }
  }
  if (o && (v = o(g)) !== Array) {
    for (d in b) {
      b[d] = f(v, b[d]);
    }
  }
  return b;
}
