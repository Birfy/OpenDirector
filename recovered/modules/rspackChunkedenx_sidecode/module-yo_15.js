import n from "./module-zQ_15.js";
import _o from "./module-yh_14.js";
import i from "./module-i8_14.js";
import a from "./module-R5_14.js";
import s from "./module-Wg_3_14.js";
import c from "./module-jX_15.js";
const _o_has = _o.has;
export default function (t) {
  const r = n(this);
  const e = a(t);
  if (i(r) < e.size) {
    return false;
  }
  const u = e.getIterator();
  return (
    s(u, function (t) {
      if (!_o_has(r, t)) {
        return c(u, "normal", false);
      }
    }) !== false
  );
}
