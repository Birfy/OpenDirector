import a from "./module-X_20.js";
import s from "./module-Y_20.js";
import u from "./module-y_2_19.js";
import c from "./module-Za_19.js";
import f from "./module-H_2_19.js";
import l from "./module-vE_19.js";
import h from "./module-lN_19.js";
import v from "./module-N_19.js";
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
    const r = {};
    return IteratorPrototype[p].call(r) !== r;
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
