import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-d.js";
import a from "./module-NK.js";
import s from "./module-lC.js";
import u from "./module-c1_2.js";
import c from "./module-tH.js";
import f from "./module-V3.js";
import forced from "./module-N.js";
const l = c(function (t) {
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
      const remaining = u(s(+t));
      return new l(a(this), {
        remaining,
      });
    },
  },
);
