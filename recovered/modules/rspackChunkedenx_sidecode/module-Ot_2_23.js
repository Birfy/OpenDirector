import n from "./module-WG_2_23.js";
import o from "./module-O9_23.js";
import i from "./module-Q_24.js";
import a from "./module-aq_23.js";
import s from "./module-F4_24.js";
import c from "./module-e7_23.js";
const c_Map = c.Map;
const c_get = c.get;
const c_has = c.has;
const c_set = c.set;
const v = o([].push);
export default function (t) {
  let r;
  let e;
  const o = a(this);
  const c = i(o);
  const p = n(t, arguments.length > 1 ? arguments[1] : undefined);
  const d = new c_Map();
  for (let g = s(c), y = 0; g > y; y++) {
    if (c_has(d, (r = p((e = c[y]), y, o)))) {
      v(c_get(d, r), e);
    } else {
      c_set(d, r, [e]);
    }
  }
  return d;
}
