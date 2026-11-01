import _n from "./module-A5_23.js";
import o from "./module-Za_23.js";
import i from "./module-w_24.js";
import a from "./module-HZ_23.js";
import s from "./module-at_23.js";
const _n_IteratorPrototype = _n.IteratorPrototype;
const c = function () {
  return this;
};
export default function (t, r, e, u) {
  const f = r + " Iterator";
  t.prototype = o(_n_IteratorPrototype, {
    next: i(+!u, e),
  });
  a(t, f, false, true);
  s[f] = c;
  return t;
}
