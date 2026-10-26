import n from "./module-A_5.js";
import i from "./module-M_2_4.js";
import o from "./module-d_5.js";
import s from "./module-NK_4.js";
import a from "./module-lC_4.js";
import u from "./module-c1_2_4.js";
import c from "./module-vbL_4.js";
import forced from "./module-N_4.js";
const h = c(function () {
  let t;
  const iterator = this.iterator;
  const next = this.next;
  while (this.remaining) {
    this.remaining--;
    t = o(i(next, iterator));
    if ((this.done = !!t.done)) {
      return;
    }
  }
  t = o(i(next, iterator));
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
      o(this);
      const remaining = u(a(+t));
      return new h(s(this), {
        remaining,
      });
    },
  },
);
