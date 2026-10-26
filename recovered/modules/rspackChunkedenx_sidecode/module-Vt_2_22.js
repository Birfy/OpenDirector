import n from "./module-zQ_23.js";
import i from "./module-yh_22.js";
import o from "./module-i8_22.js";
import s from "./module-R5_22.js";
import a from "./module-vM_23.js";
import u from "./module-Wg_3_22.js";
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
