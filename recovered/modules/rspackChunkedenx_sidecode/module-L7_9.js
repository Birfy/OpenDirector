import _n from "./module-A5_9.js";
import o from "./module-Za_9.js";
import i from "./module-w_10.js";
import a from "./module-HZ_9.js";
import s from "./module-at_9.js";
const _n_IteratorPrototype = _n.IteratorPrototype;
const u = function () {
  return this;
};
export default function (t, e, r, c) {
  const f = e + " Iterator";
  t.prototype = o(_n_IteratorPrototype, {
    next: i(+!c, r),
  });
  a(t, f, false, true);
  s[f] = u;
  return t;
}
