import _n from "./module-A5_16.js";
import o from "./module-Za_16.js";
import i from "./module-w_17.js";
import a from "./module-HZ_16.js";
import s from "./module-at_16.js";
const _n_IteratorPrototype = _n.IteratorPrototype;
const u = function () {
  return this;
};
export default function (t, r, e, c) {
  const f = r + " Iterator";
  t.prototype = o(_n_IteratorPrototype, {
    next: i(+!c, e),
  });
  a(t, f, false, true);
  s[f] = u;
  return t;
}
