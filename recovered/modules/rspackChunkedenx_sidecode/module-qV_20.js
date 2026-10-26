import n from "./module-O9_19.js";
import o from "./module-vo_19.js";
import i from "./module-Mi_19.js";
import a from "./module-F4_20.js";
import s from "./module-aq_19.js";
import u from "./module-e7_19.js";
import c from "./module-JA_20.js";
const u_Map = u.Map;
const u_has = u.has;
const u_set = u.set;
const v = n([].push);
export default function (r) {
  let t;
  let e;
  let n;
  const u = s(this);
  const p = a(u);
  const d = [];
  const g = new u_Map();
  const y = i(r) ? (r) => r : o(r);
  for (t = 0; t < p; t++) {
    if (!u_has(g, (n = y((e = u[t]))))) {
      u_set(g, n, e);
    }
  }
  c(g, function (r) {
    v(d, r);
  });
  return d;
}
