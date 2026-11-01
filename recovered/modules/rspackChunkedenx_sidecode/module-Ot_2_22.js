import n from "./module-WG_2_22.js";
import i from "./module-O9_22.js";
import o from "./module-Q_23.js";
import s from "./module-aq_22.js";
import a from "./module-F4_23.js";
import u from "./module-e7_22.js";
const u_Map = u.Map;
const u_get = u.get;
const u_has = u.has;
const u_set = u.set;
const v = i([].push);
export default function (t) {
  let r;
  let e;
  const i = s(this);
  const u = o(i);
  const p = n(t, arguments.length > 1 ? arguments[1] : undefined);
  const d = new u_Map();
  for (let g = a(u), y = 0; g > y; y++) {
    if (u_has(d, (r = p((e = u[y]), y, i)))) {
      v(u_get(d, r), e);
    } else {
      u_set(d, r, [e]);
    }
  }
  return d;
}
