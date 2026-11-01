import a from "./module-X_19.js";
import s from "./module-Y_19.js";
import u from "./module-y_2_18.js";
import c from "./module-Za_18.js";
import f from "./module-H_2_18.js";
import h from "./module-vE_18.js";
import l from "./module-lN_18.js";
import v from "./module-N_18.js";
let IteratorPrototype;
let o;
let i;
const p = l("iterator");
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
  h(IteratorPrototype, p, function () {
    return this;
  });
}
export default {
  IteratorPrototype,
  BUGGY_SAFARI_ITERATORS,
};
