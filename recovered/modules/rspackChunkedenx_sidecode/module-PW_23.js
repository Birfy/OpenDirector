import n from "./module-zQ_24.js";
import o from "./module-yh_23.js";
import i from "./module-bb_23.js";
import a from "./module-i8_23.js";
import s from "./module-R5_23.js";
import c from "./module-vM_24.js";
import u from "./module-Wg_3_23.js";
const o_has = o.has;
const o_remove = o.remove;
export default function (t) {
  const r = n(this);
  const e = s(t);
  const o = i(r);
  if (a(r) <= e.size) {
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
