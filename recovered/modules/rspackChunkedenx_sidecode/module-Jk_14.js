import n from "./module-A_15.js";
import o from "./module-d_15.js";
import i from "./module-xK_14.js";
import a from "./module-NK_14.js";
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
