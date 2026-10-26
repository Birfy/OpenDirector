import n from "g";
import i from "p3";
import a from "IF";
import o from "ju";
import s from "fyd";
import A from "OH";
import c from "NZ";
import u from "SM";
import forced from "K";
const h = c(function (t) {
  let e;
  const r = this;
  const r_iterator = r.iterator;
  if (!r.remaining--) {
    const o = u(undefined, true);
    r.done = true;
    if ((e = r_iterator.return) !== undefined) {
      return t.resolve(i(e, r_iterator, undefined)).then(() => o);
    }
    return o;
  }
  return t
    .resolve(i(r.next, r_iterator))
    .then((t) => {
      if (a(t).done) {
        r.done = true;
        return u(undefined, true);
      }
      return u(t.value, false);
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
      a(this);
      const remaining = A(s(+t));
      return new h(o(this), {
        remaining,
      });
    },
  },
);
