import n from "./module-A_22.js";
import i from "./module-M_2_21.js";
import o from "./module-d_22.js";
import s from "./module-NK_21.js";
import a from "./module-lC_21.js";
import u from "./module-c1_2_21.js";
import c from "./module-tH_21.js";
import f from "./module-V3_21.js";
import forced from "./module-N_21.js";
const l = c(function (t) {
  let r;
  const e = this;
  const e_iterator = e.iterator;
  if (!e.remaining--) {
    const s = f(undefined, true);
    e.done = true;
    if ((r = e_iterator.return) !== undefined) {
      return t.resolve(i(r, e_iterator, undefined)).then(() => s);
    }
    return s;
  }
  return t
    .resolve(i(e.next, e_iterator))
    .then((t) => {
      if (o(t).done) {
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
      o(this);
      const remaining = u(a(+t));
      return new l(s(this), {
        remaining,
      });
    },
  },
);
