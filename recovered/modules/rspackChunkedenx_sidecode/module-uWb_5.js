import n from "./module-A_6.js";
import i from "./module-J_6.js";
import o from "./module-A2_6.js";
import s from "./module-Y_6.js";
import a from "./module-H_2_5.js";
import u from "./module-h_6.js";
import c from "./module-X_6.js";
import f from "./module-D_2_5.js";
import h from "./module-lN_5.js";
import _l from "./module-A5_5.js";
import v from "./module-N_5.js";
const _l_IteratorPrototype = _l.IteratorPrototype;
const p = h("toStringTag");
const i_Iterator = i.Iterator;
const forced =
  v ||
  !s(i_Iterator) ||
  i_Iterator.prototype !== _l_IteratorPrototype ||
  !c(function () {
    i_Iterator({});
  });
const Iterator = function () {
  o(this, _l_IteratorPrototype);
  if (a(this) === _l_IteratorPrototype) {
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
