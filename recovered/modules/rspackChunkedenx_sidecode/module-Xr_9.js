import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-d_10.js";
import a from "./module-NK_9.js";
import s from "./module-lC_9.js";
import u from "./module-c1_2_9.js";
import c from "./module-tH_9.js";
import f from "./module-V3_9.js";
import forced from "./module-N_9.js";
const h = c(function (t) {
  let e;
  const r = this;
  const r_iterator = r.iterator;
  if (!r.remaining--) {
    const a = f(undefined, true);
    r.done = true;
    if ((e = r_iterator.return) !== undefined) {
      return t.resolve(o(e, r_iterator, undefined)).then(() => a);
    }
    return a;
  }
  return t
    .resolve(o(r.next, r_iterator))
    .then((t) => {
      if (i(t).done) {
        r.done = true;
        return f(undefined, true);
      }
      return f(t.value, false);
    })
    .then(null, (t) => {
      r.done = true;
      throw t;
    });
});
n(
  {
    target: "AsyncIterator",
    proto: true,
    real: true,
    forced,
  },
  {
    take: function (t) {
      i(this);
      const remaining = u(s(+t));
      return new h(a(this), {
        remaining,
      });
    },
  },
);
