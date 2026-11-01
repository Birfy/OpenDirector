import n from "./module-A_17.js";
import o from "./module-M_2_16.js";
import i from "./module-vo_16.js";
import a from "./module-d_17.js";
import s from "./module-NK_16.js";
import u from "./module-cv_16.js";
import c from "./module-vbL_16.js";
import f from "./module-jX_17.js";
import forced from "./module-N_16.js";
const h = c(function () {
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
      return new h(s(this), {
        mapper,
        inner: null,
      });
    },
  },
);
