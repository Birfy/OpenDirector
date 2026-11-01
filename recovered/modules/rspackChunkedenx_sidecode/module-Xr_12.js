import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-d_13.js";
import tr from "./module-NK_2_2.js";
import tn from "./module-lC_12.js";
import ti from "./module-c1_2_12.js";
import to from "./module-tH_12.js";
import ta from "./module-V3_12.js";
import forced from "./module-N_12.js";
const tf = to(function (J) {
  let Z;
  const Q = this;
  const Q_iterator = Q.iterator;
  if (!Q.remaining--) {
    const tr = ta(undefined, true);
    Q.done = true;
    if ((Z = Q_iterator.return) !== undefined) {
      return J.resolve(tt(Z, Q_iterator, undefined)).then(() => tr);
    }
    return tr;
  }
  return J.resolve(tt(Q.next, Q_iterator))
    .then((J) => {
      if (te(J).done) {
        Q.done = true;
        return ta(undefined, true);
      }
      return ta(J.value, false);
    })
    .then(null, (J) => {
      Q.done = true;
      throw J;
    });
});
$(
  {
    target: "AsyncIterator",
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
