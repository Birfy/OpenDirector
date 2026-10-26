import n from "./module-A_21.js";
import o from "./module-M_2_20.js";
import i from "./module-d_21.js";
import a from "./module-NK_20.js";
import s from "./module-lC_20.js";
import c from "./module-c1_2_20.js";
import u from "./module-tH_20.js";
import f from "./module-V3_20.js";
import forced from "./module-N_20.js";
const h = u(function (t) {
  let r;
  const e = this;
  const e_iterator = e.iterator;
  if (!e.remaining--) {
    const a = f(undefined, true);
    e.done = true;
    if ((r = e_iterator.return) !== undefined) {
      return t.resolve(o(r, e_iterator, undefined)).then(() => a);
    }
    return a;
  }
  return t
    .resolve(o(e.next, e_iterator))
    .then((t) => {
      if (i(t).done) {
        e.done = true;
        return f(undefined, true);
      }
      return f(t.value, false);
    })
    .then(null, (t) => {
      e.done = true;
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
      const remaining = c(s(+t));
      return new h(a(this), {
        remaining,
      });
    },
  },
);
