import a from "./module-X_11.js";
import s from "./module-Y_11.js";
import u from "./module-y_2_10.js";
import c from "./module-Za_10.js";
import f from "./module-H_2_10.js";
import l from "./module-vE_10.js";
import h from "./module-lN_10.js";
import v from "./module-N_10.js";
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
  !u(IteratorPrototype) ||
  a(function () {
    const t = {};
    return IteratorPrototype[p].call(t) !== t;
  })
) {
  IteratorPrototype = {};
} else if (v) {
  IteratorPrototype = c(IteratorPrototype);
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
