import n from "./module-A_21.js";
import o from "./module-M_2_20.js";
import i from "./module-d_21.js";
import a from "./module-NK_20.js";
import s from "./module-lC_20.js";
import c from "./module-c1_2_20.js";
import u from "./module-vbL_20.js";
import f from "./module-jX_21.js";
import forced from "./module-N_20.js";
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
