import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-vo_6.js";
import i from "./module-d_7.js";
import s from "./module-NK_6.js";
import c from "./module-vbL_6.js";
import u from "./module-Gz_6.js";
import forced from "./module-N_6.js";
const l = c(function () {
  let t;
  let r;
  const iterator = this.iterator;
  const predicate = this.predicate;
  const next = this.next;
  while (true) {
    t = i(o(next, iterator));
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
      i(this);
      a(predicate);
      return new l(s(this), {
        predicate,
      });
    },
  },
);
