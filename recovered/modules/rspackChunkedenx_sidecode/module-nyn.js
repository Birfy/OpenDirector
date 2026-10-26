import n from "./module-WG_2.js";
import o from "./module-O9.js";
import i from "./module-Q.js";
import a from "./module-aq.js";
import s from "./module-Vm_2.js";
import u from "./module-F4.js";
import c from "./module-Za.js";
import f from "./module-i1.js";
const l = o([].push);
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
