import n from "./module-A_20.js";
import o from "./module-d_20.js";
import i from "./module-xK_19.js";
import a from "./module-NK_19.js";
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
