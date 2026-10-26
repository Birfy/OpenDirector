import n from "./module-A_23.js";
import i from "./module-M_2_22.js";
import o from "./module-d_23.js";
import s from "./module-NK_22.js";
import a from "./module-lC_22.js";
import u from "./module-c1_2_22.js";
import c from "./module-vbL_22.js";
import f from "./module-jX_23.js";
import forced from "./module-N_22.js";
const l = c(function () {
  const iterator = this.iterator;
  if (!this.remaining--) {
    this.done = true;
    return f(iterator, "normal", undefined);
  }
  const r = o(i(this.next, iterator));
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
    take: function (t) {
      o(this);
      const remaining = u(a(+t));
      return new l(s(this), {
        remaining,
      });
    },
  },
);
