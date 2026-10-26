import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-d.js";
import a from "./module-NK.js";
import s from "./module-lC.js";
import u from "./module-c1_2.js";
import c from "./module-vbL.js";
import f from "./module-jX.js";
import forced from "./module-N.js";
const l = c(function () {
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
      return new l(a(this), {
        remaining,
      });
    },
  },
);
