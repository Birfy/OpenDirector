import n from "./module-A_12.js";
import o from "./module-M_2_11.js";
import i from "./module-vo_11.js";
import a from "./module-d_12.js";
import s from "./module-NK_11.js";
import u from "./module-cv_11.js";
import c from "./module-vbL_11.js";
import f from "./module-jX_12.js";
import forced from "./module-N_11.js";
const l = c(function () {
  let r;
  let t;
  const iterator = this.iterator;
  const mapper = this.mapper;
  while (true) {
    if ((t = this.inner)) {
      try {
        if (!(r = a(o(t.next, t.iterator))).done) {
          return r.value;
        }
        this.inner = null;
      } catch (error) {
        f(iterator, "throw", error);
      }
    }
    r = a(o(this.next, iterator));
    if ((this.done = !!r.done)) {
      return;
    }
    try {
      this.inner = u(mapper(r.value, this.counter++), false);
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
