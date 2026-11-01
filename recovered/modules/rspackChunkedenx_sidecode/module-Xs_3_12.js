import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-d_13.js";
import tr from "./module-NK_2_2.js";
import tn from "./module-lC_12.js";
import ti from "./module-c1_2_12.js";
import to from "./module-vbL_12.js";
import forced from "./module-N_12.js";
const ts = to(function () {
  let J;
  const iterator = this.iterator;
  const next = this.next;
  while (this.remaining) {
    this.remaining--;
    J = te(tt(next, iterator));
    if ((this.done = !!J.done)) {
      return;
    }
  }
  J = te(tt(next, iterator));
  if (!(this.done = !!J.done)) {
    return J.value;
  }
});
$(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced,
  },
  {
    drop: function (J) {
      te(this);
      const remaining = ti(tn(+J));
      return new ts(tr(this), {
        remaining,
      });
    },
  },
);
