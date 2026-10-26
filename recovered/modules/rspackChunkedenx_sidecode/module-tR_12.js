import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import te from "./module-l0_2_2.js";
import tr from "./module-vj_13.js";
import tn from "./module-ng_13.js";
import ti from "./module-Aj_13.js";
const to = tt("".indexOf);
$(
  {
    target: "String",
    proto: true,
    forced: !ti("includes"),
  },
  {
    includes: function (J) {
      return !!~to(
        tn(tr(this)),
        tn(te(J)),
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
