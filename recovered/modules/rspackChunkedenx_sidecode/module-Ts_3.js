import n from "./module-A_3.js";
import i from "./module-M_2_2.js";
import o from "./module-vo_2.js";
import s from "./module-d_3.js";
import a from "./module-NK_2.js";
import u from "./module-cv_2.js";
import c from "./module-vbL_2.js";
import f from "./module-jX_3.js";
import forced from "./module-N_2.js";
const l = c(function () {
  let t;
  let r;
  const iterator = this.iterator;
  const mapper = this.mapper;
  while (true) {
    if ((r = this.inner)) {
      try {
        if (!(t = s(i(r.next, r.iterator))).done) {
          return t.value;
        }
        this.inner = null;
      } catch (error) {
        f(iterator, "throw", error);
      }
    }
    t = s(i(this.next, iterator));
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
      s(this);
      o(mapper);
      return new l(a(this), {
        mapper,
        inner: null,
      });
    },
  },
);
