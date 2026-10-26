import $ from "./module-zQ_13.js";
import _tt from "./module-yh_12.js";
import te from "./module-i8_12.js";
import tr from "./module-R5_12.js";
import tn from "./module-vM_13.js";
import ti from "./module-Wg_3_12.js";
import to from "./module-jX_13.js";
const _tt_has = _tt.has;
export default function (J) {
  const Z = $(this);
  const Q = tr(J);
  if (te(Z) <= Q.size) {
    return (
      tn(
        Z,
        function (J) {
          if (Q.includes(J)) {
            return false;
          }
        },
        true,
      ) !== false
    );
  }
  const ta = Q.getIterator();
  return (
    ti(ta, function (J) {
      if (_tt_has(Z, J)) {
        return to(ta, "normal", false);
      }
    }) !== false
  );
}
