import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-vo_9.js";
import a from "./module-d_10.js";
import s from "./module-NK_9.js";
import u from "./module-cv_9.js";
import c from "./module-vbL_9.js";
import f from "./module-jX_10.js";
import forced from "./module-N_9.js";
const h = c(function () {
  let t;
  let e;
  const iterator = this.iterator;
  const mapper = this.mapper;
  while (true) {
    if ((e = this.inner)) {
      try {
        if (!(t = a(o(e.next, e.iterator))).done) {
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
      return new h(s(this), {
        mapper,
        inner: null,
      });
    },
  },
);
