import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-vo.js";
import a from "./module-d.js";
import s from "./module-NK.js";
import u from "./module-cv.js";
import c from "./module-vbL.js";
import f from "./module-jX.js";
import forced from "./module-N.js";
const l = c(function () {
  let t;
  let r;
  const iterator = this.iterator;
  const mapper = this.mapper;
  while (true) {
    if ((r = this.inner)) {
      try {
        if (!(t = a(o(r.next, r.iterator))).done) {
          return t.value;
        }
        this.inner = null;
      } catch (error) {
        f(iterator, "throw", error);
      }
    }
    t = a(o(this.next, iterator));
    if ((this.done = !!t.done)) {
      return;
    }
    try {
      this.inner = u(mapper(t.value, this.counter++), false);
    } catch (error) {
      f(iterator, "throw", error);
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
      a(this);
      i(mapper);
      return new l(s(this), {
        mapper,
        inner: null,
      });
    },
  },
);
