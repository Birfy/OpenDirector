import n from "./module-A_17.js";
import o from "./module-d_17.js";
import i from "./module-xK_16.js";
import a from "./module-NK_16.js";
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
