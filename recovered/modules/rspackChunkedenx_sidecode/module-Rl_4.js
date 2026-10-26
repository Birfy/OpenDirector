import n from "./module-A_5.js";
import i from "./module-M_2_4.js";
import o from "./module-vo_4.js";
import s from "./module-d_5.js";
import a from "./module-NK_4.js";
import u from "./module-vbL_4.js";
import c from "./module-Gz_4.js";
import forced from "./module-N_4.js";
const h = u(function () {
  let t;
  let r;
  const iterator = this.iterator;
  const predicate = this.predicate;
  const next = this.next;
  while (true) {
    t = s(i(next, iterator));
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
      s(this);
      o(predicate);
      return new h(a(this), {
        predicate,
      });
    },
  },
);
