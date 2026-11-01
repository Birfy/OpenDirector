import n from "./module-M_2_9.js";
import o from "./module-d_10.js";
import i from "./module-Za_9.js";
import a from "./module-C_10.js";
import s from "./module-dFV_9.js";
import u from "./module-b_9.js";
import c from "./module-YR_9.js";
import f from "./module-fq_9.js";
import l from "./module-V3_9.js";
const h = c("Promise");
const v = "AsyncFromSyncIterator";
const u_set = u.set;
const p = u.getterFor(v);
const g = (t, e, r) => {
  const t_done = t.done;
  h.resolve(t.value).then((t) => {
    e(l(t, t_done));
  }, r);
};
const y = function (t) {
  t.type = v;
  u_set(this, t);
};
y.prototype = s(i(f), {
  next: function () {
    const t = p(this);
    return new h(function (e, r) {
      g(o(n(t.next, t.iterator)), e, r);
    });
  },
  return: function () {
    const iterator = p(this).iterator;
    return new h(function (e, r) {
      const i = a(iterator, "return");
      if (i === undefined) {
        return e(l(undefined, true));
      }
      g(o(n(i, iterator)), e, r);
    });
  },
});
export default y;
