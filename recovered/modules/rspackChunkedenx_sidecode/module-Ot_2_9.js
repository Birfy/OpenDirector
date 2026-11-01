import n from "./module-WG_2_9.js";
import o from "./module-O9_9.js";
import i from "./module-Q_10.js";
import a from "./module-aq_9.js";
import s from "./module-F4_10.js";
import u from "./module-e7_9.js";
const u_Map = u.Map;
const u_get = u.get;
const u_has = u.has;
const u_set = u.set;
const v = o([].push);
export default function (t) {
  let e;
  let r;
  const o = a(this);
  const u = i(o);
  const d = n(t, arguments.length > 1 ? arguments[1] : undefined);
  const p = new u_Map();
  for (let g = s(u), y = 0; g > y; y++) {
    if (u_has(p, (e = d((r = u[y]), y, o)))) {
      v(u_get(p, e), r);
    } else {
      u_set(p, e, [r]);
    }
  }
  return p;
}
