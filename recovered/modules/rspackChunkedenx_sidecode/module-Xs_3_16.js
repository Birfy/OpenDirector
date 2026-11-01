import n from "./module-A_17.js";
import o from "./module-M_2_16.js";
import i from "./module-d_17.js";
import a from "./module-NK_16.js";
import s from "./module-lC_16.js";
import u from "./module-c1_2_16.js";
import c from "./module-vbL_16.js";
import forced from "./module-N_16.js";
const l = c(function () {
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
      return new l(a(this), {
        remaining,
      });
    },
  },
);
