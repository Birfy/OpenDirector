import n from "./module-A_12.js";
import o from "./module-M_2_11.js";
import i from "./module-d_12.js";
import a from "./module-NK_11.js";
import s from "./module-lC_11.js";
import u from "./module-c1_2_11.js";
import c from "./module-vbL_11.js";
import forced from "./module-N_11.js";
const h = c(function () {
  let r;
  const iterator = this.iterator;
  const next = this.next;
  while (this.remaining) {
    this.remaining--;
    r = i(o(next, iterator));
    if ((this.done = !!r.done)) {
      return;
    }
  }
  r = i(o(next, iterator));
  if (!(this.done = !!r.done)) {
    return r.value;
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
    drop: function (r) {
      i(this);
      const remaining = u(s(+r));
      return new h(a(this), {
        remaining,
      });
    },
  },
);
