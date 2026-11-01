import $ from "./module-Y_13.js";
import { f } from "./module-t_13.js";
import te from "./module-nX_12.js";
import tr from "./module-sA_12.js";
export default function (J, Z, Q, tn) {
  if (!tn) {
    tn = {};
  }
  let tn_enumerable = tn.enumerable;
  const to = tn.name !== undefined ? tn.name : Z;
  if ($(Q)) {
    te(Q, to, tn);
  }
  if (tn.global) {
    if (tn_enumerable) {
      J[Z] = Q;
    } else {
      tr(Z, Q);
    }
  } else {
    try {
      if (tn.unsafe) {
        if (J[Z]) {
          tn_enumerable = true;
        }
      } else {
        delete J[Z];
      }
    } catch (J) {}
    if (tn_enumerable) {
      J[Z] = Q;
    } else {
      f(J, Z, {
        value: Q,
        enumerable: false,
        configurable: !tn.nonConfigurable,
        writable: !tn.nonWritable,
      });
    }
  }
  return J;
}
