import n from "./module-M_2.js";
import o from "./module-d.js";
import i from "./module-Za.js";
import a from "./module-C.js";
import s from "./module-dFV.js";
import u from "./module-b.js";
import c from "./module-YR.js";
import f from "./module-fq.js";
import h from "./module-V3.js";
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
y.prototype = s(i(f), {
  next: function () {
    const t = d(this);
    return new l(function (r, e) {
      g(o(n(t.next, t.iterator)), r, e);
    });
  },
  return: function () {
    const iterator = d(this).iterator;
    return new l(function (r, e) {
      const i = a(iterator, "return");
      if (i === undefined) {
        return r(h(undefined, true));
      }
      g(o(n(i, iterator)), r, e);
    });
  },
});
export default y;
