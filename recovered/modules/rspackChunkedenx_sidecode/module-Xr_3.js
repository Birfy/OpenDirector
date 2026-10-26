import n from "./module-A_4.js";
import i from "./module-M_2_3.js";
import o from "./module-d_4.js";
import s from "./module-NK_3.js";
import a from "./module-lC_3.js";
import u from "./module-c1_2_3.js";
import c from "./module-tH_3.js";
import f from "./module-V3_3.js";
import forced from "./module-N_3.js";
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
