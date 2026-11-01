import n from "./module-A_17.js";
import o from "./module-M_2_16.js";
import i from "./module-d_17.js";
import a from "./module-NK_16.js";
import s from "./module-lC_16.js";
import u from "./module-c1_2_16.js";
import c from "./module-vbL_16.js";
import f from "./module-jX_17.js";
import forced from "./module-N_16.js";
const h = c(function () {
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
      const remaining = u(s(+t));
      return new h(a(this), {
        remaining,
      });
    },
  },
);
