import n from "./module-zQ_11.js";
import o from "./module-yh_10.js";
import i from "./module-i8_10.js";
import a from "./module-R5_10.js";
import s from "./module-vM_11.js";
import u from "./module-Wg_3_10.js";
const o_Set = o.Set;
const o_add = o.add;
const o_has = o.has;
export default function (t) {
  const r = n(this);
  const e = a(t);
  const o = new o_Set();
  if (i(r) > e.size) {
    u(e.getIterator(), function (t) {
      if (o_has(r, t)) {
        o_add(o, t);
      }
    });
  } else {
    s(r, function (t) {
      if (e.includes(t)) {
        o_add(o, t);
      }
    });
  }
  return o;
}
