import n from "./module-zQ_14.js";
import _o from "./module-yh_13.js";
import i from "./module-i8_13.js";
import a from "./module-R5_13.js";
import s from "./module-Wg_3_13.js";
import u from "./module-jX_14.js";
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
