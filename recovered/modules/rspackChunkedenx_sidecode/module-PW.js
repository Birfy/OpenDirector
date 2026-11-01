import n from "./module-zQ.js";
import o from "./module-yh.js";
import i from "./module-bb.js";
import a from "./module-i8.js";
import s from "./module-R5.js";
import u from "./module-vM.js";
import c from "./module-Wg_3.js";
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
