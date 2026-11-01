import n from "./module-A_10.js";
import o from "./module-d_10.js";
import i from "./module-xK_9.js";
import a from "./module-NK_9.js";
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
