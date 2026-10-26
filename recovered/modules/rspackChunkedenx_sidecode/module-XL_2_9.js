import n from "./module-zQ_10.js";
import _o from "./module-yh_9.js";
import i from "./module-i8_9.js";
import a from "./module-R5_9.js";
import s from "./module-vM_10.js";
import u from "./module-Wg_3_9.js";
import c from "./module-jX_10.js";
const _o_has = _o.has;
export default function (t) {
  const e = n(this);
  const r = a(t);
  if (i(e) <= r.size) {
    return (
      s(
        e,
        function (t) {
          if (r.includes(t)) {
            return false;
          }
        },
        true,
      ) !== false
    );
  }
  const f = r.getIterator();
  return (
    u(f, function (t) {
      if (_o_has(e, t)) {
        return c(f, "normal", false);
      }
    }) !== false
  );
}
