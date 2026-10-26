import n from "./module-V2_2.js";
import o from "./module-Do_2.js";
import i from "./module-YF_2.js";
import a from "./module-LE_2.js";
import s from "./module-Gb_3.js";
import u from "./module-Ip_2.js";
import c from "./module-cN_3.js";
const o_has = o.has;
const o_remove = o.remove;
export default function (e) {
  const t = n(this);
  const r = s(e);
  const o = i(t);
  if (a(t) <= r.size) {
    u(t, function (e) {
      if (r.includes(e)) {
        o_remove(o, e);
      }
    });
  } else {
    c(r.getIterator(), function (e) {
      if (o_has(t, e)) {
        o_remove(o, e);
      }
    });
  }
  return o;
}
