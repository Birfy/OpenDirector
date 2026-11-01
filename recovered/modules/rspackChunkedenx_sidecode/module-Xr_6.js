import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-d_7.js";
import i from "./module-NK_6.js";
import s from "./module-lC_6.js";
import c from "./module-c1_2_6.js";
import u from "./module-tH_6.js";
import f from "./module-V3_6.js";
import forced from "./module-N_6.js";
const h = u(function (t) {
  let r;
  const e = this;
  const e_iterator = e.iterator;
  if (!e.remaining--) {
    const i = f(undefined, true);
    e.done = true;
    if ((r = e_iterator.return) !== undefined) {
      return t.resolve(o(r, e_iterator, undefined)).then(() => i);
    }
    return i;
  }
  return t
    .resolve(o(e.next, e_iterator))
    .then((t) => {
      if (a(t).done) {
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
      a(this);
      const remaining = c(s(+t));
      return new h(i(this), {
        remaining,
      });
    },
  },
);
