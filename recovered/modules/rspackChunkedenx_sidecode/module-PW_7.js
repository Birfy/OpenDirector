import n from "./module-zQ_8.js";
import o from "./module-yh_7.js";
import i from "./module-bb_7.js";
import a from "./module-i8_7.js";
import s from "./module-R5_7.js";
import u from "./module-vM_8.js";
import c from "./module-Wg_3_7.js";
const o_has = o.has;
const o_remove = o.remove;
export default function (r) {
  const t = n(this);
  const e = s(r);
  const o = i(t);
  if (a(t) <= e.size) {
    u(t, function (r) {
      if (e.includes(r)) {
        o_remove(o, r);
      }
    });
  } else {
    c(e.getIterator(), function (r) {
      if (o_has(t, r)) {
        o_remove(o, r);
      }
    });
  }
  return o;
}
