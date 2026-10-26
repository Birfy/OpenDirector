import _n from "./module-A5_4.js";
import i from "./module-Za_4.js";
import o from "./module-w_5.js";
import s from "./module-HZ_4.js";
import a from "./module-at_4.js";
const _n_IteratorPrototype = _n.IteratorPrototype;
const u = function () {
  return this;
};
export default function (t, r, e, c) {
  const f = r + " Iterator";
  t.prototype = i(_n_IteratorPrototype, {
    next: o(+!c, e),
  });
  s(t, f, false, true);
  a[f] = u;
  return t;
}
