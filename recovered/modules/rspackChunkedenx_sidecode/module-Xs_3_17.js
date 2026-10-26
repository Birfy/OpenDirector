import n from "./module-A_18.js";
import o from "./module-M_2_17.js";
import i from "./module-d_18.js";
import a from "./module-NK_17.js";
import s from "./module-lC_17.js";
import u from "./module-c1_2_17.js";
import c from "./module-vbL_17.js";
import forced from "./module-N_17.js";
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
