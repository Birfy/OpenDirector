import $ from "./module-zQ_13.js";
import tt from "./module-yh_12.js";
import te from "./module-bb_12.js";
import tr from "./module-i8_12.js";
import tn from "./module-R5_12.js";
import ti from "./module-vM_13.js";
import to from "./module-Wg_3_12.js";
const tt_has = tt.has;
const tt_remove = tt.remove;
export default function (J) {
  const Z = $(this);
  const Q = tn(J);
  const tt = te(Z);
  if (tr(Z) <= Q.size) {
    ti(Z, function (J) {
      if (Q.includes(J)) {
        tt_remove(tt, J);
      }
    });
  } else {
    to(Q.getIterator(), function (J) {
      if (tt_has(Z, J)) {
        tt_remove(tt, J);
      }
    });
  }
  return tt;
}
