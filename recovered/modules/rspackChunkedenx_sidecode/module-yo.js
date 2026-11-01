import n from "./module-zQ.js";
import _o from "./module-yh.js";
import i from "./module-i8.js";
import a from "./module-R5.js";
import s from "./module-Wg_3.js";
import u from "./module-jX.js";
const _o_has = _o.has;
export default function (t) {
  const r = n(this);
  const e = a(t);
  if (i(r) < e.size) {
    return false;
  }
  const c = e.getIterator();
  return (
    s(c, function (t) {
      if (!_o_has(r, t)) {
        return u(c, "normal", false);
      }
    }) !== false
  );
}
