import n from "./module-zQ_10.js";
import o from "./module-yh_9.js";
import i from "./module-bb_9.js";
import a from "./module-R5_9.js";
import s from "./module-Wg_3_9.js";
const o_add = o.add;
const o_has = o.has;
const o_remove = o.remove;
export default function (t) {
  const e = n(this);
  const r = a(t).getIterator();
  const o = i(e);
  s(r, function (t) {
    if (o_has(e, t)) {
      o_remove(o, t);
    } else {
      o_add(o, t);
    }
  });
  return o;
}
