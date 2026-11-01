import n from "./module-o.js";
import o from "./module-B.js";
import i from "./module-D.js";
import a from "./module-OG_2.js";
import s from "./module-O_2.js";
import u from "./module-UF_2.js";
import c from "./module-jnk.js";
const u_Map = u.Map;
const u_has = u.has;
const u_set = u.set;
const h = n([].push);
export default function (e) {
  let t;
  let r;
  let n;
  const u = s(this);
  const v = a(u);
  const d = [];
  const g = new u_Map();
  const y = i(e) ? (e) => e : o(e);
  for (t = 0; t < v; t++) {
    if (!u_has(g, (n = y((r = u[t]))))) {
      u_set(g, n, r);
    }
  }
  c(g, function (e) {
    h(d, e);
  });
  return d;
}
