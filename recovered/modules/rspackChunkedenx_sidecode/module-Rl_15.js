import n from "./module-A_16.js";
import o from "./module-M_2_15.js";
import i from "./module-vo_15.js";
import a from "./module-d_16.js";
import s from "./module-NK_15.js";
import u from "./module-vbL_15.js";
import c from "./module-Gz_15.js";
import forced from "./module-N_15.js";
const h = u(function () {
  let r;
  let t;
  const iterator = this.iterator;
  const predicate = this.predicate;
  const next = this.next;
  while (true) {
    r = a(o(next, iterator));
    if ((this.done = !!r.done)) {
      return;
    }
    if (c(iterator, predicate, [(t = r.value), this.counter++], true)) {
      return t;
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
    filter: function (predicate) {
      a(this);
      i(predicate);
      return new h(s(this), {
        predicate,
      });
    },
  },
);
