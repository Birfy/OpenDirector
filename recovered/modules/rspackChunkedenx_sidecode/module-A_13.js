import $ from "./module-J_13.js";
import { f } from "./module-R_12.js";
import te from "./module-h_13.js";
import tr from "./module-vE_12.js";
import tn from "./module-sA_12.js";
import ti from "./module-bE_13.js";
import to from "./module-Ze_2_12.js";
export default function (J, Z) {
  let Q;
  let ta;
  let ts;
  let tf;
  let tu;
  const J_target = J.target;
  const J_global = J.global;
  const J_stat = J.stat;
  if (
    (Q = J_global
      ? $
      : J_stat
        ? $[J_target] || tn(J_target, {})
        : ($[J_target] || {}).prototype)
  ) {
    for (ta in Z) {
      tf = Z[ta];
      ts = J.dontCallGetSet ? (tu = f(Q, ta)) && tu.value : Q[ta];
      if (
        !to(J_global ? ta : J_target + (J_stat ? "." : "#") + ta, J.forced) &&
        ts !== undefined
      ) {
        if (typeof tf == typeof ts) {
          continue;
        }
        ti(tf, ts);
      }
      if (J.sham || (ts && ts.sham)) {
        te(tf, "sham", true);
      }
      tr(Q, ta, tf, J);
    }
  }
}
