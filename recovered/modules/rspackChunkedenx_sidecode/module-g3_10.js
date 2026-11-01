import n from "./module-A_11.js";
import o from "./module-M_2_10.js";
import i from "./module-d_11.js";
import a from "./module-NK_10.js";
import s from "./module-lC_10.js";
import u from "./module-c1_2_10.js";
import c from "./module-vbL_10.js";
import f from "./module-jX_11.js";
import forced from "./module-N_10.js";
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
