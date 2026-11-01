import n from "./module-A_16.js";
import o from "./module-J_16.js";
import i from "./module-A2_16.js";
import a from "./module-Y_16.js";
import s from "./module-H_2_15.js";
import u from "./module-h_16.js";
import c from "./module-X_16.js";
import f from "./module-D_2_15.js";
import h from "./module-lN_15.js";
import _l from "./module-A5_15.js";
import v from "./module-N_15.js";
const _l_IteratorPrototype = _l.IteratorPrototype;
const p = h("toStringTag");
const o_Iterator = o.Iterator;
const forced =
  v ||
  !a(o_Iterator) ||
  o_Iterator.prototype !== _l_IteratorPrototype ||
  !c(function () {
    o_Iterator({});
  });
const Iterator = function () {
  i(this, _l_IteratorPrototype);
  if (s(this) === _l_IteratorPrototype) {
    throw TypeError("Abstract class Iterator not directly constructable");
  }
};
if (!f(_l_IteratorPrototype, p)) {
  u(_l_IteratorPrototype, p, "Iterator");
}
if (
  forced ||
  !f(_l_IteratorPrototype, "constructor") ||
  _l_IteratorPrototype.constructor === Object
) {
  u(_l_IteratorPrototype, "constructor", Iterator);
}
Iterator.prototype = _l_IteratorPrototype;
n(
  {
    global: true,
    constructor: true,
    forced,
  },
  {
    Iterator,
  },
);
