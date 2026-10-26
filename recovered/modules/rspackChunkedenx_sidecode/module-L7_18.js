import _n from "./module-A5_18.js";
import o from "./module-Za_18.js";
import i from "./module-w_19.js";
import a from "./module-HZ_18.js";
import s from "./module-at_18.js";
const _n_IteratorPrototype = _n.IteratorPrototype;
const u = function () {
  return this;
};
export default function (r, t, e, c) {
  const f = t + " Iterator";
  r.prototype = o(_n_IteratorPrototype, {
    next: i(+!c, e),
  });
  a(r, f, false, true);
  s[f] = u;
  return r;
}
