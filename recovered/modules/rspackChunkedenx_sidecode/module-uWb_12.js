import $ from "./module-A_13.js";
import tt from "./module-J_13.js";
import te from "./module-A2_13.js";
import tr from "./module-Y_13.js";
import tn from "./module-H_2_12.js";
import ti from "./module-h_13.js";
import to from "./module-X_13.js";
import ta from "./module-D_2_12.js";
import ts from "./module-lN_12.js";
import _tf from "./module-A5_12.js";
import tu from "./module-N_12.js";
const _tf_IteratorPrototype = _tf.IteratorPrototype;
const tc = ts("toStringTag");
const tt_Iterator = tt.Iterator;
const forced =
  tu ||
  !tr(tt_Iterator) ||
  tt_Iterator.prototype !== _tf_IteratorPrototype ||
  !to(function () {
    tt_Iterator({});
  });
const Iterator = function () {
  te(this, _tf_IteratorPrototype);
  if (tn(this) === _tf_IteratorPrototype) {
    throw TypeError("Abstract class Iterator not directly constructable");
  }
};
if (!ta(_tf_IteratorPrototype, tc)) {
  ti(_tf_IteratorPrototype, tc, "Iterator");
}
if (
  forced ||
  !ta(_tf_IteratorPrototype, "constructor") ||
  _tf_IteratorPrototype.constructor === Object
) {
  ti(_tf_IteratorPrototype, "constructor", Iterator);
}
Iterator.prototype = _tf_IteratorPrototype;
$(
  {
    global: true,
    constructor: true,
    forced,
  },
  {
    Iterator,
  },
);
