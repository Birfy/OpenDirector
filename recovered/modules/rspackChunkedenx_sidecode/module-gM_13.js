import $ from "./module-A_13.js";
import tt from "./module-EV_13.js";
const tr = (J, Z) => {
  if (!Object.isFrozen || !tt(J) || !Object.isFrozen(J)) {
    return false;
  }
  let Q;
  for (var $ = 0, tr = J.length; $ < tr;) {
    if (!(typeof (Q = J[$++]) === "string" || (Z && Q === undefined))) {
      return false;
    }
  }
  return tr !== 0;
};
$(
  {
    target: "Array",
    stat: true,
    sham: true,
    forced: true,
  },
  {
    isTemplateObject: function (J) {
      if (!tr(J, true)) {
        return false;
      }
      const J_raw = J.raw;
      return J_raw.length === J.length && tr(J_raw, false);
    },
  },
);
