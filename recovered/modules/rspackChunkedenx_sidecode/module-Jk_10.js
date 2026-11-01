import n from "./module-A_11.js";
import o from "./module-d_11.js";
import i from "./module-xK_10.js";
import a from "./module-NK_10.js";
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
