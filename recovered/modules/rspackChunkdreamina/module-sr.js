import n from "./module-V2_2.js";
import _o from "./module-Do_2.js";
import i from "./module-LE_2.js";
import a from "./module-Gb_3.js";
import s from "./module-Ip_2.js";
import u from "./module-cN_3.js";
import c from "./module-tU.js";
const _o_has = _o.has;
export default function (e) {
  const t = n(this);
  const r = a(e);
  if (i(t) <= r.size) {
    return (
      s(
        t,
        function (e) {
          if (r.includes(e)) {
            return false;
          }
        },
        true,
      ) !== false
    );
  }
  const f = r.getIterator();
  return (
    u(f, function (e) {
      if (_o_has(t, e)) {
        return c(f, "normal", false);
      }
    }) !== false
  );
}
