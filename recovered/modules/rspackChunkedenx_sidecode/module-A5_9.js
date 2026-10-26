import a from "./module-X_10.js";
import s from "./module-Y_10.js";
import u from "./module-y_2_9.js";
import c from "./module-Za_9.js";
import f from "./module-H_2_9.js";
import l from "./module-vE_9.js";
import h from "./module-lN_9.js";
import v from "./module-N_9.js";
let IteratorPrototype;
let o;
let i;
const d = h("iterator");
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
    return IteratorPrototype[d].call(t) !== t;
  })
) {
  IteratorPrototype = {};
} else if (v) {
  IteratorPrototype = c(IteratorPrototype);
}
if (!s(IteratorPrototype[d])) {
  l(IteratorPrototype, d, function () {
    return this;
  });
}
export default {
  IteratorPrototype,
  BUGGY_SAFARI_ITERATORS,
};
