import n from "./module-O9_10.js";
import o from "./module-vo_10.js";
import i from "./module-Mi_10.js";
import a from "./module-F4_11.js";
import s from "./module-aq_10.js";
import u from "./module-e7_10.js";
import c from "./module-JA_11.js";
const u_Map = u.Map;
const u_has = u.has;
const u_set = u.set;
const v = n([].push);
export default function (t) {
  let r;
  let e;
  let n;
  const u = s(this);
  const p = a(u);
  const d = [];
  const g = new u_Map();
  const y = i(t) ? (t) => t : o(t);
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
