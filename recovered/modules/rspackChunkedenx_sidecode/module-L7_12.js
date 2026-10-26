import _$ from "./module-A5_12.js";
import tt from "./module-Za_12.js";
import te from "./module-w_13.js";
import tr from "./module-HZ_12.js";
import tn from "./module-at_12.js";
const _$_IteratorPrototype = _$.IteratorPrototype;
const ti = function () {
  return this;
};
export default function (J, Z, Q, to) {
  const ta = Z + " Iterator";
  J.prototype = tt(_$_IteratorPrototype, {
    next: te(+!to, Q),
  });
  tr(J, ta, false, true);
  tn[ta] = ti;
  return J;
}
