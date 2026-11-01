import n from "./module-A_17.js";
import o from "./module-M_2_16.js";
import i from "./module-vo_16.js";
import a from "./module-d_17.js";
import s from "./module-NK_16.js";
import u from "./module-vbL_16.js";
import c from "./module-Gz_16.js";
import forced from "./module-N_16.js";
const l = u(function () {
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
    if (c(iterator, predicate, [(r = t.value), this.counter++], true)) {
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
