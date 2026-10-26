import n from "./module-A_12.js";
import o from "./module-d_12.js";
import i from "./module-xK_11.js";
import a from "./module-NK_11.js";
const push = [].push;
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    toArray: function () {
      const that = [];
      i(a(o(this)), push, {
        that,
        IS_RECORD: true,
      });
      return that;
    },
  },
);
