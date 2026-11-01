import $ from "./module-A_13.js";
import tt from "./module-N_12.js";
import _te from "./module-FK_12.js";
import tr from "./module-xl_13.js";
import tn from "./module-YR_12.js";
import ti from "./module-Y_13.js";
import to from "./module-vE_12.js";
const _te_CONSTRUCTOR = _te.CONSTRUCTOR;
const ta = tr && tr.prototype;
$(
  {
    target: "Promise",
    proto: true,
    forced: _te_CONSTRUCTOR,
    real: true,
  },
  {
    catch: function (J) {
      return this.then(undefined, J);
    },
  },
);
if (!tt && ti(tr)) {
  const ts = tn("Promise").prototype.catch;
  if (ta.catch !== ts) {
    to(ta, "catch", ts, {
      unsafe: true,
    });
  }
}
