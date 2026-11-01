import n from "./module-A_7.js";
import o from "./module-J_7.js";
import a from "./module-A2_7.js";
import i from "./module-Y_7.js";
import s from "./module-H_2_6.js";
import c from "./module-h_7.js";
import u from "./module-X_7.js";
import f from "./module-D_2_6.js";
import l from "./module-lN_6.js";
import _h from "./module-A5_6.js";
import p from "./module-N_6.js";
const _h_IteratorPrototype = _h.IteratorPrototype;
const v = l("toStringTag");
const o_Iterator = o.Iterator;
const forced =
  p ||
  !i(o_Iterator) ||
  o_Iterator.prototype !== _h_IteratorPrototype ||
  !u(function () {
    o_Iterator({});
  });
const Iterator = function () {
  a(this, _h_IteratorPrototype);
  if (s(this) === _h_IteratorPrototype) {
    throw TypeError("Abstract class Iterator not directly constructable");
  }
};
if (!f(_h_IteratorPrototype, v)) {
  c(_h_IteratorPrototype, v, "Iterator");
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
