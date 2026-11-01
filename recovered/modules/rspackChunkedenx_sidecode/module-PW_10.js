import n from "./module-zQ_11.js";
import o from "./module-yh_10.js";
import i from "./module-bb_10.js";
import a from "./module-i8_10.js";
import s from "./module-R5_10.js";
import u from "./module-vM_11.js";
import c from "./module-Wg_3_10.js";
const o_has = o.has;
const o_remove = o.remove;
export default function (t) {
  const r = n(this);
  const e = s(t);
  const o = i(r);
  if (a(r) <= e.size) {
    u(r, function (t) {
      if (e.includes(t)) {
        o_remove(o, t);
      }
    });
  } else {
    c(e.getIterator(), function (t) {
      if (o_has(r, t)) {
        o_remove(o, t);
      }
    });
  }
  return o;
}
