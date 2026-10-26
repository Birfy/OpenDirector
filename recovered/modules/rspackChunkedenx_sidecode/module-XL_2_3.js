import n from "./module-zQ_4.js";
import _i from "./module-yh_3.js";
import o from "./module-i8_3.js";
import s from "./module-R5_3.js";
import a from "./module-vM_4.js";
import u from "./module-Wg_3_3.js";
import c from "./module-jX_4.js";
const _i_has = _i.has;
export default function (t) {
  const r = n(this);
  const e = s(t);
  if (o(r) <= e.size) {
    return (
      a(
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
      if (_i_has(r, t)) {
        return c(f, "normal", false);
      }
    }) !== false
  );
}
