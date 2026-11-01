import $ from "./module-A_13.js";
import tt from "./module-nyn_12.js";
import te from "./module-bYn_12.js";
import tr from "./module-mS_13.js";
$(
  {
    target: "Array",
    proto: true,
    forced: !te("groupBy"),
  },
  {
    groupBy: function (J) {
      const Z = arguments.length > 1 ? arguments[1] : undefined;
      return tt(this, J, Z);
    },
  },
);
tr("groupBy");
