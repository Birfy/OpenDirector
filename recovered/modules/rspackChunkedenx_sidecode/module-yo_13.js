import $ from "./module-zQ_13.js";
import _tt from "./module-yh_12.js";
import te from "./module-i8_12.js";
import tr from "./module-R5_12.js";
import tn from "./module-Wg_3_12.js";
import ti from "./module-jX_13.js";
const _tt_has = _tt.has;
export default function (J) {
  const Z = $(this);
  const Q = tr(J);
  if (te(Z) < Q.size) {
    return false;
  }
  const to = Q.getIterator();
  return (
    tn(to, function (J) {
      if (!_tt_has(Z, J)) {
        return ti(to, "normal", false);
      }
    }) !== false
  );
}
