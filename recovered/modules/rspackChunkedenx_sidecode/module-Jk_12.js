import $ from "./module-A_13.js";
import tt from "./module-d_13.js";
import te from "./module-xK_12.js";
import tr from "./module-NK_2_2.js";
const push = [].push;
$(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    toArray: function () {
      const that = [];
      te(tr(tt(this)), push, {
        that,
        IS_RECORD: true,
      });
      return that;
    },
  },
);
