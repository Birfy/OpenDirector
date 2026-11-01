import a from "./module-X_21.js";
import s from "./module-Y_21.js";
import c from "./module-y_2_20.js";
import u from "./module-Za_20.js";
import f from "./module-H_2_20.js";
import l from "./module-vE_20.js";
import h from "./module-lN_20.js";
import v from "./module-N_20.js";
let IteratorPrototype;
let o;
let i;
const p = h("iterator");
let BUGGY_SAFARI_ITERATORS = false;
if ([].keys) {
  if ("next" in (i = [].keys())) {
    if ((o = f(f(i))) !== Object.prototype) {
      IteratorPrototype = o;
    }
  } else {
    BUGGY_SAFARI_ITERATORS = true;
  }
}
if (
  !c(IteratorPrototype) ||
  a(function () {
    const t = {};
    return IteratorPrototype[p].call(t) !== t;
  })
) {
  IteratorPrototype = {};
} else if (v) {
  IteratorPrototype = u(IteratorPrototype);
}
if (!s(IteratorPrototype[p])) {
  l(IteratorPrototype, p, function () {
    return this;
  });
}
export default {
  IteratorPrototype,
  BUGGY_SAFARI_ITERATORS,
};
