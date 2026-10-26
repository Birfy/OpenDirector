import n from "./module-A_21.js";
import o from "./module-d_21.js";
import i from "./module-xK_20.js";
import a from "./module-NK_20.js";
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
