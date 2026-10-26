import n from "./module-A_20.js";
import o from "./module-J_20.js";
import i from "./module-A2_20.js";
import a from "./module-Y_20.js";
import s from "./module-H_2_19.js";
import u from "./module-h_20.js";
import c from "./module-X_20.js";
import f from "./module-D_2_19.js";
import l from "./module-lN_19.js";
import _h from "./module-A5_19.js";
import v from "./module-N_19.js";
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
