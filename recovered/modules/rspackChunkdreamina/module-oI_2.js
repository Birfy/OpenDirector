import n from "./module-V2_2.js";
import o from "./module-Do_2.js";
import i from "./module-YF_2.js";
import a from "./module-Gb_3.js";
import s from "./module-cN_3.js";
const o_add = o.add;
const o_has = o.has;
const o_remove = o.remove;
export default function (e) {
  const t = n(this);
  const r = a(e).getIterator();
  const o = i(t);
  s(r, function (e) {
    if (o_has(t, e)) {
      o_remove(o, e);
    } else {
      o_add(o, e);
    }
  });
  return o;
}
