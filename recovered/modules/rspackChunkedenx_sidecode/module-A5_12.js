import tr from "./module-X_13.js";
import tn from "./module-Y_13.js";
import ti from "./module-y_2_12.js";
import to from "./module-Za_12.js";
import ta from "./module-H_2_12.js";
import ts from "./module-vE_12.js";
import tf from "./module-lN_12.js";
import tu from "./module-N_12.js";
let IteratorPrototype;
let tt;
let te;
const tc = tf("iterator");
let BUGGY_SAFARI_ITERATORS = false;
if ([].keys) {
  if ("next" in (te = [].keys())) {
    if ((tt = ta(ta(te))) !== Object.prototype) {
      IteratorPrototype = tt;
    }
  } else {
    BUGGY_SAFARI_ITERATORS = true;
  }
}
if (
  !ti(IteratorPrototype) ||
  tr(function () {
    const J = {};
    return IteratorPrototype[tc].call(J) !== J;
  })
) {
  IteratorPrototype = {};
} else if (tu) {
  IteratorPrototype = to(IteratorPrototype);
}
if (!tn(IteratorPrototype[tc])) {
  ts(IteratorPrototype, tc, function () {
    return this;
  });
}
export default {
  IteratorPrototype,
  BUGGY_SAFARI_ITERATORS,
};
