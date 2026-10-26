import n from "./module-A_9.js";
import i from "./module-M_2_8.js";
import o from "./module-d_9.js";
import s from "./module-NK_8.js";
import a from "./module-lC_8.js";
import u from "./module-c1_2_8.js";
import c from "./module-tH_8.js";
import f from "./module-V3_8.js";
import forced from "./module-N_8.js";
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
