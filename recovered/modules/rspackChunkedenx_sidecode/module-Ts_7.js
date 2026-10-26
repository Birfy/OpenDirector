import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-vo_6.js";
import i from "./module-d_7.js";
import s from "./module-NK_6.js";
import c from "./module-cv_6.js";
import u from "./module-vbL_6.js";
import f from "./module-jX_7.js";
import forced from "./module-N_6.js";
const h = u(function () {
  let t;
  let r;
  const iterator = this.iterator;
  const mapper = this.mapper;
  while (true) {
    if ((r = this.inner)) {
      try {
        if (!(t = i(o(r.next, r.iterator))).done) {
          return t.value;
        }
        this.inner = null;
      } catch (error) {
        f(iterator, "throw", error);
      }
    }
    t = i(o(this.next, iterator));
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
      i(this);
      a(mapper);
      return new h(s(this), {
        mapper,
        inner: null,
      });
    },
  },
);
