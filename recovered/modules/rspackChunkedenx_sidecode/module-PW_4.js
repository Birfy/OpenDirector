import n from "./module-zQ_5.js";
import i from "./module-yh_4.js";
import o from "./module-bb_4.js";
import s from "./module-i8_4.js";
import a from "./module-R5_4.js";
import u from "./module-vM_5.js";
import c from "./module-Wg_3_4.js";
const i_has = i.has;
const i_remove = i.remove;
export default function (t) {
  const r = n(this);
  const e = a(t);
  const i = o(r);
  if (s(r) <= e.size) {
    u(r, function (t) {
      if (e.includes(t)) {
        i_remove(i, t);
      }
    });
  } else {
    c(e.getIterator(), function (t) {
      if (i_has(r, t)) {
        i_remove(i, t);
      }
    });
  }
  return i;
}
