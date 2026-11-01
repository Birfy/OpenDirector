import n from "./module-p3.js";
import o from "./module-IF_2.js";
import i from "./module-lY_4.js";
import a from "./module-T_2.js";
import s from "./module-IG_3.js";
import u from "./module-G_2.js";
import c from "./module-Y.js";
import f from "./module-lZ_2.js";
import l from "./module-SM_4.js";
const p = c("Promise");
const h = "AsyncFromSyncIterator";
const u_set = u.set;
const d = u.getterFor(h);
const g = (e, t, r) => {
  const e_done = e.done;
  p.resolve(e.value).then((e) => {
    t(l(e, e_done));
  }, r);
};
const y = function (e) {
  e.type = h;
  u_set(this, e);
};
y.prototype = s(i(f), {
  next: function () {
    const e = d(this);
    return new p(function (t, r) {
      g(o(n(e.next, e.iterator)), t, r);
    });
  },
  return: function () {
    const iterator = d(this).iterator;
    return new p(function (t, r) {
      const i = a(iterator, "return");
      if (i === undefined) {
        return t(l(undefined, true));
      }
      g(o(n(i, iterator)), t, r);
    });
  },
});
export default y;
