import n from "./module-zQ_23.js";
import i from "./module-yh_22.js";
import o from "./module-bb_22.js";
import s from "./module-R5_22.js";
import a from "./module-Wg_3_22.js";
const i_add = i.add;
const i_has = i.has;
const i_remove = i.remove;
export default function (t) {
  const r = n(this);
  const e = s(t).getIterator();
  const i = o(r);
  a(e, function (t) {
    if (i_has(r, t)) {
      i_remove(i, t);
    } else {
      i_add(i, t);
    }
  });
  return i;
}
