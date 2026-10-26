import n from "./module-A_16.js";
import o from "./module-d_16.js";
import i from "./module-xK_15.js";
import a from "./module-NK_15.js";
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
