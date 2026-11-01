import $ from "./module-A_13.js";
import tt from "./module-N_12.js";
import te from "./module-xl_13.js";
import tr from "./module-X_13.js";
import tn from "./module-YR_12.js";
import ti from "./module-Y_13.js";
import to from "./module-V0_12.js";
import ta from "./module-kn_13.js";
import ts from "./module-vE_12.js";
const tf = te && te.prototype;
$(
  {
    target: "Promise",
    proto: true,
    real: true,
    forced:
      !!te &&
      tr(function () {
        tf.finally.call(
          {
            then: function () {},
          },
          function () {},
        );
      }),
  },
  {
    finally: function (J) {
      const Z = to(this, tn("Promise"));
      const Q = ti(J);
      return this.then(
        Q ? (Q) => ta(Z, J()).then(() => Q) : J,
        Q
          ? (Q) =>
              ta(Z, J()).then(() => {
                throw Q;
              })
          : J,
      );
    },
  },
);
if (!tt && ti(te)) {
  const tu = tn("Promise").prototype.finally;
  if (tf.finally !== tu) {
    ts(tf, "finally", tu, {
      unsafe: true,
    });
  }
}
