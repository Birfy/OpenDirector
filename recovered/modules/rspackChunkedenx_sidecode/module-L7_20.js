import _n from "./module-A5_20.js";
import o from "./module-Za_20.js";
import i from "./module-w_21.js";
import a from "./module-HZ_20.js";
import s from "./module-at_20.js";
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
