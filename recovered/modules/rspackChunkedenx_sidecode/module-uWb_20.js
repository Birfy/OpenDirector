import n from "./module-A_21.js";
import o from "./module-J_21.js";
import i from "./module-A2_21.js";
import a from "./module-Y_21.js";
import s from "./module-H_2_20.js";
import c from "./module-h_21.js";
import u from "./module-X_21.js";
import f from "./module-D_2_20.js";
import l from "./module-lN_20.js";
import _h from "./module-A5_20.js";
import v from "./module-N_20.js";
const _h_IteratorPrototype = _h.IteratorPrototype;
const p = l("toStringTag");
const o_Iterator = o.Iterator;
const forced =
  v ||
  !a(o_Iterator) ||
  o_Iterator.prototype !== _h_IteratorPrototype ||
  !u(function () {
    o_Iterator({});
  });
const Iterator = function () {
  i(this, _h_IteratorPrototype);
  if (s(this) === _h_IteratorPrototype) {
    throw TypeError("Abstract class Iterator not directly constructable");
  }
};
if (!f(_h_IteratorPrototype, p)) {
  c(_h_IteratorPrototype, p, "Iterator");
}
if (
  forced ||
  !f(_h_IteratorPrototype, "constructor") ||
  _h_IteratorPrototype.constructor === Object
) {
  c(_h_IteratorPrototype, "constructor", Iterator);
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
