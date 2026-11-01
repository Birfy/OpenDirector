import n from "./module-zQ_10.js";
import o from "./module-yh_9.js";
import i from "./module-i8_9.js";
import a from "./module-R5_9.js";
import s from "./module-vM_10.js";
import u from "./module-Wg_3_9.js";
const o_Set = o.Set;
const o_add = o.add;
const o_has = o.has;
export default function (t) {
  const e = n(this);
  const r = a(t);
  const o = new o_Set();
  if (i(e) > r.size) {
    u(r.getIterator(), function (t) {
      if (o_has(e, t)) {
        o_add(o, t);
      }
    });
  } else {
    s(e, function (t) {
      if (r.includes(t)) {
        o_add(o, t);
      }
    });
  }
  return o;
}
