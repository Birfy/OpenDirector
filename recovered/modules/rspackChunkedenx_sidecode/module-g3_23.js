import n from "./module-A_24.js";
import o from "./module-M_2_23.js";
import i from "./module-d_24.js";
import a from "./module-NK_23.js";
import s from "./module-lC_23.js";
import c from "./module-c1_2_23.js";
import u from "./module-vbL_23.js";
import f from "./module-jX_24.js";
import forced from "./module-N_23.js";
const h = u(function () {
  const iterator = this.iterator;
  if (!this.remaining--) {
    this.done = true;
    return f(iterator, "normal", undefined);
  }
  const r = i(o(this.next, iterator));
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
      i(this);
      const remaining = c(s(+t));
      return new h(a(this), {
        remaining,
      });
    },
  },
);
