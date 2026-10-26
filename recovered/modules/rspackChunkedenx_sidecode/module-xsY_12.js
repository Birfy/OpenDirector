import $ from "./module-M_2_12.js";
import tt from "./module-d_13.js";
import te from "./module-Za_12.js";
import tr from "./module-C_13.js";
import tn from "./module-dFV_12.js";
import ti from "./module-b_12.js";
import to from "./module-YR_12.js";
import ta from "./module-fq_12.js";
import ts from "./module-V3_12.js";
const tf = to("Promise");
const tu = "AsyncFromSyncIterator";
const ti_set = ti.set;
const th = ti.getterFor(tu);
const td = (J, Z, Q) => {
  const J_done = J.done;
  tf.resolve(J.value).then((J) => {
    Z(ts(J, J_done));
  }, Q);
};
const tl = function (J) {
  J.type = tu;
  ti_set(this, J);
};
tl.prototype = tn(te(ta), {
  next: function () {
    const J = th(this);
    return new tf(function (Z, Q) {
      td(tt($(J.next, J.iterator)), Z, Q);
    });
  },
  return: function () {
    const iterator = th(this).iterator;
    return new tf(function (Z, Q) {
      const te = tr(iterator, "return");
      if (te === undefined) {
        return Z(ts(undefined, true));
      }
      td(tt($(te, iterator)), Z, Q);
    });
  },
});
export default tl;
