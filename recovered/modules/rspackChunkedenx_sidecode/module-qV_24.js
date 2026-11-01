import n from "./module-O9_23.js";
import o from "./module-vo_23.js";
import i from "./module-Mi_23.js";
import a from "./module-F4_24.js";
import s from "./module-aq_23.js";
import c from "./module-e7_23.js";
import u from "./module-JA_24.js";
const c_Map = c.Map;
const c_has = c.has;
const c_set = c.set;
const v = n([].push);
export default function (t) {
  let r;
  let e;
  let n;
  const c = s(this);
  const p = a(c);
  const d = [];
  const g = new c_Map();
  const y = i(t) ? (t) => t : o(t);
  for (r = 0; r < p; r++) {
    if (!c_has(g, (n = y((e = c[r]))))) {
      c_set(g, n, e);
    }
  }
  u(g, function (t) {
    v(d, t);
  });
  return d;
}
