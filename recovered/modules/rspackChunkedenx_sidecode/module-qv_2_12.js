import $ from "./module-M_2_12.js";
import tt from "./module-vE_12.js";
import te from "./module-YR_12.js";
import tr from "./module-C_13.js";
import tn from "./module-D_2_12.js";
import ti from "./module-lN_12.js";
import to from "./module-fq_12.js";
const ta = ti("asyncDispose");
const ts = te("Promise");
if (!tn(to, ta)) {
  tt(to, ta, function () {
    const J = this;
    return new ts(function (Z, Q) {
      const tt = tr(J, "return");
      if (tt) {
        ts.resolve($(tt, J)).then(() => {
          Z(undefined);
        }, Q);
      } else {
        Z(undefined);
      }
    });
  });
}
