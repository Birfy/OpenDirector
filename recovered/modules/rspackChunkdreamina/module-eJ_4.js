import n from "g";
import i from "p3";
import a from "B";
import o from "IF";
import s from "ju";
import A from "Yt";
import c from "rIh";
import forced from "K";
const l = A(function () {
  let t;
  let e;
  const iterator = this.iterator;
  const predicate = this.predicate;
  const next = this.next;
  while (true) {
    t = o(i(next, iterator));
    if ((this.done = !!t.done)) {
      return;
    }
    if (c(iterator, predicate, [(e = t.value), this.counter++], true)) {
      return e;
    }
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
    filter: function (predicate) {
      o(this);
      a(predicate);
      return new l(s(this), {
        predicate,
      });
    },
  },
);
