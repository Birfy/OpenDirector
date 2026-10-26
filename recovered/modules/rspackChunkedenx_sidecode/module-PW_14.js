import n from "./module-zQ_15.js";
import o from "./module-yh_14.js";
import i from "./module-bb_14.js";
import a from "./module-i8_14.js";
import s from "./module-R5_14.js";
import c from "./module-vM_15.js";
import u from "./module-Wg_3_14.js";
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
