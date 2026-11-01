import n from "./module-M_2_16.js";
import o from "./module-d_17.js";
import i from "./module-Za_16.js";
import a from "./module-C_17.js";
import s from "./module-dFV_16.js";
import u from "./module-b_16.js";
import c from "./module-YR_16.js";
import f from "./module-fq_16.js";
import l from "./module-V3_16.js";
const h = c("Promise");
const v = "AsyncFromSyncIterator";
const u_set = u.set;
const d = u.getterFor(v);
const g = (t, r, e) => {
  const t_done = t.done;
  h.resolve(t.value).then((t) => {
    r(l(t, t_done));
  }, e);
};
const y = function (t) {
  t.type = v;
  u_set(this, t);
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
