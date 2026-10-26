import n from "./module-V2_2.js";
import o from "./module-Do_2.js";
import i from "./module-LE_2.js";
import a from "./module-Gb_3.js";
import s from "./module-Ip_2.js";
import u from "./module-cN_3.js";
const o_Set = o.Set;
const o_add = o.add;
const o_has = o.has;
export default function (e) {
  const t = n(this);
  const r = a(e);
  const o = new o_Set();
  if (i(t) > r.size) {
    u(r.getIterator(), function (e) {
      if (o_has(t, e)) {
        o_add(o, e);
      }
    });
  } else {
    s(t, function (e) {
      if (r.includes(e)) {
        o_add(o, e);
      }
    });
  }
  return o;
}
