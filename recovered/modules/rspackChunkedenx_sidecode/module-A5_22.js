import s from "./module-X_23.js";
import a from "./module-Y_23.js";
import u from "./module-y_2_22.js";
import c from "./module-Za_22.js";
import f from "./module-H_2_22.js";
import h from "./module-vE_22.js";
import l from "./module-lN_22.js";
import v from "./module-N_22.js";
let IteratorPrototype;
let i;
let o;
const p = l("iterator");
let BUGGY_SAFARI_ITERATORS = false;
if ([].keys) {
  if ("next" in (o = [].keys())) {
    if ((i = f(f(o))) !== Object.prototype) {
      IteratorPrototype = i;
    }
  } else {
    BUGGY_SAFARI_ITERATORS = true;
  }
}
if (
  !u(IteratorPrototype) ||
  s(function () {
    const t = {};
    return IteratorPrototype[p].call(t) !== t;
  })
) {
  IteratorPrototype = {};
} else if (v) {
  IteratorPrototype = c(IteratorPrototype);
}
if (!a(IteratorPrototype[p])) {
  h(IteratorPrototype, p, function () {
    return this;
  });
}
export default {
  IteratorPrototype,
  BUGGY_SAFARI_ITERATORS,
};
