import _n from "./module-A5_10.js";
import o from "./module-Za_10.js";
import i from "./module-w_11.js";
import a from "./module-HZ_10.js";
import s from "./module-at_10.js";
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
