import n from "./module-A_17.js";
import o from "./module-J_17.js";
import i from "./module-A2_17.js";
import a from "./module-Y_17.js";
import s from "./module-H_2_16.js";
import u from "./module-h_17.js";
import c from "./module-X_17.js";
import f from "./module-D_2_16.js";
import l from "./module-lN_16.js";
import _h from "./module-A5_16.js";
import v from "./module-N_16.js";
const _h_IteratorPrototype = _h.IteratorPrototype;
const p = l("toStringTag");
const o_Iterator = o.Iterator;
const forced =
  v ||
  !a(o_Iterator) ||
  o_Iterator.prototype !== _h_IteratorPrototype ||
  !c(function () {
    o_Iterator({});
  });
const Iterator = function () {
  i(this, _h_IteratorPrototype);
  if (s(this) === _h_IteratorPrototype) {
    throw TypeError("Abstract class Iterator not directly constructable");
  }
};
if (!f(_h_IteratorPrototype, p)) {
  u(_h_IteratorPrototype, p, "Iterator");
}
if (
  forced ||
  !f(_h_IteratorPrototype, "constructor") ||
  _h_IteratorPrototype.constructor === Object
) {
  u(_h_IteratorPrototype, "constructor", Iterator);
}
Iterator.prototype = _h_IteratorPrototype;
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
