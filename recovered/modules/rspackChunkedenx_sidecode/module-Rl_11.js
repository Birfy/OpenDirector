import n from "./module-A_12.js";
import o from "./module-M_2_11.js";
import i from "./module-vo_11.js";
import a from "./module-d_12.js";
import s from "./module-NK_11.js";
import u from "./module-vbL_11.js";
import c from "./module-Gz_11.js";
import forced from "./module-N_11.js";
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
