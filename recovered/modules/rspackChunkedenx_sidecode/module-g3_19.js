import n from "./module-A_20.js";
import o from "./module-M_2_19.js";
import i from "./module-d_20.js";
import a from "./module-NK_19.js";
import s from "./module-lC_19.js";
import u from "./module-c1_2_19.js";
import c from "./module-vbL_19.js";
import f from "./module-jX_20.js";
import forced from "./module-N_19.js";
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
