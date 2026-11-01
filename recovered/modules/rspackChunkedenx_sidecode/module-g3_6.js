import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-d_7.js";
import i from "./module-NK_6.js";
import s from "./module-lC_6.js";
import c from "./module-c1_2_6.js";
import u from "./module-vbL_6.js";
import f from "./module-jX_7.js";
import forced from "./module-N_6.js";
const h = u(function () {
  const iterator = this.iterator;
  if (!this.remaining--) {
    this.done = true;
    return f(iterator, "normal", undefined);
  }
  const r = a(o(this.next, iterator));
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
      a(this);
      const remaining = c(s(+t));
      return new h(i(this), {
        remaining,
      });
    },
  },
);
