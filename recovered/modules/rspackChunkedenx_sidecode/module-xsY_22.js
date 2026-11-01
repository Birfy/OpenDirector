import n from "./module-M_2_22.js";
import i from "./module-d_23.js";
import o from "./module-Za_22.js";
import s from "./module-C_23.js";
import a from "./module-dFV_22.js";
import u from "./module-b_22.js";
import c from "./module-YR_22.js";
import f from "./module-fq_22.js";
import h from "./module-V3_22.js";
const l = c("Promise");
const v = "AsyncFromSyncIterator";
const u_set = u.set;
const d = u.getterFor(v);
const g = (t, r, e) => {
  const t_done = t.done;
  l.resolve(t.value).then((t) => {
    r(h(t, t_done));
  }, e);
};
const y = function (t) {
  t.type = v;
  u_set(this, t);
};
y.prototype = a(o(f), {
  next: function () {
    const t = d(this);
    return new l(function (r, e) {
      g(i(n(t.next, t.iterator)), r, e);
    });
  },
  return: function () {
    const iterator = d(this).iterator;
    return new l(function (r, e) {
      const o = s(iterator, "return");
      if (o === undefined) {
        return r(h(undefined, true));
      }
      g(i(n(o, iterator)), r, e);
    });
  },
});
export default y;
