import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-vo_12.js";
import tr from "./module-d_13.js";
import tn from "./module-NK_2_2.js";
import ti from "./module-vbL_12.js";
import to from "./module-Gz_12.js";
import forced from "./module-N_12.js";
const ts = ti(function () {
  let J;
  let Z;
  const iterator = this.iterator;
  const predicate = this.predicate;
  const next = this.next;
  while (true) {
    J = tr(tt(next, iterator));
    if ((this.done = !!J.done)) {
      return;
    }
    if (to(iterator, predicate, [(Z = J.value), this.counter++], true)) {
      return Z;
    }
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
    filter: function (predicate) {
      tr(this);
      te(predicate);
      return new ts(tn(this), {
        predicate,
      });
    },
  },
);
