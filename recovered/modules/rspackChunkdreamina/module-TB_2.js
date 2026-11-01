import n from "g";
import i from "p3";
import a from "IF";
import o from "ju";
import s from "fyd";
import A from "OH";
import c from "Yt";
import forced from "K";
const l = c(function () {
  let t;
  const iterator = this.iterator;
  const next = this.next;
  while (this.remaining) {
    this.remaining--;
    t = a(i(next, iterator));
    if ((this.done = !!t.done)) {
      return;
    }
  }
  t = a(i(next, iterator));
  if (!(this.done = !!t.done)) {
    return t.value;
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
    drop: function (t) {
      a(this);
      const remaining = A(s(+t));
      return new l(o(this), {
        remaining,
      });
    },
  },
);
