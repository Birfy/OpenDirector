import n from "./module-WG_2.js";
import o from "./module-O9.js";
import i from "./module-Q.js";
import a from "./module-aq.js";
import s from "./module-F4.js";
import u from "./module-e7.js";
const u_Map = u.Map;
const u_get = u.get;
const u_has = u.has;
const u_set = u.set;
const v = o([].push);
export default function (t) {
  let r;
  let e;
  const o = a(this);
  const u = i(o);
  const p = n(t, arguments.length > 1 ? arguments[1] : undefined);
  const d = new u_Map();
  for (let g = s(u), y = 0; g > y; y++) {
    if (u_has(d, (r = p((e = u[y]), y, o)))) {
      v(u_get(d, r), e);
    } else {
      u_set(d, r, [e]);
    }
  }
  return d;
}
