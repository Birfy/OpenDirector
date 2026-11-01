import n from "./module-zQ_21.js";
import _o from "./module-yh_20.js";
import i from "./module-i8_20.js";
import a from "./module-R5_20.js";
import s from "./module-vM_21.js";
import c from "./module-Wg_3_20.js";
import u from "./module-jX_21.js";
const _o_has = _o.has;
export default function (t) {
  const r = n(this);
  const e = a(t);
  if (i(r) <= e.size) {
    return (
      s(
        r,
        function (t) {
          if (e.includes(t)) {
            return false;
          }
        },
        true,
      ) !== false
    );
  }
  const f = e.getIterator();
  return (
    c(f, function (t) {
      if (_o_has(r, t)) {
        return u(f, "normal", false);
      }
    }) !== false
  );
}
