import n from "./module-A_22.js";
import i from "./module-M_2_21.js";
import o from "./module-d_22.js";
import s from "./module-NK_21.js";
import a from "./module-lC_21.js";
import u from "./module-c1_2_21.js";
import c from "./module-vbL_21.js";
import f from "./module-jX_22.js";
import forced from "./module-N_21.js";
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
