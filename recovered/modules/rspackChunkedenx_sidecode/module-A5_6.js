import i from "./module-X_7.js";
import s from "./module-Y_7.js";
import c from "./module-y_2_6.js";
import u from "./module-Za_6.js";
import f from "./module-H_2_6.js";
import l from "./module-vE_6.js";
import h from "./module-lN_6.js";
import p from "./module-N_6.js";
let IteratorPrototype;
let o;
let a;
const v = h("iterator");
let BUGGY_SAFARI_ITERATORS = false;
if ([].keys) {
  if ("next" in (a = [].keys())) {
    if ((o = f(f(a))) !== Object.prototype) {
      IteratorPrototype = o;
    }
  } else {
    BUGGY_SAFARI_ITERATORS = true;
  }
}
if (
  !c(IteratorPrototype) ||
  i(function () {
    const t = {};
    return IteratorPrototype[v].call(t) !== t;
  })
) {
  IteratorPrototype = {};
} else if (p) {
  IteratorPrototype = u(IteratorPrototype);
}
if (!s(IteratorPrototype[v])) {
  l(IteratorPrototype, v, function () {
    return this;
  });
}
export default {
  IteratorPrototype,
  BUGGY_SAFARI_ITERATORS,
};
