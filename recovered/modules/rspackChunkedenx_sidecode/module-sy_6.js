import n from "./module-zQ_7.js";
import o from "./module-yh_6.js";
import a from "./module-bb_6.js";
import i from "./module-R5_6.js";
import s from "./module-Wg_3_6.js";
const o_add = o.add;
const o_has = o.has;
const o_remove = o.remove;
export default function (t) {
  const r = n(this);
  const e = i(t).getIterator();
  const o = a(r);
  s(e, function (t) {
    if (o_has(r, t)) {
      o_remove(o, t);
    } else {
      o_add(o, t);
    }
  });
  return o;
}
