import n from "./module-O9_3.js";
import i from "./module-vo_3.js";
import o from "./module-Mi_3.js";
import s from "./module-F4_4.js";
import a from "./module-aq_3.js";
import u from "./module-e7_3.js";
import c from "./module-JA_4.js";
const u_Map = u.Map;
const u_has = u.has;
const u_set = u.set;
const v = n([].push);
export default function (t) {
  let r;
  let e;
  let n;
  const u = a(this);
  const p = s(u);
  const d = [];
  const g = new u_Map();
  const y = o(t) ? (t) => t : i(t);
  for (r = 0; r < p; r++) {
    if (!u_has(g, (n = y((e = u[r]))))) {
      u_set(g, n, e);
    }
  }
  c(g, function (t) {
    v(d, t);
  });
  return d;
}
