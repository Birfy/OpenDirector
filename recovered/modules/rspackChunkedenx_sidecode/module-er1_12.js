import $ from "./module-M_2_12.js";
import tt from "./module-O9_12.js";
import te from "./module-WG_2_12.js";
import tr from "./module-d_13.js";
import tn from "./module-vo_12.js";
import ti from "./module-Mi_12.js";
import to from "./module-C_13.js";
import ta from "./module-lN_12.js";
const ts = ta("asyncDispose");
const tf = ta("dispose");
const tu = tt([].push);
const tc = (J, Z) => {
  if (Z === "async-dispose") {
    let Q = to(J, ts);
    if (Q !== undefined) {
      return Q;
    }
    Q = to(J, tf);
    return function () {
      $(Q, this);
    };
  }
  return to(J, tf);
};
const th = function (J, Z, Q) {
  if (arguments.length < 3 && !ti(J)) {
    Q = tn(tc(tr(J), Z));
  }
  if (Q === undefined) {
    return function () {};
  }
  return te(Q, J);
};
export default function (J, Z, Q, $) {
  let tt;
  if (arguments.length < 4) {
    if (ti(Z) && Q === "sync-dispose") {
      return;
    }
    tt = th(Z, Q);
  } else {
    tt = th(undefined, Q, $);
  }
  tu(J.stack, tt);
}
