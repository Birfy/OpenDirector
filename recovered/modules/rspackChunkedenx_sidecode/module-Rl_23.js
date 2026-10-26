import n from "./module-A_24.js";
import o from "./module-M_2_23.js";
import i from "./module-vo_23.js";
import a from "./module-d_24.js";
import s from "./module-NK_23.js";
import c from "./module-vbL_23.js";
import u from "./module-Gz_23.js";
import forced from "./module-N_23.js";
const l = c(function () {
  let t;
  let r;
  const iterator = this.iterator;
  const predicate = this.predicate;
  const next = this.next;
  while (true) {
    t = a(o(next, iterator));
    if ((this.done = !!t.done)) {
      return;
    }
    if (u(iterator, predicate, [(r = t.value), this.counter++], true)) {
      return r;
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
      return new l(s(this), {
        predicate,
      });
    },
  },
);
