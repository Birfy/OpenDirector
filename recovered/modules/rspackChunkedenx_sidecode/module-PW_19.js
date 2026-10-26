import n from "./module-zQ_20.js";
import o from "./module-yh_19.js";
import i from "./module-bb_19.js";
import a from "./module-i8_19.js";
import s from "./module-R5_19.js";
import u from "./module-vM_20.js";
import c from "./module-Wg_3_19.js";
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
