import n from "./module-zQ_11.js";
import o from "./module-yh_10.js";
import i from "./module-bb_10.js";
import a from "./module-R5_10.js";
import s from "./module-Wg_3_10.js";
const o_add = o.add;
const o_has = o.has;
const o_remove = o.remove;
export default function (t) {
  const r = n(this);
  const e = a(t).getIterator();
  const o = i(r);
  s(e, function (t) {
    if (o_has(r, t)) {
      o_remove(o, t);
    } else {
      o_add(o, t);
    }
  });
  return o;
}
