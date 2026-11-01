import n from "./module-O9_9.js";
import o from "./module-vo_9.js";
import i from "./module-Mi_9.js";
import a from "./module-F4_10.js";
import s from "./module-aq_9.js";
import u from "./module-e7_9.js";
import c from "./module-JA_10.js";
const u_Map = u.Map;
const u_has = u.has;
const u_set = u.set;
const v = n([].push);
export default function (t) {
  let e;
  let r;
  let n;
  const u = s(this);
  const d = a(u);
  const p = [];
  const g = new u_Map();
  const y = i(t) ? (t) => t : o(t);
  for (e = 0; e < d; e++) {
    if (!u_has(g, (n = y((r = u[e]))))) {
      u_set(g, n, r);
    }
  }
  c(g, function (t) {
    v(p, t);
  });
  return p;
}
