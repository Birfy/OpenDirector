import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-vo.js";
import a from "./module-d.js";
import s from "./module-NK.js";
import u from "./module-vbL.js";
import c from "./module-Gz.js";
import forced from "./module-N.js";
const h = u(function () {
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
      return new h(s(this), {
        predicate,
      });
    },
  },
);
