import n from "./module-M_2_20.js";
import o from "./module-d_21.js";
import i from "./module-Za_20.js";
import a from "./module-C_21.js";
import s from "./module-dFV_20.js";
import c from "./module-b_20.js";
import u from "./module-YR_20.js";
import f from "./module-fq_20.js";
import l from "./module-V3_20.js";
const h = u("Promise");
const v = "AsyncFromSyncIterator";
const c_set = c.set;
const d = c.getterFor(v);
const g = (t, r, e) => {
  const t_done = t.done;
  h.resolve(t.value).then((t) => {
    r(l(t, t_done));
  }, e);
};
const y = function (t) {
  t.type = v;
  c_set(this, t);
};
y.prototype = s(i(f), {
  next: function () {
    const t = d(this);
    return new h(function (r, e) {
      g(o(n(t.next, t.iterator)), r, e);
    });
  },
  return: function () {
    const iterator = d(this).iterator;
    return new h(function (r, e) {
      const i = a(iterator, "return");
      if (i === undefined) {
        return r(l(undefined, true));
      }
      g(o(n(i, iterator)), r, e);
    });
  },
});
export default y;
