import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-O9_12.js";
import tr from "./module-vj_13.js";
import tn from "./module-ng_13.js";
import ti from "./module-X_13.js";
const ta = te("".charAt);
const ts = te("".charCodeAt);
const tf = te([].join);
const toWellFormed = "".toWellFormed;
const forced =
  toWellFormed &&
  ti(function () {
    return tt(toWellFormed, 1) !== "1";
  });
$(
  {
    target: "String",
    proto: true,
    forced,
  },
  {
    toWellFormed: function () {
      const J = tn(tr(this));
      if (forced) {
        return tt(toWellFormed, J);
      }
      for (var Z = J.length, Q = Array(Z), $ = 0; $ < Z; $++) {
        const te = ts(J, $);
        if ((63488 & te) != 55296) {
          Q[$] = ta(J, $);
        } else if (
          te >= 56320 ||
          $ + 1 >= Z ||
          (64512 & ts(J, $ + 1)) != 56320
        ) {
          Q[$] = "\uFFFD";
        } else {
          Q[$] = ta(J, $);
          Q[++$] = ta(J, $);
        }
      }
      return tf(Q, "");
    },
  },
);
