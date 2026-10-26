import n from "./module-A_7.js";
import o from "./module-d_7.js";
import a from "./module-xK_6.js";
import i from "./module-NK_6.js";
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
      a(i(o(this)), push, {
        that,
        IS_RECORD: true,
      });
      return that;
    },
  },
);
