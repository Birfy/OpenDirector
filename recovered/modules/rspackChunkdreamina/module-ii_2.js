import a from "./module-VV_4.js";
import s from "./module-r.js";
import u from "./module-N.js";
import c from "./module-lY_4.js";
import f from "./module-jA_2.js";
import l from "./module-xX_2.js";
import p from "./module-Nt_3.js";
import h from "./module-K.js";
let IteratorPrototype;
let o;
let i;
const v = p("iterator");
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
    const e = {};
    return IteratorPrototype[v].call(e) !== e;
  })
) {
  IteratorPrototype = {};
} else if (h) {
  IteratorPrototype = c(IteratorPrototype);
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
