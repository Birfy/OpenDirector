import n from "./module-zQ_22.js";
import i from "./module-yh_21.js";
import o from "./module-i8_21.js";
import s from "./module-R5_21.js";
import a from "./module-vM_22.js";
import u from "./module-Wg_3_21.js";
const i_Set = i.Set;
const i_add = i.add;
const i_has = i.has;
export default function (t) {
  const r = n(this);
  const e = s(t);
  const i = new i_Set();
  if (o(r) > e.size) {
    u(e.getIterator(), function (t) {
      if (i_has(r, t)) {
        i_add(i, t);
      }
    });
  } else {
    a(r, function (t) {
      if (e.includes(t)) {
        i_add(i, t);
      }
    });
  }
  return i;
}
