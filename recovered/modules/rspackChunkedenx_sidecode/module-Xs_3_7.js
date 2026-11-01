import n from "./module-A_8.js";
import o from "./module-M_2_7.js";
import i from "./module-d_8.js";
import a from "./module-NK_7.js";
import s from "./module-lC_7.js";
import u from "./module-c1_2_7.js";
import c from "./module-vbL_7.js";
import forced from "./module-N_7.js";
const l = c(function () {
  let r;
  const iterator = this.iterator;
  const next = this.next;
  while (this.remaining) {
    this.remaining--;
    r = i(o(next, iterator));
    if ((this.done = !!r.done)) {
      return;
    }
  }
  r = i(o(next, iterator));
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
    drop: function (r) {
      i(this);
      const remaining = u(s(+r));
      return new l(a(this), {
        remaining,
      });
    },
  },
);
