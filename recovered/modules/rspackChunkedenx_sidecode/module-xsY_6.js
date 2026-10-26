import n from "./module-M_2_6.js";
import o from "./module-d_7.js";
import a from "./module-Za_6.js";
import i from "./module-C_7.js";
import s from "./module-dFV_6.js";
import c from "./module-b_6.js";
import u from "./module-YR_6.js";
import f from "./module-fq_6.js";
import l from "./module-V3_6.js";
const h = u("Promise");
const p = "AsyncFromSyncIterator";
const c_set = c.set;
const d = c.getterFor(p);
const g = (t, r, e) => {
  const t_done = t.done;
  h.resolve(t.value).then((t) => {
    r(l(t, t_done));
  }, e);
};
const y = function (t) {
  t.type = p;
  c_set(this, t);
};
y.prototype = s(a(f), {
  next: function () {
    const t = d(this);
    return new h(function (r, e) {
      g(o(n(t.next, t.iterator)), r, e);
    });
  },
  return: function () {
    const iterator = d(this).iterator;
    return new h(function (r, e) {
      const a = i(iterator, "return");
      if (a === undefined) {
        return r(l(undefined, true));
      }
      g(o(n(a, iterator)), r, e);
    });
  },
});
export default y;
