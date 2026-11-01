import n from "./module-zQ_22.js";
import _i from "./module-yh_21.js";
import o from "./module-i8_21.js";
import s from "./module-R5_21.js";
import a from "./module-Wg_3_21.js";
import u from "./module-jX_22.js";
const _i_has = _i.has;
export default function (t) {
  const r = n(this);
  const e = s(t);
  if (o(r) < e.size) {
    return false;
  }
  const c = e.getIterator();
  return (
    a(c, function (t) {
      if (!_i_has(r, t)) {
        return u(c, "normal", false);
      }
    }) !== false
  );
}
