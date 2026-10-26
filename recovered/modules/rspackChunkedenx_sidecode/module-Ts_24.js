import n from "./module-A_24.js";
import o from "./module-M_2_23.js";
import i from "./module-vo_23.js";
import a from "./module-d_24.js";
import s from "./module-NK_23.js";
import c from "./module-cv_23.js";
import u from "./module-vbL_23.js";
import f from "./module-jX_24.js";
import forced from "./module-N_23.js";
const h = u(function () {
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
      this.inner = c(mapper(t.value, this.counter++), false);
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
