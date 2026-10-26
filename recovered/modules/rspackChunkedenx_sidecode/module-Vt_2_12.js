import $ from "./module-zQ_13.js";
import tt from "./module-yh_12.js";
import te from "./module-i8_12.js";
import tr from "./module-R5_12.js";
import tn from "./module-vM_13.js";
import ti from "./module-Wg_3_12.js";
const tt_Set = tt.Set;
const tt_add = tt.add;
const tt_has = tt.has;
export default function (J) {
  const Z = $(this);
  const Q = tr(J);
  const tt = new tt_Set();
  if (te(Z) > Q.size) {
    ti(Q.getIterator(), function (J) {
      if (tt_has(Z, J)) {
        tt_add(tt, J);
      }
    });
  } else {
    tn(Z, function (J) {
      if (Q.includes(J)) {
        tt_add(tt, J);
      }
    });
  }
  return tt;
}
