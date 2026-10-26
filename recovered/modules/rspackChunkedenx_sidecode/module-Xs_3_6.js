import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-d_7.js";
import i from "./module-NK_6.js";
import s from "./module-lC_6.js";
import c from "./module-c1_2_6.js";
import u from "./module-vbL_6.js";
import forced from "./module-N_6.js";
const l = u(function () {
  let t;
  const iterator = this.iterator;
  const next = this.next;
  while (this.remaining) {
    this.remaining--;
    t = a(o(next, iterator));
    if ((this.done = !!t.done)) {
      return;
    }
  }
  t = a(o(next, iterator));
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
      a(this);
      const remaining = c(s(+t));
      return new l(i(this), {
        remaining,
      });
    },
  },
);
