import n from "./module-zQ_7.js";
import _o from "./module-yh_6.js";
import a from "./module-i8_6.js";
import i from "./module-R5_6.js";
import s from "./module-Wg_3_6.js";
import c from "./module-jX_7.js";
const _o_has = _o.has;
export default function (t) {
  const r = n(this);
  const e = i(t);
  if (a(r) < e.size) {
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
