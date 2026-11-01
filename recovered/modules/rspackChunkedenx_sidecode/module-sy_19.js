import n from "./module-zQ_20.js";
import o from "./module-yh_19.js";
import i from "./module-bb_19.js";
import a from "./module-R5_19.js";
import s from "./module-Wg_3_19.js";
const o_add = o.add;
const o_has = o.has;
const o_remove = o.remove;
export default function (r) {
  const t = n(this);
  const e = a(r).getIterator();
  const o = i(t);
  s(e, function (r) {
    if (o_has(t, r)) {
      o_remove(o, r);
    } else {
      o_add(o, r);
    }
  });
  return o;
}
