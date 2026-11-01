import n from "./module-zQ_9.js";
import i from "./module-yh_8.js";
import o from "./module-bb_8.js";
import s from "./module-R5_8.js";
import a from "./module-Wg_3_8.js";
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
