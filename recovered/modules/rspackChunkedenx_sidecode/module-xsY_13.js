import n from "./module-M_2_13.js";
import o from "./module-d_14.js";
import i from "./module-Za_13.js";
import a from "./module-C_14.js";
import s from "./module-dFV_13.js";
import u from "./module-b_13.js";
import c from "./module-YR_13.js";
import f from "./module-fq_13.js";
import h from "./module-V3_13.js";
const l = c("Promise");
const v = "AsyncFromSyncIterator";
const u_set = u.set;
const d = u.getterFor(v);
const g = (r, t, e) => {
  const r_done = r.done;
  l.resolve(r.value).then((r) => {
    t(h(r, r_done));
  }, e);
};
const y = function (r) {
  r.type = v;
  u_set(this, r);
};
y.prototype = s(i(f), {
  next: function () {
    const r = d(this);
    return new l(function (t, e) {
      g(o(n(r.next, r.iterator)), t, e);
    });
  },
  return: function () {
    const iterator = d(this).iterator;
    return new l(function (t, e) {
      const i = a(iterator, "return");
      if (i === undefined) {
        return t(h(undefined, true));
      }
      g(o(n(i, iterator)), t, e);
    });
  },
});
export default y;
