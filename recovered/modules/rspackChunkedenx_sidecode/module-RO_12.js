import $ from "./module-O9_12.js";
import tt from "./module-D_2_12.js";
import te from "./module-F_13.js";
import _tr from "./module-g_13.js";
import tn from "./module-S_12.js";
const _tr_indexOf = _tr.indexOf;
const ti = $([].push);
export default function (J, Z) {
  let Q;
  const $ = te(J);
  let to = 0;
  const ta = [];
  for (Q in $) {
    if (!tt(tn, Q) && tt($, Q)) {
      ti(ta, Q);
    }
  }
  while (Z.length > to) {
    if (tt($, (Q = Z[to++]))) {
      if (!~_tr_indexOf(ta, Q)) {
        ti(ta, Q);
      }
    }
  }
  return ta;
}
