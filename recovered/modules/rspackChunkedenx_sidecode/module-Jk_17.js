import n from "./module-A_18.js";
import o from "./module-d_18.js";
import i from "./module-xK_17.js";
import a from "./module-NK_17.js";
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
