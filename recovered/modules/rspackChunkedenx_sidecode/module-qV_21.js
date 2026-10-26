import n from "./module-O9_20.js";
import o from "./module-vo_20.js";
import i from "./module-Mi_20.js";
import a from "./module-F4_21.js";
import s from "./module-aq_20.js";
import c from "./module-e7_20.js";
import u from "./module-JA_21.js";
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
