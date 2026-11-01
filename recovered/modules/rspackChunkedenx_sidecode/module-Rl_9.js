import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-vo_9.js";
import a from "./module-d_10.js";
import s from "./module-NK_9.js";
import u from "./module-vbL_9.js";
import c from "./module-Gz_9.js";
import forced from "./module-N_9.js";
const l = u(function () {
  let t;
  let e;
  const iterator = this.iterator;
  const predicate = this.predicate;
  const next = this.next;
  while (true) {
    t = a(o(next, iterator));
    if ((this.done = !!t.done)) {
      return;
    }
    if (c(iterator, predicate, [(e = t.value), this.counter++], true)) {
      return e;
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
