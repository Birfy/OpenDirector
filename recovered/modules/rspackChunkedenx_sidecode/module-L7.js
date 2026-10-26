import _n from "./module-A5.js";
import o from "./module-Za.js";
import i from "./module-w.js";
import a from "./module-HZ.js";
import s from "./module-at.js";
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
