import _n from "./module-A5_6.js";
import o from "./module-Za_6.js";
import a from "./module-w_7.js";
import i from "./module-HZ_6.js";
import s from "./module-at_6.js";
const _n_IteratorPrototype = _n.IteratorPrototype;
const c = function () {
  return this;
};
export default function (t, r, e, u) {
  const f = r + " Iterator";
  t.prototype = o(_n_IteratorPrototype, {
    next: a(+!u, e),
  });
  i(t, f, false, true);
  s[f] = c;
  return t;
}
