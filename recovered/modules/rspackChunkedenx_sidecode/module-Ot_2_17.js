import n from "./module-WG_2_17.js";
import o from "./module-O9_17.js";
import i from "./module-Q_18.js";
import a from "./module-aq_17.js";
import s from "./module-F4_18.js";
import u from "./module-e7_17.js";
const u_Map = u.Map;
const u_get = u.get;
const u_has = u.has;
const u_set = u.set;
const v = o([].push);
export default function (r) {
  let t;
  let e;
  const o = a(this);
  const u = i(o);
  const p = n(r, arguments.length > 1 ? arguments[1] : undefined);
  const d = new u_Map();
  for (let g = s(u), y = 0; g > y; y++) {
    if (u_has(d, (t = p((e = u[y]), y, o)))) {
      v(u_get(d, t), e);
    } else {
      u_set(d, t, [e]);
    }
  }
  return d;
}
