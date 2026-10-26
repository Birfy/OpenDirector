import $ from "./module-zQ_13.js";
import tt from "./module-yh_12.js";
import te from "./module-bb_12.js";
import tr from "./module-R5_12.js";
import tn from "./module-Wg_3_12.js";
const tt_add = tt.add;
const tt_has = tt.has;
const tt_remove = tt.remove;
export default function (J) {
  const Z = $(this);
  const Q = tr(J).getIterator();
  const tt = te(Z);
  tn(Q, function (J) {
    if (tt_has(Z, J)) {
      tt_remove(tt, J);
    } else {
      tt_add(tt, J);
    }
  });
  return tt;
}
