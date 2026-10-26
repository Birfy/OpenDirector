import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-vo_12.js";
import tr from "./module-d_13.js";
import tn from "./module-NK_2_2.js";
import ti from "./module-cv_12.js";
import to from "./module-vbL_12.js";
import ta from "./module-jX_13.js";
import forced from "./module-N_12.js";
const tf = to(function () {
  let J;
  let Z;
  const iterator = this.iterator;
  const mapper = this.mapper;
  while (true) {
    if ((Z = this.inner)) {
      try {
        if (!(J = tr(tt(Z.next, Z.iterator))).done) {
          return J.value;
        }
        this.inner = null;
      } catch (error) {
        ta(iterator, "throw", error);
      }
    }
    J = tr(tt(this.next, iterator));
    if ((this.done = !!J.done)) {
      return;
    }
    try {
      this.inner = ti(mapper(J.value, this.counter++), false);
    } catch (error) {
      ta(iterator, "throw", error);
    }
  }
});
$(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced,
  },
  {
    flatMap: function (mapper) {
      tr(this);
      te(mapper);
      return new tf(tn(this), {
        mapper,
        inner: null,
      });
    },
  },
);
