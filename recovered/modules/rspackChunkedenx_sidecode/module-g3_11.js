import n from "./module-A_12.js";
import o from "./module-M_2_11.js";
import i from "./module-d_12.js";
import a from "./module-NK_11.js";
import s from "./module-lC_11.js";
import u from "./module-c1_2_11.js";
import c from "./module-vbL_11.js";
import f from "./module-jX_12.js";
import forced from "./module-N_11.js";
const l = c(function () {
  const iterator = this.iterator;
  if (!this.remaining--) {
    this.done = true;
    return f(iterator, "normal", undefined);
  }
  const t = i(o(this.next, iterator));
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
    take: function (r) {
      i(this);
      const remaining = u(s(+r));
      return new l(a(this), {
        remaining,
      });
    },
  },
);
