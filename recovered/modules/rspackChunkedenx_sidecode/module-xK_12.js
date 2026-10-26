import $ from "./module-WG_2_12.js";
import tt from "./module-M_2_12.js";
import te from "./module-d_13.js";
import tr from "./module-Z_2_12.js";
import tn from "./module-se_13.js";
import ti from "./module-F4_13.js";
import to from "./module-e_12.js";
import ta from "./module-wz_13.js";
import ts from "./module-Qn_13.js";
import tf from "./module-jX_13.js";
const tc = function (J, Z) {
  this.stopped = J;
  this.result = Z;
};
const tc_prototype = tc.prototype;
export default function (J, Z, Q) {
  let td;
  let tl;
  let tp;
  let tb;
  let tv;
  let tg;
  let ty;
  const tm = Q && Q.that;
  const tw = !!(Q && Q.AS_ENTRIES);
  const tx = !!(Q && Q.IS_RECORD);
  const t_ = !!(Q && Q.IS_ITERATOR);
  const tM = !!(Q && Q.INTERRUPTED);
  const tS = $(Z, tm);
  const tA = function (J) {
    if (td) {
      tf(td, "normal", J);
    }
    return new tc(true, J);
  };
  const tE = (J) => {
    if (tw) {
      te(J);
      if (tM) {
        return tS(J[0], J[1], tA);
      }
      return tS(J[0], J[1]);
    }
    if (tM) {
      return tS(J, tA);
    }
    return tS(J);
  };
  if (tx) {
    td = J.iterator;
  } else if (t_) {
    td = J;
  } else {
    if (!(tl = ts(J))) {
      throw TypeError(tr(J) + " is not iterable");
    }
    if (tn(tl)) {
      tp = 0;
      for (tb = ti(J); tb > tp; tp++) {
        if ((tv = tE(J[tp])) && to(tc_prototype, tv)) {
          return tv;
        }
      }
      return new tc(false);
    }
    td = ta(J, tl);
  }
  for (tg = tx ? J.next : td.next; !(ty = tt(tg, td)).done;) {
    try {
      tv = tE(ty.value);
    } catch (error) {
      tf(td, "throw", error);
    }
    if (typeof tv === "object" && tv && to(tc_prototype, tv)) {
      return tv;
    }
  }
  return new tc(false);
}
