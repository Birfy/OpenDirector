import n from "./module-zQ_16.js";
import _o from "./module-yh_15.js";
import i from "./module-i8_15.js";
import a from "./module-R5_15.js";
import s from "./module-Wg_3_15.js";
import u from "./module-jX_16.js";
const _o_has = _o.has;
export default function (r) {
  const t = n(this);
  const e = a(r);
  if (i(t) < e.size) {
    return false;
  }
  const c = e.getIterator();
  return (
    s(c, function (r) {
      if (!_o_has(t, r)) {
        return u(c, "normal", false);
      }
    }) !== false
  );
}
