import n from "./module-zQ_10.js";
import o from "./module-yh_9.js";
import i from "./module-bb_9.js";
import a from "./module-i8_9.js";
import s from "./module-R5_9.js";
import u from "./module-vM_10.js";
import c from "./module-Wg_3_9.js";
const o_has = o.has;
const o_remove = o.remove;
export default function (t) {
  const e = n(this);
  const r = s(t);
  const o = i(e);
  if (a(e) <= r.size) {
    u(e, function (t) {
      if (r.includes(t)) {
        o_remove(o, t);
      }
    });
  } else {
    c(r.getIterator(), function (t) {
      if (o_has(e, t)) {
        o_remove(o, t);
      }
    });
  }
  return o;
}
