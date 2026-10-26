import n from "./module-A_20.js";
import o from "./module-M_2_19.js";
import i from "./module-d_20.js";
import a from "./module-NK_19.js";
import s from "./module-lC_19.js";
import u from "./module-c1_2_19.js";
import c from "./module-tH_19.js";
import f from "./module-V3_19.js";
import forced from "./module-N_19.js";
const h = c(function (r) {
  let t;
  const e = this;
  const e_iterator = e.iterator;
  if (!e.remaining--) {
    const a = f(undefined, true);
    e.done = true;
    if ((t = e_iterator.return) !== undefined) {
      return r.resolve(o(t, e_iterator, undefined)).then(() => a);
    }
    return a;
  }
  return r
    .resolve(o(e.next, e_iterator))
    .then((r) => {
      if (i(r).done) {
        e.done = true;
        return f(undefined, true);
      }
      return f(r.value, false);
    })
    .then(null, (r) => {
      e.done = true;
      throw r;
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
    take: function (r) {
      i(this);
      const remaining = u(s(+r));
      return new h(a(this), {
        remaining,
      });
    },
  },
);
