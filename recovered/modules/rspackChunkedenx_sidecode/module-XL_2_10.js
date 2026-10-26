import n from "./module-zQ_11.js";
import _o from "./module-yh_10.js";
import i from "./module-i8_10.js";
import a from "./module-R5_10.js";
import s from "./module-vM_11.js";
import u from "./module-Wg_3_10.js";
import c from "./module-jX_11.js";
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
    u(f, function (t) {
      if (_o_has(r, t)) {
        return c(f, "normal", false);
      }
    }) !== false
  );
}
