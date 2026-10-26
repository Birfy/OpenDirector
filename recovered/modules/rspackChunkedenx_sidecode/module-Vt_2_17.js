import n from "./module-zQ_18.js";
import o from "./module-yh_17.js";
import i from "./module-i8_17.js";
import a from "./module-R5_17.js";
import s from "./module-vM_18.js";
import u from "./module-Wg_3_17.js";
const o_Set = o.Set;
const o_add = o.add;
const o_has = o.has;
export default function (r) {
  const t = n(this);
  const e = a(r);
  const o = new o_Set();
  if (i(t) > e.size) {
    u(e.getIterator(), function (r) {
      if (o_has(t, r)) {
        o_add(o, r);
      }
    });
  } else {
    s(t, function (r) {
      if (e.includes(r)) {
        o_add(o, r);
      }
    });
  }
  return o;
}
