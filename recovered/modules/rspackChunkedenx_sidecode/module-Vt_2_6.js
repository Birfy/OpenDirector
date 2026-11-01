import n from "./module-zQ_7.js";
import o from "./module-yh_6.js";
import a from "./module-i8_6.js";
import i from "./module-R5_6.js";
import s from "./module-vM_7.js";
import c from "./module-Wg_3_6.js";
const o_Set = o.Set;
const o_add = o.add;
const o_has = o.has;
export default function (t) {
  const r = n(this);
  const e = i(t);
  const o = new o_Set();
  if (a(r) > e.size) {
    c(e.getIterator(), function (t) {
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
