import n from "./module-M_2_5.js";
import i from "./module-d_6.js";
import o from "./module-Za_5.js";
import s from "./module-C_6.js";
import a from "./module-dFV_5.js";
import u from "./module-b_5.js";
import c from "./module-YR_5.js";
import f from "./module-fq_5.js";
import h from "./module-V3_5.js";
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
