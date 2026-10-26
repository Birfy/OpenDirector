import n from "./module-A_18.js";
import o from "./module-M_2_17.js";
import i from "./module-vo_17.js";
import a from "./module-d_18.js";
import s from "./module-NK_17.js";
import u from "./module-cv_17.js";
import c from "./module-vbL_17.js";
import f from "./module-jX_18.js";
import forced from "./module-N_17.js";
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
