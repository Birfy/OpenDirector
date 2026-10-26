import n from "./module-A_4.js";
import i from "./module-J_4.js";
import o from "./module-A2_4.js";
import s from "./module-Y_4.js";
import a from "./module-H_2_3.js";
import u from "./module-h_4.js";
import c from "./module-X_4.js";
import f from "./module-D_2_3.js";
import h from "./module-lN_3.js";
import _l from "./module-A5_3.js";
import v from "./module-N_3.js";
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
