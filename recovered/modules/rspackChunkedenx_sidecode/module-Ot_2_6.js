import n from "./module-WG_2_6.js";
import o from "./module-O9_6.js";
import a from "./module-Q_7.js";
import i from "./module-aq_6.js";
import s from "./module-F4_7.js";
import c from "./module-e7_6.js";
const c_Map = c.Map;
const c_get = c.get;
const c_has = c.has;
const c_set = c.set;
const p = o([].push);
export default function (t) {
  let r;
  let e;
  const o = i(this);
  const c = a(o);
  const v = n(t, arguments.length > 1 ? arguments[1] : undefined);
  const d = new c_Map();
  for (let g = s(c), y = 0; g > y; y++) {
    if (c_has(d, (r = v((e = c[y]), y, o)))) {
      p(c_get(d, r), e);
    } else {
      c_set(d, r, [e]);
    }
  }
  return d;
}
