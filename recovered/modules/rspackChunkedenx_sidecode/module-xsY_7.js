import n from "./module-M_2_7.js";
import o from "./module-d_8.js";
import i from "./module-Za_7.js";
import a from "./module-C_8.js";
import s from "./module-dFV_7.js";
import u from "./module-b_7.js";
import c from "./module-YR_7.js";
import f from "./module-fq_7.js";
import l from "./module-V3_7.js";
const h = c("Promise");
const v = "AsyncFromSyncIterator";
const u_set = u.set;
const d = u.getterFor(v);
const g = (r, t, e) => {
  const r_done = r.done;
  h.resolve(r.value).then((r) => {
    t(l(r, r_done));
  }, e);
};
const y = function (r) {
  r.type = v;
  u_set(this, r);
};
y.prototype = s(i(f), {
  next: function () {
    const r = d(this);
    return new h(function (t, e) {
      g(o(n(r.next, r.iterator)), t, e);
    });
  },
  return: function () {
    const iterator = d(this).iterator;
    return new h(function (t, e) {
      const i = a(iterator, "return");
      if (i === undefined) {
        return t(l(undefined, true));
      }
      g(o(n(i, iterator)), t, e);
    });
  },
});
export default y;
