import n from "g";
import i from "p3";
import a from "B";
import o from "IF";
import s from "ju";
import A from "RI";
import c from "Yt";
import u from "tU";
import forced from "K";
const h = c(function () {
  let t;
  let e;
  const iterator = this.iterator;
  const mapper = this.mapper;
  while (true) {
    if ((e = this.inner)) {
      try {
        if (!(t = o(i(e.next, e.iterator))).done) {
          return t.value;
        }
        this.inner = null;
      } catch (error) {
        u(iterator, "throw", error);
      }
    }
    t = o(i(this.next, iterator));
    if ((this.done = !!t.done)) {
      return;
    }
    try {
      this.inner = A(mapper(t.value, this.counter++), false);
    } catch (error) {
      u(iterator, "throw", error);
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
    flatMap: function (mapper) {
      o(this);
      a(mapper);
      return new h(s(this), {
        mapper,
        inner: null,
      });
    },
  },
);
