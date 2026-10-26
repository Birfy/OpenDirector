import n from "./module-A_14.js";
import o from "./module-d_14.js";
import i from "./module-xK_13.js";
import a from "./module-NK_13.js";
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
