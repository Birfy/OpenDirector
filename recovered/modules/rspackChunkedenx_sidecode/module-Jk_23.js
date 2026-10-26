import n from "./module-A_24.js";
import o from "./module-d_24.js";
import i from "./module-xK_23.js";
import a from "./module-NK_23.js";
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
