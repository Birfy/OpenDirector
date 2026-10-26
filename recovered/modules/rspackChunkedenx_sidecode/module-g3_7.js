import n from "./module-A_8.js";
import o from "./module-M_2_7.js";
import i from "./module-d_8.js";
import a from "./module-NK_7.js";
import s from "./module-lC_7.js";
import u from "./module-c1_2_7.js";
import c from "./module-vbL_7.js";
import f from "./module-jX_8.js";
import forced from "./module-N_7.js";
const h = c(function () {
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
      return new h(a(this), {
        remaining,
      });
    },
  },
);
