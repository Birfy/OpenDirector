import n from "./module-zQ_7.js";
import o from "./module-yh_6.js";
import a from "./module-bb_6.js";
import i from "./module-i8_6.js";
import s from "./module-R5_6.js";
import c from "./module-vM_7.js";
import u from "./module-Wg_3_6.js";
const o_has = o.has;
const o_remove = o.remove;
export default function (t) {
  const r = n(this);
  const e = s(t);
  const o = a(r);
  if (i(r) <= e.size) {
    c(r, function (t) {
      if (e.includes(t)) {
        o_remove(o, t);
      }
    });
  } else {
    u(e.getIterator(), function (t) {
      if (o_has(r, t)) {
        o_remove(o, t);
      }
    });
  }
  return o;
}
