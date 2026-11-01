import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-d.js";
import a from "./module-NK.js";
import s from "./module-lC.js";
import u from "./module-c1_2.js";
import c from "./module-vbL.js";
import forced from "./module-N.js";
const h = c(function () {
  let t;
  const iterator = this.iterator;
  const next = this.next;
  while (this.remaining) {
    this.remaining--;
    t = i(o(next, iterator));
    if ((this.done = !!t.done)) {
      return;
    }
  }
  t = i(o(next, iterator));
  if (!(this.done = !!t.done)) {
    return t.value;
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
    drop: function (t) {
      i(this);
      const remaining = u(s(+t));
      return new h(a(this), {
        remaining,
      });
    },
  },
);
