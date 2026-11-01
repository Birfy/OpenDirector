import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-d_13.js";
import tr from "./module-NK_2_2.js";
import tn from "./module-lC_12.js";
import ti from "./module-c1_2_12.js";
import to from "./module-vbL_12.js";
import ta from "./module-jX_13.js";
import forced from "./module-N_12.js";
const tf = to(function () {
  const iterator = this.iterator;
  if (!this.remaining--) {
    this.done = true;
    return ta(iterator, "normal", undefined);
  }
  const Z = te(tt(this.next, iterator));
  if (!(this.done = !!Z.done)) {
    return Z.value;
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
    take: function (J) {
      te(this);
      const remaining = ti(tn(+J));
      return new tf(tr(this), {
        remaining,
      });
    },
  },
);
