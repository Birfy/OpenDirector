import n from "./module-zQ_24.js";
import _o from "./module-yh_23.js";
import i from "./module-i8_23.js";
import a from "./module-R5_23.js";
import s from "./module-Wg_3_23.js";
import c from "./module-jX_24.js";
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
