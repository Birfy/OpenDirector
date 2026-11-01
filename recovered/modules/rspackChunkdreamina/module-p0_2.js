import n from "./module-V2_2.js";
import _o from "./module-Do_2.js";
import i from "./module-LE_2.js";
import a from "./module-Gb_3.js";
import s from "./module-cN_3.js";
import u from "./module-tU.js";
const _o_has = _o.has;
export default function (e) {
  const t = n(this);
  const r = a(e);
  if (i(t) < r.size) {
    return false;
  }
  const c = r.getIterator();
  return (
    s(c, function (e) {
      if (!_o_has(t, e)) {
        return u(c, "normal", false);
      }
    }) !== false
  );
}
