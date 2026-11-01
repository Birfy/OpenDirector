import n from "./module-A_8.js";
import o from "./module-d_8.js";
import i from "./module-xK_7.js";
import a from "./module-NK_7.js";
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
