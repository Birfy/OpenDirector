import n from "./module-A_15.js";
import o from "./module-M_2_14.js";
import i from "./module-d_15.js";
import a from "./module-NK_14.js";
import s from "./module-lC_14.js";
import c from "./module-c1_2_14.js";
import u from "./module-vbL_14.js";
import forced from "./module-N_14.js";
const l = u(function () {
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
      const remaining = c(s(+t));
      return new l(a(this), {
        remaining,
      });
    },
  },
);
