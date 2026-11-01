import _n from "./module-ii_2.js";
import o from "./module-lY_4.js";
import i from "./module-M.js";
import a from "./module-Ii_2_2.js";
import s from "./module-uK_4.js";
const _n_IteratorPrototype = _n.IteratorPrototype;
const u = function () {
  return this;
};
export default function (e, t, r, c) {
  const f = t + " Iterator";
  e.prototype = o(_n_IteratorPrototype, {
    next: i(+!c, r),
  });
  a(e, f, false, true);
  s[f] = u;
  return e;
}
