import n from "g";
import i from "p3";
import a from "IF";
import o from "ju";
import s from "fyd";
import A from "OH";
import c from "Yt";
import u from "tU";
import forced from "K";
const h = c(function () {
  const iterator = this.iterator;
  if (!this.remaining--) {
    this.done = true;
    return u(iterator, "normal", undefined);
  }
  const e = a(i(this.next, iterator));
  if (!(this.done = !!e.done)) {
    return e.value;
  }
});
n(
  {
    target: "Iterator",
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
